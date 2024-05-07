import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = () => {

    return ( 
        <nav className="nav-bar">
            <FontAwesomeIcon icon={faChurch} size="xl" style={{ color: "white" }} className='churchIcon'/>
        <h1>Christ - Apostolic</h1>
        <div className="links">
             <Link to='/'><span className="dot"></span>Home</Link> 
            <Link to='/services'><span className="dot"></span>Services</Link>
            <Link to='/about'><span className="dot"></span>About</Link>
            <Link to='/member'><span className="dot"></span>Membership</Link>
            <Link to='/gallery'><span className="dot"></span>Gallery</Link>
        </div>
        </nav>
     );
}
 
export default NavBar;