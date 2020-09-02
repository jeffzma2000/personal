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
            <div className="lato">
                <div className="landing">
                    <picture className="picture">
                        <source srcset="background.webp" type="image/webp" className="cover"/>
                        <source srcset="background.jp2" type="image/jp2" className="cover"/>
                        <img src='home.png' className="cover"/>
                    </picture>
                
                    <Navigation bg="dark"/>

                    <div id="home">
                        <Typist
                        startDelay={500}
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
                                    Welcome to my interactive resume!
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
                    <blockquote>“If you never did you should. These things are fun and fun is good.” – Dr. Seuss</blockquote>
                    <div className="row">
                    <article className="w-25"></article>
                    <article className="w-50">
                        <div className="content py-2">About me</div>
                        I am pursuing a B.S. in computer science and mathematics at Yale University. 
                        I enjoy collaboratively building solutions that apply cutting-edge technologies and that humans love to use.
                        I am experienced in full-stack web development and Python scripting. I strive to be constantly learning and hope to surround myself
                        with self-starters that also love learning.
                    </article>
                    <article className="w-25"></article>
                    </div>
                    <LazyLoad>
                    <img src="jmlogo.png" className="pr-2" alt="mylogo"/><br/>
                    </LazyLoad>
                    <div className="pb-5">
                    <SocialIcon url="https://github.com/jeffzma2000" style={{ height: 25, width: 25 }} target="_blank"/> &nbsp;
                    <SocialIcon url="https://linkedin.com/in/jeffzma2000" style={{ height: 25, width: 25 }} /> &nbsp;
                    <SocialIcon url="https://medium.com/@jeffreyma" style={{ height: 25, width: 25 }} /> &nbsp;
                    </div>
                </div>
                <div id="section3" className="section">
                    <div className="container text-white">
                        <div className="heading sectionHeader">Education</div>
                        <div className="row p-5">
                            <div className="text-left col-sm-3 pb-3">
                                <strong>Yale University</strong> <br/>
                                September 2018 - May 2022
                            </div>
                            <div className="text-left col-sm-7 ml-5 border-left">
                                <strong>B.S. Computer Science and Mathematics</strong><br/>
                                Relevant coursework includes data structures, abstract algenbra, linear algebra, analysis, discrete mathematics, theory of statistics, and probability theory.
                            </div>
                            <div className="col-sm"></div>
                        </div>
                        <div className="row p-5">
                            <div className="text-left col-sm-3 pb-3">
                                <strong>Currently self-learning</strong> <br/>
                                Present
                            </div>
                            <div className="text-left col-sm-7 ml-5 border-left">
                                <strong>Various programming languages and frameworks</strong><br/>
                                React, Haskell, and Swift <br /> <br />
                                <strong>Natural language processing</strong><br />
                                Abstractive summarization, text simplification, word embeddings.<br /> <br />
                                <strong>Quantitative Trading</strong>< br/>
                                Currently taking Akuna Capital course in quantitative trading.
                            </div>
                            <div className="col-sm"></div>
                        </div>
                    </div>
                </div>
                <div id="section4" className="section">
                    <div className="container">
                        <div className="heading sectionHeader">Professional Experiences</div>
                        <div className="row p-5">
                            <div className="text-left col-sm-3 pb-3">
                                <strong>dcyphr</strong> <br/>
                                November 2019 - Present
                            </div>
                            <div className="text-left col-sm-7 ml-5 border-left">
                                <strong>Founder, CEO, CTO</strong><br/>
                                Founded startup to make academic research more accessible by creating distillations of research papers powered by a crowdsourced platform and human-in-the-loop AI solutions.
                                <br /><br />
                                Built a web application in Flask that allows users to engage with, request, and share distillations of research papers. 
                                <br /><br />
                                Partnered with various research institutions, startups, and nonprofits across the world. 
                                <br /><br />
                                Currently training NLP models and pipeline for automatic distillations, improving user experience on the website, and growing dcyphr through campus marketing and partnerships. 
                            </div>
                            <div className="col-sm"></div>
                        </div>
                        <div className="row p-5">
                            <div className="text-left col-sm-3 pb-3">
                                <strong>Cognitive &#x26; Neural Computation Lab at Yale</strong> <br/>
                                September 2019 - Present
                            </div>
                            <div className="text-left col-sm-7 ml-5 border-left">
                                <strong>Research Assistant</strong><br/>
                                Exploring how epimorphic beliefs integrate monomorphic Newtonian beliefs to build models for intuitive physics.
                                <br /><br />
                                Generated artificial worlds using Pybullet and Blender to create stimuli dataset for behavioral studies by writing Python and shell scripts.
                                <br /><br />
                                Modeled data from behavioral experiments with generative models using Julia.
                            </div>
                            <div className="col-sm"></div>
                        </div>
                        <div className="row p-5">
                            <div className="text-left col-sm-3 pb-3">
                                <strong>Regeneron Pharmaceuticals</strong> <br/>
                                May 2017 - September 2018
                            </div>
                            <div className="text-left col-sm-7 ml-5 border-left">
                                <strong>Research Assistant</strong><br/>
                                Designed and executed research experiments including: <br/> <br />
                                <ol>
                                <li>Transforming astrocytes into neurons with a viral vector. (2018)</li>
                                <li>
                                Demonstrate functional protection of hypercholesterolemia through an LDLR variant. (2017) </li>
                                <li>Discover protein-protein interactions between a novel mutation of a protein involved with depression to infer protein behavior. (2016)</li>
                                
                                </ol>
                                Developed skills in experimental design, scientific communication, PCR, Western blot, Northern blot,
                                co-immunoprecipitation, and immunohistochemistry.
                            </div>
                            <div className="col-sm"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home;
