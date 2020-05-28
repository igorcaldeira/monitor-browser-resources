import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import API from "utils/api";
import Loading from "components/Core/Loading";
import RequestCard from "components/Core/RequestCard";
import ToggleItem from "components/Core/ToggleItem";
import ShowMoreList from "components/Core/ShowMoreList";

const plotLevels = (items, level) => {
  return (
    <div className="pt-4">
      {Array.isArray(items) ? (
        <div>
          <ShowMoreList
            list={items.map((r) => (
              <RequestCard key={r._id} request={r} />
            ))}
          />
        </div>
      ) : typeof items === "object" ? (
        Object.keys(items)
          .sort((a, b) => a.property - b.property)
          .map((property) => {
            const isChildArray = Array.isArray(items[property]);
            const isObjArray = typeof items[property] === "object";
            const size = isChildArray ? items[property].length : isObjArray ? Object.keys(items[property]).length : "-";
            const auxText = size === 0 ? "Empty" : size === 1 ? "One item" : `${size} subitems`;

            return (
              <ToggleItem key={`${level + 1}${property}`} title={property} badge={auxText}>
                {plotLevels(items[property], level + 1)}
              </ToggleItem>
            );
          })
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
                  <CardBody>{plotLevels(data, 0)}</CardBody>
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
