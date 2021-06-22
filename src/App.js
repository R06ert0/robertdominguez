import React from 'react';
import Home from './Components/Home/Home';

class App extends React.Component {
  render() {
    return <div style={{width: 100 + '%', height: 100 + '%'}}>
      <Home />
    </div>
  }
}

export default App;