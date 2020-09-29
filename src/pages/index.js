import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Layout from "../components/Layout"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"
import ProfilePicture from "../images/profile-picture.svg"

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row className="LandingContainer">
          <ul className="LandingContent">
            <li>Hello! I am</li>
            <li>Frank Miguel</li>
            <li>Full-Stack Developer</li>
          </ul>
          <span className="LandingPicture">
            <Image src={ProfilePicture} />
          </span>
        </Row>
      </Container>
    </Layout>
  )
}
