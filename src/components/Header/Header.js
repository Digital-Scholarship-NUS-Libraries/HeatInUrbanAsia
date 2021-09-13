import React from "react"
import * as styles from "./Header.module.scss"
import { Container } from "react-bootstrap"
//import { StaticImage } from "gatsby-plugin-image"
import headerLogo from "../../images/NUSL_ARI_logo.png"
import { Link } from "gatsby"

export default function Header() {
  return (
    <Container fluid style={{ backgroundColor: `#FFF` }}>
      <Container className={styles.header}>
        <Link to="/">
          <img
            src={headerLogo}
            alt="NUS LOGO"
          />
        </Link>
      </Container>
    </Container>
  )
}
