import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import API from "utils/api";
import Loading from "components/Core/Loading";

const plotLevels = (items, level) => {
  return (
    <div>
      {Array.isArray(items) ? (
        <div>
          {items.map((item) => (
            <Card>
              <CardBody>{JSON.stringify(item)}</CardBody>
            </Card>
          ))}
        </div>
      ) : typeof items === "object" ? (
        Object.keys(items).map((property) => (
          <div>
            <hr />
            <h3 style={{ marginLeft: `${10 * level}px` }}>{property}</h3>
            {plotLevels(items[property], level + 1)}
          </div>
        ))
      ) : (
        <hr />
      )}
    </div>
  );
};

const Geolocation = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    API.get("/info/group/geolocation")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setData(null);
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  }, []);

  return (
    <Loading isLoading={loading}>
      <Container className="pt-4">
        {data && !loading && (
          <>
            <Row className="pt-3">
              <Col>
                <h3>Geolocation</h3>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <Card className="mb-3 mt-3">
                  <Row className="pt-3">
                    <CardBody>{plotLevels(data, 0)}</CardBody>
                  </Row>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Loading>
  );
};

export default Geolocation;
