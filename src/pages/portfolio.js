import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col, Image } from "react-bootstrap"
import ProjectCarousel from "../components/ProjectCarousel"

import "./portfolio.scss"

export default function Portfolio() {
  return (
    <Layout>
      <div className="PortfolioContainer">
        <div className="PortfolioRow">
          <div className="PortfolioTitle">
            <h1>Personal Projects</h1>
            <p>Here are few personal projects I’ve worked on recently.</p>
          </div>
          <div className="PortfolioCarousel">
            <ProjectCarousel />
          </div>
        </div>
      </div>
    </Layout>
  )
}
