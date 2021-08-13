import React from 'react';
import './Home.css';

class Home extends React.Component {
    scrollToPortfolio() {
        document.getElementById('Portfolio-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
            <div id="Home-item" className="All-home">
                <h1>Ahoj &#128075;, jmenuji se</h1>
                <br></br>
                <h1 className='H1-my-name'>Robert Dominguez</h1>
                <br></br>
                <h1>a jsem začínající softwarový vývojář.</h1>
                <h1 className="Second-h1">Níže se můžeš podívat na moje portfolio.</h1>
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