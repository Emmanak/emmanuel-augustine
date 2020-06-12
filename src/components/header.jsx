import React, { Component } from 'react';
import videofile from '../images/video.mp4';



class HeaderVideo extends Component {
    constructor(props) {
        super(props);
        this.state = { imageStatus: "loading" };
      }
    
      handleImageLoaded() {
        this.setState({ imageStatus: "loaded" });
      }
    
      handleImageErrored() {
        this.setState({ imageStatus: "failed to load" });
      }
    
    render() { 
        if(videofile === undefined){
            console.log("Loading");
        }
        return (
            <React.Fragment>
<div className="container mt-5">
            <div className="headerSection">
                <h1 className="headerName d-flex justify-content-center">Emmanuel Augustine</h1>
                <div className="video-container d-flex justify-content-center">
                    <video autoPlay loop autobuffer="true" muted playsInline>
                        <source src={videofile} type="video/mp4"></source>
                    </video>
                </div>
                
                </div>
                <div>
            </div >
            </div>
            
            </React.Fragment> 
         );
    }
}
 
export default HeaderVideo;