import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'; 

const SignUp = ({ handleLogin }) => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const backPage = () => {
        history.goBack();
    };

    const handleClick = () => {
        if (username.trim() !== "" && email.trim() !== "") {
            alert('Login Successfully');
            
            history.push('/');
        } else {
            alert('Username or Email is empty');
        }
        handleLogin(username);
    };

    return ( 
        <div className="sign-up">
            <FontAwesomeIcon icon={faArrowLeftLong} className='backArrow' onClick={backPage} />

            <div className="signee">
                <h1 className="a1"> Membership Sign In</h1>

                <div className="email" >
                    <div className="e1">
                        <label>Email in your church directory</label>
                        <input type='email' placeholder='' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
  
                    <div className="e2">
                        <label>Password</label>
                        <input type='password' placeholder='' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                
                    <a className="sign" onClick={handleClick}>Sign In</a>
                    <a className="fp">Forgot Password?</a>
                    <p className="or">Or</p>
                    <Link to='/createAcc' className="sign2">Create Login</Link>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;
