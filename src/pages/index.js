import React, { useState, useEffect } from "react"
import { Form, Button } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'
// import Profile from '../images/index/about-picture.jpg'
import Profile from '../images/index/profile-picture.jpg'
import EmailVector from '../images/index/email-vector.png'
import Layout from '../components/Layout'
import Skill from '../components/Skill'


import landing from '../data/landing.json'

import "./index.scss"

export default function Home() {

  const [verified, isVerified] = useState(false)
  const [email, setEmail] = useState(false)


  const handleCheck = () => {
    isVerified(true)
  }

  useEffect(() => {
    Aos.init({ duration: 900 })
  },[])

  const sendEmail = async (e) => {
    e.preventDefault()

    if (!verified) {

      alert("ReCAPTCHA is required")

    } else {

      emailjs.sendForm('outlook_service', 'outlook_template', e.target, 'user_1ZCvBjDqmVodWw85yCqBZ')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  
      setEmail(true)
      // e.target.reset()

    }

  }

  return (
    <Layout title="Home" page={1}>
      <div className="Presentation">
        <img data-aos="zoom-right" src={Profile} />
        <div className="Greeting">
          <h4>Hey there, I am</h4>
          <h1>Frank Miguel Orozco</h1>
          <h3>Oracle APEX Developer</h3>
          {/* <p>OCI and Autonomous Database</p> */}
        </div>
      </div>

      <div className="Skills">
        <div className="SkillsContent">
          <h1>These are my skills</h1>
          <div className="SkillsGrid">
          {landing[0].items.map(s => (
            <Skill key={s.id} 
                  title={s.name} 
                  percentage={s.percentage}
                  time={s.time} 
                  icons={s.icons}/>
          ))}
          </div>
        </div>
      </div>

      <div className="Contact">
        <div className="ContactMessage">
          <h1>Don't be a stranger</h1>
          <h3>Just say hello.</h3>
          <p>Feel free to get in touch. I am looking to
            explore new opportunities and use my knowledge to achieve the best results
          </p>

          {/* <div className="Quote">
            <q>Greatness from small beginnings</q>
            <i> - Sir Francis Drake.</i>
          </div> */}
        </div>
        <div className="ContactForm">
          <Form className={email ? 'form-hidden' : 'form'} onSubmit={sendEmail}>
            <Form.Group className="form-group" controlId="FirstNameTextField">
              <Form.Control name="firstname" type="text" placeholder="First Name" required />
            </Form.Group>

            <Form.Group className="form-group" controlId="LastNameTextField">
              <Form.Control name="lastname" type="text" placeholder="Last Name" required />
            </Form.Group>

            <Form.Group className="form-group" controlId="EmailTextField">
              <Form.Control name="email" type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group className="form-group" controlId="MessageTextField">
              <Form.Control
                name="message"
                as="textarea"
                rows="10"
                required
                placeholder="Type here your message.."/>
            </Form.Group>

            <ReCAPTCHA
                className="Recaptcha" 
                sitekey="6LfuOQMdAAAAAFGI70nLmOVkxEGEmnj58GU83Voo" 
                size="normal"
                onChange={handleCheck}/>

            <Button type="submit" disabled={!verified}>
              Send over
            </Button>
          </Form>

          <div className={email ? 'Message' : 'Message-hidden'}>
            <h4>Your email has been sent, I will respond to you shortly.</h4>
            <img src={EmailVector} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
