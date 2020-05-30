import React from 'react'
import Typist from 'react-typist'
import Navigation from './navigation.js'
import {SocialIcon} from 'react-social-icons'
import {BsChevronDoubleDown} from 'react-icons/bs'
import { Link } from "react-scroll";
import LazyLoad from "react-lazyload";


class Home extends React.Component {
    state = {
        renderMsg: false,
        renderMsg2: false,
    }

    render(){
        return(
            <div id="homepage">
            <div id="background">
                <Navigation bg="dark"/>
                <div id="home">
                    <Typist
                    startDelay={1000}
                    className="heading"
                    onTypingDone={()=>this.setState({renderMsg: true})}
                    cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0}}>
                        Hi, I'm Jeffrey
                    </Typist>
                    <div className="content pb-5">
                        {this.state.renderMsg ? (
                            <Typist
                            startDelay={500}
                            className="content"
                            onTypingDone={()=>this.setState({renderMsg2: true})}>
                                Welcome to my website!
                            </Typist>
                        ) : null}
                    </div>
                    
                    {this.state.renderMsg2 ? (
                        <div className="downlink ">
                        <Link to="section2" spy={true} smooth={true} className="pt-5 mt-5 text-white"><BsChevronDoubleDown size="5vh"/></Link>
                        </div>
                    ) : null}
                    
                </div>
            </div>
                <div id="section2" className="container section">
                    <div className="heading sectionHeader">Profile</div>
                    <blockquote>“If you never did you should. These things are fun and fun is good.” <br/>– Dr. Seuss</blockquote>
                    <div className="row">
                    <article className="w-25"></article>
                    <article className="w-50">
                        <div className="content py-2">About me</div>
                        I am pursuing a B.S. in computer science and mathematics at Yale University. 
                        I enjoy creative problem-solving in both my academic pursuits and my extracurricular activities.
                        I am experienced in full-stack web development and Python scripting. 
                    </article>
                    <article className="w-25"></article>
                    </div>
                    <LazyLoad>
                    <img src="jmlogo.png" className="pr-2" alt="mylogo"/><br/>
                    </LazyLoad>
                    <SocialIcon url="https://instagram.com/j.eff.rey" style={{ height: 25, width: 25 }} target="_blank"/> &nbsp;
                    <SocialIcon url="https://linkedin.com/in/jeffzma2000" style={{ height: 25, width: 25 }} /> &nbsp;
                    <SocialIcon url="https://medium.com/@jeffreyma" style={{ height: 25, width: 25 }} /> &nbsp;
                    
                </div>
                <div id="section3" className="section">
                    <div className="container text-white">
                        <div className="heading sectionHeader">Education</div>
                        <div className="row p-5">
                            <div className="text-left col-3">
                                <strong>Yale University</strong> <br/>
                                September 2018 - May 2022
                            </div>
                            <div className="text-left col-7 ml-5 border-left">
                                <strong>B.S. Computer Science and Mathematics</strong><br/>
                                Relevant coursework includes data structures, systems programming, algorithms, linear algebra, analysis, discrete mathematics, theory of statistics, and probability theory.
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row p-5">
                            <div className="text-left col-3">
                                <strong>Currently self-learning</strong> <br/>
                                Present
                            </div>
                            <div className="text-left col-7 ml-5 border-left">
                                <strong>Various programming languages and frameworks</strong><br/>
                                React, Haskell, and Swift
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                <div id="section4" className="section">
                    <div className="container">
                        <div className="heading sectionHeader">Professional Experiences</div>
                        <div className="row p-5">
                            <div className="text-left col-3">
                                <strong>dcyphr</strong> <br/>
                                November 2019 - Present
                            </div>
                            <div className="text-left col-7 ml-5 border-left">
                                <strong>Founder, CEO, CTO</strong><br/>
                                Founded a startup to make scientific literature more readable and accessible. Built a web application in Flask that 
                                allows users to browse, request, and upload summaries of scientific articles. Partnered with students and scientists across
                                the world to integrate dcyphr into their workflows. Currently manage a team of 20 employees to generate meaningful content,
                                develop new features for the web application, and expand dcyphr through strategic marketing and partnerships. Currently accepting
                                SAFE investments and grants.
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row p-5">
                            <div className="text-left col-3">
                                <strong>Cognitive &#x26; Neural Computation Lab at Yale</strong> <br/>
                                September 2019 - Present
                            </div>
                            <div className="text-left col-7 ml-5 border-left">
                                <strong>Computer Programmer</strong><br/>
                                Scripted and rendered physical scenes using Python and blender. Generated scenes were used for
                                behavioral studies and modeling human event perception. Worked in Julia to model event perception and
                                program neural networks.
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row p-5">
                            <div className="text-left col-3">
                                <strong>Regeneron Pharmaceuticals</strong> <br/>
                                May 2017 - September 2018
                            </div>
                            <div className="text-left col-7 ml-5 border-left">
                                <strong>Research assistant</strong><br/>
                                Designed and executed research experiments including: <br/> &nbsp;&nbsp;1. &nbsp;Attempt to transform astrocytes into neurons with 
                                a viral vector. (2018) <br/>&nbsp;&nbsp;2. &nbsp;Demonstrate functional protection of hypercholesterolemia through an LDLR variant. (2017)
                                <br/>&nbsp;&nbsp;3. &nbsp;Discover protein-protein interactions between a novel mutation of a protein involved with depression to infer protein behavior. (2016)<br/><br/>
                                Developed skills in experimental design, scientific communication, PCR, Western blot, Northern blot,
                                co-immunoprecipitation, and immunohistochemistry.
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                <div id="section5" className="section">
                    <div className="container">
                        <div className="heading sectionHeader pb-5">What I'm currently reading</div>
                        <a href="https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060839872/ref=sr_1_2?crid=1VWW84HV1AQWC&dchild=1&keywords=zen+and+the+art+of+motorcycle+maintenance&qid=1590765800&sprefix=zen+and+the+ar%2Caps%2C180&sr=8-2">
                            <LazyLoad>
                            <img src="/book.jpg" className="pb-4" alt="book"/>
                            </LazyLoad>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;
