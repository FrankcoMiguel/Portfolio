import React from 'react';
import { Container, Row } from 'react-bootstrap';
//Styles
import '../assets/styles/Skills.scss';
//Images
import SassIcon from '../assets/static/sass-icon.svg';
import ReactIcon from '../assets/static/react-icon.svg';
import DotNetIcon from '../assets/static/dotnet-icon.svg';
import DbaIcon from '../assets/static/db-icon.svg';
import TeamWorkIcon from '../assets/static/teamwork-icon.svg';
import SoftwareDesignPrinciples from '../assets/static/sbp-icon.svg';
//Components
import NavigationBar from '../components/NavigationBar';
import CardView from '../components/CardView';

const Skills = () => {
    return (
        <section>
            <Container>

                <Row>
                    <NavigationBar />
                </Row>

                <Row>
                <CardView 
                    image={SassIcon}
                    imageAlt="Sass Icon"
                    title="Web Design"
                    description="Short description: is simply 
                    dummy text of the printing 
                    and typesetting industry. 
                    Lorem Ipsum has."/>

                <CardView 
                    image={ReactIcon}
                    imageAlt="Reactjs Icon"
                    title="Frontend Development"
                    description="Short description: is simply 
                    dummy text of the printing 
                    and typesetting industry. 
                    Lorem Ipsum has."/>

                <CardView 
                    image={DotNetIcon}
                    imageAlt="DotNetIcon"
                    title="Backend Development"
                    description="Short description: is simply 
                    dummy text of the printing 
                    and typesetting industry. 
                    Lorem Ipsum has."/>

                <CardView 
                    image={DbaIcon}
                    imageAlt="Database Icon"
                    title="Database Administration"
                    description="Short description: is simply 
                    dummy text of the printing 
                    and typesetting industry. 
                    Lorem Ipsum has."/>

                <CardView 
                    image={TeamWorkIcon}
                    imageAlt="Sass Icon"
                    title="Teamwork Ability"
                    description="Short description: is simply 
                    dummy text of the printing 
                    and typesetting industry. 
                    Lorem Ipsum has."/>

                <CardView 
                    image={SoftwareDesignPrinciples}
                    imageAlt="Usability Icon"
                    title="SDLC Best Practices"
                    description="Short description: is simply 
                    dummy text of the printing 
                    and typesetting industry. 
                    Lorem Ipsum has."/>                

                </Row>    
            </Container>
        </section>
    )
}

export default Skills;