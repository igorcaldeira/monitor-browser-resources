var express = require('express');
var geoip = require("geoip-lite");
var router = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'resource-analytics';

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const useDatabase = fn => {
  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');
  MongoClient.connect(url, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      const db = client.db(dbName);
      fn(db, () => { client.close(); })
  });
}

const insertDocs = ({ collection: newDocs, userVisitUID, ip, ips }) => {
    useDatabase((db, closeDbCallback) => {
        const collection = db.collection("fetch-data");
        const insertionArrayEnhanced = newDocs.map((item) => ({
            userVisitUID,
            ip: ip || 'none',
            ips: ips || 'none',
            geolocation: (geoip.lookup(ip) || {}),
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
        collection.find({})
          .limit(100)
          .toArray(function (err, docs) {
            closeDbCallback();
            sendDataCallback(docs);
        });
    });
};

const getAllDocs = (sendDataCallback) => {
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

router.post("/isalive", function (req, res, next) {
    res.sendStatus(200);
});

router.post('/', function(req, res, next) {
  console.log(req.ip, req.ips);

  insertDocs({
    ...req.body,
    ip: req.ip,
    ips: req.ips,
  });

  res.sendStatus(200);
});

router.get('/raw', function(req, res, next) {
  getTopDocs((allDocs) => { res.send(allDocs); });
});

router.get('/group/resource', function(req, res, next) {
  getAllDocs((allDocs) => {
    res.send(groupBy(allDocs, 'name'));
  });
});

router.get('/group/initType', function(req, res, next) {
  getAllDocs((allDocs) => {
    res.send(groupBy(allDocs, 'initiatorType'));
  });
});

router.get('/', function(req, res, next) {
  getAllDocs((allDocs) => {
    let fullDuration = 0;
    let fullRedirectDuration = 0;
    let fullResponseDuration = 0;
    const groupByInitiatorType = {};
    const auxGroupByInitiatorType = {};

    allDocs.forEach(elem => {
      fullDuration += elem.duration;
      fullRedirectDuration += elem.redirectEnd - elem.redirectStart;
      fullResponseDuration += elem.responseEnd - elem.responseStart;

      if(!auxGroupByInitiatorType[elem.initiatorType]){
        groupByInitiatorType[elem.initiatorType] = {}
        auxGroupByInitiatorType[elem.initiatorType] = {
          count: 0,
          fullDuration: 0,
          fullRedirectDuration: 0,
          fullResponseDuration: 0,
        }
      }
      
      auxGroupByInitiatorType[elem.initiatorType].count += 1;
      auxGroupByInitiatorType[elem.initiatorType].fullDuration += elem.duration;
      auxGroupByInitiatorType[elem.initiatorType].fullRedirectDuration += elem.redirectEnd - elem.redirectStart;
      auxGroupByInitiatorType[elem.initiatorType].fullResponseDuration += elem.responseEnd - elem.responseStart;
    });

    const avgTimeDuration = fullDuration / allDocs.length;
    const avgTimeRedirect = fullRedirectDuration / allDocs.length;
    const avgTimeResponse = fullResponseDuration / allDocs.length;

    Object.keys(auxGroupByInitiatorType).forEach(initiatorType => {
      const initiatorTypeCount = auxGroupByInitiatorType[initiatorType].count;
      groupByInitiatorType[initiatorType].avgTimeDuration = auxGroupByInitiatorType[initiatorType].fullDuration / initiatorTypeCount;
      groupByInitiatorType[initiatorType].avgTimeRedirect = auxGroupByInitiatorType[initiatorType].fullRedirectDuration / initiatorTypeCount;
      groupByInitiatorType[initiatorType].avgTimeResponse = auxGroupByInitiatorType[initiatorType].fullResponseDuration / initiatorTypeCount;
    })

    res.send({
      avgTimeDuration,
      avgTimeRedirect,
      avgTimeResponse,
      groupByInitiatorType,
    });
  });
});

module.exports = router;
