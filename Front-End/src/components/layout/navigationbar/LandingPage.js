import React, { useState } from 'react';
import logo from "../../../assets/logo/logo.png";
import './LandingPage.css';
import { FaSignOutAlt, FaHome, FaQrcode, FaUsers, FaUserGraduate, FaChartBar, FaTools } from 'react-icons/fa';

function LandingPage() {
  const [openMenu, setOpenMenu] = useState(null); // State to track which menu is open

  const handleMenuClick = (menuIndex) => {
    setOpenMenu(openMenu === menuIndex ? null : menuIndex); // Toggle open/close state of menu
  };

  return (
    <div className='main'>

      <div className='top'>
        <div className='companyname'>SkyTicker</div>
        <div className='profilename'>Profilename</div>
      </div>




      <div className='below'>

        <div className="main-page">
          <div className="sidebar">
            <div className='image1'>
              <img src={logo} alt="Profile" className='logo'/>
            </div>

             
               <div className='sidebar-bottom'>

               <div className="sidebar" style={{ backgroundColor: '#0a69a3' }}>
      <div className="menu-item" onClick={() => handleMenuClick(0)}>
        <FaHome className="menu-icon" />
        <div className="menu-name">Dashboard</div>
      </div>

      <div className="menu-item" onClick={() => handleMenuClick(1)}>
        <FaQrcode className="menu-icon" />
        <div className="menu-name">QR Generate</div>
        <div className="dropdown-icon">{openMenu === 1 ? '-' : '+'}</div>
      </div>
      {openMenu === 1 && (
        <div className="dropdown">
          <div className="dropdown-item">Create Event</div>
          <div className="dropdown-item">Create Lecture</div>
        </div>
      )}

      <div className="menu-item" onClick={() => handleMenuClick(2)}>
        <FaUsers className="menu-icon" />
        <div className="menu-name">Staff</div>
      </div>

      <div className="menu-item" onClick={() => handleMenuClick(3)}>
        <FaUserGraduate className="menu-icon" />
        <div className="menu-name">Student</div>
      </div>

      <div className="menu-item" onClick={() => handleMenuClick(4)}>
        <FaChartBar className="menu-icon" />
        <div className="menu-name">Reports</div>
        <div className="dropdown-icon">{openMenu === 4 ? '-' : '+'}</div>
      </div>
      {openMenu === 4 && (
        <div className="dropdown">
          <div className="dropdown-item">Event</div>
          <div className="dropdown-item">Attendance </div>
        </div>
      )}

      <div className="menu-item" onClick={() => handleMenuClick(5)}>
        <FaTools className="menu-icon" />
        <div className="menu-name">Operations</div>
        <div className="dropdown-icon">{openMenu === 5 ? '-' : '+'}</div>
      </div>
      {openMenu === 5 && (
        <div className="dropdown">
          <div className="dropdown-item">Delete Details</div>
          <div className="dropdown-item">Update Details</div>
        </div>
      )}
    </div>
                    
                    
              </div>
 
          <div className='summa'>
                <div className="menu-item" onClick={() => handleMenuClick(0)}>
               <FaSignOutAlt className="menu-icon" />
               <div className="menu-name">Logout</div>
                </div>
        
              </div>
              </div>
          <div className="content">
            <h1>Main Content Area</h1>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
