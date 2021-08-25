import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { Jumbotron, Row, Col, Card, CardDeck } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import Seo from "../components/seo"

const citiesPage = ({data}) => (
  <Layout>
      <Seo title="Heat in Urban Asia: Cities" />
      <Jumbotron style={{position: `relative`, zIndex: `-2`, marginTop: `120px`, marginBottom: `120px`, padding: `0`}}>
          <StaticImage
              src="../images/Banner_CitiesA.png"
              style={{position: `fixed`, top: 0, overflow:  `hidden`, zIndex: `-1`, width: `100%`, height: `100%`, objectFit: `cover`}}
        />
          <Row style={{margin: `0`, marginTop: `35px`, marginBottom: `35px`, textAlign: `center`}}>
              <Col md={{span: 8, offset: 2}} style={{padding: `35px`, backgroundColor: `rgba(255,255,255,0.6)`}}>
                  <h1 style={{marginTop: `10px`, fontSize: `500%`}}>Cities</h1>
              </Col>
          </Row>
      </Jumbotron>
      <Jumbotron style={{backgroundColor: `#fff`, padding: `0`}}>
          <Row style={{margin: `0`}}>
              <Col md={{span: 8, offset: 2}}>
              <CardDeck style={{display: `flex`, flexWrap: `wrap`, margin: `auto`, textAlign: `center`, marginTop: `30px`, marginBottom: `60px`, justifyContent: `center`}}>
                  {data.allGoogleDocs.nodes.map((oneArticle, index) => {
                      return (
                          <Card style={{flex: `1 0 21%`, margin: `5px`, minWidth: `200px`}}>
                              <Card.Body>
                                  <Card.Title><Link to={oneArticle.slug} style={{color: `#000`, textDecoration:`none`}}><h2 style={{background: `linear-gradient(179deg, rgba(249,171,134,1), rgba(255,78,68,1))`, backgroundClip: `text`, color: `transparent`}}>{oneArticle.name}</h2></Link></Card.Title>
                                  <p><em>Written by: {oneArticle.author}</em></p>
                                  <p>{oneArticle.description}</p>
                              </Card.Body>
                              {oneArticle.cover ? (<GatsbyImage
                                   image={oneArticle.cover.image.childImageSharp.gatsbyImageData}
                                   alt={oneArticle.name.split("_").pop()}
                                   objectFit="cover"
                                   objectPosition="50% 50%"
                                   style={{height: `250px`}}
                              />) : <p>no image</p>}
                          </Card>
                      )
                  })}
              </CardDeck>
              </Col>
          </Row>
      </Jumbotron>

  </Layout>
)

export const query = graphql`
  query citiesArticles {
      allGoogleDocs(
    filter: {path: {regex: "/^/03.*/"}}
    sort: {order: ASC, fields: name}
  ) {
    nodes {
      name
      slug
      author
      description
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

export default citiesPage
