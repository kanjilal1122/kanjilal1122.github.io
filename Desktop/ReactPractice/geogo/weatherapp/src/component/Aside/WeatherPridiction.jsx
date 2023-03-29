import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Badge from 'react-bootstrap/esm/Badge';

import { useSelector } from 'react-redux'


const uv_status = 'Moderated'

const WeatherPridiction = () => {
    const data = useSelector((state) => state.openWeather)
    return (
        <Container style={{ backgroundColor: '#243763', borderRadius: '20px' }}>
            <Row >
                <Col lg={2}  > <img style={{ color:'#20262E', backgroundColor: '#FEFBE9', borderRadius: '50px', marginTop: '10px', }} alt="weatherICON" src={data.icon} /></Col>
                <Col lg={10} >
                    <div className='d-flex '>
                        <div ><h5 style={{ color: 'white',marginLeft:'10px' }}> {data.uv_value} UVI</h5></div>
                        <div style={{ marginLeft: '10px' }}><Badge pill bg="info" size="sm">{uv_status}</Badge></div>
                    </div>
                    <p style={{ marginLeft: '10px' , color:'white' }}>Moderate risk from UV </p>
                </Col>
            </Row>
        </Container>
    );
}

export default WeatherPridiction;