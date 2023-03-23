import React, { useState, useEffect } from 'react';
import {HomeNavbar} from "../components/navbar-home/HomeNavbar";
import { Bill } from '../components/bills/Bill';

export const BillsPage = () => {
    
      return (
     <div>
        <HomeNavbar />
        <Bill />
     </div>
      );
    }