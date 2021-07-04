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
                    thumbnail: 'test1',
                    name: 'Nazdar',
                    technologies: ['HTML', 'CSS'],
                    description: '',
                    link: ''
                },
                {
                    thumbnail: 'test2',
                    name: 'Ahoj',
                    technologies: ['HTML', 'JavaScript'],
                    description: '',
                    link: ''
                },
                {
                    thumbnail: 'test3',
                    name: 'Prosím',
                    technologies: ['HTML', 'ReactJS'],
                    description: '',
                    link: ''
                },
                {
                    thumbnail: 'test3',
                    name: 'Prosímvás',
                    technologies: ['HTML', 'ReactJS'],
                    description: '',
                    link: ''
                },
                {
                    thumbnail: 'test4',
                    name: 'Prosímvás4',
                    technologies: ['HTML', 'ReactJS'],
                    description: '',
                    link: ''
                },
                {
                    thumbnail: 'test5',
                    name: 'Prosímvás5',
                    technologies: ['HTML', 'ReactJS'],
                    description: '',
                    link: ''
                }
            ],
            allProjectsOff: true
        }

        this.toggleAllProjectsOff = this.toggleAllProjectsOff.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
    }

    toggleAllProjectsOff() {
        this.setState(prevState => ({
            allProjectsOff: !prevState.allProjectsOff
        }))
    }

    scrollLeft() {
        let distance = this.props.projectScrollDistance - this.props.projectWidth / 20;
        let scrollAmount = 0;
        let moveID = setInterval(() => {
            document.getElementById('Projects-div').scrollLeft -= 20;
            scrollAmount += 20;
            if (scrollAmount >= distance) {
                clearInterval(moveID);
            }
        }, 1);
    }

    scrollRight() {
        let distance = this.props.projectScrollDistance - this.props.projectWidth / 20;
        let scrollAmount = 0;
        let moveID = setInterval(() => {
            document.getElementById('Projects-div').scrollLeft += 20;
            scrollAmount += 20;
            if (scrollAmount >= distance) {
                clearInterval(moveID);
            }
        }, 1);
    }

    mesureDimension() {
        console.log(document.getElementById('Projects-div').offsetLeft);
        console.log(document.getElementById('Projects-div').offsetWidth);
        console.log(document.getElementById('Projects-div').scrollLeft);
        console.log(document.getElementById('Projects-div').scrollWidth);
    }

    render() {
        return (
            <div id="Portfolio-item" className="All-portfolio">
                <div className="Stretcher">
                    <h1 onClick={this.mesureDimension.bind(this)}>PORTFOLIO</h1>
                    <div className="Outer-projects-div">
                        <div onClick={this.scrollLeft} className="Arrow-left"></div>
                        <div onClick={this.scrollRight} className="Arrow-right"></div>
                        <div id="Projects-div">
                            {this.state.projects.map(project => {
                                return <Project key={project.name} allProjectsOff={this.state.allProjectsOff} onToggleOtherProjectsOff={this.toggleAllProjectsOff}
                                    thumbnail={project.thumbnail} name={project.name} technologies={project.technologies}
                                    description={project.description} link={project.link} projectWidth={this.props.projectWidth} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="Triangle"></div>
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
        this.goToLink = this.goToLink.bind(this);
    }
    toggleDetailVisibility() {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
        this.props.onToggleOtherProjectsOff();
    }

    technologiesImageConvertor() {
        let technologies = [];
        this.props.technologies.map(technologie => {

            return technologies.push(
                <div id={'Technology-' + technologie} className="Technology" key={this.props.name + '_' + technologie}></div>);
        })
        return technologies;
    }

    goToLink() {
        window.open(this.props.link);
    }

    render() {
        return (
            <div className="All-project" style={{
                position: this.state.visible ? 'absolute' : 'relative',
                display: this.props.allProjectsOff || this.state.visible ? 'flex' : 'none',
                zIndex: this.state.visible ? '1' : ''
            }}>
                <div onClick={this.state.visible ? this.goToLink : this.toggleDetailVisibility} style={{
                    width: 100 + '%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain', cursor: 'pointer', borderRadius: 3 + 'px'
                }}
                    id={'Thumbnail-' + this.props.thumbnail} className="Thumbnail"></div>
                <div className="Details" style={{ display: this.state.visible ? 'flex' : 'none' }}>
                    <div className="Technologies" style={{ display: 'flex' }}>
                        <p style={{ fontWeight: 900, marginRight: 30 + 'px', alignSelf: 'center' }}>TECHNOLOGIE:</p>
                        {this.technologiesImageConvertor()}
                    </div>
                    <p style={{ fontWeight: 700 }}><span style={{ fontWeight: 900 }}>POPIS:</span>&#160;{this.props.description}</p>
                    <div className="Link" style={{ display: 'flex' }}>
                        <p style={{ fontWeight: 900 }}>ODKAZ:&#160;</p>
                        <a target="blank" style={{ fontWeight: 700, textDecoration: 'none' }}
                            href={this.props.link}>{this.props.link}</a>
                    </div>
                    <div onClick={this.toggleDetailVisibility} className="X"></div>
                </div>
            </div>
        )
    }
}