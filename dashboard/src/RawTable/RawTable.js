import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Badge,
    FormSelect,
    Progress,
} from "shards-react";
import Loading from '../Loading';

const MainDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState('all');
    
    const instance = axios.create({
        baseURL: "http://3.21.156.211:3005/",
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" },
    });

    useEffect(() => {
        setLoading(true);
        instance.get('/info/raw/')
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

    const typeTheme = {
        'all': undefined,
        'script': undefined,
        'img': 'success',
        'xmlhttprequest': 'warning',
        'css': 'info',
        'fetch': 'danger',
        'other': 'dark',
    }

    const handleChange = e => {
        const { value } = e.target;
        setFilter(value);
    }

    const showList = (data || [])
        .filter(item => filter === 'all' || item.initiatorType === filter)
        .splice(0, 30);

    const proportionByTotal = (total, value) => (100 * value) / total;

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
                                {showList.map((item) => (
                                    <Card key={item._id} className="mb-3 mt-3">
                                        <CardHeader>
                                            <Badge theme={typeTheme[item.initiatorType]}>{item.initiatorType}</Badge>&nbsp;&nbsp;
                                            <strong>{item.name}</strong>
                                        </CardHeader>
                                        <CardBody>
                                            {Object.keys(item).map((property) => (
                                                <div>
                                                    <strong>{property}</strong> &nbsp;&nbsp; {JSON.stringify(item[property])}
                                                </div>
                                            ))}
                                            <br />
                                            <h5>Timeline</h5>
                                            <Progress multi>
                                                <Progress bar value={proportionByTotal(item.duration, item.redirectEnd - item.redirectStart)}>
                                                    Redirect ({proportionByTotal(item.duration, item.redirectEnd - item.redirectStart)})
                                                </Progress>
                                                <Progress
                                                    bar
                                                    theme={"success"}
                                                    value={proportionByTotal(item.duration, item.connectStart - item.fetchStart)}
                                                >
                                                    fetch ({proportionByTotal(item.duration, item.connectStart - item.fetchStart)})
                                                </Progress>
                                                <Progress bar value={proportionByTotal(item.duration, item.domainLookupEnd - item.domainLookupStart)}>
                                                    domainLookup ({proportionByTotal(item.duration, item.domainLookupEnd - item.domainLookupStart)})
                                                </Progress>
                                                <Progress
                                                    bar
                                                    theme={"success"}
                                                    value={proportionByTotal(item.duration, item.connectEnd - item.connectStart)}
                                                >
                                                    connect ({proportionByTotal(item.duration, item.connectEnd - item.connectStart)})
                                                </Progress>
                                                <Progress
                                                    bar
                                                    value={proportionByTotal(
                                                        item.duration,
                                                        (item.responseStart || item.responseEnd) - item.requestStart
                                                    )}
                                                >
                                                    request (
                                                    {proportionByTotal(item.duration, (item.responseStart || item.responseEnd) - item.requestStart)})
                                                </Progress>
                                                <Progress
                                                    bar
                                                    theme={"success"}
                                                    value={proportionByTotal(item.duration, item.responseEnd - item.responseStart)}
                                                >
                                                    response ({proportionByTotal(item.duration, item.responseEnd - item.responseStart)})
                                                </Progress>
                                            </Progress>
                                        </CardBody>
                                        <CardFooter>
                                            Report created at&nbsp;&nbsp;<Badge theme="light">{new Date(item.dateAdded).toLocaleString()}</Badge>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </Loading>
    );
}

export default MainDashboard;