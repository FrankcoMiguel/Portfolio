import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import '../assets/styles/NavigationBar.scss';
import Logotype from '../assets/static/logotype.svg';

const NavigationBar = () => {
  return (
    <Navbar expand='md'>
      <Navbar.Brand href='/'>
        <Image src={Logotype} alt='Logotype' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          <Nav.Item><Nav.Link href='/'>Skills</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='/'>Projects</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='/'>Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

