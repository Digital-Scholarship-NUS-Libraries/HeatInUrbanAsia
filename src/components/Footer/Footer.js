import React from "react"
import * as styles from "./Footer.module.scss"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

export default function Footer(props) {
  return (
    <Container className={styles.footer}>
      <Container className={styles.footerTop}>
        <Row>
          <Col sm={12} lg={{ span: 4, offset: 2 }}>
            <Col className={styles.footerMin}>
              <Row className={styles.footerMinContent}>
                <ListGroup className={styles.footer_listItem}>
                  <h2>Asia Research Institute</h2>
                  <p>
                    <span>
                      <a href="https://ari.nus.edu.sg/">ari.nus.edu.sg</a>
                      <br />
                    </span>
                  </p>
                </ListGroup>
              </Row>
            </Col>
          </Col>

          <Col sm={12} lg={4}>
            <Col className={styles.footerMin}>
              <Row className={styles.footerMinContent}>
                <ListGroup className={styles.footer_listItem}>
                  <h2>NUS Libraries</h2>
                  <p>
                    <span>
                      <a href="https://libportal.nus.edu.sg">
                        libportal.nus.edu.sg
                      </a>
                      <br />
                    </span>
                  </p>
                </ListGroup>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
