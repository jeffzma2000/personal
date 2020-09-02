import React from 'react'
import Navigation from './navigation.js'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typist from 'react-typist'

const projects = [
    {
        title: "dcyphr",
        description: "Founded tartup to make academic research more accessible by creating distillations of research papers powered by a crowdsourced platform and human-in-the-loop AI solutions.",
        skills: "Flask, Bootstrap, SQL, Javascript, NLP, Docker",
        link: "https://www.dcyphr.org/",
        icon: "/S4_Research.png"
    },
    {
        title: "timeboxer",
        description: "A productivity app built in ReactJS and Flask that implements what Harvard researchers found to be the best tool for time management and productivity.",
        link: "https://github.com/jeffzma2000/productivity-app",
        icon: "/timebox.png",
        skills: "ReactJS, Flask, SQL"
    },
    {
        title: "stonks",
        description: "Visualization and inferencing of option prices based on sentiment analysis of r/wallstreetbets.",
        link: "https://github.com/jeffzma2000/wsb-sentiment-analysis",
        icon: "/tsla.png",
        skills: "Python, NLP"
    },
    {
        title: "photography",
        description: "Photography portfolio.",
        link: "https://jeffma.myportfolio.com/work",
        icon: "/looking.jpg"
    },
]

class Project extends React.Component {

    render(){
        return(
            <Container id="container">
                <Row lg={1}>
                    <Col>
                        <img id="img" src={this.props.icon} alt="project"/>
                        <div className='title text-center'>
                            <h3>
                                {this.props.title}
                            </h3>
                            <div>
                                {this.props.description}
                            </div><br/>
                            <Button href={this.props.link} target="_blank" variant="outline-light" className='mb-3'>
                                <div>VISIT</div>
                            </Button>
                            <div >{this.props.skills}</div>
                        </div>
                    </Col>
                </Row>
                <div class="overlay"></div>
            </Container>
            )
    }
}

class Projects extends React.Component {
    render() {
        return(
            <div>
                <Navigation bg="light"/>
                <Container>
                    <Typist
                    startDelay={100}
                    className="heading mt-5 lato"
                    onTypingDone={()=>this.setState({renderMsg: true})}
                    >
                        Check out some projects I've done
                    </Typist>
                    <Row lg={2} xs={1}>
                        {
                            projects.map((project) =>
                            <Col>
                                <Project icon={project.icon} link={project.link} title={project.title} description={project.description} skills={project.skills}/>
                            </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Projects;