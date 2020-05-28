import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Progress, Badge } from "shards-react";
import { typeTheme, paramsTips, formatTime } from "utils/lib";
import "./RequestCard.css";

const RequestCard = ({ request: r }) => {
  const proportionByTotal = (total, value) => (100 * value) / total;

  const timelineMath = [
    { name: "Redirect", magicMath: (r) => r.redirectEnd - r.redirectStart },
    { name: "fetch", magicMath: (r) => r.connectStart - r.fetchStart },
    { name: "domainLookup", magicMath: (r) => r.domainLookupEnd - r.domainLookupStart },
    { name: "connect", magicMath: (r) => r.connectEnd - r.connectStart },
    { name: "request", magicMath: (r) => (r.responseStart || r.responseEnd) - r.requestStart },
    { name: "response", magicMath: (r) => r.responseEnd - r.responseStart },
  ];

  return (
    <Card key={r._id} className="mb-3 mt-3 request-card-content">
      <CardHeader>
        <Badge theme={typeTheme[r.initiatorType]}>{r.initiatorType}</Badge>&nbsp;&nbsp;
        <strong>{r.name}</strong>
      </CardHeader>
      <CardBody>
        {Object.keys(r).map((property) => (
          <div title={(paramsTips[property] || { description: "" }).description}>
            <strong>{property}</strong> &nbsp;&nbsp; {JSON.stringify(r[property])}
          </div>
        ))}
        <br />
        <h5>Timeline</h5>
        <Progress multi>
          {timelineMath.map((item, indexKey) => (
            <Progress bar value={proportionByTotal(r.duration, item.magicMath(r))} theme={indexKey % 2 === 1 ? "" : "success"}>
              {item.name}
            </Progress>
          ))}
        </Progress>
      </CardBody>
      <CardFooter>
        Report created at&nbsp;&nbsp;<Badge theme="light">{new Date(r.dateAdded).toLocaleString()}</Badge>
      </CardFooter>
    </Card>
  );
};

export default RequestCard;
