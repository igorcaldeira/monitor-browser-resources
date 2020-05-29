var express = require("express");
var geoip = require("geoip-lite");
var router = express.Router();
const url = "mongodb://localhost:27017";
const dbName = "resource-analytics";

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const removeMainContent = (item) => ({
  _id: item.id,
  userVisitUID: item.userVisitUID,
  ip: item.ip,
  name: item.name,
  dateAdded: item.name,
  entryType: item.entryType,
  initiatorType: item.initiatorType,
});

const useDatabase = (fn) => {
  const MongoClient = require("mongodb").MongoClient;
  const assert = require("assert");
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    fn(db, () => {
      client.close();
    });
  });
};

const insertDocs = ({ collection: newDocs, userVisitUID, ip, ips }) => {
  useDatabase((db, closeDbCallback) => {
    const collection = db.collection("fetch-data");
    const insertionArrayEnhanced = newDocs.map((item) => ({
      userVisitUID,
      ip: ip || "none",
      ips: ips || "none",
      geolocation: geoip.lookup(ip) || {},
      ...item,
      dateAdded: new Date(),
    }));

    collection.insertMany([...insertionArrayEnhanced], function (err, result) {
      closeDbCallback();
    });
  });
};

const getTopDocs = (sendDataCallback) => {
  useDatabase((db, closeDbCallback) => {
    // Get the documents collection
    const collection = db.collection("fetch-data");
    // Insert some documents
    collection
      .find({})
      .sort({ _id: -1 })
      .limit(1000)
      .toArray(function (err, docs) {
        closeDbCallback();
        sendDataCallback(docs);
      });
  });
};

const getAllOriginalDocs = (sendDataCallback) => {
  useDatabase((db, closeDbCallback) => {
    // Get the documents collection
    const collection = db.collection("fetch-data");
    // Insert some documents
    collection.find({}).toArray(function (err, docs) {
      closeDbCallback();
      sendDataCallback(docs);
    });
  });
};

const getResumedAllDocs = (sendDataCallback) => {
  useDatabase((db, closeDbCallback) => {
    // Get the documents collection
    const collection = db.collection("fetch-data");
    // Insert some documents
    collection.find({}).toArray(function (err, docs) {
      closeDbCallback();
      sendDataCallback(docs.map(removeMainContent));
    });
  });
};

const getUnique = (sendDataCallback, query) => {
  useDatabase((db, closeDbCallback) => {
    const collection = db.collection("fetch-data");
    var ObjectID = require("mongodb").ObjectID;
    var o_id = new ObjectID(query.id);
    collection.findOne(
      {
        _id: o_id,
      },
      (err, d) => {
        closeDbCallback();
        sendDataCallback(d);
      }
    );
  });
};

const getGeolocationInfo = (sendDataCallback) => {
  useDatabase((db, closeDbCallback) => {
    const collection = db.collection("fetch-data");

    collection.find({}).toArray(function (err, docs) {
      closeDbCallback();

      const organizedObject = {
        "No geolocation": [],
      };

      docs.forEach((item) => {
        if (item) {
          const localItem = { ...item };

          const hasGeolocation = item.geolocation && Object.keys(item.geolocation).length > 0 && item.geolocation.country && item.geolocation.city;

          if (!hasGeolocation) {
            organizedObject["No geolocation"].push(localItem);
          } else {
            const { country, region, city } = item.geolocation;

            if (!organizedObject[country]) {
              organizedObject[country] = {};
            }

            if (!organizedObject[country][region]) {
              organizedObject[country][region] = {};
            }

            if (!organizedObject[country][region][city]) {
              organizedObject[country][region][city] = [];
            }

            organizedObject[country][region][city].push(localItem);
          }
        }
      });

      sendDataCallback(organizedObject);
    });
  });
};

router.post("/isalive", function (req, res, next) {
  res.sendStatus(200);
});

router.post("/", function (req, res, next) {
  insertDocs({
    ...req.body,
    ip: req.ip,
    ips: req.ips,
  });

  res.sendStatus(200);
});

router.get("/raw", function (req, res, next) {
  getTopDocs((allDocs) => {
    res.send(allDocs);
  });
});

