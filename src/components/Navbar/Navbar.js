import React, {useState } from 'react'
import * as styles from './Navbar.module.scss'
import { Container, Row, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {graphql, useStaticQuery} from "gatsby"


function HoverControlledDropdown(props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <NavDropdown
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            show={isHovered}
        />
    );
}

export default function NavBar({ menuItems }) {
    const data = useStaticQuery(graphql`
    query MenuQuery {
  bodies: allGoogleDocs(filter: {slug: {regex: "/^/01/"}}) {
    nodes {
      page
      name
      slug
    }
  }
  technologies: allGoogleDocs(filter: {slug: {regex: "/^/02/"}}) {
    nodes {
      page
      name
      slug
    }
  }
  cities: allGoogleDocs(filter: {slug: {regex: "/^/03/"}}) {
    nodes {
      page
      name
      slug
    }
  }
  region: allGoogleDocs(filter: {slug: {regex: "/^/04/"}}) {
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
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
                <Nav.Link className={styles.navItemHome} href="/">Home</Nav.Link>
                <HoverControlledDropdown title="Bodies" className={styles.navItem}>
                    {data.bodies.nodes.map((item, index) => {
                        return (<NavDropdown.Item href={item.slug} key={index}>{item.name}</NavDropdown.Item>)
                    })
                    }
                </HoverControlledDropdown>
                <HoverControlledDropdown title="Technologies" className={styles.navItem}>
                    {data.technologies.nodes.map((item, index) => {
                        return (<NavDropdown.Item href={item.slug} key={index}>{item.name}</NavDropdown.Item>)
                    })
                    }
                </HoverControlledDropdown>
                <HoverControlledDropdown title="Cities" className={styles.navItem}>
                    {data.cities.nodes.map((item, index) => {
                        return (<NavDropdown.Item href={item.slug} key={index}>{item.name}</NavDropdown.Item>)
                    })
                    }
                </HoverControlledDropdown>
                <HoverControlledDropdown title="Region" className={styles.navItem}>
                    {data.region.nodes.map((item, index) => {
                        return (<NavDropdown.Item href={item.slug} key={index}>{item.name}</NavDropdown.Item>)
                    })
                    }
                </HoverControlledDropdown>
                <HoverControlledDropdown title="About" className={styles.navItem}>
                    <NavDropdown.Item href="/project">The Project</NavDropdown.Item>
                    <NavDropdown.Item href="/team">The Team</NavDropdown.Item>
                </HoverControlledDropdown>
                
                {/*menuData.map((navItem, index) => {
         if(navItem.length === 1) {
             return <Nav.Link className={styles.navItemNoDropdown} href={navItem[0].slug} key={navItem[0].slug}>{navItem[0].name}</Nav.Link>
         } else {
             var rows=[];
             for( var i =1; i < navItem.length; i++) {
                rows.push(<NavDropdown.Item href={navItem[i].slug} target="_self" key={navItem[i].slug}>{navItem[i].name}</NavDropdown.Item>)
             }
             return  <HoverControlledDropdown className={styles.navItem} title={navItem[0].name} key={index}>
                {rows}
             </HoverControlledDropdown>
            }
                })*/}
            </Nav>

            </Navbar.Collapse>

        </Navbar>
        </Container>
    </Container>

  )
}

