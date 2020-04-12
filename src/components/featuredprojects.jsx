import React, { Component } from 'react';
import ProjectOverview from './projectoverview';
import {engineering, software} from './projectsDB';
import engineering_img from '../images/engineering/Li-Fi Communication.jpg';
import software_img from '../images/software/Stat Tracker.jpg';


class FeaturedProjects extends Component {
    state = { width: 100 }
    render() { 
        return ( 
        <div className="container mb-5">
            <div className="jumbotron">
                <h1>Featured Projects</h1>
                    <br></br>
                    <div className="row mt-2">
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center mb-4">
                                <ProjectOverview 
                                    title={software[0].title}
                                    quote={'"'+software[0].quote+'"'}
                                    image={software_img}
                                    video="https://www.youtube.com/embed/hnCmSXCZEpU"
                                    videoTitle={software[0].video}
                                    bodyText={software[0].body}
                                    project_id={software[0].id}
                                    type={software[0].type}
                                
                                ></ProjectOverview>
                            </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center mb-4">
                                <ProjectOverview 
                                    title={engineering[0].title}
                                    quote={'"'+engineering[0].quote+'"'}
                                    image={engineering_img}
                                    video="https://www.youtube.com/embed/hnCmSXCZEpU"
                                    videoTitle={engineering[0].videoTitle}
                                    bodyText={engineering[0].body}
                                    project_id={engineering[0].id}
                                    type={engineering[0].type}
                                
                                ></ProjectOverview>
                            </div>
                    </div>

                
            </div>
        </div> );
    }
}
 
export default FeaturedProjects;