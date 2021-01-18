import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./Navbar"
import { Helmet } from "react-helmet"
import "./Layout.scss"

const Layout = props => {
  return (
    <div className="Body">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavigationBar />
      {props.children}
    </div>
  )
}

export default Layout
