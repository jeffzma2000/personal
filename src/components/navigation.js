import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation(props) {
    return(
      <Navbar variant={props.bg} expand="lg">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Portfolio</Nav.Link>
          <Nav.Link href="/articles">Blog</Nav.Link>
          <Nav.Link href="Resume_A.pdf" download>Resume</Nav.Link>
        </Nav>
      </Navbar>
  
    )
  };

  export default Navigation;