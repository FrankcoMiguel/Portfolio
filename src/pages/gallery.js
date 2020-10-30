import React from "react"
import Layout from "../components/Layout"
import { Form, Button } from "react-bootstrap"
import "./contact.scss"

export default function Contact() {
  return (
    <Layout>
      <div className="ContactContainer">
        <div className="ContactRow">
          <div className="ContactInfo">
            <h1>Don't be a stranger</h1>
            <h2>Just say hello.</h2>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <ul className="ContactList">
              <li className="ContactItem">
                <span className="phone">Need help?</span>
              </li>
              <li>frank_miguel29@outlook.com</li>
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
    </Layout>
  )
}
