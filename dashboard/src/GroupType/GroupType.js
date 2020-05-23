import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Card,
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
  
const GroupType = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const instance = axios.create({
        baseURL: "http://3.21.156.211:3005/",
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" },
    });

    useEffect(() => {
        setLoading(true);
        instance.get('/info/group/initType')
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

    const chartFormat = data && !loading && (
        Object.keys(data).map(iniType => ({
            iniType,
            count: data[iniType].length,
        }))
    );

    return (
        <Loading isLoading={loading}>
            <Container className='pt-4'>
                {data && !loading && <>
                <Row className='pt-3'>
                    <Col>
                        <h3>group type</h3>
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col>
                        <Card className='mb-3 mt-3'>
                            <Row className='pt-3'>
                                <CardBody>
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
                                        <Bar dataKey="count" fill="#17C671" />
                                    </BarChart>
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

export default GroupType;