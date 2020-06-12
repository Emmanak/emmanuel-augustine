import React, { Component } from 'react';
import { db } from '../fbconfig';
import ProjectOverview from './projectoverview';
import Design3d from './design3d';
import Photography from './photography';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

const photography_key = uuid();
const design_key = uuid();



class OtherProjects extends Component {
    state = { 
        tabselect: "design",
        projects: this.props.projects,
        engineering: false,
        software: false,
        design: true
     }

     componentDidUpdate(){
         if(this.state.projects !== this.props.projects){
            this.setState({projects: this.props.projects});
         }
        
     }

    render() {
        var engineeringProjects = this.state.projects.filter( project => project.projectType === 'engineering');
        var softwareProjects = this.state.projects.filter(project => project.projectType === 'software');

        

        if(this.state.tabselect === "engineering"){
            return ( 
                <React.Fragment>
                    <div id="projects" className="container globalFontColor">
                    <div className="row"></div>
                                    <div className="mt-5 mb-5">
                                    <h1>Other Projects</h1>
                                    </div>
                    </div>

                    <div className="tabSelector container">
                        
                    <button className="btn btn-outline-secondary col-lg-4 col-md-4 col-sm-12 col-xs-12" onClick={()=>this.tabselector("design")}>Design</button>
                    <button className="btn btn-outline-secondary col-lg-4 col-md-4 col-sm-12 col-xs-12" onClick={()=>this.tabselector("software")}>Software</button>
                    <button className="btn btn-secondary col-lg-4 col-md-4 col-sm-12 col-xs-12" onClick={()=>this.tabselector("engineering")}>Engineering</button>

                    <div id="engineering" className="mt-5 mb-5">
                        <TransitionGroup>
                        {engineeringProjects.map((project) => <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center mb-4"><CSSTransition in={this.state.engineering} appear={true} key={project.id} timeout={2000} classNames="card"><ProjectOverview key={project.id} title={project.projectName} quote={project.quote} 
                        bodyText={project.description1} type={project.projectType} project_id={"project-"+project.id} image={project.imageLink1}></ProjectOverview></CSSTransition></div></div>)}
                    </TransitionGroup>
                    </div>
                    </div>
                    
                </React.Fragment>
             );

            }
            else if(this.state.tabselect === "software"){
                return ( 
                    <React.Fragment>
                        <div id="projects" className="container globalFontColor">
                        <div className="row"></div>
                                    <div className="mt-5 mb-5">
                                    <h1>Other Projects</h1>
                                    </div>
                    </div>

                        <div className="tabSelector container">
                        <button className="btn btn-outline-secondary col-lg-4 col-md-4 col-sm-12 col-xs-12" onClick={()=>this.tabselector("design")}>Design</button>
                        <button className="btn btn-secondary col-lg-4 col-md-4 col-sm-12 col-xs-12" onClick={()=>this.tabselector("software")}>Software</button>
                        <button className="btn btn-outline-secondary col-lg-4 col-md-4 col-sm-12 col-xs-12" onClick={()=>this.tabselector("engineering")}>Engineering</button>
                        <div id="software" className="mt-5 mb-5">
                        <TransitionGroup>
                        {softwareProjects.map((project) => <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center mb-4"><CSSTransition in={this.state.software} appear={true} key={project.id} timeout={2000} classNames="card"><ProjectOverview key={project.id} title={project.projectName} quote={project.quote} 
                        bodyText={project.description1} type={project.projectType} project_id={"project-"+project.id} image={project.imageLink1}></ProjectOverview></CSSTransition></div></div>)}
                        </TransitionGroup>
                        </div>
                        </div>
                    </React.Fragment>
                 );
    
                }
                else if(this.state.tabselect === "design"){
                    return ( 
                        <React.Fragment>
                            
                            <div id="projects" className="container globalFontColor">
                            
                                <div className="row"></div>
                                    <div className="mt-5 mb-5">

                                    <h1>Other Projects</h1>
                                    </div>
                            </div>

                            <div className="tabSelector container">
                            <button className="btn btn-secondary col-lg-4 col-md-4 col-sm-12 col-xs-12" onClick={()=>this.tabselector("design")}>Design</button>
                            <button className="btn btn-outline-secondary col-lg-4 col-md-4 col-sm-12 col-xs-12" onClick={()=>this.tabselector("software")}>Software</button>
                            <button className="btn btn-outline-secondary col-lg-4 col-md-4 col-sm-12 col-xs-12" onClick={()=>this.tabselector("engineering")}>Engineering</button>
                            <div id="design" className="mt-5 mb-4">
                                
                                
                                <Design3d key={design_key}></Design3d>
                                
                                
                                <Photography key={photography_key}>
                                </Photography>
                               
                            </div>
                            </div>
                        </React.Fragment>
                     );
        
                    }

        
    }

    onSelect(e){
        console.log('OnSelect');
        // console.log(this.state.navExpanded);
        // this.setState({navExpanded: false});
    }


    tabselector = (tab) => {

        if(tab === "engineering"){
            this.setState({engineering: true});
        }
        else if(tab === "software"){
            this.setState({software: true});
        }
        else if(tab === "design"){
            this.setState({design: true});
        }
        this.setState({tabselect: tab});
    }

    getprojects = () => {

        var docRef = db.collection("project1");

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

}

 
export default OtherProjects;