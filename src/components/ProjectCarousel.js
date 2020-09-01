import React from 'react'
import { Container, Row, Image, Button } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import '../styles/ProjectCarousel.scss'

import Chick4All from '../images/chick4all-project.svg'
import ReactTechnology from '../images/react-technology.svg'
import JavaTechnology from '../images/java-technology.svg'
import IJTechnology from '../images/intellij-technology.svg'


const ProjectCarousel = () => {
    return (
        <div className="CarouselContainer">
            <Row className="ProjectsContainer">
                <ProjectCard logotype={Chick4All} title="Chick-4-All" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                firstTag="Restaurant" secondTag="Service" thirdTag="PWA" firstTechnology={ReactTechnology} secondTechnology={JavaTechnology} thirdTechnology={IJTechnology}/>
            </Row>
            <Row className="CarouselControls">
                <ul className="CarouselButtons">
                    <li>
                        <span className="CarouselButton">
                            <span className="PrevButton"></span>
                        </span>
                    </li>
                    <li>
                        <span className="CarouselButton">
                            <span className="NextButton"></span>
                        </span>
                    </li>
                </ul>
            </Row>
        </div>
    )
}

export default ProjectCarousel