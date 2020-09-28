import React, { useState } from 'react'
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

    const [card, setCard] = useState(1);
    const [first, setFirst] = useState('active');
    const [second, setSecond] = useState('beside');
    const [third, setThird] = useState('far');
    const [fourth, setFourth] = useState('hide');
    const [fifth, setFifth] = useState('hide');


    const changeCard = c => {

        switch (c) {

            case 1:
                setFirst('active')
                setSecond('beside')
                setThird('far')
                setFourth('hide')
                setFifth('hide')
                break

            case 2:
                setFirst('beside')
                setSecond('active')
                setThird('beside')
                setFourth('hide')
                setFifth('hide')
                break
            
            case 3:
                setFirst('hide')
                setSecond('beside')
                setThird('active')
                setFourth('beside')
                setFifth('hide')
                break

            case 4:
                setFirst('hide')
                setSecond('hide')
                setThird('beside')
                setFourth('active')
                setFifth('beside')
                break

            case 5:
                setFirst('hide')
                setSecond('hide')
                setThird('far')
                setFourth('beside')
                setFifth('active')
                break
        }
    }

    const previous = () => {
        if (card == 1) {
            changeCard(5)
        } else {
            changeCard(card)
        }
        changeCard(card)
    }


   const next = () => {
       if (card == 5) {
           changeCard(1)
       } else {
            changeCard(card + 1)
       }
       
    }


    return (
        <div className="CarouselContainer">

            <div className="ProjectsContainer">
                <ul id="ProjectList" className="ProjectList">
                    <li id={first}>
                        <ProjectCard logotype={ProBackPack} title="ProBackPack" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="School" secondTag="Android" thirdTag="Mobile" firstTechnology={AndroidTechnology} secondTechnology={JavaTechnology} thirdTechnology={MsSQLTechnolgy}/>
                    </li>

                    <li id={second}>
                        <ProjectCard logotype={Chick4All} title="Chick-4-All" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="Restaurant" secondTag="Service" thirdTag="PWA" firstTechnology={IJTechnology} secondTechnology={JavaTechnology} thirdTechnology={OracleTechnology}/>
                    </li>

                    <li id={third}>
                        <ProjectCard logotype={CinemaPremium} title="Cinema Premium" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="Movies" secondTag="API" thirdTag="REST" firstTechnology={VSCodeTechnology} secondTechnology={MsSQLTechnolgy} thirdTechnology={DotNetTechnology}/>
                    </li>

                    <li id={fourth}>
                        <ProjectCard logotype={DaytoDay} title="DayToDay" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="Projects" secondTag="Scheduler" thirdTag="Desktop" firstTechnology={VSCodeTechnology} secondTechnology={MsSQLTechnolgy} thirdTechnology={DotNetTechnology}/>
                    </li>
                
                    <li id={fifth}>
                        <ProjectCard logotype={ExpressCourier} title="Express Courier" detail="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
                            firstTag="Courier" secondTag="Shipping" thirdTag="Mobile" firstTechnology={VSCodeTechnology} secondTechnology={MsSQLTechnolgy} thirdTechnology={ReactTechnology}/>
                    </li>
                </ul>
            </div>
            <Row className="CarouselControls">
                <ul className="CarouselButtons">
                    <li onClick={previous} className="CarouselButton"><span className="Previous"></span></li>
                    <li onClick={next} className="CarouselButton"><span className="Next"></span></li>
                </ul>
            </Row>
        </div>
    )
}

export default ProjectCarousel