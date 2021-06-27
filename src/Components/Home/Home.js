import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="All-home">
                <h1>Ahoj, jmenuji se <span>Robert Dominguez</span>.<br></br>
                    Níže se můžeš podívat na moji práci.</h1>
                <form action="/online-courses/">
                    <button type="submit" className="Big-button">MOJE PRÁCE</button>
                </form>
            </div>
        )
    }
}

export default Home;