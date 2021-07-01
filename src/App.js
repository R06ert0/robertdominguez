import React from 'react';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisibile: true
    }

    this.hideMenu = this.hideMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }

  componentDidMount() {
    if (matchMedia('screen and (max-width: 800px)').matches) {
      this.setState({
        menuVisibile: false
      });
    }
  }

  showMenu() {
    this.setState({
      menuVisibile: true
    });
  }

  hideMenu() {
    this.setState({
      menuVisibile: false
    });
  }

  render() {
    return (
      <div id="Almighty-div" style={{ width: 100 + '%', height: 100 + '%', position: 'relative'}}>
        <Hamburger onShowMenu={this.showMenu} menuVisibile={this.state.menuVisibile} />
        <Home />
        <Nav menuVisibile={this.state.menuVisibile} onHideMenu={this.hideMenu} />
        <About />
        <Portfolio />
        <Contact />
      </div>)
  }
}

export default App;

class Hamburger extends React.Component {
  render() {
    return <div onClick={this.props.onShowMenu} className="Hamburger" style={{ display: this.props.menuVisibile ? 'none' : 'flex' }}></div>
  }
}