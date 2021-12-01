import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IconName from "react-icons/bs";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);




    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => setDropdown(!dropdown);
    return (
        <div className="super-div">
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars style={{color: "#603bbb"}} onClick={showSidebar} />
          </Link>
          <h1>Dashboard</h1>
          <div className="left_side">
          <li ><FaIcons.FaBell fontSize="30px" style={{color: "#603bbb"}}/></li>
          <li ><FaIcons.FaMailBulk fontSize="30px" style={{color: "#603bbb"}}/></li>
          <div className="drop_down">
          <img src="/assets/status-1.png" alt="profile iamge"  className="drop_btn" onClick={showDropdown}/>
          <div className={dropdown ? 'dropdown_content active' : 'dropdown_content'} >
          <Link to={"/dash/home"} >Mic Morris</Link>
           <Link to={"/dash/profile"}>My Profile</Link>
           <a href="#">Settings</a>
           <Link to={"/"}>Logout</Link>
           </div>
          </div>
          {/* <li ><IconName.BsThreeDots fontSize="30px" style={{color: "#603bbb"}}/></li> */}
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='cross-ico'>
                <FaIcons.FaBars />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <a>{item.title}</a>
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar
