import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { db } from '../fbconfig';
import {engineering, software} from './projectsDB';
import ProjectOverview from './projectoverview';
import Design3d from './design3d';
import Photography from './photography';

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const engineering_imgs = importAll(require.context('../images/engineering', false, /\.(png|jpe?g|svg|bmp)$/));
  const software_imgs = importAll(require.context('../images/software', false, /\.(png|jpe?g|svg|bmp)$/));



class OtherProjects extends Component {
    state = { 
        tabselect: "design",
        projects: []
     }
    render() {

        if(this.state.tabselect === "engineering"){
            return ( 
                <React.Fragment>
                    <div id="projects" className="container globalFontColor">
                        <div className="row">
                            <div className="mt-5 mb-5">
                            <h1>Other Projects</h1>
                            </div>
                        </div>
                    </div>

                    <div className="tabSelector container">
                        
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link onSelect={()=>this.tabselector("design")} eventKey="link-1"><h5>Design</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onSelect={()=>this.tabselector("software")} eventKey="link-2"><h5>Software</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onSelect={()=>this.tabselector("engineering")} eventKey="link-3"><h5>Engineering</h5></Nav.Link>
                    </Nav.Item>
                    </Nav>

                    <div id="engineering" className="mt-5 mb-5">
                        {engineering.map((project) => <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center mb-4"><ProjectOverview key={project.key} title={project.title} quote={project.quote} 
                        bodyText={project.body} type={project.type} project_id={project.id} image={engineering_imgs[project.title+".jpg"]}></ProjectOverview></div></div>)}
                    </div>
                    </div>
                    
                </React.Fragment>
             );

            }
            else if(this.state.tabselect === "software"){
                return ( 
                    <React.Fragment>
                        <div id="projects" className="container globalFontColor">
                        <div className="row">
                            <div className="mt-5 mb-5">
                            <h1>Other Projects</h1>
                            </div>
                        </div>
                    </div>

                        <div className="tabSelector container">
                        <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link onSelect={()=>this.tabselector("design")} eventKey="link-1"><h5>Design</h5></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onSelect={()=>this.tabselector("software")} eventKey="link-2"><h5>Software</h5></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onSelect={()=>this.tabselector("engineering")} eventKey="link-3"><h5>Engineering</h5></Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <div id="software" className="mt-5 mb-5">
                        {software.map((project) => <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center mb-4"><ProjectOverview key={project.key} title={project.title} quote={project.quote} 
                        bodyText={project.body} type={project.type} project_id={project.id} image={software_imgs[project.title+".jpg"]}></ProjectOverview></div></div>)}
                        </div>
                        </div>
                    </React.Fragment>
                 );
    
                }
                else if(this.state.tabselect === "design"){
                    return ( 
                        <React.Fragment>
                            <div id="projects" className="container globalFontColor">
                                <div className="row">
                                    <div className="mt-5 mb-5">
                                    <h1>Other Projects</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="tabSelector container">
                            <Nav justify variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link onSelect={()=>this.tabselector("design")} eventKey="link-1"><h5>Design</h5></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onSelect={()=>this.tabselector("software")} eventKey="link-2"><h5>Software</h5></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onSelect={()=>this.tabselector("engineering")} eventKey="link-3"><h5>Engineering</h5></Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <div id="design" className="mt-5 mb-4">
                                <Design3d></Design3d>
                                <Photography>
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
        console.log(tab);
        console.log(engineering);
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