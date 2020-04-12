import React, { Component } from 'react';
import videofile from '../images/video.mp4';



class HeaderVideo extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>

            <div className="headerSection d-flex justify-content-center">
                <h1 className="headerName d-flex justify-content-center">Emmanuel Augustine</h1>
                <div className="video-container d-flex justify-content-center">
                    <video autoPlay loop autobuffer="true" muted playsInline>
                        <source src={videofile} type="video/mp4"></source>
                    </video>
                </div>
                
                </div>
                <div>
            </div >
            
            </React.Fragment> 
         );
    }
}
 
export default HeaderVideo;