import React, { useState } from "react";
import { Row, Col, Card, CardTitle, CardBody, Form, FormInput, FormGroup, FormSelect, Button } from "shards-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, PieChart, Pie, Sector } from "recharts";
import Loading from "components/Core/Loading";
import ReportModule from "components/Core/ReportModule";
import API from "utils/api";
import { formatDuration, formatBytes } from "utils/lib";

const initialValue = {
  name: undefined,
  initiatorType: undefined,
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"black"}>
        {payload.name}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value} Times`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const ReportGroup = ({ shouldTransformData }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
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
        setData({});
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
                value={filter.name}
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
                value={filter.dateStart}
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
                value={filter.dateEnd}
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
                    changeFilter({
                      name: "",
                    });
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-3">
          <ReportModule data={data} shouldTransformData={false} />
        </Row>
      </Form>
    </Loading>
  );
};

export default ReportGroup;
