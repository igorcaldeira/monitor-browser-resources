import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardTitle, CardBody, Badge } from "shards-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import API from "utils/api";
import { formatTime, typeTheme } from "utils/lib";
import Loading from "components/Core/Loading";

const MainDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    API.get("/info")
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

  const chartFormat =
    data &&
    !loading &&
    Object.keys(data.groupByInitiatorType).map((iniType) => ({
      iniType,
      ...data.groupByInitiatorType[iniType],
    }));

  return (
    <Loading isLoading={loading}>
      <Container className="pt-4">
        {data && !loading && (
          <>
            <Row className="pt-3">
              <Col>
                <h3>Average time</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="mb-3 mt-3">
                  <CardBody>
                    <CardTitle>Request</CardTitle>
                    {formatTime(data.avgTimeDuration)}
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="mb-3 mt-3">
                  <CardBody>
                    <CardTitle>Redirect</CardTitle>
                    {formatTime(data.avgTimeRedirect)}
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="mb-3 mt-3">
                  <CardBody>
                    <CardTitle>Response</CardTitle>
                    {formatTime(data.avgTimeResponse)}
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="pt-5 mt-3 pb-3">
              <Col>
                <h3>Initiator type relation</h3>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <Card className="mb-3 mt-3">
                  <Row className="pt-3">
                    <CardBody>
                      <Row className="pt-3">
                        <Col>
                          <BarChart
                            width={500}
                            height={300}
                            data={chartFormat}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="iniType" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="avgTimeDuration" fill="#17C671" />
                          </BarChart>
                        </Col>
                        <Col>
                          <BarChart
                            width={500}
                            height={300}
                            data={chartFormat}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="iniType" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="avgTimeResponse" fill="#FFB400" />
                          </BarChart>
                        </Col>
                      </Row>
                    </CardBody>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row className="pt-5 mt-3 pb-3">
              <Col>
                <h3>Overview by initiator type</h3>
              </Col>
            </Row>
            {Object.keys(data.groupByInitiatorType).map((initiatorType) => {
              const local = data.groupByInitiatorType;
              const type = initiatorType;
              return (
                <>
                  <Card className="mb-3 mt-3">
                    <CardBody>
                      <Row>
                        <Col>
                          <Badge theme={typeTheme[type]}>{type}</Badge>
                        </Col>
                      </Row>
                      <Row>
                        <Col>&nbsp;</Col>
                      </Row>
                      <Row>
                        <Col>
                          <h6 style={{ color: "gray" }}>Request</h6>
                          {formatTime(local[type].avgTimeDuration)}
                        </Col>
                        <Col>
                          <h6 style={{ color: "gray" }}>Redirect</h6>
                          {formatTime(local[type].avgTimeRedirect)}
                        </Col>
                        <Col>
                          <h6 style={{ color: "gray" }}>Response</h6>
                          {formatTime(local[type].avgTimeResponse)}
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </>
              );
            })}
          </>
        )}
      </Container>
    </Loading>
  );
};

export default MainDashboard;
