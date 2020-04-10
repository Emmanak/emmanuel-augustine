import React, { Component } from 'react';

class AboutMe extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="aboutme" className="container">
                <h1>
                    About Me:
                </h1>
                <p>
                    I live for technical challenges! The field or
                    subject of a problem doesn't matter to me. 
                    As long as there is a potential technical solution,
                    I'm hooked.
                </p>
                <p>
                    I graduated with a Bachelor's in Electrical
                    Engineering. I chose this degree because it 
                    introduced me to broad range of technologies.
                    Although, I haven't reached my goal,
                    I am currently pursuing to become a versitile engineer
                     capable of adapting to any technical challenge.
                </p>
            </div>
         );
    }
}
 
export default AboutMe;