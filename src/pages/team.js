import * as React from "react"
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import ashawariPortrait from "../images/Team_Ashawari_Chaudhuri.png"
import caitlinPortrait from "../images/Team_Caitlin_Fernandez.jpg"
import jiatHweePortrait from "../images/Team_Chang_Jiat-Hwee.png"
import chrisPortrait from "../images/Team_Chris_Courtney.png"
import fionaPortrait from "../images/Team_Fiona_Williamson.png"
import gracePortrait from "../images/Team_Grace_Chong.png"
import gregoryPortrait from "../images/Team_Gregory_Clancey.png"
import yoonheePortrait from "../images/Team_Yoonhee_Jung.jpg"

const TeamPage = () => (
  <Layout>
    <Seo title="The Team" />
    <Container style={{ textAlign: `justify` }}>
      <Row style={{ margin: `0` }}>
        <Col md={{ span: 10, offset: 1 }}>
          <h1
            style={{ textAlign: `center`, marginTop: `10px`, fontSize: `500%` }}
          >
            The Team
          </h1>
          <CardDeck
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              margin: `auto`,
              textAlign: `center`,
              marginBottom: `60px`,
              justifyContent: `center`,
            }}
          >
            <Card style={{ flex: `1 0 31%`, margin: `5px`, minWidth: `200px` }}>
              <Card.Img
                src={gregoryPortrait}
                alt="Gregory Clancey"
                style={{
                  height: `300px`,
                  objectFit: `cover`,
                  objectPosition: `top`,
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h3>Associate Prof. Dr. Gregory CLANCEY</h3>
                </Card.Title>
                <p>
                  <em>NUS ARI (Lead PI)</em>
                </p>
                <a href="mailto:hisgkc@nus.edu.sg" style={{ display: `block` }}>
                  email
                </a>
                <a href="https://ari.nus.edu.sg/people/aprof-gregory-clancey/">
                  profile
                </a>
              </Card.Body>
            </Card>
            <Card style={{ flex: `1 0 31%`, margin: `5px`, minWidth: `200px` }}>
              <Card.Img
                src={fionaPortrait}
                alt="Fiona Williamson"
                style={{
                  height: `300px`,
                  objectFit: `cover`,
                  objectPosition: `top`,
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h3>Associate Prof. Dr. Fiona WILLIAMSON</h3>
                </Card.Title>
                <p>
                  <em>SMU</em>
                </p>
                <a
                  href="mailto:fwilliamson@smu.edu.sg"
                  style={{ display: `block` }}
                >
                  email
                </a>
                <a href="https://faculty.smu.edu.sg/profile/fiona-clare-williamson-1066">
                  profile
                </a>
              </Card.Body>
            </Card>
            <Card style={{ flex: `1 0 31%`, margin: `5px`, minWidth: `200px` }}>
              <Card.Img
                src={jiatHweePortrait}
                alt="Jiat-Hwee Chang"
                style={{
                  height: `300px`,
                  objectFit: `cover`,
                  objectPosition: `top`,
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h3>Associate Prof. Dr. CHANG Jiat-Hwee</h3>
                </Card.Title>
                <p>
                  <em>NUS Architecture</em>
                </p>
                <a
                  href="mailto:jiathwee@nus.edu.sg"
                  style={{ display: `block` }}
                >
                  email
                </a>
                <a href="https://www.sde.nus.edu.sg/arch/staffs/chang-jiat-hwee-dr/">
                  profile
                </a>
              </Card.Body>
            </Card>
            <Card style={{ flex: `1 0 31%`, margin: `5px`, minWidth: `200px` }}>
              <Card.Img
                src={chrisPortrait}
                alt="Chris Courtney"
                style={{
                  height: `300px`,
                  objectFit: `cover`,
                  objectPosition: `top`,
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h3>Associate Prof. Dr. Chris COURTNEY</h3>
                </Card.Title>
                <p>
                  <em>Durham University</em>
                </p>
                <a
                  href="mailto:christopher.j.courtney@durham.ac.uk"
                  style={{ display: `block` }}
                >
                  email
                </a>
                <a href="https://www.dur.ac.uk/research/directory/staff/?id=17479">
                  profile
                </a>
              </Card.Body>
            </Card>
            <Card style={{ flex: `1 0 31%`, margin: `5px`, minWidth: `200px` }}>
              <Card.Img
                src={yoonheePortrait}
                alt="Yonhee Jung"
                style={{
                  height: `300px`,
                  objectFit: `cover`,
                  objectPosition: `top`,
                }}
              />
              <Card.Body>
                <Card.Title>
                    <h3>Dr. Yoonhee JUNG<br/>&nbsp;</h3>
                </Card.Title>
                <p>
                  <em>NUS ARI</em>
                </p>
                <a href="mailto:ariyhj@nus.edu.sg" style={{ display: `block` }}>
                  email
                </a>
                <a href="https://ari.nus.edu.sg/people/dr-yoonhee-jung/">
                  profile
                </a>
              </Card.Body>
            </Card>
            <Card style={{ flex: `1 0 31%`, margin: `5px`, minWidth: `200px` }}>
              <Card.Img
                src={ashawariPortrait}
                alt="Ashawari Chaudhuri"
                style={{
                  height: `300px`,
                  objectFit: `cover`,
                  objectPosition: `top`,
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h3>Dr. Ashawari CHAUDHURI</h3>
                </Card.Title>
                <p>
                  <em>NUS ARI</em>
                </p>
                <a href="mailto:ariac@nus.edu.sg" style={{ display: `block` }}>
                  email
                </a>
                <a href="https://ari.nus.edu.sg/people/ashawari-chaudhuri/">
                  profile
                </a>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1
            style={{ textAlign: `center`, marginTop: `10px`, fontSize: `500%` }}
          >
            Research Assistants
          </h1>
          <CardDeck
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              margin: `auto`,
              textAlign: `center`,
              marginBottom: `60px`,
              justifyContent: `center`,
            }}
          >
            <Card style={{ flex: `1 0 31%`, margin: `5px`, minWidth: `200px` }}>
              <Card.Img
                src={gracePortrait}
                alt="Grace Chong En Ting"
                style={{
                  height: `300px`,
                  objectFit: `cover`,
                  objectPosition: `top`,
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h3>Ms CHONG En Ting Grace</h3>
                </Card.Title>
                <p>
                  <em>NUS ARI</em>
                </p>
                <a
                  href="mailto:grace.chongenting@gmail.com"
                  style={{ display: `block` }}
                >
                  email
                </a>
                <a href="https://ari.nus.edu.sg/people/ms-grace-chong/">
                  profile
                </a>
              </Card.Body>
            </Card>
            <Card style={{ flex: `1 0 31%`, margin: `5px`, minWidth: `200px` }}>
              <Card.Img
                src={caitlinPortrait}
                alt="Caitlin Celestine Fernandez"
                style={{
                  height: `300px`,
                  objectFit: `cover`,
                  objectPosition: `top`,
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h3>Ms Caitlin Celestine FERNANDEZ</h3>
                </Card.Title>
                <p>
                  <em>NUS ARI</em>
                </p>
                <a
                  href="mailto:caitlin@nus.edu.sg"
                  style={{ display: `block` }}
                >
                  email
                </a>
                <a href="https://sg.linkedin.com/in/caitlin-c-fernandez">
                  profile
                </a>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default TeamPage
