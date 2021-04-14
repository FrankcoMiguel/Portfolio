import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"
import "./Layout.scss"


const Layout = ({children, title}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Helmet>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
