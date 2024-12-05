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
        <h4>My Work Experience</h4>
        <div className="CardContent">
          <div className="Row">
            <div className="Col">
              <h3>Sr. Programmer / Data Analyst</h3>
              <h5><a href="https://www.nexusdatasolutions.com" target="_blank">neXus Data Solutions</a></h5>
            </div>
            <div className="Col">
              <h5>January 2020 - Current</h5>
            </div>
          </div>
          <div className="Row">
            <ul>
                <li>Design, develop and deploy Oracle APEX applications.</li>
                <li>Translate business requirements into software specifications.</li>
                <li>Backend development, packages, procedures and functions using PL/SQL.</li>
                <li>Implement Dynamic Actions, Automatic and Manual Processes (PL/SQL), Shared Components,
                    Authentication/Authorization Schemes, JET Charts, Classic/Interactive Reports (and Interactive
                    Grid), Universal Theme components.
                </li>
              </ul>
          </div>
        </div>

        <div className="CardContent">
          <div className="Row">
            <div className="Col">
              <h3>Oracle APEX Developer Lead</h3>
              <h5><a href="https://www.cigna.com/" target="_blank">Cigna Healthcare</a></h5>
            </div>
            <div className="Col">
              <h5>March 2022 - Current</h5>
            </div>
          </div>

          <div className="Row">
            <ul>
                <li>Develop REST APIs within Oracle APEX and ORDS.</li>
                <li>Lead the Development of the Rating Tool that supports all sales markets for Vision.</li>
                <li>Support Underwriters and Actuarial Analysts to mitigate problems in production.</li>
                <li>Retrieved data from external APIs using the APEX Webservice package and ETL processes.</li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default EducationCard
