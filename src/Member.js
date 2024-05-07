import React from "react";
import  { useContext } from "react";
import { UserContext } from "./UserContext";
import useFetch02 from "./useFetch02";
import LogList from "./LogList";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'; 

const Member = () => {
    const { data: logs, isPendingLog, error} = useFetch02('http://localhost:8001/logs')
    const history = useHistory()
    function backPage  () {
       history.go(-1)
    }
    
        return (
            <div>
                     <FontAwesomeIcon icon={faArrowLeftLong}  className='backArrow' onClick={backPage}/>
            {error && <div> { error } </div>}
            { isPendingLog && <div> loading...</div>}
          { logs && < LogList  logs={ logs} />}
     </div>
        );
    
};

export default Member;