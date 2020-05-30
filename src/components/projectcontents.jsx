import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ReactPlayer from "react-player"



function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

class ProjectContents extends Component {
    state = {  }
    render() { 
        var images;
        let data = this.props.data;
        let order = this.props.order;
        if(order.startsWith('description')){
            return ( 
                <div className="col-lg-8 col-md-8 col-sm-12 d-flex mx-auto mb-2">
                                <p>{data[order]}</p>
                            </div>
             );
        }
        else if(order.startsWith('projectName')){
            return(
                    <div className="headerSection2 col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center">
                            <h1 key={'projectName-'+data.id} className="p-3">{data[order]}</h1>
                        </div>
                        </div>
            );
        }
        else if(order.startsWith('videoLink')){
            return (
                <div id="youtubeVideo" className="col-lg-8 col-md-8 col-sm-12 d-flex mx-auto">
                    <ReactPlayer playsinline width="100%" height="100%" controls={true}
                        url={data[order]}
                    />
                    </div>
            );
        }
        else if(order.startsWith('imageLink')){
            return (
                <div className="col-lg-8 col-md-8 col-sm-12 d-flex mx-auto mb-5">
                            <Card className="globalFontColor" style={{ width: '50rem' }}>
                            <Card.Img variant="top" src={data[order]}/>
                            </Card>
                </div>
            );
        }
        else if(order.startsWith('link')){
            return (
                <div id={data.appID} className="d-flex col-12 mx-auto">
                            <iframe width="100%" height="100%" frameBorder="0" scrolling="no" onLoad={console.log(this)} title={data.projectName} src={data[order]}></iframe>
                </div>
            );
        }
        else if(order.startsWith('subtitle')){
            return (
                <div className="titleSection col-lg-8 col-md-8 col-sm-12 d-flex mx-auto mt-5 mb-2">
                            <h3>{data[order]}</h3>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
        
    }
}
 
export default ProjectContents;

