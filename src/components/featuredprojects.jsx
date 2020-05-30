import React, { Component } from 'react';
import ProjectOverview from './projectoverview';
import {engineering, software} from './projectsDB';
import engineering_img from '../images/engineering/Li-Fi Communication.jpg';
import software_img from '../images/software/Stat Tracker.jpg';


class FeaturedProjects extends Component {
    state = { 
        width: 100,
        projects : []
     }
    componentDidUpdate(){
        //filter the two most recent engineering
        // and software projects from
        //the array of projects 
        if(this.state.projects.length === 0){
            if(this.props.projects.length > 0){
                var featuredProjects = []
                var software = this.props.projects.filter(project => project.projectType === 'software');
                var engineering = this.props.projects.filter(project => project.projectType === 'engineering');

                engineering = engineering.sort(function(a,b){
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(b.date) - new Date(a.date);
                  });
                software = software.sort(function(a,b){
                    return new Date(b.date) - new Date(a.date);
                  });

                  featuredProjects.push(software[0], engineering[0]);
                  
                console.log(featuredProjects);
                 this.setState({projects: featuredProjects});

            }
         }
    }
    render() { 
        var featuredProjects = this.state.projects;
        if(featuredProjects.length === 0){
            return(
                <div>
                    <h1>loading</h1>
                </div>
            );
        }
        else{

        
        return ( 
        <div className="container mb-5">
            <div className="jumbotron">
                <h1>Featured Projects</h1>
                    <br></br>
                    <div className="row mt-2">
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center mb-4">
                                <ProjectOverview 
                                    title={featuredProjects[0].projectName}
                                    quote={'"'+featuredProjects[0].quote+'"'}
                                    image={featuredProjects[0].imageLink1}
                                    project_id={featuredProjects[0].id}
                                    type={featuredProjects[0].projectType}
                                
                                ></ProjectOverview>
                            </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center mb-4">
                                <ProjectOverview 
                                     title={featuredProjects[1].projectName}
                                     quote={'"'+featuredProjects[1].quote+'"'}
                                     image={featuredProjects[1].imageLink1}
                                     project_id={featuredProjects[1].id}
                                     type={featuredProjects[1].projectType}
                                
                                ></ProjectOverview>
                            </div>
                    </div>

                
            </div>
        </div> );
        } 
    }
}
 
export default FeaturedProjects;