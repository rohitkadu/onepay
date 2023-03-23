import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Bill.css";
// import { Link } from "react-router-dom";
import campicon from "../../assets/companion-icon.png"
import jiologo from "../../assets/jio-logo.png"
import onepaylogo from "../../assets/logo-onepay-whiteblack.jpeg"
import houserent from "../../assets/rent-logo.png"
import mahavitaranlogo from "../../assets/mahavitaran-logo.png"
import qr from "../../assets/payment-qr.png"
import { Success } from "../success/Success";




export const Bill = () => {
    const mobilebill = 179.00
    const electricitybill = 1000.00
    const rentbill = 12000

    const [visible, setVisible] = React.useState(false);

    const navigate = useNavigate();

    const navigateToSuccess= () => {
    
      navigate('/Success');
    };
    

    return (
        <div>
            <div className="bill-container">
            <style>{`
                .element-visible { display: block }
                .element-hidden { display: none }
                `}</style>

            <h1>Bills</h1>

                <div className="bills">

                    <div className="bill-card">
                        <div id="mob" className="recharge">
                            <img src={jiologo} alt="" />
                            <h2>Mobile Recharge</h2>
                            <p>Mob : +919876543210</p>
                            <button type="button" class="btn btn-primary">Pay ₹{mobilebill}</button>
                        </div>
                    </div>
                    <div className="bill-card">
                        <div id="elec" className="recharge">
                            <img src={mahavitaranlogo} alt="" />
                            <h2>Electricity</h2>
                            <p>State : Maharashtra</p>
                            <p>Consumer No :</p>
                            <p>020547795546</p>
                            <button type="button" class="btn btn-primary">Pay ₹{electricitybill}</button>
                        </div>
                    </div>
                    <div className="bill-card">
                        <div id="mob" className="recharge">
                            <img src={houserent} alt="" />
                            <h2>House Rent</h2>
                            <p>Month: February 2023</p>
                            <p>Rent: Rs 12000 /-</p>
                            <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Pay Rent'}</button>
                        </div>
                    </div>
                </div>

                <div className={visible ? 'element-visible' : 'element-hidden'}>
                <div className="gateway">
                    <div className="gateway-container">
                        <img className="gateway-logo" width="150px" src={onepaylogo} alt="" />
                        <img src={qr} alt="" />
                        <button onClick={navigateToSuccess} type="button" class="btn btn-primary">Pay Now</button>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};