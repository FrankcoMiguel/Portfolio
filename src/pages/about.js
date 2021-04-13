import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col, Image } from "react-bootstrap"

// Skill Icons

import "./about.scss"

export default function About() {
  return (
    <Layout title="About Frank">
      <div className="AboutContainer">
        <div className="AboutRow">
          <div className="ImageContent">
            <div className="ImageContainer">
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
