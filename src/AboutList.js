import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch } from '@fortawesome/free-solid-svg-icons'; 
const AboutList = props => {
  const blogs = props.blogs[0]
    return ( 
        <div className="about-List" key={blogs.id}>
            <h1><FontAwesomeIcon icon={faChurch} size="xl" style={{ color: "white" }} className='churchIcon'/>
             {blogs.title}</h1>
            <p>{blogs.body}</p>
            <p>{blogs.body2}</p>

        </div>
     );
}
 
export default AboutList ;