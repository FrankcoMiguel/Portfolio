import React from 'react'
import { Container, Row, Image, Button } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import '../styles/ProjectCarousel.scss'

import Chick4All from '../images/chick4all-project.svg'
import ReactTechnology from '../images/react-technology.svg'
import JavaTechnology from '../images/java-technology.svg'
import IJTechnology from '../images/intellij-technology.svg'
import MsSQLTechnolgy from '../images/mssql-technology.svg'
import AndroidTechnology from '../images/android-technology.svg'
import DotNetTechnology from '../images/dotnet-technology.svg'
import VSCodeTechnology from '../images/vscode-technology.svg'
import OracleTechnology from '../images/oracle-technology.svg'


import ProBackPack from '../images/probackpack-project.svg'
import CinemaPremium from '../images/cinemapremium-project.svg'
import DaytoDay from '../images/daytoday-project.svg'
import ExpressCourier from '../images/expresscourier-project.svg'



const ProjectCarousel = () => {

    return (
        <div className="CarouselContainer">

            <div className="ProjectsContainer">
                <ul className="ProjectList">
                    <li id="beside">
                        <ProjectCard logotype={ProBackPack} title="ProBackPack" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="School" secondTag="Android" thirdTag="Mobile" firstTechnology={AndroidTechnology} secondTechnology={JavaTechnology} thirdTechnology={MsSQLTechnolgy}/>
                    </li>

                    <li id="active">
                        <ProjectCard logotype={Chick4All} title="Chick-4-All" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="Restaurant" secondTag="Service" thirdTag="PWA" firstTechnology={IJTechnology} secondTechnology={JavaTechnology} thirdTechnology={OracleTechnology}/>
                    </li>

                    <li id="beside">
                        <ProjectCard logotype={CinemaPremium} title="Cinema Premium" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="Movies" secondTag="API" thirdTag="REST" firstTechnology={VSCodeTechnology} secondTechnology={MsSQLTechnolgy} thirdTechnology={DotNetTechnology}/>
                    </li>

                    <li id="hide">
                        <ProjectCard logotype={DaytoDay} title="DayToDay" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="Projects" secondTag="Scheduler" thirdTag="Desktop" firstTechnology={VSCodeTechnology} secondTechnology={MsSQLTechnolgy} thirdTechnology={DotNetTechnology}/>
                    </li>
                
                    <li id="hide">
                        <ProjectCard logotype={ExpressCourier} title="Express Courier" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="Courier" secondTag="Shipping" thirdTag="Mobile" firstTechnology={VSCodeTechnology} secondTechnology={MsSQLTechnolgy} thirdTechnology={ReactTechnology}/>
                    </li>
                </ul>
            </div>
            <Row className="CarouselControls">
                <ul className="CarouselButtons">
                    <li className="CarouselButton"><span className="Previous"></span></li>
                    <li className="CarouselButton"><span className="Next"></span></li>
                </ul>
            </Row>
        </div>
    )
}

export default ProjectCarousel