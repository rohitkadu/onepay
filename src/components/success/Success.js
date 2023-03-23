// import React from "react";
// import { Link } from "react-router-dom";
import paymentsuccess from "../../assets/lottie/payment-success.gif";
import {  React, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Success.css";

export const Success = () => {

    const navigate = useNavigate();

    const navigateToLandingPage= () => {
  
      navigate('/');
    };

    return (
        <div className="success-box">
            <img height="500px" src={paymentsuccess} alt="" />
            <h1>Payment Successful</h1>
            <button onClick={navigateToLandingPage} type="button" class="btn btn-primary btn-sm">Go To Home Page</button>
        </div>
    );
};