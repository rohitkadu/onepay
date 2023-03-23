import "./Services.css";
import {  React, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import bank from "../../assets/bank-service.png"
import bill from "../../assets/bill-service.png"

export const Services = () => { 

  const bankurl = "https://onepay-bank.netlify.app/"

  const navigate = useNavigate();

  const navigateToBillsPage= () => {

    navigate('/BillsPage');
  };

  return (
    <div className="services-box">
      <h1>Our Services</h1>
      
      <div className="services">

        <div  id="bank-service" className="service-card"
          onClick={() =>window.open(bankurl, '_blank') }
        >
          <img src={bank} width="100%" alt="" />
          <h2>Online <br /> Banking</h2>
        </div>

        <div id="bill-service" className="service-card"
          onClick={navigateToBillsPage}
        >
          <img src={bill} width="100%" alt="" />
          <h2>Bill <br /> Payments</h2>
        </div>

      </div>
    </div>
  );
};