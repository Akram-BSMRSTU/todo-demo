import React, { useState } from 'react';


import {DayPicker} from "react-day-picker";
import 'react-day-picker/dist/style.css';



const Calender = (
    
) => {
    return (
        
        <div className='bg-rose-700 grid justify-center'>
      <h2 className='text-warning text-2xl font-bold text-center my-5'>Don't miss a date!</h2>
      
      <DayPicker
       mode="single"
       className='text-success'
       
       />
      
      </div>
    
        
    );
};

export default Calender;