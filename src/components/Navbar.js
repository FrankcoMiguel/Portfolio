import React from "react"
import { Link } from "gatsby"
import { Row, Image } from "react-bootstrap"

import "./Navbar.scss"
import Logotype from "../images/logotype.svg"
import GithubIcon from "../images/github-icon.svg"
import InstagramIcon from "../images/ig-icon.svg"
import LinkedinIcon from "../images/linkedin-icon.svg"


const NavigationBar = () => {
  return (
    <nav>
      <Row className="NavContainer">
        <div className="NavTop">
          <Link to="/">
            <Image className="NavLogo" src={Logotype} />
          </Link>
          <div className="NavHamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <ul className="NavContent">
          <li className="NavItem">
            <Link to="/about">About me</Link>
          </li>
          <li className="NavItem">
            <Link to="/portfolio">Projects</Link>
          </li>
          <li className="NavItem">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="NavDivider"></li>
          <div className="NavIcons">
            <li className="NavLink">
              <a href="https://github.com/FrankcoMiguel" target="_blank">
                <Image src={GithubIcon} />
              </a>
            </li>
            <li className="NavLink">
              <a href="https://www.instagram.com/franco.js/" target="_blank">
                <Image src={InstagramIcon} />
              </a>
            </li>
            <li className="NavLink">
              <a href="https://www.linkedin.com/in/frank-orozco-2a41b2185/" target="_blank">
                <Image src={LinkedinIcon} />
              </a>
            </li>
          </div>
        </ul>
      </Row>
    </nav>
  )
}

export default NavigationBar
