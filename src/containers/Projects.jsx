import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
//Styles
import '../assets/styles/Projects.scss';
//Icons
import Logotype from '../assets/static/logotype.svg';
//Components
import BoxView from '../components/BoxView';

//Data
import ProjectsData from '../data/ProjectsData';

const Projects = () => {

    const BoxesView = ProjectsData.map(project => <BoxView key={project.id} image={project.logotype} imageAlt={project.logotypeAlt} width='238px;' />) //This an Array of BoxView Components using the project data.

    return (
        <section>
            <Container>
                <Row>
                    <Col xs={12}><Image src={Logotype} alt="Logotype" /></Col>
                    <Col xs={12}><h1>Personal Projects</h1></Col>
                    <Col xs={12}><p>Here are few personal projects I've worked recently. Questions? <a href='./'>Contact me</a></p></Col>
                </Row>

                <Row>
                    {BoxesView}
                </Row>


            </Container>
        </section>
    );
}

export default Projects;