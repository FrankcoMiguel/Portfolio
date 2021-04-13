import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col, Image } from "react-bootstrap"
import AboutPicture from "../images/about-pic.jpg"

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

import "./about.scss"

export default function About() {
  return (
    <Layout title="About Frank">
      <div className="AboutContainer">
        <div className="AboutRow">
          <div className="ImageContent">
            <div className="ImageContainer">
              <Image src={AboutPicture} />
            </div>
          </div>
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
        </div>
      </div>
    </Layout>
  )
}
