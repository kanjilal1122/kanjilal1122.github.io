import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import "./App.css";

import SideHeader from "./component/SideHeader.js";
import Header from "./component/Header";

import ImageCard from "./component/ImageCard";
import AsideTop from "./component/Aside/Aside";
import SunPart from "./component/Aside/SunPart";
import WeatherPridiction from "./component/Aside/WeatherPridiction";
import TomorrowPrediction from "./component/Aside/TomorrowPrediction";
import FiveDaysButton from "./component/Aside/FiveDays";

import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.openWeather);

  return (
    <Container className="container ">
      <Row className="bg-white">
        <Col className="pt-2" lg={1}>
          <SideHeader />
        </Col>
        <Col lg={8} className="bg-white p-0">
          <Header />
          <ImageCard />
        </Col>
        <Col lg={3} className="bg-light">
          <AsideTop />

          <SunPart />

          <WeatherPridiction />

          <TomorrowPrediction
            day={data.t_day}
            cloud_s={data.t_cloud_s}
            cloud_icon={data.t_cloud_icon}
            init_temp={data.t_init_temp}
            final_temp={data.t_final_temp}
          />
          <TomorrowPrediction
            day={data.t1_day}
            cloud_s={data.t1_cloud_s}
            cloud_icon={data.t1_cloud_icon}
            init_temp={data.t1_init_temp}
            final_temp={data.t1_final_temp}
          />

          <FiveDaysButton />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
