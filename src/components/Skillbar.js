import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/skillbar.scss'


const SkillBar = (props) => {
    return(
        <Container className="SkillBar">
            <p className="BarTitle">{props.title}</p>
            <span className="BarContainer">
                <span className={`BarStatus ${props.skill}`}></span>
            </span>
        </Container>
    )
}

export default SkillBar