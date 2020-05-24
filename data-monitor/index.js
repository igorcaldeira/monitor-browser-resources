const initCollect = (endpoint, collectionFrequency) => {
  let lastEntriesCount = 0;
  var localHeader = new Headers({
    "Content-Type": "application/json"
  });

  let basicConfig = {
    method: "POST",
    headers: localHeader,
    mode: "cors",
    cache: "default"
  };

  const sendData = values => {
    console.log({ values });
    var requestConfig = {
      ...basicConfig,
      body: JSON.stringify(values),
    };
    fetch(endpoint, requestConfig)
      .then(response => console.info(response))
      .catch(err => console.error(err));
  };

  const collectData = () => {
    const resourceTimingData = window.performance.getEntriesByType("resource");
    const shouldCollectData = lastEntriesCount !== resourceTimingData.length;
    if (shouldCollectData) {
      const newResources = resourceTimingData.slice(lastEntriesCount);
      lastEntriesCount = resourceTimingData.length + 1;
      sendData(newResources);
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

initCollect("http://3.21.156.211:3005/info", 1500);
