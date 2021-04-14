import React, { useEffect } from "react"
import "./EducationCard.scss"
import Aos from 'aos'
import 'aos/dist/aos.css'

import GradCap from '../images/about/grad-cap.svg'

const EducationCard = ({items = []}) => {

  useEffect(() => {
    Aos.init({ duration: 800 })
  },[])

  return (
    <div data-aos="fade-up" className="EducationCard">
      <img src={GradCap} />
      {items.map(i => (
        <div key={i.id} className="CardContent">
          <div className="Row">
            <div className="Col">
              <h3>{i.title}</h3>
              <h5>{`${i.school}, ${i.location}`}</h5>
            </div>
            <div className="Col">
              <h3>{i.gpa !== 0 ? `${i.gpa} GPA` : '-' }</h3>
              <h5>{`(${i.period})`}</h5>
            </div>
          </div>
          
          <h6>{`Top ${i.schoolSpeciality} attended:`}</h6>
          <ul>
            {i.subjects.map(s => (
              <li key={s.id}>{`-${s.name} `}<b>{`(${s.grade})`}</b></li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  )
}

export default EducationCard
