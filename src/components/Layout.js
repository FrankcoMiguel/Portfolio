import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./Navbar"
import "./Layout.scss"

const Layout = props => {
  return (
    <div className="Body">
      <NavigationBar />
      {props.children}
    </div>
  )
}

export default Layout
