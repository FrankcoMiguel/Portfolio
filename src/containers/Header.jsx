import React from 'react';
import '../assets/styles/Header.scss';
import NavigationBar from '../components/NavigationBar';
import Profile from '../components/Profile';

const Header = () => {

  return (
    <header>
      <NavigationBar />
      <Profile />
    </header>
  );
};

export default Header;
