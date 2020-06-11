import React, { Component } from 'react';
import Header from './containers/Header';
import Summary from './containers/Summary';


class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Summary />
      </>
    );
  }
}

export default App;
