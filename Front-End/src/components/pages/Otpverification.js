import React, { useState, useRef } from 'react';
import './otpverification.css';
import logo from '../../assets/logo/Signin.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from "react-router-dom";

function Otpverification() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '']); // State to hold OTP values
    const otpRefs = [useRef(), useRef(), useRef(), useRef()]; // Refs for each OTP input box

    // Handle changes in OTP input fields
    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        // Update the OTP state
        setOtp(newOtp);

        // Focus on the previous input box if the current input box is empty
        if (value === '' && index > 0) {
            otpRefs[index - 1].current.focus();
        }

        // Focus on the next input box if there's value
        if (value !== '' && index < otp.length - 1) {
            otpRefs[index + 1].current.focus();
        }
    };

    return (
        <div className="container">
            <div className="main-container">
                <button className="back-button"  onClick={() => navigate("/forgotpassword")}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="icon" />
                </button>
                <h2>OTP Verification</h2>
                <div className="login-container">
                    <div className="image-container">
                        <img src={logo} className="logo" alt="Logo" />
                    </div>
                    <div className="form-container">
                        <p>We have sent the OTP code to your email address.</p>
                        <form>
                            <div className="otp-input-container">
                                {otp.map((value, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        value={value}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        ref={otpRefs[index]} // Assign the ref to each input box
                                    />
                                ))}
                            </div>
                            <button type="submit" style={{ marginTop: '10px' }}>Verify</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Otpverification;
