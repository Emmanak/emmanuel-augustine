import React, { Component } from 'react';
import OtherProjects from './otherprojects';
import HeaderVideo from './header'
import AboutMe from './aboutme';
import FeaturedProjects from './featuredprojects';



class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <HeaderVideo></HeaderVideo>
                <AboutMe></AboutMe>
                <div id="featuredProjects" className="container">
                <FeaturedProjects>

                </FeaturedProjects>
                </div>

                <div id="otherProjects" className="container">
                <OtherProjects>

                </OtherProjects>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Home;