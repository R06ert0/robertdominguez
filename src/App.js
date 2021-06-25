import React from 'react';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';

class App extends React.Component {
  render() {
    return <div style={{width: 100 + '%', height: 100 + '%'}}>
      <Home />
      <Nav />
      <About />
    </div>
  }
}

export default App;