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
                { name: 'Angular', percentage: 25 },
                { name: 'ReactJS', percentage: 25 },
                { name: 'Git', percentage: 25 },
                { name: 'Figma', percentage: 50 },
                { name: 'NestJS', percentage: 20 },
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

    render() {
        return (
            <div className="All-about">
                <div className='stretcher'>
                    <h1>O MNĚ</h1>
                    <div className="Blue-rectangle">
                        <div className="Arrow-up" style={{display: this.state.textOrSkill ? 'none' : 'block'}}></div>
                        <Circle onClick={this.toggleTextOrSkill} textOrSkill={this.state.textOrSkill} />
                        <Content skillSet={this.state.skillSet} textOrSkill={this.state.textOrSkill} />
                        <div className="Arrow-down" style={{display: this.state.textOrSkill ? 'none' : 'block'}}></div>
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
            <div style={{ fontWeight: 700, width: 80 + '%', height: 80 + '%', margin: 'auto auto auto 190px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <p>Jsem začínající programátor. Baví mě jak kód, tak design.
                    Naplňuje mě vidět, jak se z ničeho tvoří něco, co ještě k tomu dává smysl a dobře to vypadá.<br></br>
                    Zaměřuji se na webové stránky a webové aplikace.
                    Časem chci hlouběji proniknout zejména do oblasti animací, konkrétně do Tree.js v kombinaci s React.js.</p>
            </div>
        )


        const contentSkills = (
            <div style={{ fontWeight: 900, width: 80 + '%', height: 100 + '%', margin: 'auto auto auto 190px' }}>
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
            <div style={{width:100 + '%', height: 87 + '%', overflowY: 'scroll', display: 'flex'}}>
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
                    <div className="Skill-inner-bar" style={{width: this.props.percentage + '%', animationDuration: (this.props.percentage / 50) + 's'}}></div>
                </div>
            </div>
        )
    }
}

export default About;