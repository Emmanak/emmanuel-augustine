import React, { Component } from 'react';
import OtherProjects from './otherprojects';
import HeaderVideo from './header'
import AboutMe from './aboutme';
import FeaturedProjects from './featuredprojects';
import {db} from '../fbconfig.js';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects: []
         };
      }
      
       componentDidMount(){
        var that = this;
        db.collection("fl_content").get().then(function(projects){
            that.setState({projects: projects.docs.map(doc => doc.data())});
        }).catch(error => console.log(error));

       }

    render() {
        return ( 
            <React.Fragment>
                <HeaderVideo></HeaderVideo>
                <AboutMe></AboutMe>
                <div id="featuredProjects" className="container">
                <FeaturedProjects projects={this.state.projects}>

                </FeaturedProjects>
                </div>

                <div id="otherProjects"  className="container">
                <OtherProjects projects={this.state.projects}>

                </OtherProjects>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Home;