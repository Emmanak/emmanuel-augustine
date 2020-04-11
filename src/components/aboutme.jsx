import React, { Component } from 'react';

class AboutMe extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div id="aboutme" className="container">
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
                                subject of a problem doesn't matter to me. 
                                As long as there is a potential technical solution,
                                I'm hooked.</p>
                        
                                <p>I graduated with a Bachelor's in Electrical
                                Engineering. I chose this degree because it 
                                introduced me to broad range of technologies.
                                Although, I haven't reached my goal,
                                I am currently pursuing to become a versitile engineer
                                capable of adapting to any technical challenge.</p>

                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-5 mt-2">
                           <img id="aboutMePic"src="https://picsum.photos/250"></img>
                    </div>
                    

                </div>
                
            </div>
            
            </React.Fragment>
         );
    }
}
 
export default AboutMe;