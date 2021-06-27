import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    thumbnail: 'onlinecourses',
                    name: 'Online kurzy',
                    technologies: ['HTML', 'CSS', 'TypeScript', 'Angular', 'NestJS', 'PostgreSQL'],
                    description: 'Toto je můj první “větší” projekt. Smysl stránek je pomoci starším lidem s technikou, tj. orientovat se v aplikacích a operačních systémech.',
                    link: '/online-courses/'
                },
                {
                    thumbnail: 'farmersbrothers',
                    name: 'FarmersBrothers',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
                    description: 'Tento projekt jsem pomáhal vytvářet pro dva podnikavé kluky z Benešova. Stránky slouží jako online vizitka a kalkulačka pro jejich zákazníky.',
                    link: 'http://farmersbrothers.cz/'
                },
                {
                    thumbnail: '',
                    name: '',
                    technologies: ['HTML', 'CSS'],
                    description: '',
                    link: ''
                }
            ]
        }
    }

    render() {
        return (
            <div className="All-portfolio">
                <div className="Stretcher">
                    <h1>PORTFOLIO</h1>
                    <div className="Projects-div">
                        <div className="Arrow-left"></div>
                        <div className="Arrow-right"></div>
                        {this.state.projects.map(project => {
                            return <Project key={project.name} thumbnail={project.thumbnail} name={project.name} technologies={project.technologies}
                            description={project.description} link={project.link} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.toggleDetailVisibility = this.toggleDetailVisibility.bind(this);
    }
    toggleDetailVisibility() {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    technologiesImageConvertor() { 
        let technologies = [];
        this.props.technologies.map(technologie => {

            return technologies.push(
                <div className={'Technology-' + technologie} key={this.props.name + '_' + technologie} style={{
                    width: 50 + 'px',
                    height: 50 + 'px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    marginRight: 15 + 'px'
                }}></div>);
        })
        return technologies;
    }

    render() {
        return (
            <div className="All-project" style={{position: this.state.visible ? 'absolute' : 'relative',
            zIndex: this.state.visible ? '1' : ''}}>
                <div onClick={this.toggleDetailVisibility} style={{width: 550 + 'px', height: 100 + '%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain', backgroundColor: 'var(--my-black)', minWidth: 550 + 'px', cursor: 'pointer'}}
                className={'Thumbnail-' + this.props.thumbnail}></div>
                <div className="Details" style={{display: this.state.visible ? 'flex' : 'none'}}>
                    <div style={{display: 'flex'}}>
                        <p style={{ fontWeight: 900, marginRight: 30 + 'px', alignSelf: 'center' }}>TECHNOLOGIE:</p>
                        {this.technologiesImageConvertor()}
                    </div>
                    <p style={{ fontWeight: 700 }}><span style={{ fontWeight: 900 }}>POPIS:</span>&#160;{this.props.description}</p>
                    <div style={{display: 'flex'}}>
                        <p style={{ fontWeight: 900 }}>ODKAZ: </p>
                        <a target="blank" style={{ fontWeight: 700, fontSize: 35 + 'px', textDecoration: 'none'}}
                        href={this.props.link}>&#160;{this.props.link}</a>
                    </div>
                    <div onClick={this.toggleDetailVisibility} className="X"></div>
                </div>
            </div>
        )
    }
}