function getSessionUniqueUuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

let lastEntriesCount = 0;
const uniqueSessionId = getSessionUniqueUuidv4();

const initCollect = (endpoint, collectionFrequency, userVisitUID) => {
  var localHeader = new Headers({
    "Content-Type": "application/json",
  });

  let basicConfig = {
    method: "POST",
    headers: localHeader,
    mode: "cors",
    cache: "default",
  };

  const sendData = (values) => {
    var requestConfig = {
      ...basicConfig,
      body: JSON.stringify({
        collection: values,
        userVisitUID,
      }),
    };

    fetch(endpoint, requestConfig)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };

  const collectData = () => {
    const resourceTimingData = window.performance.getEntriesByType("resource");
    const shouldCollectData = lastEntriesCount !== resourceTimingData.length;
    if (shouldCollectData) {
      const newResources = resourceTimingData.slice(lastEntriesCount);
      lastEntriesCount = resourceTimingData.length + 1;
      if (newResources && newResources.length) {
        sendData(newResources);
      }
    }
  };

  const runDataCollect = () => {
    setTimeout(() => {
      collectData();
      runDataCollect();
    }, collectionFrequency);
  };

  runDataCollect();
};

const realServer = "http://3.21.156.211:3005/info";

initCollect(realServer, 2000, uniqueSessionId);
