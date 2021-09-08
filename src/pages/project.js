import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <Seo title="The Project" />
    <Container style={{ textAlign: `justify` }}>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1
            style={{ textAlign: `center`, marginTop: `10px`, fontSize: `500%` }}
          >
            The Project
          </h1>
          <p>
            Many Asian cities have always been hot. They are becoming
            increasingly inhospitable in the 21st century, however, and will
            continue to do so as physical changes to the urban landscape combine
            with climate change exacerbates the Urban Heat Island (UHI) effect.
          </p>
          <p>
            The myriad solutions applied to the problem of extreme heat
            dominating Asia today tend to be the most energy-intensive and least
            sustainable. Increasingly, people have abandoned porous naturally
            ventilated buildings in favour of hermetically-sealed
            climate-controlled spaces. In this context, alternative solutions
            from past societies or different cultural situations may prove an
            invaluable resource.
          </p>
          <p>
            This project brings together scholars from a variety of different
            disciplines to document historic temperature changes, explore past
            methods of heat alleviation, and examine the problem of hazardous
            heat. It is designed to analyse a problem of particular significance
            to the governance, economy and life of Singapore, but three other
            Asian cities have been chosen as comparable or contrasting examples:
            Hong Kong, Delhi and Wuhan. The aim of this project is not only to
            document historical experiences, but also to use the past to plan
            for a hotter future.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2
            style={{ textAlign: `center`, marginTop: `10px`, fontSize: `350%` }}
          >
            Outcomes
          </h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 2, offset: 2 }}>
          <StaticImage
            src="../images/outcome1.png"
            style={{ marginTop: `55px` }}
          />
        </Col>
        <Col md={{ span: 6 }}>
          <h2 style={{ marginTop: `10px` }}>Taking the City’s Temperature</h2>
          <p>
            Through detailed archival research we will collate and provide a
            comprehensive record of changing temperatures in Singapore and three
            additional Asian cities.This will provide those working in the
            climate sector with data to analyse a far longer time period than is
            currently available (i.e.1800-1950) and will facilitate comparisons
            between urban, peri-urban, and control sites to examine urban
            heating more closely.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 2 }}>
          <h2 style={{ marginTop: `10px` }}>Living With Heat</h2>
          <p>
            The problem of heat intersects with other issues of urban
            inequality, causing certain social and demographic groups to suffer
            disproportionate levels of vulnerability. The everyday techniques,
            planning strategies, and vernacular architectural styles that have
            been used by different cultures at different times can provide vital
            resources for those planning for a hotter future. The project thus
            examines how various political and social processes have helped to
            determine exposure to heat in the past and present, and explore the
            social responses cataloguing how people have kept cool using
            low-energy, everyday alternatives to current technologies.
          </p>
        </Col>
        <Col md={{ span: 2 }}>
          <StaticImage
            src="../images/outcome2.png"
            style={{ marginTop: `55px` }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 2, offset: 2 }}>
          <StaticImage
            src="../images/outcome3.png"
            style={{ marginTop: `55px` }}
          />
        </Col>
        <Col md={{ span: 6 }}>
          <h2 style={{ marginTop: `10px` }}>Disastrous Heat</h2>
          <p>
            Heatwaves are one of the most lethal and economically destructive
            form of hazard to strike urban Asia, yet they are also probably the
            least understood. The project uses a multidisciplinary approach to
            examine heatwaves and their impacts in Singapore and other Asian
            cities. This part of the project builds upon a long-standing
            interest and expertise at ARI in disaster studies.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: `justify` }}>
          <h2
            style={{ textAlign: `center`, marginTop: `10px`, fontSize: `350%` }}
          >
            Acknowledgement
          </h2>
          <p>
            This project is supported by the Ministry of Education, Singapore
            Tier 2 grant entitled “Heat in Urban Asia: Past, Present and Future”
            (MOE2018-T2-2-120).
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ProjectPage
