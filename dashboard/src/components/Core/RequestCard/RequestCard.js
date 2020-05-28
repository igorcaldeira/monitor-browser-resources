import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Progress, Badge } from "shards-react";
import { typeTheme } from "utils/lib";

const RequestCard = ({ request: r }) => {
  const proportionByTotal = (total, value) => (100 * value) / total;

  return (
    <Card key={r._id} className="mb-3 mt-3">
      <CardHeader>
        <Badge theme={typeTheme[r.initiatorType]}>{r.initiatorType}</Badge>&nbsp;&nbsp;
        <strong>{r.name}</strong>
      </CardHeader>
      <CardBody>
        {Object.keys(r).map((property) => (
          <div>
            <strong>{property}</strong> &nbsp;&nbsp; {JSON.stringify(r[property])}
          </div>
        ))}
        <br />
        <h5>Timeline</h5>
        <Progress multi>
          <Progress bar value={proportionByTotal(r.duration, r.redirectEnd - r.redirectStart)}>
            Redirect ({proportionByTotal(r.duration, r.redirectEnd - r.redirectStart)})
          </Progress>
          <Progress bar theme={"success"} value={proportionByTotal(r.duration, r.connectStart - r.fetchStart)}>
            fetch ({proportionByTotal(r.duration, r.connectStart - r.fetchStart)})
          </Progress>
          <Progress bar value={proportionByTotal(r.duration, r.domainLookupEnd - r.domainLookupStart)}>
            domainLookup ({proportionByTotal(r.duration, r.domainLookupEnd - r.domainLookupStart)})
          </Progress>
          <Progress bar theme={"success"} value={proportionByTotal(r.duration, r.connectEnd - r.connectStart)}>
            connect ({proportionByTotal(r.duration, r.connectEnd - r.connectStart)})
          </Progress>
          <Progress bar value={proportionByTotal(r.duration, (r.responseStart || r.responseEnd) - r.requestStart)}>
            request ({proportionByTotal(r.duration, (r.responseStart || r.responseEnd) - r.requestStart)})
          </Progress>
          <Progress bar theme={"success"} value={proportionByTotal(r.duration, r.responseEnd - r.responseStart)}>
            response ({proportionByTotal(r.duration, r.responseEnd - r.responseStart)})
          </Progress>
        </Progress>
      </CardBody>
      <CardFooter>
        Report created at&nbsp;&nbsp;<Badge theme="light">{new Date(r.dateAdded).toLocaleString()}</Badge>
      </CardFooter>
    </Card>
  );
};

export default RequestCard;
