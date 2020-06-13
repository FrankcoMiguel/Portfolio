import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
//Styles
import '../assets/styles/Summary.scss';
//Icons
import Logotype from '../assets/static/logotype.svg';
//Components
import CardView from '../components/CardView';
//Data
import SkillsData from '../data/SkillsData';

const Summary = () => {
    
    const CardsView = SkillsData.map(skill => <CardView key={skill.id} image={skill.image} imageAlt={skill.imageAlt} 
    title={skill.title} description={skill.description} />) //This an Array of CardViews Components using the skill data.

    return (
        <section>
            <Container>

                <Row>
                    <Col xs={12}><Image src={Logotype} alt="Logotype" /></Col>
                    <Col xs={12}><h1>Summary</h1></Col>
                    <Col xs={12}><p>I consider myself as an Agnostic Technology Computer Programmer specialized on Web Technologies both Frontend and Backend.</p></Col>
                </Row>

                <Row>
                    {CardsView}
                </Row>

                <Row>
                    <Col xs={12}>
                        <q>The best specialization is the ability to adapt the fundamentals you know into the technologies you will eventually use.</q>
                        <p> - Frank M. Orozco</p>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Summary;