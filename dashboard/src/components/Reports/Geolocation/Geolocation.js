import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "shards-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Treemap } from "recharts";
import API from "utils/api";
import Loading from "components/Core/Loading";
import RequestCard from "components/Core/RequestCard";
import ToggleItem from "components/Core/ToggleItem";
import ShowMoreList from "components/Core/ShowMoreList";
import ReportModule from "components/Core/ReportModule";

const COLORS = ["#8889DD", "#9597E4", "#8DC77B", "#A5D297", "#E2CF45", "#F8C12D"];

const wewrwhytgfhg = [
  {
    name: "axis",
    children: [
      { name: "Axes", size: 1302 },
      { name: "Axis", size: 24593 },
      { name: "AxisGridLine", size: 652 },
      { name: "AxisLabel", size: 636 },
      { name: "CartesianAxes", size: 6703 },
    ],
  },
  {
    name: "controls",
    children: [
      { name: "AnchorControl", size: 2138 },
      { name: "ClickControl", size: 3824 },
      { name: "Control", size: 1353 },
      { name: "ControlList", size: 4665 },
      { name: "DragControl", size: 2649 },
      { name: "ExpandControl", size: 2832 },
      { name: "HoverControl", size: 4896 },
      { name: "IControl", size: 763 },
      { name: "PanZoomControl", size: 5222 },
      { name: "SelectionControl", size: 7862 },
      { name: "TooltipControl", size: 8435 },
    ],
  },
  {
    name: "data",
    children: [
      { name: "Data", size: 20544 },
      { name: "DataList", size: 19788 },
      { name: "DataSprite", size: 10349 },
      { name: "EdgeSprite", size: 3301 },
      { name: "NodeSprite", size: 19382 },
      {
        name: "render",
        children: [
          { name: "ArrowType", size: 698 },
          { name: "EdgeRenderer", size: 5569 },
          { name: "IRenderer", size: 353 },
          { name: "ShapeRenderer", size: 2247 },
        ],
      },
      { name: "ScaleBinding", size: 11275 },
      { name: "Tree", size: 7147 },
      { name: "TreeBuilder", size: 9930 },
    ],
  },
  {
    name: "events",
    children: [
      { name: "DataEvent", size: 7313 },
      { name: "SelectionEvent", size: 6880 },
      { name: "TooltipEvent", size: 3701 },
      { name: "VisualizationEvent", size: 2117 },
    ],
  },
  {
    name: "legend",
    children: [
      { name: "Legend", size: 20859 },
      { name: "LegendItem", size: 4614 },
      { name: "LegendRange", size: 10530 },
    ],
  },
  {
    name: "operator",
    children: [
      {
        name: "distortion",
        children: [
          { name: "BifocalDistortion", size: 4461 },
          { name: "Distortion", size: 6314 },
          { name: "FisheyeDistortion", size: 3444 },
        ],
      },
      {
        name: "encoder",
        children: [
          { name: "ColorEncoder", size: 3179 },
          { name: "Encoder", size: 4060 },
          { name: "PropertyEncoder", size: 4138 },
          { name: "ShapeEncoder", size: 1690 },
          { name: "SizeEncoder", size: 1830 },
        ],
      },
      {
        name: "filter",
        children: [
          { name: "FisheyeTreeFilter", size: 5219 },
          { name: "GraphDistanceFilter", size: 3165 },
          { name: "VisibilityFilter", size: 3509 },
        ],
      },
      { name: "IOperator", size: 1286 },
      {
        name: "label",
        children: [
          { name: "Labeler", size: 9956 },
          { name: "RadialLabeler", size: 3899 },
          { name: "StackedAreaLabeler", size: 3202 },
        ],
      },
      {
        name: "layout",
        children: [
          { name: "AxisLayout", size: 6725 },
          { name: "BundledEdgeRouter", size: 3727 },
          { name: "CircleLayout", size: 9317 },
          { name: "CirclePackingLayout", size: 12003 },
          { name: "DendrogramLayout", size: 4853 },
          { name: "ForceDirectedLayout", size: 8411 },
          { name: "IcicleTreeLayout", size: 4864 },
          { name: "IndentedTreeLayout", size: 3174 },
          { name: "Layout", size: 7881 },
          { name: "NodeLinkTreeLayout", size: 12870 },
          { name: "PieLayout", size: 2728 },
          { name: "RadialTreeLayout", size: 12348 },
          { name: "RandomLayout", size: 870 },
          { name: "StackedAreaLayout", size: 9121 },
          { name: "TreeMapLayout", size: 9191 },
        ],
      },
      { name: "Operator", size: 2490 },
      { name: "OperatorList", size: 5248 },
      { name: "OperatorSequence", size: 4190 },
      { name: "OperatorSwitch", size: 2581 },
      { name: "SortOperator", size: 2023 },
    ],
  },
];

