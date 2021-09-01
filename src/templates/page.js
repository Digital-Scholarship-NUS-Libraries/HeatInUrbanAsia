import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import Seo from "../components/seo";

const pageFromGDocs = ({
  data: {
    page: {
      name,
      author,
      cover,
      childMarkdownRemark: { html },
      description,
    },
  },
}) => {
  const pageTitle = name.split("_").pop();
  return (
    <Layout>
      <Seo title={pageTitle} description={description} />
        <Jumbotron style={{backgroundColor: `#fff`, padding: `0`}}>
        {cover && (
          <GatsbyImage
            image={cover.image.childImageSharp.gatsbyImageData}
            alt={cover.alt}
            title={cover.title}
              style={{height: `400px`, display: `flex`, justifyContent: `center`, marginBottom: `15px`}}
          />
        )}
          <h1 style={{textAlign: `center`, marginBottom: `15px`, background: `linear-gradient(179deg, rgba(249,171,134,1), rgba(255,78,68,1))`, backgroundClip: `text`, WebkitBackgroundClip: `text`, color: `transparent`}}>{pageTitle}</h1>
          <h3 className="author" style={{textAlign: `center`}}>By {author}</h3>
      </Jumbotron>
      <Container>
          <Row>
              <Col md={{span: 8, offset: 2}} style={{textAlign: `justify`}}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
              </Col>
          </Row>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: { eq: $path }) {
      name
      author
      cover {
        alt
        title
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      childMarkdownRemark {
        html
      }
      description
    }
  }
`;

export default pageFromGDocs;
