import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "shards-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import API from "utils/api";
import Loading from "components/Core/Loading";
import ShowRawList from "components/Core/ShowRawList";

const CustomizedAxisTick = (props) => {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y})`} style={{ fontSize: "10px", fontWeight: "bold" }}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

const Ip = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    API.get("/info/group/ip")
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
    Object.keys(data)
      .map((iniType) => ({
        iniType: iniType.replace("::ffff:", ""),
        count: data[iniType].length,
      }))
      .sort((a, b) => b.count - a.count);

  return (
    <Loading isLoading={loading}>
      <Container className="pt-4">
        {data && !loading && (
          <>
            <Row className="pt-3">
              <Col>
                <h3>Internet Protocol</h3>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <Card className="mb-3 mt-3">
                  <CardHeader>
                    <h5 style={{ marginBottom: "0px" }}>Resources used count by IP</h5>
                  </CardHeader>
                  <CardBody>
                    <div style={{ marginTop: "70px" }}>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                          width={500}
                          height={300}
                          data={chartFormat}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 85,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="iniType" tick={<CustomizedAxisTick />} interval={0} />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="count" fill="#17C671" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <ShowRawList objectData={data} count={1} />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Loading>
  );
};

export default Ip;
