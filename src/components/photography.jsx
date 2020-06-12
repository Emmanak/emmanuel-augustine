import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import uuid from 'uuid';

const photo_key = uuid();
const photo_title_key = uuid();

var photography = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
    'photo5.jpg',
    'photo6.jpg',
    'photo7.jpg',
    'photo8.jpg',
    'photo9.jpg'
];

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images/photography', false, /\.(png|jpe?g|svg|bmp)$/));

class Photography extends Component {
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
                
                        <div className="contaner mt-5 ml-3 mr-3 globalFontColor">
                        <CSSTransition
                        in={true}
                        appear={true}
                        key={photo_title_key}
                        timeout={1000}
                        classNames="card">
                            <div key={photo_title_key} className="row d-flex justify-content-center">
                                <div className="col-12 mb-1">
                                <h3>Photography and Video</h3>
                                </div>
                            </div>
                            </CSSTransition>

                            <div className="row d-flex justify-content-center">
                                <div className="col-12 ml-4">
                                    
                                </div>
                            </div>

                            </div>
                            <div>
                            <CSSTransition
                            in={true}
                            appear={true}
                            key={photo_key}
                            timeout={1000}
                            classNames="card">
                            <div key={photo_key} className="container-fluid globalFontColor">
                                <div className="p-4">
                            <Carousel className="photos jumbotron">
                            {photography.map(pic => <Carousel.Item key={pic}><img height={image_height} className="photos-image" 
                            src={images[pic]} alt="Photography Showreel"></img></Carousel.Item>)}
                            </Carousel>
                            <p className="pictureCaption d-flex justify-content-center">Taken on Canon T5i</p>
                            </div>
                            </div>
                            </CSSTransition>
                            </div>
                            
                            </TransitionGroup>
            </React.Fragment>
         );
    }
}
 
export default Photography;