import React from 'react'
import './nav.scss'
// import { FaFacebook} from 'react-icons/fa';
// import { FaInstagram} from 'react-icons/fa';
// import { FaTwitter} from 'react-icons/fa';

export const Nav = () => {
  return (
    <div class='navbar'>
       <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      COWORKING
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="/" target="_blank">Home </a>
    <a href="/" target="_blank">Benefits</a>
    <a href="/" target="_blank">About</a>
    <a href="/" target="_blank">Blog</a>
    <a href="/" target="_blank">View</a>
    {/* <FaFacebook class='icons'/>
    <FaInstagram class='icons'/>
    <FaTwitter class='icons'/> */}
  </div>
 
</div>
    
    </div>
  )
}
