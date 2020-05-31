import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardTitle, CardBody, Badge } from "shards-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import API from "utils/api";
import { typeTheme, formatDuration, formatBytes } from "utils/lib";
import Loading from "components/Core/Loading";
import ShowMoreList from "components/Core/ShowMoreList";
import "./MainDashboard.css";

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
                <h3>Dashboard</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="mb-3 mt-3">
                  <CardBody>
                    <CardTitle>Avg. Duration</CardTitle>
                    <span className="result-resume">{formatDuration(data.avgTimeDuration, true)}</span>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="mb-3 mt-3">
                  <CardBody>
                    <CardTitle>Avg. Transfer Size</CardTitle>
                    <span className="result-resume">{formatBytes(data.avgTransferSize)}</span>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="mb-3 mt-3">
                  <CardBody>
                    <CardTitle>Avg. Response</CardTitle>
                    <span className="result-resume">{formatDuration(data.avgTimeResponse)}</span>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="mb-3 mt-3">
                  <CardBody>
                    <CardTitle>Resources used</CardTitle>
                    <span className="result-resume">{data.count} times</span>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="mb-3 mt-3">
                  <CardBody>
                    <CardTitle>Cached used</CardTitle>
                    <span className="result-resume">{data.fullChacedCount} times</span>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="mb-3 mt-3">
                  <CardBody>
                    <CardTitle>Most used type</CardTitle>
                    <span className="result-resume">{String(data.biggestInitiator.name).toUpperCase()}</span>
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
                          <YAxis scale="sqrt" domain={["auto", "auto"]} />
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
                          <YAxis scale="sqrt" domain={["auto", "auto"]} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="avgTimeResponse" fill="#FFB400" />
                        </BarChart>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="pt-5 mt-3 pb-3">
              <Col>
                <h3>Overview by initiator type</h3>
              </Col>
            </Row>
            <ShowMoreList
              count={3}
              list={Object.keys(data.groupByInitiatorType).map((initiatorType) => {
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
                            {formatDuration(local[type].avgTimeDuration, true)}
                          </Col>
                          <Col>
                            <h6 style={{ color: "gray" }}>Transfer size</h6>
                            {formatBytes(local[type].avgTransferSize)}
                          </Col>
                          <Col>
                            <h6 style={{ color: "gray" }}>Response</h6>
                            {formatDuration(local[type].avgTimeResponse, true)}
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                );
              })}
            />
          </>
        )}
      </Container>
    </Loading>
  );
};

export default MainDashboard;
