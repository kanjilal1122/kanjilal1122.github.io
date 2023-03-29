import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import moment from "moment";

const TomorrowPrediction = (props) => {
  const { day, cloud_s, cloud_icon, init_temp, final_temp } = props;

  return (
    <Container
      style={{ backgroundColor: "#FEFCF3", borderRadius: "20px" }}
      className="mt-2 "
    >
      <Row className="d-flex">
        <Col lg={2} className="">
          <img alt="fgh" src={cloud_icon} />
        </Col>
        <Col lg={6}>
          <p className="m-1">{moment(day * 1000).format("MMMM DD")}</p>
          <h6 className="m-1">{cloud_s}</h6>
        </Col>
        <Col lg={4}>
          <p>
            {Math.round(init_temp)}&deg;/{Math.round(final_temp)}&deg;
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TomorrowPrediction;
