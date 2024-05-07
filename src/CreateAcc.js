import { Link } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
import Member from "./Member";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'; 


const CreateAcc = () => {
    const {user, setUser}= useContext(UserContext);
    const [email2, setEmail2] = useState("");
    const [pass2, setPass2] = useState("");
        const history = useHistory()
         function backPage  () {
            history.go(-1) }


    // Event handlers to update state on input changes
    // const handleUsernameChange = (event) => {
    //     setUsername(event.target.value);
    // };



    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can use the username, email, and password state variables as needed
        console.log("Username:", user);
        console.log("Email:", email2);
        console.log("Password:", pass2);
        if (user !== "" && email2 !== "" && pass2 !== "") {
            alert('Membership account created Successfully');
            
            history.push('/signUp');
        } else {
            alert('Username,Email or Password is empty');
        }
    };

    
    return ( 
        <div className="sign-up">
                        <FontAwesomeIcon icon={faArrowLeftLong}  className='backArrow' onClick={backPage}/>

        <div className="signee">
        <h1 className="a1"> Membership Sign Up</h1>

        <div className="email2" >
        <div className="e12">
            <label>Username</label>
       <input type='name' placeholder=''    onChange={(e) => setUser(e.target.value)} value={user}/>
            </div>

            <div className="e22">
            <label>Enter e-Email</label>
       <input type='email' placeholder=''  onChange={(e) => setEmail2(e.target.value)}  value={email2}/>
            </div>

            <div className="e23">
            <label>Create Password</label>
       <input type='password' placeholder=''   onChange={(e) => setPass2(e.target.value)} value={pass2}/>
            </div>
            
            <a className="sign3" onClick={handleSubmit}>Create Membership Acc</a>
            <p className="backToSignIn">Click <Link to="/signUp">here</Link> to sign in if you already have a Membership Acc</p>
        </div>
        </div>

   
        
        </div>
     );
}
 
export default CreateAcc;