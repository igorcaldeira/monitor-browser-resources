import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    Collapse,
    Badge,
} from "shards-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import Loading from '../Loading';

const groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
};

const ToggleOpt = ({ title, item }) => {
    const [open, setOpen] = useState(false);

    return <>
        <div style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
            <Badge>{item.count}</Badge>
            <div style={{ display: 'inline-block',  paddingLeft: '10px' }}>
                <strong>{item.hostName}</strong>&nbsp;
                (see {open ? 'less' : 'more'})
            </div>
        </div>
        <Collapse open={open}>
            <div className="p-3 mt-3 border rounded">
                {item.data.map(req => <div>
                    {req.iniType}
                </div>)}
            </div>
        </Collapse>
    </>
}

const GroupResource = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [topResources, setTopResources] = useState([]);
    const [topHosts, setTopHosts] = useState([]);

    const instance = axios.create({
        baseURL: "http://3.21.156.211:3005/",
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" },
    });

    useEffect(() => {
        setLoading(true);
        instance.get('/info/group/resource')
            .then(function (response) {

                const data = response.data;
                setData(response.data);

                const topResourcesList = Object.keys(data)
                    .map(iniType => (
                        {
                            iniType,
                            count: data[iniType].length,
                            url: new URL(iniType),
                            host: new URL(iniType).host,
                        }
                    ))
                    // .slice(0, 40)
                    .sort((a, b) => b.count - a.count);
                
                setTopResources(topResourcesList);

                const groupByHosts = groupBy(topResourcesList, 'host');

                const topHostsList = Object.keys(groupByHosts)
                    .map(hostName => ({
                        hostName,
                        count: groupByHosts[hostName].length,
                        data: groupByHosts[hostName],
                    }))
                    .sort((a, b) => b.count - a.count);
                    
                setTopHosts(topHostsList);
                
            })
            .catch(function (error) {
                setData(null);
            })
            .then(function () {
                setLoading(false);
            });

    }, []);

    return (
        <Loading isLoading={loading}>
            <Container className='pt-4'>
                {data && !loading && <>
                    <Row className='pt-3'>
                        <Col>
                            <h3>Group resource</h3>
                        </Col>
                    </Row>
                    <Row className='pt-3'>
                        <Col>
                            <Card className='mb-3 mt-3'>
                                <Row className='pt-3'>
                                    <CardBody>
                                        <h4>Most called hosts</h4>
                                        <ListGroup>
                                            {topHosts.map((item) =>{
                                                return  <ListGroupItem>
                                                    <ToggleOpt
                                                        item={item}
                                                    />
                                                </ListGroupItem>
                                            })}
                                        </ListGroup>
                                        <div style={{ marginTop: '70px' }}>
                                            <ResponsiveContainer height={400}>
                                                <BarChart
                                                    layout='horizontal'
                                                    data={topHosts}
                                                    margin={{
                                                        top: 5, right: 30, left: 20, bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="hostName" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="count" fill="#17C671" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardBody>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='pt-3'>
                        <Col>
                            <Card className='mb-3 mt-3'>
                                <Row className='pt-3'>
                                    <CardBody>
                                        <h4>Most called resources</h4>
                                        <ListGroup>
                                            {topResources.map((item) => <ListGroupItem>
                                                <Badge>{item.count}</Badge>
                                                <div style={{ display: 'inline-block',  paddingLeft: '10px' }}>
                                                    {item.iniType} - {item.url.host}
                                                </div>
                                            </ListGroupItem>)}
                                        </ListGroup>
                                        <div style={{ marginTop: '70px' }}>
                                            <ResponsiveContainer height={400}>
                                                <BarChart
                                                    layout='horizontal'
                                                    data={topResources}
                                                    margin={{
                                                        top: 5, right: 30, left: 20, bottom: 5,
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
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    </>}
            </Container>
        </Loading>
    )
}

export default GroupResource;