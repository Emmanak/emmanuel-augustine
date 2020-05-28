import {engineering, software} from './projectsDB';
import Card from 'react-bootstrap/Card';
import ProjectContents from './projectcontents';
import {db} from '../fbconfig.js';
import React, { Component } from 'react';

//var engineering = []
//var software = []

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }



  
  var images;

  class ProjectSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project : []            
        };
      }
       componentDidMount(){
           var that = this;
           var id = this.props.match.params.id.replace('project-', '');
        db.collection("fl_content").doc(id)
        .get().then(function(doc){
            if (doc.exists) {
                that.setState({project: doc.data()});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(error => console.log(error));

       }
      render() {
          var project = this.state.project;
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="headerSection2 col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center">
                            <h1 key={project.id} className="p-3">{project.projectName}</h1>
                        </div>
                        </div>
                    </div>
                
                <div className="container">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center">
                            <Card className="globalFontColor" style={{ width: '50rem' }}>
                            <Card.Img variant="top" src={project.imageLink1}/>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>   
                
         );
      }
  }
   
  export default ProjectSetup;

const ProjectDetails = (props) => {
    console.log(props);
    //var type;
    var id = props.match.params.id;
    //query_database();
    var data;
    if(props.match.params.type === "engineering"){
        //type = "engineering";
        data = engineering[id];
        images = importAll(require.context('../images/engineering', false, /\.(png|jpe?g|svg|bmp)$/));
        console.log(data.id,images);
        //var query = query_database();
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="headerSection2 col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center">
                            <h1 key={Math.floor((Math.random() * 100) + 1)} className="p-3">{data.title}</h1>
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
                        <div className="mt-5">
                            {data.order.map((order) => <ProjectContents key={Math.floor((Math.random() * 100) + 1).toString()}
                             order={order} data={data}></ProjectContents>)}
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

                        <div className="mt-5 mb-5">
                            {data.order.map((order) => <ProjectContents key={Math.floor((Math.random() * 100) + 1).toString()}
                            order={order} data={data}></ProjectContents>)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
    
}

/*
console.log(this.props);
        //var type;
        var id = this.props.match.params.id;
        //query_database();
        var data;
        if(this.props.match.params.type === "engineering"){
            //type = "engineering";
            data = engineering[id];
            images = importAll(require.context('../images/engineering', false, /\.(png|jpe?g|svg|bmp)$/));
            console.log(data.id,images);
            //var query = query_database();
            return ( 
                <React.Fragment>
                    <div className="container">
                        <div className="headerSection2 col-lg-12 col-md-12 col-sm-12">
                            <div className="d-flex justify-content-center">
                                <h1 key={Math.floor((Math.random() * 100) + 1)} className="p-3">{data.title}</h1>
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
                            <div className="mt-5">
                                {data.order.map((order) => <ProjectContents key={Math.floor((Math.random() * 100) + 1).toString()}
                                 order={order} data={data}></ProjectContents>)}
                            </div>
                        </div>
                    </div>
                </React.Fragment>   
                    
             );
        }
        else if(this.props.match.params.type === "software"){
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
    
                            <div className="mt-5 mb-5">
                                {data.order.map((order) => <ProjectContents key={Math.floor((Math.random() * 100) + 1).toString()}
                                order={order} data={data}></ProjectContents>)}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
             );
        }*/