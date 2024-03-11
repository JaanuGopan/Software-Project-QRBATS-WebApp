import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";
import LoginPage from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import UserProfile from "./components/pages/UserProfile";
import LandingPage from "./components/layout/navigationbar/LandingPage";
import Signin from "./components/pages/Signin";
import Forgotpassword from "./components/pages/Forgotpassword";
import Otpverification from "./components/pages/Otpverification";
import SignupC from "./components/pages/SignupC";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/otpverification" element={<Otpverification />} />
          <Route path="/signupc" element={<SignupC />} />

          {/* Define route for UserProfile */}
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
