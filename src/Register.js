import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Register() {
    return (
        <div className="login">
        <div className="loginContainer">
            <h1>Register Here</h1>
            <div> 
                <label>Username</label>
                <input type="text"/>
                </div>
                <div>
                <label>Password</label>
                <input type="Password"/>
                </div>
           <div className="btnContainer">
           <Link to={"/dash/home"}><button>Register</button></Link>
          <p> Already have an ?   <Link to={"/"}><span>Sign In</span></Link></p>
           </div>
        </div>
    </div>
    );
}

export default Register
