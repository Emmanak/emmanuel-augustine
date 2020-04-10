import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import FeaturedProjects from './featuredprojects';
import Button from 'react-bootstrap/Button';


class OtherProjects extends Component {
    state = { tabselect: "design" }
    render() {
        if(this.state.tabselect === "engineering"){
            return ( 
                <React.Fragment>
                    <div className="jumbotron">
                        <h1>Other Projects</h1>
                    </div>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link onSelect={()=>this.tabselector("design")} eventKey="link-1">Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onSelect={()=>this.tabselector("software")} eventKey="link-2">Software</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onSelect={()=>this.tabselector("engineering")} eventKey="link-3">Engineering</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <div className="jumbotron">
                        <h1>Other Projects</h1>
                    </div>
                </React.Fragment>
             );

            }
            else if(this.state.tabselect === "software"){
                return ( 
                    <React.Fragment>
                        <div className="jumbotron">
                        <h1>Other Projects</h1>
                                Engineering
                        </div>
                        <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link onSelect={()=>this.tabselector("design")} eventKey="link-1">Design</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onSelect={()=>this.tabselector("software")} eventKey="link-2">Software</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onSelect={()=>this.tabselector("engineering")} eventKey="link-3">Engineering</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <div>
                            Software
                        </div>
                    </React.Fragment>
                 );
    
                }
                else if(this.state.tabselect === "design"){
                    return ( 
                        <React.Fragment>
                            <div className="jumbotron">
                                <h1>Other Projects</h1>
                                Engineering
                            </div>
                            <Nav justify variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link onSelect={()=>this.tabselector("design")} eventKey="link-1">Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onSelect={()=>this.tabselector("software")} eventKey="link-2">Software</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onSelect={()=>this.tabselector("engineering")} eventKey="link-3">Engineering</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <div>
                                Design
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
        this.setState({tabselect: tab});
    }

}
 
export default OtherProjects;