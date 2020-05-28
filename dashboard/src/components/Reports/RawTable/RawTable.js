import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormSelect } from "shards-react";
import API from "utils/api";
import { typeTheme } from "utils/lib";
import Loading from "components/Core/Loading";
import RequestCard from "components/Core/RequestCard";
import ShowMoreList from "components/Core/ShowMoreList";

const MainDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLoading(true);
    API.get("/info/raw/")
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

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const showList = (data || []).filter((item) => filter === "all" || item.initiatorType === filter).splice(0, 30);

  return (
    <Loading isLoading={loading}>
      <Container className="pt-4">
        {data && !loading && (
          <>
            <Row>
              <Col>
                <FormSelect onChange={handleChange} value={filter}>
                  {Object.keys(typeTheme).map((value) => (
                    <option value={value}>{value}</option>
                  ))}
                </FormSelect>
                <ShowMoreList
                  list={showList.map((r) => (
                    <RequestCard key={r._id} request={r} />
                  ))}
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Loading>
  );
};

export default MainDashboard;