router.get("/group/resource", function (req, res, next) {
  getResumedAllDocs((allDocs) => {
    res.send(groupBy(allDocs, "name"));
  });
});

router.get("/group/initType", function (req, res, next) {
  getResumedAllDocs((allDocs) => {
    res.send(groupBy(allDocs, "initiatorType"));
  });
});

router.get("/group/ip", function (req, res, next) {
  getResumedAllDocs((allDocs) => {
    res.send(groupBy(allDocs, "ip"));
  });
});

router.get("/group/session", function (req, res, next) {
  getResumedAllDocs((allDocs) => {
    res.send(groupBy(allDocs, "userVisitUID"));
  });
});

router.get("/group/geolocation", function (req, res, next) {
  getGeolocationInfo((organizedDocs) => {
    res.send(organizedDocs);
  }, req.query);
});

router.get("/unique", function (req, res, next) {
  getUnique((uniqueDoc) => {
    res.send(uniqueDoc);
  }, req.query);
});

router.get("/", function (req, res, next) {
  getAllOriginalDocs((allDocs) => {
    let fullDuration = 0;
    let fullChacedCount = 0;
    let fullRedirectDuration = 0;
    let fullResponseDuration = 0;
    let fullTransferSize = 0;
    const groupByInitiatorType = {};
    const auxGroupByInitiatorType = {};

    allDocs.forEach((elem) => {
      fullDuration += elem.duration;
      fullChacedCount += elem.transferSize == 0 ? 1 : 0;
      fullTransferSize += elem.transferSize || 0;
      fullRedirectDuration += elem.redirectEnd - elem.redirectStart;
      fullResponseDuration += elem.responseEnd - elem.responseStart;

      if (!auxGroupByInitiatorType[elem.initiatorType]) {
        groupByInitiatorType[elem.initiatorType] = {};
        auxGroupByInitiatorType[elem.initiatorType] = {
          count: 0,
          fullDuration: 0,
          fullRedirectDuration: 0,
          fullResponseDuration: 0,
          fullTransferSize: 0,
        };
      }

      auxGroupByInitiatorType[elem.initiatorType].count += 1;
      auxGroupByInitiatorType[elem.initiatorType].fullDuration += elem.duration;
      auxGroupByInitiatorType[elem.initiatorType].fullRedirectDuration += elem.redirectEnd - elem.redirectStart;
      auxGroupByInitiatorType[elem.initiatorType].fullResponseDuration += elem.responseEnd - elem.responseStart;
      auxGroupByInitiatorType[elem.initiatorType].fullTransferSize += elem.transferSize || 0;
    });

    const avgTimeDuration = fullDuration / allDocs.length;
    const avgTimeRedirect = fullRedirectDuration / allDocs.length;
    const avgTimeResponse = fullResponseDuration / allDocs.length;
    const avgTransferSize = fullTransferSize / allDocs.length;

    let biggestInitiator = { name: "-", value: 0 };

    Object.keys(auxGroupByInitiatorType).forEach((initiatorType) => {
      const initiatorTypeCount = auxGroupByInitiatorType[initiatorType].count;

      if (biggestInitiator.value < initiatorTypeCount) {
        biggestInitiator = { name: initiatorType, value: initiatorTypeCount };
      }

      groupByInitiatorType[initiatorType].avgTimeDuration = auxGroupByInitiatorType[initiatorType].fullDuration / initiatorTypeCount;
      groupByInitiatorType[initiatorType].avgTimeRedirect = auxGroupByInitiatorType[initiatorType].fullRedirectDuration / initiatorTypeCount;
      groupByInitiatorType[initiatorType].avgTimeResponse = auxGroupByInitiatorType[initiatorType].fullResponseDuration / initiatorTypeCount;
      groupByInitiatorType[initiatorType].avgTransferSize = auxGroupByInitiatorType[initiatorType].fullTransferSize / initiatorTypeCount;
    });

    auxGroupByInitiatorType;

    res.send({
      count: allDocs.length,
      fullChacedCount,
      avgTimeDuration,
      avgTimeRedirect,
      avgTimeResponse,
      avgTransferSize,
      groupByInitiatorType,
      biggestInitiator,
    });
  });
});

module.exports = router;
