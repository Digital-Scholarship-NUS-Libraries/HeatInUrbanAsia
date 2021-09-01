import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import Seo from "../components/seo";
import L from "leaflet";
import {
  Marker,
  Popup,
  useMap,
  WMSTileLayer,
  ImageOverlay,
} from "react-leaflet";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import useHasMounted from "../hooks/useHasMounted.js";
import useMapData from "../hooks/useMapData";
import year1820 from "../images/mapImages/Year1820.webp";
import year1841_town from "../images/mapImages/Year1841_town.webp";
import year1869 from "../images/mapImages/Year1869.webp";
import year1880 from "../images/mapImages/Year1880.webp";
import year1890a from "../images/mapImages/Year1890a.webp";
import year1890b from "../images/mapImages/Year1890b.webp";
import isolineAverage2000 from "../images/mapImages/Average May temp 2000.png";
import isolineAverage2005 from "../images/mapImages/Average May temp 2005.png";
import isolineAverage2010 from "../images/mapImages/Average May temp 2010.png";
import isolineAverage2015 from "../images/mapImages/Average May temp 2015.png";
import isolineAverage2020 from "../images/mapImages/Average May temp 2020.png";

const ProjectPage = () => {
  const mapData = useMapData();
    console.log(mapData);
    const hasMounted = useHasMounted();
    return (
  <Layout>
      <Seo title="Interactive Map" />
      <Container style={{textAlign: `justify`}}>
          <Row>
              <Col md={{span: 8}}>
                  {hasMounted && (
                      <p>we're on</p>
                  )}
              </Col>
              <Col md={{span: 4}}>
              </Col>
          </Row>
      </Container>

  </Layout>
)}

export default ProjectPage
