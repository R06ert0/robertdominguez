import React from 'react';
import './Home.css';

class Home extends React.Component {
    scrollToPortfolio() {
        document.getElementById('Portfolio-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
            <div id="Home-item" className="All-home">
                <h1>Ahoj, jmenuji se <span>Robert Dominguez</span>.<br></br>
                    Níže se můžeš podívat na moji práci.</h1>
                <button onClick={this.scrollToPortfolio} className="Big-button">MOJE PRÁCE</button>
            </div>
        )
    }
}

export default Home;