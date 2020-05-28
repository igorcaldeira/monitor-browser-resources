export const formatTime = (milisecondsTime) => {
  if (!milisecondsTime) return "—";

  const n = Math.round((milisecondsTime + Number.EPSILON) * 100) / 100;
  return `${n} ms`;
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
