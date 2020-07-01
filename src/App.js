import React, { Component } from 'react';
import Header from './containers/Header';
import Summary from './containers/Summary';
import Projects from './containers/Projects';


class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Summary />
      <Projects />
      </>
    );
  }
}

export default App;
