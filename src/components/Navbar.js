import React from 'react'
import { Link } from 'gatsby'
import { Row, Image } from 'react-bootstrap'

import '../styles/navbar.scss'
import Logotype from '../images/logotype.svg'
import GithubIcon from '../images/github-icon.svg'
import InstagramIcon from '../images/ig-icon.svg'
import LinkedinIcon from '../images/linkedin-icon.svg'


const NavigationBar = () => {
    return(
        <nav>
            <Row className="NavContainer">
                <Link to="/"><Image className="NavLogo" src={Logotype} /></Link>
                <ul className="NavContent">
                    <li className="NavItem"><Link to='/'>About me</Link></li>
                    <li className="NavItem"><Link to='/'>Portfolio</Link></li>
                    <li className="NavItem"><Link to='/'>Blog</Link></li>
                    <li className="NavItem"><Link to='/'>Contacts</Link></li>
                    <li className="NavDivider"></li>
                    <li className="NavLink"><a href="https://github.com/FrankcoMiguel" target="_blank"><Image src={GithubIcon} /></a></li>
                    <li className="NavLink"><a href="https://www.instagram.com/franco.js/" target="_blank"><Image src={InstagramIcon} /></a></li>
                    <li className="NavLink"><a className="https://www.linkedin.com/in/frank-orozco-2a41b2185/" target="_blank"><Image src={LinkedinIcon} /></a></li>
                </ul>
            </Row>
        </nav>
    )
}

export default NavigationBar