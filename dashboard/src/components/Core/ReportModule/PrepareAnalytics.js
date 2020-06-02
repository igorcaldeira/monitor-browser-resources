export const getAnalytics = (localDocItems) => {
  let fullDuration = 0;
  let fullChacedCount = 0;
  let fullRedirectDuration = 0;
  let fullResponseDuration = 0;
  let fullTransferSize = 0;
  const groupByInitiatorType = {};
  const auxGroupByInitiatorType = {};

  localDocItems.forEach((elem) => {
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

  const avgTimeDuration = fullDuration / localDocItems.length;
  const avgTimeRedirect = fullRedirectDuration / localDocItems.length;
  const avgTimeResponse = fullResponseDuration / localDocItems.length;
  const avgTransferSize = fullTransferSize / localDocItems.length;

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

  return {
    count: localDocItems.length,
    fullChacedCount,
    avgTimeDuration,
    avgTimeRedirect,
    avgTimeResponse,
    avgTransferSize,
    groupByInitiatorType,
    biggestInitiator,
  };
};
