import React from 'react'
import Navigation from './navigation.js'

const projects = [
    {
        title: "dcyphr",
        description: "An open-edit platform to make scientific literature more accessible.",
        skills: "Python, HTML, SQL, Flask, Bootstrap, Javascript",
        link: "https://www.dcyphr.org/",
        icon: "/S4_Research.png"
    },
    {
        title: "photography",
        description: "Photos that I have taken.",
        link: "https://jeffma.myportfolio.com/work",
        icon: "/looking.jpg"
    },
    {
        title: "this website",
        description: "Personal website.",
        link: "/",
        icon: "/landing.jpg",
        skills: "React"
    }
]

class Project extends React.Component {

    render(){
        return(
            <>
            <div id="container">
                <img id="img" src={this.props.icon}/>
                <p className="title">{this.props.title}<br/>
                <div className="small">{this.props.description}</div>
                </p>
                <div class="overlay"></div>
                <div class="button"><a href={this.props.link}> VISIT </a></div>
            </div>
            </>
            )
    }
}

class Projects extends React.Component {
    render() {
        return(
            <div>
                <Navigation bg="light"/>
                <div className="container">
                {
                    projects.map((project) =>
                    <Project icon={project.icon} link={project.link} title={project.title} description={project.description} skills={project.skills}/>
                    )
                }
                </div>
            </div>
        )
    }
};

export default Projects;