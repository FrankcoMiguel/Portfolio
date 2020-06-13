import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ProfilePicture from '../assets/static/profile.svg';
import '../assets/styles/Profile.scss';

const Profile = () => {
  return (
    <Container>
      <Row className='picture-headers-row'>
        <Col className='picture-container' sm={12} md={6}>
          <Image className='profile-photo' src={ProfilePicture} roundedCircle />
        </Col>

        <Col className='headers' sm={12} md={6}>
          <p className='greet'>Hello, I am</p>
          <p className='name'>Frank Orozco</p>
          <p className='career'>Full Stack Developer</p>
        </Col>
      </Row>

      <Row className='button-container'>
          <a className='download-resume' href='/' role='button'>Download Resume</a>
      </Row>
    </Container>
  );
};

export default Profile;
