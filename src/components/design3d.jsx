import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

var design3dpics = [
    'BeautyBARF.png',
    'Domo anmol.jpg',
    'field grass.png',
    'Floweredited.jpg',
    'Hill Grass  with Domo.jpg',
    'Infone 1.jpg',
    'Infone 2.jpg',
    'Infone 3.jpg',
    'Infone 4.jpg',
    'Lambo Final Pic.jpg',
    'Physics 1.jpg',
    'Physics 2.jpg',
    'Roman Vine 1.bmp',
    'Roman Vine Cam1 shot 2.bmp',
    'Roman Vine Cam3 shot 1.bmp',
    'Roman Vine Cam5 shot 2.bmp',
    'Roman Vine Cam5.bmp',
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
        return (
            <React.Fragment>
                <div className="contaner ml-3 mr-3 globalFontColor">

                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                        <h3>3D Projects</h3>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center globalFontColor">
                        <div className="col-12 ml-4">
                            
                        <p>The following 3D projects were created on Autodesk 3D Studio Max
                        during highschool. I was limited to only rendering still
                        images since my computer was severely underpowered. I am showcasing
                        these images because it conveys my desire to create things regardless of what
                        tools I'm using.</p>
                        </div>
                    </div>

                </div>
                <div className="container">

               <div className="p-4">
                   <div>
            <Carousel>
                {design3dpics.map(pic => <Carousel.Item key={pic}><img className="d-block w-100" 
                src={images[pic]} alt="3DS Max Showreel"></img><Carousel.Caption>
                        <h3>3DS Max Show Reel</h3>
                        <p>2010-2012</p>
                    </Carousel.Caption></Carousel.Item>)}
                </Carousel>
                </div>
                </div> 
                </div>
            </React.Fragment> 
         );
    }
}
 
export default Design3D;