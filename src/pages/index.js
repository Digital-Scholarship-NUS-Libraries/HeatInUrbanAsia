import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from 'react-bootstrap'
import Content from "../components/Content/Content.js"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby NUS Libraries Starter</p>
    <p>Now go build something great.</p>
    </Container>

    <Content />


    <Container>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    </Container>
  </Layout>
)

export default IndexPage
