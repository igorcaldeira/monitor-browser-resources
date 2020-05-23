import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
} from "shards-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import Loading from '../Loading';

const MainDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    
    const instance = axios.create({
        baseURL: "http://3.21.156.211:3005/",
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" },
    });

    useEffect(() => {
        setLoading(true);

        instance.get('/info')
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

    const chartFormat = data && !loading && Object.keys(data.groupByInitiatorType).map(iniType => (
        {
            iniType,
            ...data.groupByInitiatorType[iniType],
        }
    ));

    return (
        <Loading isLoading={loading}>
            <Container className='pt-4'>
                {data && !loading && <>
                <Row className='pt-3'>
                    <Col>
                        <h3>Average time</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='mb-3 mt-3'>
                            <CardBody>
                                <CardTitle>Request (ms)</CardTitle>
                                {data.avgTimeDuration}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='mb-3 mt-3'>
                            <CardBody>
                                <CardTitle>Redirect (ms)</CardTitle>
                                {data.avgTimeRedirect}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='mb-3 mt-3'>
                            <CardBody>
                                <CardTitle>Response (ms)</CardTitle>
                                {data.avgTimeResponse}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className='pt-5 mt-3 pb-3'>
                    <Col>
                        <h3>Initiator type relation</h3>
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col>
                        <Card className='mb-3 mt-3'>
                            
                <Row className='pt-3'>
                    <CardBody>
                <Row className='pt-3'>
                    <Col>
                        <BarChart
                            width={500}
                            height={300}
                            data={chartFormat}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="iniType" />
                            <YAxis />
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
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="iniType" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="avgTimeResponse" fill="#FFB400" />
                                </BarChart>
                    </Col>
                    </Row>
                            </CardBody>
                    </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className='pt-5 mt-3 pb-3'>
                    <Col>
                        <h3>Overview by initiator type</h3>
                    </Col>
                </Row>
                {
                    Object.keys(data.groupByInitiatorType)
                        .map((initiatorType => (
                            <>
                            <h5 style={{ color: 'gray' }}>{initiatorType}</h5>
                            <Row>
                                <Col>
                                    <Card className='mb-3 mt-3'>
                                        <CardBody>
                                            <CardTitle>Request (ms)</CardTitle>
                                            {data.groupByInitiatorType[initiatorType].avgTimeDuration}
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='mb-3 mt-3'>
                                        <CardBody>
                                            <CardTitle>Redirect (ms)</CardTitle>
                                            {data.groupByInitiatorType[initiatorType].avgTimeRedirect}
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='mb-3 mt-3'>
                                        <CardBody>
                                            <CardTitle>Response (ms)</CardTitle>
                                            {data.groupByInitiatorType[initiatorType].avgTimeResponse}
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            </>
                    )))
                }
                </>}
            </Container>
        </Loading>
    )
}

export default MainDashboard;