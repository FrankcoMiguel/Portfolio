import React, { useEffect } from "react"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import "./Skill.scss"


const Skill = ({ title, percentage, time, icons = []}) => {

  useEffect(() => {
    Aos.init({ duration: 400 })
  },[])

  return (
    <div data-aos="fade-down" className="Skill">
      <div className="BarTop">
        <p className="BarTitle">{title}</p>
        <ul className="BarIcons">
          {icons.map(i => (
            <Tippy key={i.id} content={i.name} >
              <li>
                <a href={i.moreInfo} target="_blank"><i className={i.path}></i></a>
              </li>
            </Tippy>
          ))}
        </ul>
      </div>
        
      <span className="BarContainer">
        <span
          className="BarStatus"
          style={{ width: `${percentage}%` }}>  
          <Tippy placement="bottom" content={`${percentage <= 30 ? 'Beginner' : 
            percentage > 30 && percentage <= 50 ? 'Good' :
            percentage > 50 && percentage <= 80 ? 'Professional' : 
            percentage > 80 && percentage <=100 ? 'Expert' : 'Percentage cannot be grather than 100'}`}>
              <span className="Indicator"></span>
          </Tippy> 
        </span>
      </span>
    </div>
  )
}

export default Skill
