import React from 'react'
import Layout from '../components/Layout'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ProfilePicture from '../images/profile-picture.svg'


export default function About() {
    return (
        <Layout>
            <Container>
                <Row><h2>Latest posts</h2></Row>
                <Row><h5>Tags</h5></Row>
                <Row><h1>Cards</h1></Row>
            </Container>
        </Layout>
    )
}