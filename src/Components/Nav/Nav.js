import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.hideMenuProperly = this.hideMenuProperly.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
        this.scrollToHome = this.scrollToHome.bind(this);
    }

    scrollTo(e) {
        switch (e.target.innerText) {
            case 'DOMŮ':
                document.getElementById('Home-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (matchMedia('screen and (max-width: 800px), (max-width: 100vh)').matches) {
                    this.hideMenuProperly();
                }
                break;
            case 'O MNĚ':
                document.getElementById('About-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (matchMedia('screen and (max-width: 800px), (max-width: 100vh)').matches) {
                    this.hideMenuProperly();
                }
                break;
            case 'PORTFOLIO':
                document.getElementById('Portfolio-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (matchMedia('screen and (max-width: 800px), (max-width: 100vh)').matches) {
                    this.hideMenuProperly();
                }
                break;
            case 'KONTAKT':
                document.getElementById('Contact-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (matchMedia('screen and (max-width: 800px), (max-width: 100vh)').matches) {
                    this.hideMenuProperly();
                }
                break;
            default:
                break;
        }
    }

    scrollToHome() {
        document.getElementById('Home-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.hideMenuProperly();
    }

    hideMenuProperly() {
        this.props.onHideMenu();
    }

    render() {
        return (
            <nav id="All-nav-ID" className="All-nav" style={{
                animation: this.props.menuVisibile ? 'Show-menu 0.5s ease forwards' : 'Hide-menu 0.5s ease forwards',
                zIndex: 5
            }}>
                <div className="Stretcher">
                    <div className="Nav-items-div" style={{ display: 'flex', height: 100 + '%', width: 100 + '%', alignItems: 'center' }}>
                        <div id="LOGO-ID" onClick={this.scrollToHome} className="LOGO"></div>
                        <li onClick={this.scrollTo}>DOMŮ</li>
                        <li onClick={this.scrollTo}>O MNĚ</li>
                        <li onClick={this.scrollTo}>PORTFOLIO</li>
                        <li onClick={this.scrollTo}>KONTAKT</li>
                        <div id="Exit-ID" onClick={this.hideMenuProperly} className="Exit-item"></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;