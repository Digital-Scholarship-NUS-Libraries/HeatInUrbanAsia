import React, { useState } from "react"
import * as styles from "./Navbar.module.scss"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { graphql, Link, useStaticQuery } from "gatsby"

function HoverControlledDropdown(props) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <NavDropdown
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      show={isHovered}
    />
  )
}

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      bodies: allGoogleDocs(filter: { slug: { regex: "/^/01/" } }) {
        nodes {
          page
          name
          slug
        }
      }
      technologies: allGoogleDocs(filter: { slug: { regex: "/^/02/" } }) {
        nodes {
          page
          name
          slug
        }
      }
      cities: allGoogleDocs(filter: { slug: { regex: "/^/03/" } }) {
        nodes {
          page
          name
          slug
        }
      }
      region: allGoogleDocs(filter: { slug: { regex: "/^/04/" } }) {
        nodes {
          page
          name
          slug
        }
      }
    }
  `)

  return (
    <Container className={styles.navbar}>
      <Container>
        <Navbar expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className={styles.navItemHome}>
                Home
              </Nav.Link>
              <HoverControlledDropdown
                title="Bodies"
                className={styles.navItem}
              >
                {data.bodies.nodes.map((item, index) => {
                  return (
                    <NavDropdown.Item as={Link} to={item.slug} key={index}>
                      {item.name}
                    </NavDropdown.Item>
                  )
                })}
              </HoverControlledDropdown>
              <HoverControlledDropdown
                title="Technologies"
                className={styles.navItem}
              >
                {data.technologies.nodes.map((item, index) => {
                  return (
                    <NavDropdown.Item as={Link} to={item.slug} key={index}>
                      {item.name}
                    </NavDropdown.Item>
                  )
                })}
              </HoverControlledDropdown>
              <HoverControlledDropdown
                title="Cities"
                className={styles.navItem}
              >
                {data.cities.nodes.map((item, index) => {
                  return (
                    <NavDropdown.Item as={Link} to={item.slug} key={index}>
                      {item.name}
                    </NavDropdown.Item>
                  )
                })}
              </HoverControlledDropdown>
              <HoverControlledDropdown
                title="Region"
                className={styles.navItem}
              >
                {data.region.nodes.map((item, index) => {
                  return (
                    <NavDropdown.Item as={Link} to={item.slug} key={index}>
                      {item.name}
                    </NavDropdown.Item>
                  )
                })}
              </HoverControlledDropdown>
              <HoverControlledDropdown title="About" className={styles.navItem}>
                <NavDropdown.Item as={Link} to="/project">
                  The Project
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/team">
                  The Team
                </NavDropdown.Item>
              </HoverControlledDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}
