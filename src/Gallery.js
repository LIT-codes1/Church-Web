import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'; 
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Gallery = () => {
    const history = useHistory()
     function backPage  () {
        history.go(-1)
     }




    return (  
        <div className="gallery-1">
            <FontAwesomeIcon icon={faArrowLeftLong}  className='backArrow' onClick={backPage}/>
           <div className="slider-container">
            <div className="image-container">
            <img src="p1.jpg" alt="church" className='imgs'/>
            <img src="p2.jpg" alt="church" className='imgs'/>
            <img src="p3.jpg" alt="church" className='imgs'/>
            <img src="p4.jpg" alt="church" className='imgs'/>
            <img src="p5.jpg" alt="church" className='imgs'/>
            <img src="p6.jpg" alt="church" className='imgs'/>
            <img src="p7.jpg" alt="church" className='imgs'/>
            <img src="p8.jpg" alt="church" className='imgs'/>
            <img src="p9.jpg" alt="church" className='imgs'/>
            <img src="p10.jpg" alt="church" className='imgs'/>
            <img src="p11.jpg" alt="church" className='imgs'/>
            <img src="p12.jpg" alt="church" className='imgs'/>
            </div>
             </div>
        </div>
    );
}
 
export default Gallery;