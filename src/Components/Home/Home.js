import React from 'react';
import './Home.css';

class Home extends React.Component {
    scrollToPortfolio() {
        document.getElementById('Portfolio-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
            <div id="Home-item" className="All-home">
                <h1>Ahoj, jmenuji se <span>Robert Dominguez</span>.</h1>
                <h1 className="Second-h1">Níže se můžeš podívat na moji práci.</h1>
                <button onClick={this.scrollToPortfolio} className="Big-button">MOJE PRÁCE</button>
                <div className="Arrows-down">
                    <div className="Arrow-1"></div>
                    <div className="Arrow-2"></div>
                    <div className="Arrow-3"></div>
                    <div className="Arrow-4"></div>
                </div>
            </div>
        )
    }
}

export default Home;