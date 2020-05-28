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
        if(data.type === "engineering"){
            images = importAll(require.context('../images/engineering', false, /\.(png|jpe?g|svg|bmp)$/));

        }
        else if(data.type === "software"){
            images = importAll(require.context('../images/software', false, /\.(png|jpe?g|svg|bmp)$/));
        }

        if(this.props.order === "body"){
            return ( 
                <div className="col-lg-8 col-md-8 col-sm-12 d-flex mx-auto mb-2">
                                <p>{data.body}</p>
                            </div>
             );
        }
        else if(this.props.order === "video"){
            return (
                <div id="youtubeVideo" className="col-lg-8 col-md-8 col-sm-12 d-flex mx-auto">
                    <ReactPlayer playsinline width="100%" height="100%" controls={true}
                        url={data.video}
                    />
                    </div>
            );
        }
        else if(this.props.order === "image2"){
            return (
                <div className="col-lg-8 col-md-8 col-sm-12 d-flex mx-auto mb-5">
                            <Card className="globalFontColor" style={{ width: '50rem' }}>
                            <Card.Img variant="top" src={images[data.image2]}/>
                            </Card>
                </div>
            );
        }
        else if(this.props.order === "appTest"){
            return (
                <div id={data.appID} className="d-flex col-12 mx-auto">
                            <iframe width="100%" height={data.appHeight} frameBorder="0" scrolling="no" onLoad={console.log(this)} title={data.title} src={data.appTest}></iframe>
                </div>
            );
        }
        else if(this.props.order === "title2"){
            return (
                <div className="titleSection col-lg-8 col-md-8 col-sm-12 d-flex mx-auto mt-5 mb-2">
                            <h3>{data.title2}</h3>
                </div>
            );
        }
        else if(this.props.order === "body2"){
            return (
                <div className="col-lg-8 col-md-8 col-sm-12 d-flex mx-auto mb-2">
                                <p>{data.body2}</p>
                </div>
            );
        }
        else if(this.props.order === "videoTitle"){
            return (
                <div className="titleSection col-lg-8 col-md-8 col-sm-12 d-flex mx-auto mt-5 mb-2">
                            <h3>{data.videoTitle}</h3>
                </div>
            );
        }
        else if(this.props.order === "link"){
            return (
                <div className="col-lg-8 col-md-8 col-sm-12 d-flex mx-auto mt-5 mb-2">
                            <a href={data.link}>{data.linkText}</a>
                </div>
            );
        }
        
    }
}
 
export default ProjectContents;

