import React from 'react';
import './App.css';

import { LandingPage } from './routes/LandingPage';
import {HomePage} from './routes/HomePage';
import  SignupPage  from './routes/SignupPage';
import LoginPage from './routes/LoginPage';
import { Route, Routes } from "react-router-dom";
import { ServicesPage } from './routes/ServicesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Services" element={<ServicesPage />} />

      </Routes>
    </>
  );
}

export default App;
