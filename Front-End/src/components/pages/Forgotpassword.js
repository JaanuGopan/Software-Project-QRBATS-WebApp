import React from 'react';
import './forgotpassword.css';
import logo from '../../assets/logo/Signin.jpeg';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { Link, useParams, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';





function Forgotpassword() {
    const { id } = useParams();
    let navigate = useNavigate();

  return (
    <div className="container">
      <div className="main-container">
      <button className="back-button" onClick={() => navigate("/signin")}>
    <FontAwesomeIcon icon={faCircleArrowLeft} className="icon" />
</button>


      
        <h2>Forgot Password</h2>
        <div className="login-container">
          <div className="image-container">
            <img src={logo} className="logo" alt="Logo" />
          </div>
          <div className="form-container">
            <form>
              <div className="form-group">
               
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input type="text" id="username" name="username" placeholder=" Enter your Username" className="input-field" />
                </div>
              </div>
              <div className="form-group">
           
              <div className="form-group">
    <div className="input-with-icon">
        <FaEnvelope className="input-icon" />
        <input type="email" id="Email" name="Email" placeholder="Enter your Email" className="input-field" />
    </div>
</div>


              </div>
             
              <button type="submit" onClick={() => navigate("/otpverification")}>Send OTP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Forgotpassword