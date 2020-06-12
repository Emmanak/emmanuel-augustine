import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import uuid from 'uuid';

const design_key = uuid();
const design_photo_key = uuid();

var design3dpics = [
    'BeautyBARF.jpg',
    'Domo anmol.jpg',
    'field grass.jpg',
    'Floweredited.jpg',
    'Hill Grass  with Domo.jpg',
    'Infone 1.jpg',
    'Infone 2.jpg',
    'Infone 3.jpg',
    'Infone 4.jpg',
    'Lambo Final Pic.jpg',
    'Physics 1.jpg',
    'Physics 2.jpg',
    'Roman Vine 1.jpg',
    'Roman Vine Cam1 shot 2.jpg',
    'Roman Vine Cam3 shot 1.jpg',
    'Roman Vine Cam5 shot 2.jpg',
    'RoomwithAO.jpg',
    'Tablet Desktop 2.jpg',
    'Tablet Desktop 3.jpg',
    'Tablet Desktop 4.jpg',
    'Tablet Desktop 5.jpg',
    'Tablet Desktop 6.jpg',
    'Tablet Desktop 7.jpg',
    'Tablet Desktop.jpg',
    'Volumetric light.jpg',
    'Water Energypic.jpg',
    'Youtube.jpg'
];

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images/3d-design', false, /\.(png|jpe?g|svg|bmp)$/));



class Design3D extends Component {
    state = {  }
    render() {
        var image_height
        if(window.innerHeight > window.innerWidth){
            image_height = window.innerHeight/4;
            
        } 
        else{
            image_height = window.innerHeight/2;
            
        }
        return (
            <React.Fragment>
                <TransitionGroup>
                    <CSSTransition
                    in={true}
                    appear={true}
                    key={design_key}
                    timeout={1000}
                    classNames="card">
                <div className="contaner ml-3 mr-3 globalFontColor">

                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                        <h3>3D Projects</h3>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center globalFontColor">
                        <div className="col-12">
                            
                        <p>The following 3D projects were created on Autodesk 3D Studio Max
                        during highschool. I was limited to only rendering still
                        images since my computer was severely underpowered. I am showcasing
                        these images because it conveys my desire to create things regardless of what
                        tools I'm using.</p>
                        </div>
                    </div>

                </div>
                </CSSTransition>
                <CSSTransition
                in={true}
                appear={true}
                key={design_photo_key}
                timeout={1000}
                classNames="card">
                <div className="container" key={design_photo_key}>

               <div className="p-4">
                   <div>
            <Carousel className="photos jumbotron">
                {design3dpics.map(pic => <Carousel.Item className="photos-item mt-2 mb-2" key={pic}><img height={image_height} className="photos-image" 
                src={images[pic]} alt="3DS Max Showreel"></img></Carousel.Item>)}
                </Carousel>
                <p className="pictureCaption d-flex justify-content-center">3DS Max Projects (2010-2012)</p>
                </div>
                </div> 
                </div>
                </CSSTransition>
                </TransitionGroup>
            </React.Fragment> 
         );
    }
}
 
export default Design3D;