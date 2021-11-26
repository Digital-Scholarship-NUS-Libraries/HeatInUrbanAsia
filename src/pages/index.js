import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { Jumbotron, Row, Col, Card, CardDeck, Carousel } from "react-bootstrap"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import landmarksVideo from "../videos/sgLandmarksOptimized.mp4"
import sgVideoPoster from "../images/sgLandmarksPoster.jpg"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Heat in Urban Asia" />
    <Jumbotron
      style={{
        marginTop: `220px`,
        marginBottom: `220px`,
        padding: `0`,
        background: `transparent`,
      }}
    >
      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        src={landmarksVideo}
        poster={sgVideoPoster}
        type="video/mp4"
        style={{
          position: `fixed`,
          top: 0,
          overflow: `hidden`,
          zIndex: `-1`,
          width: `100%`,
          height: `100%`,
          objectFit: `cover`,
        }}
      ></video>
      <Row
        style={{
          margin: `0`,
          marginTop: `35px`,
          marginBottom: `35px`,
          textAlign: `center`,
        }}
      >
        <Col
          sm={{ span: 8, offset: 2 }}
          style={{ padding: `35px`, backgroundColor: `rgba(255,255,255,0.6)` }}
        >
          <h1 style={{ fontSize: `500%` }}>Heat in Urban Asia</h1>
          <p style={{ fontWeight: `bold`, fontSize: `125%` }}>
            Asian cities are getting hotter. This is partly a global problem,
            resulting from anthropogenic climate change, and partly a local
            problem, caused by the excessive use of concrete and energy
            intensive technologies. This website presents data, maps, stories,
            and images that help us to examine the past, present, and future of
            heat in urban Asia.
          </p>
          <Link to="/map" className="btn btn-secondary">
            Interactive Map
          </Link>
        </Col>
      </Row>
    </Jumbotron>
    <Jumbotron
      style={{ backgroundColor: `#fff`, padding: `0`, marginBottom: `0` }}
    >
      <Row style={{ margin: `0` }}>
        <Col sm={{ span: 8, offset: 2 }}>
          <h1 style={{ marginTop: `60px`, textAlign: `center` }}>
            Explore Through Themes
          </h1>
        </Col>
      </Row>
      <Row style={{ margin: `0` }}>
        <Col sm={{ span: 8, offset: 2 }}>
        <CardDeck
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            margin: `auto`,
            textAlign: `center`,
            marginTop: `30px`,
            marginBottom: `60px`,
            justifyContent: `center`,
          }}
        >
          <Card style={{ flex: `1 0 21%`, margin: `5px`, minWidth: `200px` }}>
              <StaticImage
                className="card-img-top"
                  src="../images/Icon_Bodies.jpg"
                  alt="a human body"
                  objectFit="cover"
                  objectPosition="top"
                  style={{height : `250px`}}
              />
            <Card.Body>
              <Card.Title>
                <Link
                  to="/bodies"
                  style={{ color: `#000`, textDecoration: `none` }}
                >
                  <h2 style={{ marginTop: `10px` }}>Bodies</h2>
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ flex: `1 0 21%`, margin: `5px`, minWidth: `200px` }}>
              <StaticImage
                className="card-img-top"
                  src="../images/Icon_Technologies3.jpg"
                  alt="AC units on a roof"
                  objectFit="cover"
                  objectPosition="top"
                  style={{height : `250px`}}
              />
            <Card.Body>
              <Card.Title>
                <Link
                  to="/technologies"
                  style={{ color: `#000`, textDecoration: `none` }}
                >
                  <h2 style={{ marginTop: `10px` }}>Technologies</h2>
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ flex: `1 0 21%`, margin: `5px`, minWidth: `200px` }}>
              <StaticImage
                className="card-img-top"
                  src="../images/Icon_Cities.png"
                  alt="A painting of a busy street in Hong Kong"
                  objectFit="cover"
                  objectPosition="top"
                  style={{height : `250px`}}
              />
            <Card.Body>
              <Card.Title>
                <Link
                  to="/cities"
                  style={{ color: `#000`, textDecoration: `none` }}
                >
                  <h2 style={{ marginTop: `10px` }}>Cities</h2>
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ flex: `1 0 21%`, margin: `5px`, minWidth: `200px` }}>
              <StaticImage
                className="card-img-top"
                  src="../images/Icon_Region.png"
                  alt="A map of Asia"
                  objectFit="cover"
                  objectPosition="top"
                  style={{height : `250px`}}
              />
            <Card.Body>
              <Card.Title>
                <Link
                  to="/region"
                  style={{ color: `#000`, textDecoration: `none` }}
                >
                  <h2 style={{ marginTop: `10px` }}>Region</h2>
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
        </Col>
      </Row>
      <Row style={{ margin: `0` }}>
        <Col sm={{ span: 8, offset: 2 }}>
          <h1 style={{ textAlign: `center` }}>Selected Articles</h1>
        </Col>
      </Row>
      <Row style={{ margin: `0`, textAlign: `center`, paddingBottom: `120px` }}>
        <Carousel
          interval={3000}
          fade
          style={{ width: `100%`, marginTop: `60px` }}
        >
          {data.allGoogleDocs.nodes.map((oneArticle, index) => {
            return (
              <Carousel.Item key={index} style={{ height: `450px` }}>
                <GatsbyImage
                  image={oneArticle.cover.image.childImageSharp.gatsbyImageData}
                  alt={oneArticle.name}
                  style={{ position: `initial` }}
                  imgStyle={{ objectPosition: oneArticle.coverFocus }}
                />
                <Carousel.Caption
                  style={{
                    top: `50%`,
                    bottom: `initial`,
                    transform: `translateY(-50%)`,
                    padding: `35px`,
                    backgroundColor: `rgba(255,255,255,0.6)`,
                    color: `#000`,
                  }}
                >
                  <Link
                    to={oneArticle.slug}
                    style={{
                      display: `block`,
                      color: `#000`,
                      textDecoration: `none`,
                    }}
                  >
                    <h2 style={{ color: `#000` }}>
                      {oneArticle.name.split("_").pop()}
                    </h2>
                    <h3 style={{ color: `#000` }}>By {oneArticle.author}</h3>
                    <p>
                      <strong>{oneArticle.description}</strong>
                    </p>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </Row>
    </Jumbotron>
  </Layout>
)

export const query = graphql`
  query carouselArticles {
    allGoogleDocs(
      filter: { cover: { image: { size: { gt: 10 } } }, featured: { eq: true } }
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        name
        author
        description
        slug
        coverFocus
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

export default IndexPage
