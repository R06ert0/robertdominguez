import React from 'react';
import './About.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textOrSkill: true
        }

        this.toggleTextOrSkill = this.toggleTextOrSkill.bind(this);
    }

    toggleTextOrSkill() {
        this.setState(prevState => ({
            textOrSkill: !prevState.textOrSkill
        }));
    }

    render() {
        return (
            <div className="All-about">
                <h1>O MNĚ</h1>
                <div className="Blue-rectangle">
                    <Circle onClick={this.toggleTextOrSkill} textOrSkill={this.state.textOrSkill} />
                    <Content textOrSkill={this.state.textOrSkill} />
                </div>
            </div>
        )
    }
}

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: {}
        }
    }

    flipCircle(e) {
        this.setState({
            animation: {
                animationName: 'FlipIt',
                animationDuration: 1 + 's',
                animationTimingFunction: 'ease'
            }
        });
        setTimeout(() => {
            this.setState({
                animation: {}
            });
        }, 1000);
        setTimeout(() => {
            this.props.onClick();
        }, 250);
    }

    render() {
        return <div onClick={this.flipCircle.bind(this)} id="Circle" style={this.state.animation} className={this.props.textOrSkill ? 'Circle-text' : 'Circle-skills'}></div>
    }
}

class Content extends React.Component {
    toggleContent() {
        const contentText = (
            <div style={{fontWeight: 700, width: 80 + '%', height: 80 + '%', margin: 'auto auto auto 190px'}}>
                <p>Jsem začínající programátor. Baví mě jak kód, tak design.
                    Naplňuje mě vidět, jak se z ničeho tvoří něco, co ještě k tomu dává smysl a dobře to vypadá.<br></br>
                    Zaměřuji se na webové stránky a webové aplikace.
                    Časem chci hlouběji proniknout zejména do oblasti animací, konkrétně do Tree.js v kombinaci s React.js.</p>
            </div>
        )

        const contentSkills = (
            <div>
                {/* Make this done */}
            </div>
        )

        let chosenContent = this.props.textOrSkill ? contentText : contentSkills;
        return chosenContent;
    }


    render() {
        return (
            <div>
                {this.toggleContent()}
            </div>
        )
    }
}

export default About;