import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class ProjectOverview extends Component {
    state = { moreInfo : false  }
    render() {
        if(false){
            return(
            <React.Fragment>
                <Card style={{ width: '35rem' }}>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Header>
                        <Card.Title><h2>{this.props.title}</h2></Card.Title>
                        <Card.Text>
                                <b>{this.props.qoute}</b>
                        </Card.Text>
                        <Button onClick={this.moreInfo}>More Info
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            {this.props.bodyText}
                        </p>
                    </Card.Body>
                </Card>
            </React.Fragment>
            );
        } 
        return ( 
            <React.Fragment>
                <Card className="globalFontColor" style={{ width: '55rem' }}>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Header>
                        <Card.Title><h2>{this.props.title}</h2></Card.Title>
                        <Card.Text>
                                <b>{this.props.quote}</b>
                        </Card.Text>
                        <Button variant="secondary" href={"/project/"+this.props.type+"/"+this.props.project_id}>More Info
                        </Button>
                    </Card.Header>
                </Card>
            </React.Fragment>
            
         );
    }


    moreInfo = () => {
        if (this.state.moreInfo === false) {
            this.setState({moreInfo: true});
        }
        else{
            this.setState({moreInfo: false});
        }
        
    }

}
 
export default ProjectOverview;



/*
<Card style={{ width: '35rem' }}>
                    <Card.Img variant="top" src={this.props.image} />

                    <Accordion>

                        <Card.Header>
                            <Card.Title><h2>{this.props.title}</h2></Card.Title>
                            <Card.Text>
                                    <b>{this.props.qoute}</b>
                            </Card.Text>
                        </Card.Header>
                    
                        
                        
                        <Accordion.Toggle as={Button} variant="secondary btn-block" eventKey="0">
                            <div className="d-flex justify-content-center">
                                More Info
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>{this.props.bodyText}</p>
                                <p>
                                    {this.props.videoTitle}
                                </p>
                                <p>
                                    <iframe width={100+"%"} height={100+"%"} src={this.props.video} frameborder="0"></iframe>
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </Card>
*/