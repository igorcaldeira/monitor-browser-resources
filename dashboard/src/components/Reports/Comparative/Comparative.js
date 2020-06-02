import React, { useState } from "react";
import { Container, Button } from "shards-react";
import ReportGroup from "./ReportGroup";
import "./Comparative.css";

function getId() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

const Comparative = () => {
  const [reports, setReports] = useState(["1", "2"]);
  return (
    <Container className="pt-4">
      <Container className="pt-4">
        <Button
          style={{ float: "right" }}
          onClick={() => {
            setReports([...reports, getId()]);
          }}
        >
          Add new report for comparison
        </Button>
        <h3>Compare</h3>
      </Container>
      <Container className="pt-4">
        {reports.map((validUID, indexKey) => (
          <>
            <hr />
            <h5>Report {indexKey + 1}</h5>
            <ReportGroup key={validUID} />
          </>
        ))}
      </Container>
    </Container>
  );
};

export default Comparative;
