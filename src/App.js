import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import ContentComponent from './components/ContentComponent';
import FooterComponent from './components/FooterComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
