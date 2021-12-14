import React, { useState, useEffect, useRef } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { FaGithub } from 'react-icons/fa'
import { ImDownload } from 'react-icons/im'

import "./ProjectCard.scss"

const ProjectCard = ({logo, title, description, logoRadius, tags = [], icons = [], page, source}) => {

  const [overlay, setOverlay] = useState(false)
  let projectRef = useRef()
  
  useEffect(() => {
    Aos.init({ duration: 1000 })

    let handler = (event) => {
      if (!projectRef.current.contains(event.target)) {
        setOverlay(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }

  },[])

  const toggleOverlay = () => {
    setOverlay(!overlay)
  }


  return (
    <div ref={projectRef} data-aos="zoom-out" className="ProjectCard">
      <div className="CardContainer" onClick={toggleOverlay}>
        <img className="CardLogo" src={logo} style={{borderRadius: `${logoRadius}`}} />
        <div className="CardContent">
          <h2 className="CardTitle">{title}</h2>
          <p className="CardDescription">{description}</p>
          <ul className="CardTags">
            {tags.map(t => (
              <li className={t.highlighted ? 'highlighted' : ''} id={t.id}>{t.name}</li>
            ))}
          </ul>
          <ul className="CardIcons">
            {icons.map(i => (
              <Tippy key={i.id} placement="bottom" content={i.name}>
                <li><i className={i.path}></i></li>
              </Tippy>
            ))}
          </ul>
        </div>
      </div>
      <div className={overlay ? `CardOverlay up` : `CardOverlay`} onClick={toggleOverlay}>
        <h5>Here you can download the app and visualize the source code</h5>
        <ul>
          {page === "no" ? '' : <li><a className="download" href={page} target="_blank"><ImDownload/></a></li>}
          <li><a className="github" href={source} target="_blank"><FaGithub/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
