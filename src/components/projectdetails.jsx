import ProjectContents from './projectcontents';
import {db} from '../fbconfig.js';
import React, { Component } from 'react';
import Loading from './loading';
import {CSSTransition} from 'react-transition-group';



  

  class ProjectSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project : []            
        };
      }
       componentDidMount(){
           var that = this;
           //query the individual project with it's ID
           var id = this.props.match.params.id.replace('project-', '');
        db.collection("fl_content").doc(id)
        .get().then(function(doc){
            if (doc.exists) {
                
                var project = doc.data();
                var contentOrder = (doc.data().contentOrder.split(', '));

                doc.data().contentOrder = contentOrder;
                project.contentOrder = contentOrder;
                that.setState({project:project});
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(error => console.log(error));

       }
      render() {
          var project = this.state.project;
          if(project.length === 0){
              return(
                  <div className="center-screen">
                  <div className="wrap">
                      <Loading/>
                  </div>
                  </div>
                  
              )
          }
        return ( 
            <React.Fragment>
                <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="details">
                <div className="container">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div>
                            {project.contentOrder.map((order,index) => <ProjectContents key={"content-item-"+index}
                             order={order} data={project}></ProjectContents>)}
                        </div>
                    </div>
                </div>
                </CSSTransition>
            </React.Fragment>   
                
         );
         
      }
  }
   
  export default ProjectSetup;