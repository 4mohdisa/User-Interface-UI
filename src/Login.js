import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <div className="loginContainer">
                <h1>Login Here</h1>
               <div> 
                <label>Username</label>
                <input type="text"/>
                </div>
                <div>
                <label>Password</label>
                <input type="Password"/>
                </div>
               <div className="btnContainer">
               <Link to="/dash/home"><button>Login</button></Link>
              <p>Need Account ? <Link to="/register"><span>Create Account</span></Link></p>
               </div>
            </div>
        </div>
    )
}

export default Login
