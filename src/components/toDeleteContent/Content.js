import React from 'react'
import * as styles from './Content.module.scss'
import { Container, Jumbotron, Col, Row, Card, CardDeck, Button } from 'react-bootstrap'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql, Link } from "gatsby"
import bodiesCardImage from "../../images/Body_2.png";
import technologiesCardImage from "../../images/technologies.png";
import citiesCardImage from "../../images/Cities.png";
import regionCardImage from "../../images/region.png";

export default function Content() {
  return (
      /*<StaticQuery
          query={graphql`
              query cardsData {
                  allGoogleDocs {
                    edges {
                      node {
                        slug
                        document {
                          title
                        }
                        description
                        cover {
                          image {
                            childImageSharp {
                                fluid(maxHeight: 200, maxWidth: 600, cropFocus: CENTER, fit: COVER) {...GatsbyImageSharpFluid}
                            }
                          }
                        }
                      }
                    }
                  }
              }
          `}
          render={ cardsData => (
    <Container className={styles.content}>

        <Container>
        <Row>
        <CardDeck className={styles.cardDeck}>
            {
                cardsData.allGoogleDocs.edges.map((oneCard, index) => {
                return(
                    <Card style={{width: `260px`, margin: `15px`}}>
                        <Card.Img variant="top" src={sgVideoPoster} alt="cover image"/>
                        <Card.Body>
                            <Card.Title><Link to={oneCard.node.slug} style={{color: `#000`}}>{oneCard.node.document.title.split("_").pop()}</Link></Card.Title>
                            <Card.Text>{oneCard.node.description}</Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
            </CardDeck>
        </Row>

        </Container>

      </Container>
        )}
      />*/
      <Container className={styles.content}>
          <Container>
          <Row>
              <CardDeck className={styles.cardDeck}>
                  <Card style={{width: `260px`, margin: `15px`}}>
                      <Card.Img variant="top" src={bodiesCardImage} alt="cover image" style={{maxHeight: `150px`, objectFit: `cover`, objectPosition: `top`}}/>
                      <Card.Body>
                          <Card.Title><Link to="/page" style={{color: `#000`}}>Bodies</Link></Card.Title>
                          {/*<Card.Text>card text</Card.Text>*/}
                      </Card.Body>
                  </Card>
                  <Card style={{width: `260px`, margin: `15px`}}>
                      <Card.Img variant="top" src={technologiesCardImage} alt="cover image" style={{maxHeight: `150px`, objectFit: `cover`, objectPosition: `top`}}/>
                      <Card.Body>
                          <Card.Title><Link to="/page" style={{color: `#000`}}>Technologies</Link></Card.Title>
                          {/*<Card.Text>card text</Card.Text>*/}
                      </Card.Body>
                  </Card>
                  <Card style={{width: `260px`, margin: `15px`}}>
                      <Card.Img variant="top" src={citiesCardImage} alt="cover image" style={{maxHeight: `150px`, objectFit: `cover`}}/>
                      <Card.Body>
                          <Card.Title><Link to="/page" style={{color: `#000`}}>Cities</Link></Card.Title>
                          {/*<Card.Text>card text</Card.Text>*/}
                      </Card.Body>
                  </Card>
                  <Card style={{width: `260px`, margin: `15px`}}>
                      <Card.Img variant="top" src={regionCardImage} alt="cover image" style={{maxHeight: `150px`, objectFit: `cover`}}/>
                      <Card.Body>
                          <Card.Title><Link to="/page" style={{color: `#000`}}>Region</Link></Card.Title>
                          {/*<Card.Text>card text</Card.Text>*/}
                      </Card.Body>
                  </Card>
              </CardDeck>
          </Row>
          </Container>
      </Container>
  )
}
