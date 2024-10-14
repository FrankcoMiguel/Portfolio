import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Image } from 'react-bootstrap'

import './Navbar.scss'
import Logotype from '../images/logotype.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

function NavigationBar({option, items = []}) {

  const [menu, showMenu] = useState(false)

  const toggle = () => showMenu(!menu)

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : 'scroll'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menu])


  return (
    <nav>
      <div className={`NavContainer ${menu ? 'open' : ''}`}>
        <div className="NavTop">
          <Image className="NavLogo" src={Logotype} />
          <FontAwesomeIcon className="NavHamburger" icon={menu ? faTimes : faBars} onClick={toggle} />
        </div>
        <ul className={`NavContent ${menu ? 'shown' : 'hidden'}`}>
          {items.map(o => (
            <li key={o.id} className={o.id === option ? 'NavItem active' : 'NavItem'}>
              <Link to={o.url}>{o.name}</Link>
            </li>
          ))}
          <li className="NavDivider"></li>
          <div className="NavIcons">
            <li className="NavLink">
              <a href="https://github.com/FrankcoMiguel" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="NavLink">
              <a href="https://stackoverflow.com/users/15623280/franco-js" target="_blank">
                <FontAwesomeIcon icon={faStackOverflow} />
              </a>
            </li>
            <li className="NavLink">
              <a href="https://www.instagram.com/franco.js/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="NavLink">
              <a href="https://www.linkedin.com/in/frankmiguel/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar
