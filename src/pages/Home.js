import React from 'react';
import '../components/Navbar.css'
import * as FaIcons from 'react-icons/fa';
import * as IconName from "react-icons/bs";
import * as Bicons from "react-icons/bi";

function Home() {
  return (
     <>
     <div className="main">       
      <div className="cards">
             <div className="card-single">
                    <div>
                           <h1>54</h1>
                           <span>Customer</span>
                    </div>
                    <div>
                           <span> <FaIcons.FaUsers/> </span>
                    </div>
             </div>
             <div className="card-single">
                    <div>
                           <h1>86</h1>
                           <span>Chats</span>
                    </div>
                    <div>
                           <span> <IconName.BsFillChatSquareDotsFill/> </span>
                    </div>
             </div>
             <div className="card-single">
                    <div>
                           <h1>124</h1>
                           <span>Friends</span>
                    </div>
                    <div>
                           <span> <FaIcons.FaUserFriends/> </span>
                    </div>
             </div>
             <div className="card-single">
                    <div>
                           <h1>$50k</h1>
                           <span>Income</span>
                    </div>
                    <div>
                           <span> <FaIcons.FaMoneyCheck/> </span>
                    </div>
             </div>
      </div>  

      <div className="recent-flex">
             <div className="projects">
              <div className="card">
                 <div className="card-header">
                      <h3>Recent Projects</h3>
                      <button>See All</button>
                 </div>
                 <div className="card-body">
                    <div className="table-responsive">
                    <table width="100%">
                          <thead>
                                 <tr>
                                        <td>Project Title</td>
                                        <td>Department</td>
                                        <td>Status</td>
                                 </tr>
                          </thead>
                          <tbody>
                                 <tr>
                                        <td>UI/UX Design</td>
                                        <td>UI Team</td>
                                        <td>
                                               <span className="status purple"></span>
                                               review
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>App Development</td>
                                        <td>Frontend and backend</td>
                                        <td>
                                               <span className="status pink"></span>
                                               In progress
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>Ushop app</td>
                                        <td>Mobile shop</td>
                                        <td>
                                               <span className="status orange"></span>
                                               pending
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>UI/UX Design</td>
                                        <td>UI Team</td>
                                        <td>
                                               <span className="status orange"></span>
                                               review
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>App Development</td>
                                        <td>Frontend and backend</td>
                                        <td>
                                               <span className="status pink"></span>
                                               In progress
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>Ushop app</td>
                                        <td>Mobile shop</td>
                                        <td>
                                               <span className="status purple"></span>
                                               pending
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>UI/UX Design</td>
                                        <td>UI Team</td>
                                        <td>
                                               <span className="status purple"></span>
                                               review
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>App Development</td>
                                        <td>Frontend and backend</td>
                                        <td>
                                               <span className="status pink"></span>
                                               In progress
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>Ushop app</td>
                                        <td>Mobile shop</td>
                                        <td>
                                               <span className="status orange"></span>
                                               pending
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>UI/UX Design</td>
                                        <td>UI Team</td>
                                        <td>
                                               <span className="status pink"></span>
                                               review
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>App Development</td>
                                        <td>Frontend and backend</td>
                                        <td>
                                               <span className="status orange"></span>
                                               In progress
                                        </td>
                                 </tr>
                                 <tr>
                                        <td>Ushop app</td>
                                        <td>Mobile shop</td>
                                        <td>
                                               <span className="status purple"></span>
                                               pending
                                        </td>
                                 </tr>
                          </tbody>
                        </table>
                    </div>
                 </div>
              </div>
             </div>
             <div className="customer">
                <div className="card">
                <div className="card-header">
                      <h3>New Customer</h3>
                      <button>See All</button>
                 </div> 
                 <div className="card-body">
                      <div className="customer">
                             <div className="info"> 
                             <img src="https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="User Image" width="40px" height="40px"/>
                             <div>
                                 <h4>Emma Watson</h4>  
                                 <small>CEO Excerpt</small> 
                             </div>
                             </div>
                             <div className="contact">
                             <span> <FaIcons.FaUser/> </span>  
                             <span> <Bicons.BiMessageSquareDetail/> </span>
                             <span> <Bicons.BiPhoneCall/> </span>
                             </div>
                      </div>
                      <div className="customer">
                             <div className="info"> 
                             <img src="https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="User Image" width="40px" height="40px"/>
                             <div>
                                 <h4>Emma Watson</h4>  
                                 <small>CEO Excerpt</small> 
                             </div>
                             </div>
                             <div className="contact">
                             <span> <FaIcons.FaUser/> </span>  
                             <span> <Bicons.BiMessageSquareDetail/> </span>
                             <span> <Bicons.BiPhoneCall/> </span>
                             </div>
                      </div>
                      <div className="customer">
                             <div className="info"> 
                             <img src="https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="User Image" width="40px" height="40px"/>
                             <div>
                                 <h4>Emma Watson</h4>  
                                 <small>CEO Excerpt</small> 
                             </div>
                             </div>
                             <div className="contact">
                             <span> <FaIcons.FaUser/> </span>  
                             <span> <Bicons.BiMessageSquareDetail/> </span>
                             <span> <Bicons.BiPhoneCall/> </span>
                             </div>
                      </div>
                      <div className="customer">
                             <div className="info"> 
                             <img src="https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="User Image" width="40px" height="40px"/>
                             <div>
                                 <h4>Emma Watson</h4>  
                                 <small>CEO Excerpt</small> 
                             </div>
                             </div>
                             <div className="contact">
                             <span> <FaIcons.FaUser/> </span>  
                             <span> <Bicons.BiMessageSquareDetail/> </span>
                             <span> <Bicons.BiPhoneCall/> </span>
                             </div>
                      </div>
                      <div className="customer">
                             <div className="info"> 
                             <img src="https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="User Image" width="40px" height="40px"/>
                             <div>
                                 <h4>Emma Watson</h4>  
                                 <small>CEO Excerpt</small> 
                             </div>
                             </div>
                             <div className="contact">
                             <span> <FaIcons.FaUser/> </span>  
                             <span> <Bicons.BiMessageSquareDetail/> </span>
                             <span> <Bicons.BiPhoneCall/> </span>
                             </div>
                      </div>
                      <div className="customer">
                             <div className="info"> 
                             <img src="https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="User Image" width="40px" height="40px"/>
                             <div>
                                 <h4>Emma Watson</h4>  
                                 <small>CEO Excerpt</small> 
                             </div>
                             </div>
                             <div className="contact">
                             <span> <FaIcons.FaUser/> </span>  
                             <span> <Bicons.BiMessageSquareDetail/> </span>
                             <span> <Bicons.BiPhoneCall/> </span>
                             </div>
                      </div>
                      <div className="customer">
                             <div className="info"> 
                             <img src="https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="User Image" width="40px" height="40px"/>
                             <div>
                                 <h4>Emma Watson</h4>  
                                 <small>CEO Excerpt</small> 
                             </div>
                             </div>
                             <div className="contact">
                             <span> <FaIcons.FaUser/> </span>  
                             <span> <Bicons.BiMessageSquareDetail/> </span>
                             <span> <Bicons.BiPhoneCall/> </span>
                             </div>
                      </div>
                      <div className="customer">
                             <div className="info"> 
                             <img src="https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="User Image" width="40px" height="40px"/>
                             <div>
                                 <h4>Emma Watson</h4>  
                                 <small>CEO Excerpt</small> 
                             </div>
                             </div>
                             <div className="contact">
                             <span> <FaIcons.FaUser/> </span>  
                             <span> <Bicons.BiMessageSquareDetail/> </span>
                             <span> <Bicons.BiPhoneCall/> </span>
                             </div>
                      </div>
                 </div> 
                </div>
             </div>
      </div>
      </div>
      {/* <div className="main_container">
       <div className="box_container">
         <div className="box">
         <FaIcons.FaCartPlus className="i"/>
         <h3>QUALITY</h3>
                <p>Quality work is our first priority. We strive to give quality designs in every possible way we can.
                </p>
         </div>
         <div className="box">
         <FaIcons.FaCartPlus className="i"/>
         <h3>QUALITY</h3>
                <p>Quality work is our first priority. We strive to give quality designs in every possible way we can.
                </p>
         </div>
         <div className="box">
         <FaIcons.FaCartPlus className="i"/>
         <h3>QUALITY</h3>
                <p>Quality work is our first priority. We strive to give quality designs in every possible way we can.
                </p>
         </div>

       </div>
     </div>  */}
   
   
     </> 
  );
}

export default Home;
