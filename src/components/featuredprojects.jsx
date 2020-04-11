import React, { Component } from 'react';
import ProjectOverview from './projectoverview';


class FeaturedProjects extends Component {
    state = { width: 100 }
    render() { 
        return ( 
        <div className="container mb-5">
            <div className="jumbotron">
                <h1>Featured Projects</h1>
                
                    <div className="row">
                        <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <ProjectOverview
                                    type="software" 
                                    title="Stat Tracker"
                                    qoute='"...collect real-time stats across multiple users."'
                                    image="https://picsum.photos/400"
                                    video="https://www.youtube.com/embed/hnCmSXCZEpU"
                                    videoTitle="About my time with Bibles for America"
                                    bodyText="During my time volunteering with bibles for 
                                    America (add to resume), I realized there was a need to 
                                    efficiently collect stats. Bibles for America is a non 
                                    profit organization that distributes bible and other 
                                    publications for free. Their only requirement is that the 
                                    number of material being distributed must be accurately 
                                    accounted for. I needed “a way to collect real-time stats 
                                    across multiple users”. I looked for smartphone apps on 
                                    ios and android that would do this, but none met the 
                                    requirements. Instead I made my own app."
                                    date=""
                                
                                ></ProjectOverview>
                            </div>
                        <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <ProjectOverview 
                                    title="Stat Tracker"
                                    qoute='"...collect real-time stats across multiple users."'
                                    image="https://picsum.photos/500"
                                    video="https://www.youtube.com/embed/hnCmSXCZEpU"
                                    videoTitle="About my time with Bibles for America"
                                    bodyText="During my time volunteering with bibles for 
                                    America (add to resume), I realized there was a need to 
                                    efficiently collect stats. Bibles for America is a non 
                                    profit organization that distributes bible and other 
                                    publications for free. Their only requirement is that the 
                                    number of material being distributed must be accurately 
                                    accounted for. I needed “a way to collect real-time stats 
                                    across multiple users”. I looked for smartphone apps on 
                                    ios and android that would do this, but none met the 
                                    requirements. Instead I made my own app."
                                
                                ></ProjectOverview>
                            </div>
                    </div>

                
            </div>
        </div> );
    }
}
 
export default FeaturedProjects;