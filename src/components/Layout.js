import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

import navbar from '../data/navbar.json'

const Layout = ({children, title, page}) => {

  return (
    <div className="Application">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Helmet>
      <Navbar option={page} items={navbar}/>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
