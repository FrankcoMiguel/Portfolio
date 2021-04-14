import React, { useEffect } from "react"
import Layout from "../components/Layout"
import EducationCard  from "../components/EducationCard"
import Aos from 'aos'
import 'aos/dist/aos.css'


import Graduation from '../images/about/graduation.svg'

import education from '../data/education.json'

import "./about.scss"

export default function About() {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  },[])

  return (
    <Layout title="About Me">
      <div className="Introduction">
        <h1>About Me</h1>
        <h4>I am a computer programmer born and raised in
          the beautiful Dominican Republic, currently
          living in Anchorage, Alaska.
        </h4>
        <p>I know, it's a huge change.</p>
      </div>
      
      <div className="About">
        <h3>Why programming is my thing?</h3>
        <div className="AboutMessage">
          <img data-aos="fade-up" src={Graduation}/>
          <p data-aos="fade-up">Well, my dad who is an IT teacher in DR, he influenced me to 
            learn about computers and that was love at first sight. 
            When I was 13 years old get my first certification as Computer Technician, 
            since then I have been learning a lot of things about hardware and 
            software as well. In 2017 I started studying Software Development 
            (on my uncle's recommendation) in the Instituto Tecnológico de Las Américas (ITLA), 
            Dominican Republic, the thing I like and enjoy the most is ability to create 
            or make ideas come true using programming.
          </p>
        </div>
        <h3>Hobbies and interests</h3>
        <p>I love videogames, am a PlayStation fan and my favorite videogame is Uncharted 4
          Although I like to cook, enjoy visiting restaurants with my girlfriend.
        </p>
        <h3 className="EducationTitle">Educational Background</h3>
        <EducationCard items={education[0].items}/>
      </div>
    </Layout>
  )
}
