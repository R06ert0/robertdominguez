import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <nav className="All-nav">
                <div className="LOGO"></div>
                <li>DOMŮ</li>
                <li>O MNĚ</li>
                <li>PORTFOLIO</li>
                <li>KONTAKT</li>
            </nav>
        )
    }
}

export default Nav;