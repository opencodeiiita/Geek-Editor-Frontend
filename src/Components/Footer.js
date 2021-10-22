import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Footer.css";
import logo from '../assets/images/Logo.png'; 
const Footer = (props) => {

    return (
        <footer>
          <div class="content">
            <div class="top">
              <div class="logo-details">
                <h1 class="logo_name">OpenCode'21</h1>
              <br/>
              <br/>
                <p class="para">A month-long program starting in October for students to start their journey in the world of open source.
                  The Only requirement being an enthusiastic heart to learn.</p>
              </div>
              <br/>
              <br/>
              <div class="media-icons">
                <img src="./Facebook.png" class="fa fa-facebook"></img>
                <img src="./twitter.png" class="fa fa-twitter"></img>
                <img src="./Github.png" class="fa fa-instagram"></img>
                
                
              </div>
            </div>
            <div class="link-boxes">
              <ul class="box" id="box2" >
                <li class="link_name" id="c1">CONTACT US :</li>
                <div><li><a href="#">Priyal Saxena : iec2020123@iiita.ac.in</a></li></div>
                <hr>
                <div><li><a href="#">Mudit Agarwal : iit2020092@iiita.ac.in</a></li></div>
                <hr>
                <div><li><a href="#">Akshaj Kansal : iit2020245@iiita.ac.in</a></li></div>
                
              </ul>
              <ul class="box" id="box1">
                <li class="link_name">EXPLORE</li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Team</a></li>
                
              
              </ul>
              <ul class="box" >
                <li class="link_name">LEGALS</li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy</a></li>
                
              
              </ul>
          <ul class="box" >
                <li class="link_name">JOIN US</li>
                <li><a href="https://discord.com/invite/PX7uJCSXPw">Discord</a></li>
                <li><a href="https://devfolio.co/opencode/dashboard">Devfolio</a></li>
                <br>
                <li><a href= " https://opencodeiiita.github.io/"><button id="button"> VISIT US -></button></a></li>
                
              </ul>
          
          
         
          
            </div>
          </div>
          
               <hr/>
               <hr/>
              <div class="bottom-details">
              <div class="bottom_text">
                <span class="copyright_text">Copyright©2021 <a href="https://geek-editor-frontend.herokuapp.com/compiler">Geek Editor.</a></span>
                <span class="policy_terms">
                  <img src="Logo_GEF.png" height="55", alt="Logo"></img>
                </span>
              </div>
            </div>
        </footer>
        
    );

};

export default Footer;
