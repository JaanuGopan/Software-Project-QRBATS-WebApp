import React, { useState } from 'react';
import './signupc.css';
import axios from "axios";
import logo from '../../assets/logo/Signin.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate, useParams } from "react-router-dom";
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';


function SignupC() {
    

    // State for form inputs
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            "http://localhost:8080/api/v1/auth/register", // Corrected endpoint URL
            {
              firstname: firstname,
              lastname: lastname,
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
                <button className="back-button" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="icon" />
                </button>
                <h2>SIGN UP</h2>
                <div className="login-container">
                    <div className="image-container">
                        <img src={logo} className="logo" alt="Logo" />
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label">
                                    < FaUser className="icon" />
                                 
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    placeholder="Enter your first name"
                                    value={firstname}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">
                                  <FaUser className="icon" />
                                   
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    placeholder="Enter your last name"
                                    value={lastname}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    <FaEnvelope className="icon" />
                                 
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    <FaLock className="icon" />
                                   
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupC;
