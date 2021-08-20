import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Jumbotron, Row, Col, Button, Card, CardDeck, Carousel } from 'react-bootstrap'

import Layout from "../components/Layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const regionPage = ({data}) => (
  <Layout>
      <Seo title="Heat in Urban Asia: Region" />
      <Jumbotron style={{position: `relative`, zIndex: `-2`, marginTop: `120px`, marginBottom: `120px`, padding: `0`}}>
          <StaticImage
              src="../images/Icon_Region.png"
              style={{position: `fixed`, top: 0, overflow:  `hidden`, zIndex: `-1`, width: `100%`, height: `100%`, objectFit: `cover`}}
        />
          <Row style={{margin: `0`, marginTop: `35px`, marginBottom: `35px`, textAlign: `center`}}>
              <Col sm={{span: 6, offset: 3}} style={{padding: `35px`, backgroundColor: `rgba(255,255,255,0.6)`}}>
                  <h1 style={{fontSize: `500%`}}>Region</h1>
              </Col>
          </Row>
      </Jumbotron>
      <Jumbotron style={{backgroundColor: `#fff`, padding: `0`}}>
          <Row style={{margin: `0`}}>
              <CardDeck style={{display: `flex`, flexWrap: `wrap`, margin: `auto`, textAlign: `center`, marginTop: `30px`, marginBottom: `60px`, justifyContent: `center`}}>
                  {data.allGoogleDocs.nodes.map((oneArticle, index) => {
                      return (
                          <Card style={{flex: `1 0 21%`, margin: `5px`}}>
                              <Card.Body>
                                  <Card.Title><Link to={oneArticle.slug} style={{color: `#000`, textDecoration:`none`}}><h3>{oneArticle.name.split("_").pop()}</h3></Link></Card.Title>
                              </Card.Body>
                              {oneArticle.cover ? (<GatsbyImage
                                   image={oneArticle.cover.image.childImageSharp.gatsbyImageData}
                                   alt={oneArticle.name.split("_").pop()}
                                   objectFit="cover"
                                   objectPosition="50% 50%"
                              />) : <p>no image</p>}
                          </Card>
                      )
                  })}
              </CardDeck>
          </Row>
      </Jumbotron>

  </Layout>
)

export const query = graphql`
  query regionArticles {
      allGoogleDocs(
    filter: {path: {regex: "/^/04.*/"}}
    sort: {order: ASC, fields: name}
  ) {
    nodes {
      name
      slug
      cover {
        image {
          childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
  }
`

export default regionPage
