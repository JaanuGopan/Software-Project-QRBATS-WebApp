import React, { useState } from "react";
import axios from "axios";
import './signin.css';
import logo from '../../assets/logo/Signin.jpeg';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useParams, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';





function Signin() {
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authendicate", // Corrected endpoint URL
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.token;
      console.log("Token is : " + token);
      const decodedToken = parseJwt(token);
      const userEmail = decodedToken.sub;
      console.log("User Email is : " + userEmail);
      localStorage.setItem("token", token);
      navigate("/profile", { state: { userEmail } }); // Pass userEmail as a parameter
    } catch (error) {
      console.error("Login failed", error);
    }
  };


  // Helper function to parse JWT token
  const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  };


  return (
    <div className="container">
      <div className="main-container">
      <button className="back-button" onClick={() => navigate("/")} >
    <FontAwesomeIcon icon={faCircleArrowLeft} className="icon" />
</button>


      
        <h2>Login</h2>
        <div className="login-container">
          <div className="image-container">
            <img src={logo} className="logo" alt="Logo" />
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
               
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input type="text" id="email" name="email"
                   placeholder="Email" className="input-field"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
           
                <div className="input-with-icon">
                  <FaLock className="input-icon" />
                  <input type="password" id="password" name="password" placeholder="Password" className="input-field" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="form-group" >
                <a href="#" onClick={() => navigate("/forgotpassword")}>Forgot Password?</a>
              </div>
              <button type="submit"  className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Signin;
