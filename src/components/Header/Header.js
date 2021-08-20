import React from 'react'
import * as styles from './Header.module.scss'
import { Container } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


export default function Header() {
  return (
      <Container fluid style={{backgroundColor: `#FFF`}}>
    <Container className={styles.header}>

      <Link to="/">
      <StaticImage
        src="../../images/NUSL_ARI_logo.png"
        alt="NUS LOGO"
        layout="fixed"
        loading="eager"
        position="0 0"
        objectFit="contain"
      />
      </Link>

      </Container>
      </Container>

  )
}
