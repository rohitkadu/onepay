import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import billgif from "../../assets/lottie/mobile-payment-gif.gif";
import cardgif from "../../assets/lottie/credit-card-gif.gif";
import onlinegif from "../../assets/lottie/ecommerce-payment-gif.gif";
import campicon from "../../assets/companion-icon.png"
import handpay from "../../assets/handpay-icon.png"
import brain from "../../assets/brain.png"
import herobg from "../../assets/hero-left-bg.jpg"
import logo from "../../assets/logo-onepay.png"
import signupicon from "../../assets/sign-up-icon.png"

export const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-left ">
            <div className="left-content border-grad border-grad-purple">
                <h1>Your Financial Companion <img width="80px" src={campicon} alt="" /> </h1>
                <p>trust us to simplify your financial life </p>
                <p>and make payments a breeze with</p>
                <img width="300px" src={logo} alt="" />
                <h2>  A Smart <img width="60px" src={brain} alt="" /> 
                {'\u00A0'} Way to Pay <img width="40px" src={handpay} alt="" /> </h2>
                
                <Link to="/Signup">
                    <button className="login-btn">
                        Sign Up Now <img width="40px" src={signupicon} alt="" />
                    </button>
                </Link>

            </div>
        </div>
        <div className="hero-right">
            <div className="right-up">
                <div className="rul">
                    <img height="225%" src={billgif} alt="" />
                </div>
                <div className="rur">
                    <img height="150%" src={cardgif} alt="" />
                </div>
            </div>
                <div className="right-down">
                    <img height="100%" src={onlinegif} alt="" />
                </div>
        </div>
    </div>
  );
};

