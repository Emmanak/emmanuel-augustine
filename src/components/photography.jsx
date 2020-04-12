import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
        return ( 
            <React.Fragment>
                
                        <div className="contaner mt-5 ml-3 mr-3 globalFontColor">
                            
                            <div className="row d-flex justify-content-center">
                                <div className="col-12 mb-1">
                                <h3>Photography and Video</h3>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center">
                                <div className="col-12 ml-4">
                                    
                                </div>
                            </div>

                            </div>
                            <div>

                            <div className="container-fluid globalFontColor">
                                <div className="p-4">
                            <Carousel >
                            {photography.map(pic => <Carousel.Item key={pic}><img className="d-block w-100" 
                            src={images[pic]} alt="Photography Showreel"></img><Carousel.Caption>
                                <h3>Photography Showreel</h3>
                                <p>Taken on Canon T5i</p>
                            </Carousel.Caption></Carousel.Item>)}
                            </Carousel>
                            </div>
                            </div>
                            </div>
            </React.Fragment>
         );
    }
}
 
export default Photography;