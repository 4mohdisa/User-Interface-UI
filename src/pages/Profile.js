import React from 'react'
import './Profile.css'
function Profile() {
    return (
        <>
        <div className="main">
     <div className="profile_container">
         <img src="/assets/cover.png" alt="cover image" className="cover_image"/>
         <div className="profile_details">
             <div className="pd_left">
                 <div className="pd_row">
                     <img src="/assets/profile.png" alt="profile_image" className="pd-image"/>
                     <div>
                         <h3>Big Nerd</h3>
                         <p>120 friends - 20 mutual</p>
                         <img src="/assets/member-1.png"/>
                         <img src="/assets/member-2.png"/>
                         <img src="/assets/member-3.png"/>
                         <img src="/assets/member-4.png"/>
                     </div>
                 </div>
             </div>
             <div className="pd_right">
                 <a><img src="/assets/add-friends.png"/>Friend</a>
                 <a><img src="/assets/message.png"/>Message</a>
                 <br/>
                 <a className="more_option"><img src="/assets/more.png"/></a>
             </div>
         </div>
     </div>    
     </div>   
        </>
    );
}

export default Profile