const CustomizedContent = (props) => {
  const { root, depth, x, y, width, height, index, payload, colors, rank, name } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : "none",
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 ? (
        <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
          {name}
        </text>
      ) : null}
      {depth === 1 ? (
        <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
          {index + 1}
        </text>
      ) : null}
    </g>
  );
};

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

const plotLevels = (items, level) => {
  return (
    <div className={level > 0 ? "pt-4" : ""}>
      {Array.isArray(items) ? (
        <div>
          <ReportModule data={items} shouldTransformData={true} />
          <ShowMoreList
            list={items.map((r) => (
              <RequestCard key={r._id} request={r} />
            ))}
            count={2}
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

const barCharFormat = (d) => {
  const bars = [];

  const generatorObject = (localData, fullPropertyName) => {
    const hasLocalData = Boolean(localData);
    const isChildArray = Array.isArray(localData);
    const isObjArray = typeof localData === "object";

    if (hasLocalData) {
      if (isChildArray) {
        bars.push({
          Cidade: fullPropertyName,
          Recursos: localData.length,
        });
      } else if (isObjArray) {
        Object.keys(localData).forEach((item) => {
          const localLabel = `${fullPropertyName ? fullPropertyName + " / " : ""} ${item}`;
          generatorObject(localData[item], localLabel);
        });
      }
    }
  };

  generatorObject(d, "");

  return bars.filter((i) => i.Recursos).sort((a, b) => b.Recursos - a.Recursos);
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

  const barChartData = barCharFormat(data);

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
                  <CardHeader>
                    <h5 style={{ marginBottom: "0px" }}>Location subsections</h5>
                  </CardHeader>
                  <CardBody>{plotLevels(data, 0)}</CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <Card className="mb-3 mt-3">
                  <CardHeader>
                    <h5 style={{ marginBottom: "0px" }}>Cities visualization</h5>
                  </CardHeader>
                  <CardBody>
                    <Col>
                      <div style={{ marginTop: "30px" }}>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart
                            data={barChartData}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 90,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Cidade" tick={<CustomizedAxisTick />} interval={0} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="Recursos" fill="#FFB400" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {/* <Row className="pt-3">
              <Col>
                <Card className="mb-3 mt-3">
                  <CardHeader>
                    <h5 style={{ marginBottom: "0px" }}>Cities visualization</h5>
                  </CardHeader>
                  <CardBody>
                    <Col>
                      <div style={{ marginTop: "30px" }}>
                        <ResponsiveContainer width="100%" height={300}>
                        <Treemap
                          width={400}
                          height={200}
                          data={wewrwhytgfhg}
                          dataKey="size"
                          ratio={4 / 3}
                          stroke="#fff"
                          fill="#8884d8"
                          content={<CustomizedContent colors={COLORS} />}
                        />
                        </ResponsiveContainer>
                      </div>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Row> */}
          </>
        )}
      </Container>
    </Loading>
  );
};

export default Geolocation;
