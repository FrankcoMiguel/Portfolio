import React from "react"
import Layout from "../components/Layout"
import SkillBar from "../components/Skillbar"
import { Container, Row, Col, Image } from "react-bootstrap"
import AboutPicture from "../images/about-picture.jpg"

// Skill Icons
import html5 from "../images/html-skill.svg"
import sass from "../images/sass-skill.svg"
import bootstrap from "../images/bootstrap-skill.svg"
import js from "../images/js-skill.svg"
import react from "../images/react-skill.svg"
import gatsby from "../images/gatsby-skill.svg"
import mssql from "../images/mssql-skill.svg"
import mysql from "../images/mysql-skill.svg"
import oracle from "../images/oracle-skill.svg"
import java from "../images/java-skill.svg"
import dotnet from "../images/dotnet-skill.svg"
import asana from "../images/asana-skill.svg"
import office365 from "../images/office365-skill.svg"
import github from "../images/github-skill.svg"
import python from "../images/python-skill.svg"

//import '../styles/about.scss'

export default function About() {
  return (
    <Layout>
      <Container className="AboutContainer">
        <Row className="AboutRow">
          <Col className="ImageContent">
            <div className="ImageContainer">
              <Image src={AboutPicture} fluid="true" />
            </div>
          </Col>
          <Col className="AboutContent">
            <ul className="AboutInfo">
              <li className="AboutTitle">Who am I?</li>
              <li className="AboutSpecial">Frank Miguel Orozco Ogando</li>
              {/* 20 years old - Dominican - Developer */}
              <li className="AboutList">
                <p>20 years old</p>
                <p>Dominican</p>
                <p>Developer</p>
              </li>
              <li className="AboutParagraph">
                <p>
                  I am a computer programmer born and raised in the Dominican
                  Republic, currently living in Anchorage, Alaska.
                </p>
                <p>
                  With more than 3 years of experience, I love programming
                  because it's the nicest way to make ideas come true.
                </p>
              </li>
            </ul>
            <ul className="AboutInfo">
              <li className="AboutTitle">Where did I learn coding</li>
              <li className="AboutParagraph">
                <p>
                  I studied Sofware Development at ITLA, one of the most popular
                  institutes of Dominican Republic, and specialized my career in
                  Web development and data analysis.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="BottomAbout">
        <h1>What am I good at?</h1>
        <Row className="SkillsContent">
          <SkillBar
            title="Web Design"
            percentage="85"
            threeIcons="true"
            firstIcon={html5}
            secondIcon={sass}
            thirdIcon={bootstrap}
          />
          <SkillBar
            title="Backend"
            percentage="78"
            twoIcons="true"
            firstIcon={dotnet}
            secondIcon={java}
          />
          <SkillBar
            title="Frontend"
            percentage="92"
            threeIcons="true"
            firstIcon={js}
            secondIcon={react}
            thirdIcon={gatsby}
          />
          <SkillBar
            title="Teamwork"
            percentage="95"
            threeIcons="true"
            firstIcon={asana}
            secondIcon={office365}
            thirdIcon={github}
          />
          <SkillBar
            title="Databases"
            percentage="76"
            threeIcons="true"
            firstIcon={mssql}
            secondIcon={mysql}
            thirdIcon={oracle}
          />
          <SkillBar
            title="Algorithms"
            percentage="88"
            singleIcon="true"
            firstIcon={python}
          />
        </Row>
      </div>
    </Layout>
  )
}
