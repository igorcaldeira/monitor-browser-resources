var express = require('express');
var router = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'resource-analytics';

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

const insertDocs = insertionArray => {
  useDatabase((db, closeDbCallback) => {
    const collection = db.collection('fetch-data');
    collection.insertMany(
      [ ...insertionArray ],
      function(err, result) {
        closeDbCallback();
      }
    );
  })
}

const getAllDocs = (sendDataCallback) => {
  useDatabase((db, closeDbCallback) => {
    // Get the documents collection
    const collection = db.collection('fetch-data');
    // Insert some documents
    collection.find({}).toArray(function(err, docs) {
      closeDbCallback();
      sendDataCallback(docs);
    });
  })
}

router.post('/', function(req, res, next) {
  insertDocs(req.body);
  res.sendStatus(200);
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
