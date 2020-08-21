import React from 'react'
import Layout from '../components/Layout'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ProfilePicture from '../images/profile-picture.svg'


export default function About() {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <h1>Personal Projects</h1>
                        <p>Here are few personal projects I’ve worked on recently.</p>
                    </Col>
                    <Col>
                        <h2>Carousel</h2>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}