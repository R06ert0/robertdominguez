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
      menuVisibile: true,
      timeoutIDS: {
        hideHamburgerTimeoutID: 0,
        visibileHamburgerTimeoutID: 0
      },
      projectWidth: 0,
      projectScrollDistance: 0
    }

    this.hideMenu = this.hideMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.showHamburgerFor3s = this.showHamburgerFor3s.bind(this);
    this.changeDimensions = this.changeDimensions.bind(this);
  }

  componentDidMount() {
    if (matchMedia('screen and (max-width: 800px), (max-width: 100vh)').matches) {
      this.hideMenu();
    }
    document.body.onscroll = this.showHamburgerFor3s;
    document.body.onresize = this.changeDimensions;
    // NEED TO DO THIS ASYNCHRONOUSLY → OTHERWISE VALUE OF 'projectScrollDistance' WILL BE ZERO
    setTimeout(() => {
      this.changeDimensions();
    }, 100);
  }

  changeDimensions() {
    // SCROLL WIDTH FOR ONE CLICK
    if (matchMedia('screen and (max-width: 800px), (max-width: 100vh)').matches) {
      let newScrollWidth = document.getElementById('Projects-div').offsetWidth - 11;
      this.setState({
        projectScrollDistance: newScrollWidth
      });
    } else {
      let newScrollWidth = document.getElementById('Projects-div').offsetWidth;
      this.setState({
        projectScrollDistance: newScrollWidth
      });
    }
    // WIDTH OF PROJECT THUMBNAIL
    let newWidth = document.getElementById('Projects-div').offsetWidth * 0.3125;
    if (matchMedia('screen and (max-width: 800px), (max-width: 100vh)').matches) {
      let newWidthMobile = document.getElementById('Projects-div').offsetWidth - 11;
      this.setState({
        projectWidth: newWidthMobile
      });
      console.log(newWidthMobile)
    } else {
      this.setState({
        projectWidth: newWidth
      });
    }
    // WIDTH OF DETAILS ELEMENT NEXT TO PROJECT THUMBNAIL
    document.body.style.setProperty('--details-width',
      document.getElementById('Projects-div').offsetWidth - newWidth - 90 + 'px');
    // PROJECT MARGINS
    document.body.style.setProperty('--project-margin',
      document.getElementById('Projects-div').offsetWidth / 125 + 'px');
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
    this.showHamburgerFor3s();
  }

  showHamburgerFor3s() {
    if (!this.state.menuVisibile) {
      clearTimeout(this.state.timeoutIDS.visibileHamburgerTimeoutID); // CLEARING PREVIOUS TIMEOUT TO PREVENT HIDING BURGER IN SHORTER TIME

      document.getElementById('Hamburger-ID').style.display = 'flex';
      document.getElementById('Hamburger-ID').style.animation = 'Fade-in-burger 0.5s ease forwards';

      /* WAIT 3s */
      let hamID = setTimeout(() => {
        document.getElementById('Hamburger-ID').style.animation = 'Fade-out-burger 0.5s ease forwards';

        /* WAIT ANOTHER 0.5s FOR ANIMATION DONE */
        setTimeout(() => {
          document.getElementById('Hamburger-ID').style.display = 'none';
        }, 500);
      }, 3000);

      this.setState({
        timeoutIDS: {
          visibileHamburgerTimeoutID: hamID
        }
      });
    }
  }

  render() {
    return (
      <div id="Almighty-div" style={{ width: 100 + '%', height: 100 + '%', position: 'relative' }}>
        <Hamburger onShowMenu={this.showMenu} menuVisibile={this.state.menuVisibile} />
        <Home />
        <Nav menuVisibile={this.state.menuVisibile} onHideMenu={this.hideMenu} />
        <About />
        <Portfolio projectScrollDistance={this.state.projectScrollDistance} projectWidth={this.state.projectWidth} onHideMenu={this.hideMenu} />
        <Contact />
      </div>)
  }
}

export default App;

class Hamburger extends React.Component {
  render() {
    return <div id="Hamburger-ID" onClick={this.props.onShowMenu} className="Hamburger" style={{
      display: this.props.menuVisibile ? 'none' : ''
    }}></div>
  }
}