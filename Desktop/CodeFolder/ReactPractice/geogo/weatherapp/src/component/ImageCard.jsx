import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge";
//import ProgressBar from 'react-bootstrap/ProgressBar'

import image1 from "../asset/images/fog-dark-clouds-mountains.jpg";
import image2 from "../asset/images/25501.jpg";

import { useSelector } from "react-redux";

const measurement = {
  p: "pressure",
  visi: "visibility",
  h: "Humidity",
  cardPollution: "PM 2.5",
};

const ImageCard = () => {
  const data = useSelector((state) => state.openWeather);

  return (
    <Container>
      <Row>
        <Col lg={6} md={12} className="">
          <Card>
            <Card.Img src={image1} alt=" image Overlay apply here" />
            <Card.ImgOverlay>
              <div>
                <div className="d-flex ">
                  <i className="bi bi-clouds text-white mt-2   "></i>
                  <div className="mx-2">
                    <span>
                      <h5 className="text-white m-0">Weather</h5>
                      <span className="text-white m-0">
                        <p>what's the weather.</p>
                      </span>
                    </span>
                  </div>
                </div>

                <span>
                  <h2 className="d-inline text-danger ">
                    {Math.round(data.t_final_temp)}&deg;c
                  </h2>
                  <span className="mx-2">
                    <Badge pill bg="dark" text="white">
                      <strong>{Math.round(data.t_init_temp)}&deg;c</strong>
                    </Badge>
                  </span>
                </span>
                <p className="text-white ">{data.weather_status}</p>
              </div>
              <Row className="d-flex  justify-content-between">
                <Col
                  lg={4}
                  style={{
                    backgroundColor: "#ECE8DD",
                    width: "30%",
                    borderRadius: "15px",
                    padding: " 0px 5px",
                    textAlign: "center",
                  }}
                  className="rounded  "
                >
                  <p className="m-0">{measurement.p}</p>
                  <h4 className="m-0">{data.pressure}mb</h4>
                </Col>
                <Col
                  lg={4}
                  style={{
                    backgroundColor: "#E1D7C6",
                    borderRadius: "15px",
                    width: "30%",
                    padding: " 0px 5px",
                    textAlign: "center",
                  }}
                  className="rounded  "
                >
                  <p className="m-0">{measurement.visi}</p>
                  <h4 className="m-0">{data.visibility}km</h4>
                </Col>
                <Col
                  lg={4}
                  style={{
                    backgroundColor: "#EFF5F5",
                    borderRadius: "15px",
                    width: "30%",
                    padding: " 0px 5px",
                    textAlign: "center",
                  }}
                  className="rounded "
                >
                  <p className="m-0 ">{measurement.h}</p>
                  <h4 className="m-0">{data.humidity}%</h4>
                </Col>
              </Row>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={6} md={12} className="">
          <Card>
            <Card.Img src={image2} alt="Soory for that" />
            <Card.ImgOverlay>
              <div className="d-flex">
                <i className="bi bi-wind text-white mt-2  "></i>

                <span className="mx-2">
                  <h5 className="m-0">Air Quality</h5>
                  <p className="">Main Pollution:{measurement.cardPollution}</p>
                </span>
              </div>

              <div className=" flex d-flex ">
                <div className="text-white ">
                  <h3>{data.aqi}</h3>
                </div>
                <div className="mx-2">
                  <Badge pill bg="warning" text="dark">
                    AQI
                  </Badge>
                </div>
              </div>
              <p> West wind</p>
              <div style={{ borderRadius: "1rem" }} className="  bg-white ">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex justify-content-space-around ">
                    <p className="px-4">Good</p>
                  </div>
                  <div className="d-flex">
                    <p className="px-4">Hazardous</p>
                  </div>
                </div>
                <div className="mt-2 ">
                  {/* <ProgressBar striped variant="danger"  now={100} /> */}
                </div>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageCard;
