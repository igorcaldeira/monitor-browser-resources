import React, { useEffect, useState } from "react";
import { Container, CardHeader, Row, Col, Card, CardBody } from "shards-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import API from "utils/api";
import Loading from "components/Core/Loading";
import ShowRawList from "components/Core/ShowRawList";
import ShowMoreList from "components/Core/ShowMoreList";

const Session = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    API.get("/info/group/session")
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
        iniType,
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
                <h3>Sessions</h3>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <Card className="mb-3 mt-3">
                  <CardHeader>
                    <h5 style={{ marginBottom: "0px" }}>Resources used count by session</h5>
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
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="iniType" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
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
                <ShowRawList objectData={data} />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Loading>
  );
};

export default Session;
