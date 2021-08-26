import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import Seo from "../components/seo"

const ProjectPage = () => (
  <Layout>
      <Seo title="Interactive Map" />
      <Container style={{textAlign: `justify`}}>
          <Row>
              <Col md={{span: 4}}>
              </Col>
              <Col md={{span: 8}}>
              </Col>
          </Row>
      </Container>

  </Layout>
)

export default ProjectPage
