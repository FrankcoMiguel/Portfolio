import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col, Image } from 'react-bootstrap'

import '../styles/navbar.scss'
import Logotype from '../images/logotype.svg'
import GithubIcon from '../images/github-icon.svg'
import InstagramIcon from '../images/ig-icon.svg'
import LinkedinIcon from '../images/linkedin-icon.svg'


const NavigationBar = () => {
    return(
        <nav>
            <Container className="NavbarContainer">
                <Link to="/"><Image className="NavbarImage" src={Logotype} /></Link>
                <Row className="NavbarContent">
                    <Col className="NavList">
                        <Link className="NavItem" to="/">About me</Link>
                        <Link className="NavItem" to="/">Portfolio</Link>
                        <Link className="NavItem" to="/">Blog</Link>
                        <Link className="NavItem" to="/">Contacts</Link>
                    </Col>
                    <Col className="NavSeparator"></Col>
                    <Col className="NavLinks">
                        <a className="NavLink" href="https://github.com/FrankcoMiguel" target="_blank"><Image src={GithubIcon}></Image></a>
                        <a className="NavLink" href="https://github.com/FrankcoMiguel" target="_blank"><Image src={InstagramIcon}></Image></a>
                        <a className="NavLink" href="https://github.com/FrankcoMiguel" target="_blank"><Image src={LinkedinIcon}></Image></a>
                    </Col>
                </Row>
            </Container>
        </nav>
    )
}

export default NavigationBar