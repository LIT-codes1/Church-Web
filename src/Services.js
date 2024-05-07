import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'; 
const Services = () => {
    const history = useHistory()
     function backPage  () {
        history.go(-1)
     }
    return ( 
        <div className="in">
     <FontAwesomeIcon icon={faArrowLeftLong}  className='backArrow' onClick={backPage}/>

        <div className="ser-vices">

       <div className="first-container">
       <img src="p2.jpg" alt="church" />
       <p><h1>Main Sanctuary</h1>
        "Join us for our uplifting Sunday worship service<br /> in the Main Sanctuary. Our service is a time of<br /> praise, prayer, and teaching from the Word of God.<br /> We welcome everyone to come and experience the presence <br />of God in a meaningful and impactful way,by 7pm</p>
       </div> 

       
       <div className="second-container">
        <div className="c1">
       <img src="p10.jpg" alt="church" />
        <h1>5pm Sunday Evening services</h1>
        </div>
        <div className="c1">
       <img src="p9.jpg" alt="church" />
       <h1> 7pm Midweek Bible Study</h1>
        </div>
       </div>

       <div className="third-container">
        <div className="b1">
       <img src="p7.jpg" alt="church" />
       <h1>Seasonal Service</h1>
        </div>
        <div className="b2">
       <img src="p5.jpg" alt="church" />
       <h1>Special Event</h1>
        </div>
        <div className="b3">
       <img src="p11.jpg" alt="church" />
       <h1>Comm Service</h1>
        </div>
       </div>
       <p className="info">For more Info, kindly click <a href="https://www.google.com/search?q=catholic+church+service&oq=more+church+servi&gs_lcrp=EgZjaHJvbWUqCAgDEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQkxMjA0M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8">here</a></p>
        </div>
        </div>
     );
}
 
export default Services;