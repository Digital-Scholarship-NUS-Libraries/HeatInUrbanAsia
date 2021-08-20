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
      #menu: googleDocs(name: {eq: "Menu"}) {
      #  childMdx {
      #    body
      #  }
      #}
      pagesPath: allGoogleDocs(sort: { fields: [slug] }) {
        edges {
          node {
            breadcrumb {
              name
              slug
            }
          }
        }
      }
    }
  `)

    var menuData =[]
    var menuItem = []
    data.pagesPath.edges.map((edge) => {
      if(edge.node.breadcrumb.length === 1) {
        menuData.push(edge.node.breadcrumb)
      } else {
          if(!menuItem.includes(edge.node.breadcrumb[0].name)){
            menuItem.push(edge.node.breadcrumb[0].name)
            menuData.push(edge.node.breadcrumb)
          } else {
            for( var i =1; i < menuData.length; i++) {
              if(menuData[i][0].name === edge.node.breadcrumb[0].name) {
                menuData[i].push(edge.node.breadcrumb[1])
              }
           }
          }
      }
      return edge
  })

/*console.log(data);
console.log(menuData);
console.log(menuItem);*/

  return (
    <Container className={styles.navbar}>
        <Container>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
                <Nav.Link className={styles.navItemHome} href="/">Home</Nav.Link>
                
                {menuData.map((navItem, index) => {
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
     })}
            </Nav>

            </Navbar.Collapse>

        </Navbar>
        </Container>
    </Container>

  )
}

