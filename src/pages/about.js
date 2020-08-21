import React from 'react'
import Layout from '../components/Layout'
import SkillBar from '../components/Skillbar'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ProfilePicture from '../images/profile-picture.svg'


export default function About() {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <span>
                            <Image src={ProfilePicture} />
                        </span>
                    </Col>
                    <Col>
                        <ul>
                            <li>Who am I?</li>
                            <li>Frank Miguel Orozco</li>
                            {/* 20 years old - Dominican - Developer */}
                            <li> 20 years old   Dominican   Developer</li>
                            <li>I am a computer programmer born and raised in the Dominican Republic,
                                currently living in Anchorage, Alaska.
                            </li> 
                            <li>With more than 3 years of experience, I love programming because 
                                it's the nicest way to make ideas come true.
                            </li>
                        </ul>
                        
                        <ul>
                            <li>Where did I learn coding</li>
                            <li>I studied Sofware Development at ITLA, 
                                one of the most popular institutes of Dominican Republic, 
                                and specialized my career in Web development and data 
                                analysis.
                            </li>
                        </ul>
                    </Col>
                </Row>
            
            <Container>
                <h1>What am I good at?</h1>
                <Row>
                    <Col>
                        <SkillBar title="Web Design" skill="Web" />
                        <SkillBar title="Frontend Development" skill="Frontend" />
                        <SkillBar title="Database Administration" skill="Db" />
                    </Col>
                    <Col>
                        <SkillBar title="Backend Development" skill="Backend" />
                        <SkillBar title="Teamwork" skill="Teamwork" />
                        <SkillBar title="SOLID Implementation" skill="Solid" />
                    </Col>
                </Row>

            </Container>

            
            </Container>
        </Layout>
    )
}