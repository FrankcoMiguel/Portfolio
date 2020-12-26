import React from "react"
import { Container, Row, Image, Form, Button } from "react-bootstrap"
import Layout from "../components/Layout"
import SkillBar from "../components/Skillbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"

import ProfilePicture from "../images/profile-picture.svg"

//skills
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

export default function Home() {
  return (
    <Layout>
      <div className="LandingPage">
        <Container>
          <Row className="LandingContainer">
            <span className="LandingPicture">
              <Image src={ProfilePicture} />
            </span>
            <ul className="LandingContent">
              <li>Hello! I am</li>
              <li>Frank Miguel</li>
              <li>Full-Stack Developer</li>
            </ul>
          </Row>
        </Container>

        {/* Figure on sklls section */}

        <div className="wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="798.92"
            height="336.599"
            viewBox="0 0 798.92 336.599"
          >
            <path
              id="Path_83"
              data-name="Path 83"
              d="M-289.42,159.964s71.371-.7,331.138-11.566C292.391,137.914,316.726-80.609,333.372-113.162c11.142-23.7,43.488-40.166,67.1-49.976,22.747-10.616,109.028-13.5,109.028-13.5v336.6H-289.42Z"
              transform="translate(289.42 176.635)"
              fill="#06c"
            />
          </svg>
        </div>

        {/* Skills section */}

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

        {/* Contact Page */}
        <div className="ContactContainer">
          <div className="ContactRow">
            <div className="ContactInfo">
              <h1>Don't be a stranger</h1>
              <h2>Just say hello.</h2>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <ul className="ContactList">
                <li className="ContactItem">
                  <span className="phone">Do you wanna talk?</span>
                </li>
                <li>+1 907 538 3889</li>
              </ul>
            </div>
            <div className="ContactMessage">
              <Form>
                <Form.Group controlId="FirstNameTextField">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="LastNameTextField">
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group controlId="EmailTextField">
                  <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>

                <Form.Group controlId="MessageTextField">
                  <Form.Control
                    as="textarea"
                    rows="10"
                    placeholder="Type here your message.."
                  />
                </Form.Group>

                <Button type="submit">Send over</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
