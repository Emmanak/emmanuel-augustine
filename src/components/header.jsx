import React, { Component } from 'react';
import videofile from '../images/video.mp4';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';


class HeaderVideo extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <div id="navbar" className="container-fluid">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">E.M.A.</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#aboutme">About Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
            </Navbar>
            </div>

            <div className="headerSection d-flex justify-content-center">
                <h1 className="headerName d-flex justify-content-center">Emmanuel Augustine</h1>
                <div className="video-container d-flex justify-content-center">
                    <video autoPlay loop autobuffer muted playsinline>
                        <source src={videofile} type="video/mp4"></source>
                    </video>
                </div>
                
                </div>
                <div>
            </div >
            
            </React.Fragment> 
         );
    }
}
 
export default HeaderVideo;