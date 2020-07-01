import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
//Styles
import '../assets/styles/Projects.scss';
//Icons
import Logotype from '../assets/static/logotype.svg';
//Components

//Data
import ProjectsData from '../data/ProjectsData';

const Projects = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col xs={12}><Image src={Logotype} alt="Logotype" /></Col>
                    <Col xs={12}><h1>Personal Projects</h1></Col>
                    <Col xs={12}><p>Here are few personal projects I've worked recently. Questions? <a href='./'>Contact me</a></p></Col>
                </Row>


            </Container>
        </section>
    );
}

export default Projects;