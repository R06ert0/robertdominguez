import React from 'react';
import './About.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textOrSkill: true,
            skillSet: [
                { name: 'HTML', percentage: 80 },
                { name: 'CSS', percentage: 80 },
                { name: 'JavaScript', percentage: 50 },
                { name: 'TypeScript', percentage: 35 },
                { name: 'Angular', percentage: 25 },
                { name: 'ReactJS', percentage: 25 },
                { name: 'NestJS', percentage: 20 },
                { name: 'Git', percentage: 25 },
                { name: 'Figma', percentage: 50 },
                { name: 'Blender', percentage: 25 }
            ]
        }

        this.toggleTextOrSkill = this.toggleTextOrSkill.bind(this);
    }

    toggleTextOrSkill() {
        this.setState(prevState => ({
            textOrSkill: !prevState.textOrSkill
        }));
    }

    scrollUp() {
        let scrollAmount = 0;
        let moveID = setInterval(() => {
            document.getElementById('Biggest-content-div').scrollTop -= 5;
            scrollAmount += 5;
            console.log(moveID);
            if (scrollAmount >= 435) {
                clearInterval(moveID);
            }
        }, 1);
    }

    scrollDown() {
        let scrollAmount = 0;
        let moveID = setInterval(() => {
            document.getElementById('Biggest-content-div').scrollTop += 5;
            scrollAmount += 5;
            console.log(moveID);
            if (scrollAmount >= 435) {
                clearInterval(moveID);
            }
        }, 1);
    }

    render() {
        return (
            <div id="About-item" className="All-about">
                <div className='Stretcher'>
                    <h1>O MNĚ</h1>
                    <div className="Blue-rectangle">
                        <div onClick={this.scrollUp} className="Arrow-up" style={{ display: this.state.textOrSkill ? 'none' : 'block' }}></div>
                        <Circle onClick={this.toggleTextOrSkill} textOrSkill={this.state.textOrSkill} />
                        <Content skillSet={this.state.skillSet} textOrSkill={this.state.textOrSkill} />
                        <div onClick={this.scrollDown} className="Arrow-down" style={{ display: this.state.textOrSkill ? 'none' : 'block' }}></div>
                    </div>
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
        }, 500);
    }

    render() {
        return <div onClick={this.flipCircle.bind(this)} id="Circle" style={this.state.animation} className={this.props.textOrSkill ? 'Circle-text' : 'Circle-skills'}></div>
    }
}

class Content extends React.Component {
    toggleContent() {
        const contentText = (
            <div className="Content-text">
                <p>Jsem začínající programátor. Baví mě jak kód, tak design.
                    Naplňuje mě vidět, jak se z ničeho tvoří něco, co ještě k tomu dává smysl a dobře to vypadá.<br></br>
                    Zaměřuji se na webové stránky a webové aplikace.
                    Časem chci hlouběji proniknout zejména do oblasti animací, konkrétně do Tree.js v kombinaci s React.js.</p>
            </div>
        )


        const contentSkills = (
            <div className="Content-skills">
                {this.props.skillSet.map(skill => {
                    return <Skill key={skill.name} name={skill.name} percentage={skill.percentage} />
                })}
            </div>
        )

        let chosenContent = this.props.textOrSkill ? contentText : contentSkills;
        return chosenContent;
    }


    render() {
        return (
            <div id="Biggest-content-div">
                {this.toggleContent()}
            </div>
        )
    }
}

class Skill extends React.Component {
    render() {
        return (
            <div className="Skill">
                <p>{this.props.name}</p>
                <div className="Skill-bar">
                    <div className="Skill-inner-bar" style={{ width: this.props.percentage + '%', animationDuration: (this.props.percentage / 75) + 's' }}></div>
                </div>
            </div>
        )
    }
}

export default About;