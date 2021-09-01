import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Jumbotron, Row, Col, Card, CardDeck, Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import Seo from "../components/seo"
import landmarksVideo from "../videos/sgLandmarksOptimized.mp4";
import sgVideoPoster from "../images/sgLandmarksPoster.jpg";
import bodiesCardImage from "../images/Icon_Bodies.jpg";
import technologiesCardImage from "../images/Icon_Technologies3.jpg";
import citiesCardImage from "../images/Icon_Cities.png";
import regionCardImage from "../images/Icon_Region.png";

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
      <Jumbotron style={{marginTop: `220px`, marginBottom: `220px`, padding: `0`, background: `transparent`}}>
          <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          src={landmarksVideo}
          poster={sgVideoPoster}
          type="video/mp4"
          style={{position: `fixed`, top: 0, overflow:  `hidden`, zIndex: `-1`, width: `100%`, height: `100%`, objectFit: `cover`}}
        ></video>
          <Row style={{margin: `0`, marginTop: `35px`, marginBottom: `35px`, textAlign: `center`}}>
              <Col sm={{span: 8, offset: 2}} style={{padding: `35px`, backgroundColor: `rgba(255,255,255,0.6)`}}>
                  <h1 style={{fontSize: `500%`}}>Heat in Urban Asia</h1>
                  <p style={{fontWeight: `bold`, fontSize: `125%`}}>
            Asian cities are getting hotter. This is partly a global problem,
            resulting from anthropogenic climate change, and partly a local
            problem, caused by the excessive use of concrete and energy
            intensive technologies. With a focus on four cities in Asia ---
            Singapore, Seoul, Delhi, and Wuhan --- this website presents data,
            maps, stories, and images that help us to examine the past, present,
            and future of heat in urban Asia.
          </p>
                  <Link to="/map" className="btn btn-secondary">Interactive Map</Link>
              </Col>
          </Row>
      </Jumbotron>
      <Jumbotron style={{backgroundColor: `#fff`, padding: `0`, marginBottom: `0`}}>
          <Row style={{margin: `0`}}>
              <Col sm={{span: 8, offset: 2}}>
                  <h1 style={{marginTop: `60px`, textAlign: `center`, background: `linear-gradient(179deg, rgba(249,171,134,1), rgba(255,78,68,1))`, backgroundClip: `text`, WebkitBackgroundClip: `text`, color: `transparent`}}>Explore Through Themes</h1>
              </Col>
          </Row>
          <Row style={{margin: `0`}}>
              <CardDeck style={{display: `flex`, flexWrap: `wrap`, margin: `auto`, textAlign: `center`, marginTop: `30px`, marginBottom: `60px`, justifyContent: `center`}}>
                  <Card style={{flex: `1 0 21%`, margin: `5px`, minWidth: `200px`}}>
                      <Card.Img variant="top" src={bodiesCardImage} alt="cover image" style={{height: `250px`, objectFit: `cover`, objectPosition: `top`}}/>
                      {/*<Card.Body style={{backgroundColor: `orange`}}>*/}
                      <Card.Body>
                          <Card.Title><Link to="/bodies" style={{color: `#000`, textDecoration:`none`}}><h2 style={{marginTop: `10px`, background: `linear-gradient(179deg, rgba(249,171,134,1), rgba(255,78,68,1))`, backgroundClip: `text`, WebkitBackgroundClip: `text`, color: `transparent`}}>Bodies</h2></Link></Card.Title>
                      </Card.Body>
                  </Card>
                  <Card style={{flex: `1 0 21%`, margin: `5px`, minWidth: `200px`}}>
                      <Card.Img variant="top" src={technologiesCardImage} alt="cover image" style={{height: `250px`, objectFit: `cover`, objectPosition: `top`}}/>
                      <Card.Body>
                          <Card.Title><Link to="/technologies" style={{color: `#000`, textDecoration:`none`}}><h2 style={{marginTop: `10px`, background: `linear-gradient(179deg, rgba(249,171,134,1), rgba(255,78,68,1))`, backgroundClip: `text`, WebkitBackgroundClip: `text`, color: `transparent`}}>Technologies</h2></Link></Card.Title>
                      </Card.Body>
                  </Card>
                  <Card style={{flex: `1 0 21%`, margin: `5px`, minWidth: `200px`}}>
                      <Card.Img variant="top" src={citiesCardImage} alt="cover image" style={{height: `250px`, objectFit: `cover`}}/>
                      <Card.Body>
                          <Card.Title><Link to="/cities" style={{color: `#000`, textDecoration:`none`}}><h2 style={{marginTop: `10px`, background: `linear-gradient(179deg, rgba(249,171,134,1), rgba(255,78,68,1))`, backgroundClip: `text`, WebkitBackgroundClip: `text`, color: `transparent`}}>Cities</h2></Link></Card.Title>
                      </Card.Body>
                  </Card>
                  <Card style={{flex: `1 0 21%`, margin: `5px`, minWidth: `200px`}}>
                      <Card.Img variant="top" src={regionCardImage} alt="cover image" style={{height: `250px`, objectFit: `cover`}}/>
                      <Card.Body>
                          <Card.Title><Link to="/region" style={{color: `#000`, textDecoration:`none`}}><h2 style={{marginTop: `10px`, background: `linear-gradient(179deg, rgba(249,171,134,1), rgba(255,78,68,1))`, backgroundClip: `text`, WebkitBackgroundClip: `text`, color: `transparent`}}>Region</h2></Link></Card.Title>
                      </Card.Body>
                  </Card>
              </CardDeck>
          </Row>
          <Row style={{margin: `0`}}>
              <Col sm={{span: 8, offset: 2}}>
                  <h1 style={{textAlign: `center`, background: `linear-gradient(179deg, rgba(249,171,134,1), rgba(255,78,68,1))`, backgroundClip: `text`, WebkitBackgroundClip: `text`, color: `transparent`}}>Selected Articles</h1>
              </Col>
          </Row>
          <Row style={{margin: `0`, textAlign: `center`, paddingBottom: `120px`}}>
              <Carousel interval={null} fade style={{width: `100%`, marginTop: `60px`}}>
                  {data.allGoogleDocs.nodes.map((oneArticle, index) => {
                      return (
                          <Carousel.Item key={index} style={{height: `450px`}}>
                              <GatsbyImage
                                  image={oneArticle.cover.image.childImageSharp.gatsbyImageData}
                                  alt={oneArticle.name}
                                  style={{position: `initial`}}
                              />
                              <Carousel.Caption style={{top: `50%`, bottom: `initial`, transform: `translateY(-50%)`, padding: `35px`, backgroundColor: `rgba(255,255,255,0.6)`, color: `#000`}}>
                                  <Link to={oneArticle.slug} style={{display: `block`, color: `#000`, textDecoration:`none`}}><h2>{oneArticle.name.split("_").pop()}</h2>
                                  <h3>Written by: {oneArticle.author}</h3>
                                      <p><strong>{oneArticle.description}</strong></p></Link>
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
    limit: 4
          filter: {cover: {image: {size: {gt: 10}}}, featured:  {eq: true}}
    sort: {order: DESC, fields: date}
  ) {
    nodes {
      name
      author
      description
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

export default IndexPage
