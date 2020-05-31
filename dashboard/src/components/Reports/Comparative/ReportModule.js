import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormInput, FormGroup, FormSelect, Button } from "shards-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import API from "utils/api";
import Loading from "components/Core/Loading";
import RequestCard from "components/Core/RequestCard";
import ShowMoreList from "components/Core/ShowMoreList";

const asdasdasd = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const initialValue = {
  name: undefined,
  initiatorType: undefined,
};

const ReportModule = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filter, changeFilter] = useState(initialValue);

  const handleChange = (event, property) => {
    changeFilter({ ...filter, [property]: event.target.value });
  };

  const getInfo = () => {
    setLoading(true);
    API.post("/info/filtered/", filter)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        setData([]);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Loading isLoading={loading}>
      <Form>
        <Row className="pt-3">
          <Col>
            <FormGroup>
              <label htmlFor="#initiator">Initiator type</label>
              <FormSelect
                id="#initiator"
                value={filter.initiatorType}
                onChange={(e) => {
                  handleChange(e, "initiatorType");
                }}
              >
                <option value="" selected disabled hidden>
                  Select...
                </option>
                <option value="all">all</option>
                <option value="script">script</option>
                <option value="img">img</option>
                <option value="xmlhttprequest">xmlhttprequest</option>
                <option value="css">css</option>
                <option value="fetch">fetch</option>
                <option value="other">other</option>
              </FormSelect>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="#name">Resource name</label>
              <FormInput
                type="text"
                id="#name"
                placeholder="..."
                onChange={(e) => {
                  handleChange(e, "name");
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <FormGroup>
              <label htmlFor="#dateStart">Date start</label>
              <FormInput
                type="date"
                id="#dateStart"
                placeholder="..."
                onChange={(e) => {
                  handleChange(e, "dateStart");
                }}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="#dateEnd">Date end</label>
              <FormInput
                type="date"
                id="#dateEnd"
                placeholder="..."
                onChange={(e) => {
                  handleChange(e, "dateEnd");
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <div className="button-group">
              <div className="options-wrapper">
                <Button
                  onClick={() => {
                    getInfo();
                  }}
                >
                  Filter
                </Button>
                <Button
                  outline
                  onClick={() => {
                    changeFilter(initialValue);
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <ResponsiveContainer width={300} height={300}>
              <RadarChart cx={150} cy={130} outerRadius={100} data={asdasdasd}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Col>
          <Col>
            <ResponsiveContainer width={300} height={300}>
              <RadarChart cx={150} cy={130} outerRadius={100} data={asdasdasd}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Col>
          <Col>
            <ResponsiveContainer width={300} height={300}>
              <RadarChart cx={150} cy={130} outerRadius={100} data={asdasdasd}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Form>
    </Loading>
  );
};

export default ReportModule;
