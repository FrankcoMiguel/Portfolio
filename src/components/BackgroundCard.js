import React, { useEffect } from "react"
import "./BackgroundCard.scss"
import Aos from 'aos'
import 'aos/dist/aos.css'

const EducationCard = () => {

  useEffect(() => {
    Aos.init({ duration: 800 })
  },[])

  return (
    <div data-aos="fade-up" className="BackgroundCard">
        <h4>Educational Background</h4>
        <div className="CardContent">
          <div className="Row">
          </div>
          <div className="Row">
            <div className="Col">
              <h3>Associate's of Science - Computer Science</h3>
              <h5><a href="https://itla.edu.do" target="_blank">Las Americas Institute of Technology</a> - Dominican Republic</h5>
            </div>
            <div className="Col">
              <h5>(2017 - 2019)</h5>
            </div>
          </div>
        </div>
        <div className="CardContent">
          <div className="Row">
            <div className="Col">
              <h3>Certification - Frontend Development</h3>
              <h5><a href="https://platzi.com/p/FrankcoMiguel29/" target="_blank">Platzi</a> - E-Learning Platform</h5>
            </div>
            <div className="Col">
              <h5>(2019 - 2020)</h5>
            </div>
          </div>
        </div>
        <h4>Most Recent Work Experience</h4>
        <div className="CardContent">
          <div className="Row">
          </div>
          <div className="Row">
            <div className="Col">
              <h3>Programmer / Data Analyst</h3>
              <h5><a href="https://www.nexusdatasolutions.com" target="_blank">neXus Data Solutions</a> - Hybrid</h5>
            </div>
            <div className="Col">
              <h5>(Since January 2020)</h5>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EducationCard
