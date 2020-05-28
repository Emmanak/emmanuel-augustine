import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="navbar" className="container-fluid">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/#aboutme" onSelect={console.log(true)}>About Me</Nav.Link>
                <Nav.Link href="/#projects">Projects</Nav.Link>
                <Nav.Link href="https://github.com/Emmanak">GitHub</Nav.Link>
                </Nav>
            </Navbar>
            </div>
         );
    }
}
 
export default NavigationBar;