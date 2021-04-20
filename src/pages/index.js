import React, { useEffect } from "react"
import { Form, Button } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'
import Profile from '../images/index/about-picture.jpg'
import Layout from '../components/Layout'
import Skill from '../components/Skill'


import landing from '../data/landing.json'

import "./index.scss"

export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 900 })
  },[])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('outlook_service', 'outlook_template', e.target, 'user_1ZCvBjDqmVodWw85yCqBZ')
    .then((result) => {
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
    })

    e.target.reset()

  }

  return (
    <Layout title="Home" page={1}>
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
          <Form onSubmit={sendEmail}>
            <Form.Group controlId="FirstNameTextField">
              <Form.Control name="firstname" type="text" placeholder="First Name" required />
            </Form.Group>

            <Form.Group controlId="LastNameTextField">
              <Form.Control name="lastname" type="text" placeholder="Last Name" required />
            </Form.Group>

            <Form.Group controlId="EmailTextField">
              <Form.Control name="email" type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group controlId="MessageTextField">
              <Form.Control
                name="message"
                as="textarea"
                rows="10"
                required
                placeholder="Type here your message.."/>
            </Form.Group>

            <Button type="submit">Send over</Button>
          </Form>
        </div>
      </div>
    </Layout>
  )
}
