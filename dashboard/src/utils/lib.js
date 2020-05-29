import tips from "utils/propertyHelper.json";

export const twoDecimals = (milisecondsTime) => {
  if (!milisecondsTime) return "—";
  return Math.round((milisecondsTime + Number.EPSILON) * 100) / 100;
};

export const formatTime = (milisecondsTime) => {
  if (!milisecondsTime) return "—";

  const n = Math.round((milisecondsTime + Number.EPSILON) * 100) / 100;
  return `${n} ms`;
};

export const formatBytes = (a, b = 2) => {
  if (0 === a) return "0 Bytes";
  const c = 0 > b ? 0 : b,
    d = Math.floor(Math.log(a) / Math.log(1024));
  return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d];
};

export const typeTheme = {
  all: undefined,
  script: undefined,
  img: "success",
  xmlhttprequest: "warning",
  css: "info",
  fetch: "danger",
  other: "dark",
};

export const paramsTips = tips.reduce(
  (prev, curr) => ({
    ...prev,
    [curr.name]: curr,
  }),
  {}
);

function parseDuration(duration) {
  let remain = duration;

  let days = Math.floor(remain / (1000 * 60 * 60 * 24));
  remain = remain % (1000 * 60 * 60 * 24);

  let hours = Math.floor(remain / (1000 * 60 * 60));
  remain = remain % (1000 * 60 * 60);

  let minutes = Math.floor(remain / (1000 * 60));
  remain = remain % (1000 * 60);

  let seconds = Math.floor(remain / 1000);
  remain = remain % 1000;

  let milliseconds = remain;

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

function formatTimeDuration(o, useMilli = false) {
  let parts = [];
  if (o.days) {
    let ret = o.days + " day";
    if (o.days !== 1) {
      ret += "s";
    }
    parts.push(ret);
  }
  if (o.hours) {
    let ret = o.hours + " hour";
    if (o.hours !== 1) {
      ret += "s";
    }
    parts.push(ret);
  }
  if (o.minutes) {
    let ret = o.minutes + " minute";
    if (o.minutes !== 1) {
      ret += "s";
    }
    parts.push(ret);
  }
  if (o.seconds) {
    let ret = o.seconds + " second";
    if (o.seconds !== 1) {
      ret += "s";
    }
    parts.push(ret);
  }
  if (useMilli && o.milliseconds) {
    let ret = twoDecimals(o.milliseconds) + " millisecond";
    if (o.milliseconds !== 1) {
      ret += "s";
    }
    parts.push(ret);
  }
  if (parts.length === 0) {
    return "instantly";
  } else {
    return parts.join(" ");
  }
}

function formatTimeHMS(o) {
  let hours = o.hours.toString();
  if (hours.length === 1) hours = "0" + hours;

  let minutes = o.minutes.toString();
  if (minutes.length === 1) minutes = "0" + minutes;

  let seconds = o.seconds.toString();
  if (seconds.length === 1) seconds = "0" + seconds;

  return hours + ":" + minutes + ":" + seconds;
}

export const formatDurationHMS = (duration) => {
  let time = parseDuration(duration);
  return formatTimeHMS(time);
};

export const formatDuration = (duration, useMilli = false) => {
  let time = parseDuration(twoDecimals(duration));
  return formatTimeDuration(time, useMilli);
};
