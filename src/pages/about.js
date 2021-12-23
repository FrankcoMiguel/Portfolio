import React, { useEffect } from "react"
import Layout from "../components/Layout"
import BackgroundCard  from "../components/BackgroundCard"
import Aos from 'aos'
import 'aos/dist/aos.css'

import {CgMouse} from 'react-icons/cg'
import "./about.scss"

export default function About() {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  },[])

  return (
    <Layout title="About Me" page={2}>
      <div className="Introduction">
        <h1>About Me</h1>
        <h5>
        I am computer programmer with a strong expertise in Web Development and Data Analysis using Oracle (PL/SQL) 
        and Microsoft Technologies Microsoft .NET Core / React / SQL Server
        </h5>
        <CgMouse />
        <p>Scroll down to explore more</p>
      </div>
      
      <div className="About">
        <div className="Education">
            <BackgroundCard/>
        </div>
      </div>
    </Layout>
  )
}
