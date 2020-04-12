import React from 'react';
import {engineering, software} from './projectsDB';
import Card from 'react-bootstrap/Card';

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  var images;

const ProjectDetails = (props) => {
    console.log(props);
    //var type;
    var id = props.match.params.id;
    var data;
    if(props.match.params.type === "engineering"){
        //type = "engineering";
        data = engineering[id];
        images = importAll(require.context('../images/engineering', false, /\.(png|jpe?g|svg|bmp)$/));
        console.log(data.id,images);
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="headerSection col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center">
                            <h1 className="p-3">{data.title}</h1>
                        </div>
                        </div>
                    </div>
                
                <div className="container">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center">
                            <Card className="globalFontColor" style={{ width: '50rem' }}>
                            <Card.Img variant="top" src={images[data.title+".jpg"]}/>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
                
         );
    }
    else if(props.match.params.type === "software"){
        //type = "software";
        data= software[id];
        images = importAll(require.context('../images/software', false, /\.(png|jpe?g|svg|bmp)$/));
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="headerSection col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center">
                            <h1 className="p-3">{data.title}</h1>
                        </div>
                        </div>
                    </div>
                
                <div className="container">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center">
                            <Card className="globalFontColor" style={{ width: '50rem' }}>
                            <Card.Img variant="top" src={images[data.title+".jpg"]}/>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProjectDetails;