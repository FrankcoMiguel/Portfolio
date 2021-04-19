import React, { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import "./ProjectCard.scss"

const ProjectCard = ({logo, title, description, tags = [], icons = []}) => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 })
  },[])

  return (
    <div data-aos="zoom-out" className="CardContainer">
      <img className="CardLogo" src={logo} />
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
            <Tippy key={i.id} placement="bottom" content={i.name} >
              <li><i className={i.path}></i></li>
            </Tippy>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
