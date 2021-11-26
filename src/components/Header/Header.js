import React from "react"
import * as styles from "./Header.module.scss"
import { Container } from "react-bootstrap"
import headerLogo from "../../images/NUSL_ARI_logo.png"
import { Link } from "gatsby"

export default function Header() {
  return (
    <Container fluid style={{ backgroundColor: `#FFF` }}>
      <Container className={styles.header}>
        <Link to="/">
          <img
            src={headerLogo}
            alt="NUS Libraries and Asia Research Institute Logo"
          />
        </Link>
      </Container>
    </Container>
  )
}
