import React, { useEffect } from "react"
import { Form, Button } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Profile from '../images/index/about-picture.jpg'
import Layout from '../components/Layout'
import Skill from '../components/Skill'


import landing from '../data/landing.json'

import "./index.scss"

export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  },[])

  return (
    <Layout title="Home">
      <div className="Presentation">
        <img data-aos="zoom-right" src={Profile} />
        <div className="Greeting">
          <h4>Hey there, I am</h4>
          <h1>Frank Miguel Orozco</h1>
          <h3>Software Developer</h3>
          <p>I'm a young man who loves designing and coding solutions</p>
        </div>
      </div>

      <div className="Skills">
        <div className="SkillsContent">
          <h1>What I am good at?</h1>
          <div className="SkillsGrid">
          {landing[0].items.map(s => (
            <Skill key={s.id} 
                  title={s.name} 
                  percentage={s.percentage} 
                  icons={s.icons}/>
          ))}
          </div>
        </div>
      </div>

      <div className="Contact">
        <div className="ContactMessage">
          <h1>Don't be a stranger</h1>
          <h3>Just say hello.</h3>
          <p>Feel free to get in touch. I am always open to
            help and use my knowledge to implement the best
            solutions
          </p>

          <div className="Quote">
            <q>Greatness from small beginnings</q>
            <i> - Sir Francis Drake.</i>
          </div>
        </div>
        <div className="ContactForm">
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
                placeholder="Type here your message.."/>
            </Form.Group>

            <Button type="submit">Send over</Button>
          </Form>
        </div>
      </div>
    </Layout>
  )
}
