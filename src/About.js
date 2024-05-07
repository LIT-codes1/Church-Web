import AboutList from "./AboutList";
import useFetch1 from "./useFetch1";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'; 

const About = () => {
const { data: blogs, isPending, error} = useFetch1('http://localhost:8000/abouts')
const history = useHistory()
function backPage  () {
   history.go(-1)
}
    return (  
    <div className="abo-ut">
                   {error && <div> { error } </div>}
           { isPending && <div> loading...</div>}
         { blogs && < AboutList  blogs={ blogs} />}
    </div>
    );
}
 
export default About;