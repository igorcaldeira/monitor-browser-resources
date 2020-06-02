import React, { useState } from "react";
import { Container, Row, Col, Card, CardTitle, CardBody } from "shards-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, PieChart, Pie, Sector } from "recharts";
import { formatDuration, formatBytes } from "utils/lib";
import { getAnalytics } from "./PrepareAnalytics";

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
      <text style={{ fontSize: "13px" }} x={cx} y={cy} dy={8} textAnchor="middle" fill={"black"}>
        {payload.name}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text style={{ fontSize: "10px" }} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value} Times`}</text>
      <text style={{ fontSize: "10px" }} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const ReportModule = ({ data, shouldTransformData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (par, index) => {
    setActiveIndex(index);
  };

  const localData = shouldTransformData ? getAnalytics(data) : data;

  const hasData = localData && Object.keys(localData).length > 0;

  const firstChartt = !hasData
    ? []
    : Object.keys(localData.groupByInitiatorType).reduce(
        (prev, curr) => [...prev, { name: capitalize(curr), value: localData.groupByInitiatorType[curr].avgTimeDuration }],
        []
      );

  const secondChartt = !hasData
    ? []
    : [
        { name: "Normal Request", value: localData.count - localData.fullChacedCount },
        { name: "Cached Request", value: localData.fullChacedCount },
      ];

  const charName = { marginBottom: "0px", fontSize: "15px" };

  return !hasData ? null : (
    <Container>
      <Row>
        <Col>
          <div style={{ marginTop: "30px" }}>
            <ResponsiveContainer width={"100%"} height={300}>
              <RadarChart cx={140} cy={140} outerRadius={100} data={firstChartt}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="value" fill="#17c671" fillOpacity={0.7} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col>
          <div style={{ marginTop: "30px" }}>
            <ResponsiveContainer width={"100%"} height={300}>
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={secondChartt}
                  cx={140}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#FFB400"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col>
          <Card className="mb-3 mt-3">
            <CardBody>
              <CardTitle style={charName}>Avg. transfer size</CardTitle>
              <span className="result-resume-small">{formatBytes(localData.avgTransferSize)}</span>
              <hr />
              <CardTitle style={charName}>Avg. response time</CardTitle>
              <span className="result-resume-small">{formatDuration(localData.avgTimeResponse)}</span>
              <hr />
              <CardTitle style={charName}>Avg. request duration</CardTitle>
              <span className="result-resume-small">{formatDuration(localData.avgTimeDuration, true)}</span>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReportModule;
