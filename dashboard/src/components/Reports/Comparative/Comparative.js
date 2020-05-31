import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormInput, FormGroup, FormSelect, Button } from "shards-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import API from "utils/api";
import Loading from "components/Core/Loading";
import "./Comparative.css";

const Comparative = () => {
  const [loading, setLoading] = useState(false);
  const initialValue = {
    name: undefined,
    initiatorType: undefined,
  };
  const [filter, changeFilter] = useState(initialValue);

  const handleChange = (event, property) => {
    changeFilter({ ...filter, [property]: event.target.value });
  };

  return (
    <Loading isLoading={loading}>
      <Container className="pt-4">
        {JSON.stringify(filter)}
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
                  <Button>Filter</Button>
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
              <h3>RESULTS</h3>
            </Col>
          </Row>
        </Form>
      </Container>
    </Loading>
  );
};

export default Comparative;
