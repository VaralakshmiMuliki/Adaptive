import React from "react";
import "./benefits.scss";
import { AiOutlineMail,AiOutlineDesktop ,AiOutlineFileText,AiOutlineCalendar} from 'react-icons/ai';
import {RiSuitcase3Line} from 'react-icons/ri'
import{FaRocketchat} from 'react-icons/fa'
import {FiGlobe,FiMonitor} from 'react-icons/fi'

export const Benefits = () => {
  return (
    <div class="benefits-bg">
      <div class='align-benefits-head'>
        <div>
          <h5 class="benefits-head">BENEFITS</h5>
          <p class="benefits-description">Your Comfort is our priority</p>
        </div>
        <p class="lorem-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          odit aspernatur corporis et dolore itaque. Deserunt eaque labore
          provident, dicta fuga rerum nesciunt error.
        </p>
      </div>
      <div class="benefits-cards-container">
        <div class="card">
      <AiOutlineMail class='icon'/>
      <h2 className="benefits-item">Mail</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          
        </div>
        <div class="card">
      <AiOutlineDesktop class='icon'/>
      <h2 className="benefits-item">Visual</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          
        </div>
        <div class="card">
      <AiOutlineFileText class='icon'/>
      <h2 className="benefits-item">File</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          
        </div>
        <div class="card">
      <AiOutlineCalendar class='icon'/>
      <h2 className="benefits-item">Calender</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          
        </div>
       
        <div class="card">
      <RiSuitcase3Line class='icon'/>
      <h2 className="benefits-item">Suitcase</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          
        </div>
  
        <div class="card">
      <FaRocketchat class='icon'/>
      <h2 className="benefits-item">Chat</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          
        </div>
        
        <div class="card">
      <FiGlobe class='icon'/>
      <h2 className="benefits-item">Global</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          
        </div>
        <div class="card">
      <FiMonitor class='icon'/>
      <h2 className="benefits-item">Sites</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          
        </div>
      </div>
    </div>
  );
};
