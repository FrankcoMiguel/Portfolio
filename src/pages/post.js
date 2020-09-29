import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col, Image } from "react-bootstrap"

export default function About() {
  return (
    <Layout>
      <Container>
        <Row>
          <h1>Image</h1>
        </Row>
        <Row>
          <h3>Title</h3>
        </Row>
        <Row>
          <p>Paragraph</p>
        </Row>
        <Row>
          <Col>More content</Col>
          <Col>Picture</Col>
        </Row>
      </Container>
    </Layout>
  )
}
