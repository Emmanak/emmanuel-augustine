import React, { Component } from 'react';
import OtherProjects from './otherprojects';
import HeaderVideo from './header'
import AboutMe from './aboutme';
import FeaturedProjects from './featuredprojects';
import {db} from '../fbconfig.js';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

const header_key = uuid();
const about_key = uuid();
const featured_key = uuid();
const other_key = uuid();


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
                <TransitionGroup>
                <CSSTransition
                in={true}
                appear={true}
                key={header_key}
                timeout={3000}
                classNames="header">
                <HeaderVideo key={header_key}></HeaderVideo>
                </CSSTransition>

                <CSSTransition
                in={true}
                appear={true}
                key={about_key}
                timeout={2000}
                classNames="fade">
                <AboutMe key={about_key}></AboutMe>
                </CSSTransition>

                <div id="featuredProjects" className="container">
                
                <FeaturedProjects key={featured_key} projects={this.state.projects}>
                </FeaturedProjects>
                
                </div>

                <div id="otherProjects"  className="container">
                
                <OtherProjects key={other_key} projects={this.state.projects}>
                </OtherProjects>
                
                </div>

                </TransitionGroup>
                
                
            </React.Fragment>
         );
    }
}
 
export default Home;