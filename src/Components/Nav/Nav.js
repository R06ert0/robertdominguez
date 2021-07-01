import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            triggerAnimation: true
        }

        this.hideMenuProperly = this.hideMenuProperly.bind(this);
    }

    scrollTo(e) {
        switch (e.target.innerText) {
            case 'DOMŮ':
                document.getElementById('Home-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'O MNĚ':
                document.getElementById('About-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'PORTFOLIO':
                document.getElementById('Portfolio-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'KONTAKT':
                document.getElementById('Contact-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            default:
                break;
        }
    }

    scrollToHome() {
        document.getElementById('Home-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    hideMenuProperly() {
        this.setState({
            triggerAnimation: false
        })
        document.getElementById('All-nav-ID').style.animation = 'Hide-menu 1s ease forwards';

        setTimeout(() => {
            this.props.onHideMenu();
            this.setState({
                triggerAnimation: true
            })
        }, 900);

        setTimeout(() => {
            document.getElementById('All-nav-ID').style.display = 'none';
        }, 900);
    }

    render() {
        return (
            <nav id="All-nav-ID" className="All-nav" style={{
                display: this.props.menuVisibile ? 'block' : 'none',
                animation: this.props.menuVisibile ? 'Show-menu 1s ease forwards' : 'Hide-menu 1s ease forwards'
            }}>
                <div className="Stretcher">
                    <div className="Nav-items-div" style={{ display: 'flex', height: 100 + '%', width: 100 + '%', alignItems: 'center' }}>
                        <div onClick={this.scrollToHome} className="LOGO" style={{
                            animation: this.state.triggerAnimation ? 'Show-menu-logo 1s ease forwards' : 'Hide-menu-logo 1s ease forwards'
                        }}></div>
                        <li onClick={this.scrollTo}>DOMŮ</li>
                        <li onClick={this.scrollTo}>O MNĚ</li>
                        <li onClick={this.scrollTo}>PORTFOLIO</li>
                        <li onClick={this.scrollTo}>KONTAKT</li>
                        <div onClick={this.hideMenuProperly} className="Exit-item" style={{
                            animation: this.state.triggerAnimation ? 'Show-menu-logo 1s ease forwards' : 'Hide-menu-logo 1s ease forwards'
                        }}></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;