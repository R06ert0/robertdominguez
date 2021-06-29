import React from 'react';
import './Nav.css';

class Nav extends React.Component {
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

    render() {
        return (
            <nav className="All-nav">
                <div className="Stretcher">
                    <div style={{display: 'flex', height: 100 + '%', width: 100 + '%', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <div onClick={this.scrollToHome} className="LOGO"></div>
                        <li onClick={this.scrollTo}>DOMŮ</li>
                        <li onClick={this.scrollTo}>O MNĚ</li>
                        <li onClick={this.scrollTo}>PORTFOLIO</li>
                        <li onClick={this.scrollTo}>KONTAKT</li>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;