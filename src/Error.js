import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

function Error() {
    return (
        <div className="login">
        <div className="loginContainer">
            <h1 >404 No Results Found</h1>
             <h2>We couldn’t find the page you were looking for It appears you may have taken a wrong turn.</h2>
           <div className="btnContainer">
           <Link to={"/"}><button>Go Back</button></Link>
           </div>
        </div>
    </div>
    )
}

export default Error
