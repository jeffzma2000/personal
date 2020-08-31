import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation(props) {
    return(
      <Navbar variant={props.bg} expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Portfolio</Nav.Link>
            {/* <Nav.Link href="/articles">Blog</Nav.Link> */}
            <Nav.Link href="JeffreyMa_Resume.pdf" download>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  
    )
  };

  export default Navigation;