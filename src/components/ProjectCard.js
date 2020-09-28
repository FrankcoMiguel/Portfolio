import React from 'react'
import { Container, Image } from 'react-bootstrap'
import '../styles/ProjectCard.scss'


const ProjectCard = (props) => {
    return (
        <Container className="CardContainer">
            <div className="CardImageContainer">
                <Image src={props.logotype} />
            </div>
            <div className="CardContent">
                <h2 className="CardTitle">{props.title}</h2>
                <p className="CardDetail">{props.detail}</p>
                <ul className="CardTags">
                    <li>{props.firstTag}</li>
                    <li>{props.secondTag}</li>
                    <li>{props.thirdTag}</li>
                </ul>
                <ul className="CardTechnologies">
                    <li><Image src={props.firstTechnology} /></li>
                    <li><Image src={props.secondTechnology} /></li>
                    <li><Image src={props.thirdTechnology} /></li>
                </ul>
            </div>
        </Container>
    )
}

export default ProjectCard