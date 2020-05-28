import React, { Component } from 'react';
import aboutmepic from '../images/aboutme-pic.jpeg';

class AboutMe extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div id="aboutme" className="container globalFontColor">
                <div className="row mb-2">
                    <div className="col-12">

                    </div>
                <h1>
                    About Me
                    </h1>

                </div>

                <div className="row">
                
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center mt-4">

                    

                        <div className="container-fluid">

                            <div className="row">




                                <p>I live for technical challenges! The field or 
                                    subject of a problem doesn't matter to me. As 
                                    long as there is a potential technical 
                                    solution, I'm hooked.</p>
                        
                                <p>I graduated with a Bachelor's in Electrical 
                                    Engineering. I chose this degree because it 
                                    introduced me to a broad range of technologies. 
                                    Although I haven't reached my goal, I am currently 
                                    pursuing to become a versatile engineer capable 
                                    of adapting to any technical challenge.</p>

                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-6 col-sm-12 d-flex justify-content-center my-auto">
                           <img className="mb-5 mt-3" id="aboutMePic"src={aboutmepic} height="250" width="250" alt=""></img>
                    </div>
                    

                </div>
                
            </div>
            
            </React.Fragment>
         );
    }
}
 
export default AboutMe;