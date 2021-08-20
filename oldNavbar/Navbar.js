import React, {useState } from 'react'
import * as styles from './Navbar.module.scss'
import { Container, Row, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap'

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
  return (
    <Container className={styles.navbar}>
        <Container>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className={styles.navItemHome} href="/">Home</Nav.Link>
                <HoverControlledDropdown className={styles.navItem} title="Body">
                    <NavDropdown.Item href="/01-body/01-temperature-heat-and-the-body-in-biomedicine-and-ayurveda" target="_self">Temperature</NavDropdown.Item>
                    <NavDropdown.Item href="/01-body/02-health-heat-wave-dealing-with-extreme-heat-in-fifties-hong-kong" target="_self">Health</NavDropdown.Item>
                    <NavDropdown.Item href="/01-body/03-emergency-title" target="_self">Emergency</NavDropdown.Item>
                    <NavDropdown.Item href="/01-body/04-technology-rejecting-a-fan-in-singapore" target="_self">Technology</NavDropdown.Item>
                </HoverControlledDropdown>
                <HoverControlledDropdown className={styles.navItem} title="Building">
                    <NavDropdown.Item href="/02-building/01-temperature-title" target="_self">Temperature</NavDropdown.Item>
                    <NavDropdown.Item href="/02-building/02-health-the-cold-storage-company-ltd" target="_self">Health</NavDropdown.Item>
                    <NavDropdown.Item href="/02-building/03-emergency-title" target="_self">Emergency</NavDropdown.Item>
                    <NavDropdown.Item href="/02-building/04-technology-terracotta-as-technology-then-and-now" target="_self">Technology</NavDropdown.Item>
                </HoverControlledDropdown>
                <HoverControlledDropdown className={styles.navItem} title="City">
                    <NavDropdown.Item href="/03-city/01-temperature-title" target="_self">Temperature</NavDropdown.Item>
                    <NavDropdown.Item href="/03-city/02-health-title" target="_self">Health</NavDropdown.Item>
                    <NavDropdown.Item href="/03-city/03-emergency-title" target="_self">Emergency</NavDropdown.Item>
                    <NavDropdown.Item href="/03-city/04-technology-introduction-of-air-conditioning-into-singapore" target="_self">Technology</NavDropdown.Item>
                </HoverControlledDropdown>
                <HoverControlledDropdown className={styles.navItem} title="Region">
                    <NavDropdown.Item href="/04-region/01-temperature-temperature-changes-in-urban-asia-cases-of-singapore-hong-kong-and-seoul" target="_self">Temperature</NavDropdown.Item>
                    <NavDropdown.Item href="/04-region/02-health-title" target="_self">Health</NavDropdown.Item>
                    <NavDropdown.Item href="/04-region/03-emergency-a-similarity-between-urban-heat-and-covid-19-unequal-impacts-on-socioeconomic-groups" target="_self">Emergency</NavDropdown.Item>
                    <NavDropdown.Item href="/04-region/04-technology-title" target="_self">Technology</NavDropdown.Item>
                </HoverControlledDropdown>
                <HoverControlledDropdown className={styles.navItem} title="About">
                    <NavDropdown.Item href="/05-about/01-project-the-project" target="_self">The project</NavDropdown.Item>
                    <NavDropdown.Item href="/05-about/02-the-team-the-team" target="_self">The team</NavDropdown.Item>
                    <NavDropdown.Item href="/05-about/03-publications-publications" target="_self">Publications</NavDropdown.Item>
                    <NavDropdown.Item href="/05-about/04-resources-resources" target="_self">Resources</NavDropdown.Item>
                </HoverControlledDropdown>
            </Nav>

            </Navbar.Collapse>

        </Navbar>
        </Container>
    </Container>

  )
}

