import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Footer.css";
import logo from '../assets/images/Logo.png'; 
const Footer = (props) => {

    return (
        <footer>
          <div className="content">
            <div className="top">
              <div className="logo-details">
                <h1 className="logo_name">OpenCode'21</h1>
              <br/>
              <br/>
                <p className="para">A month-long program starting in October for students to start their journey in the world of open source.
                  The Only requirement being an enthusiastic heart to learn.</p>
              </div>
              <br/>
              <br/>
              <div className="media-icons">
                <img src="../assets/images/Facebook.png" className="fa fa-facebook"/>
                <img src="../assets/images/Twitter.png" className="fa fa-twitter"/>
                <img src="../assets/images/Github.png" className="fa fa-instagram"/>
                
                
              </div>
            </div>
            <div className="link-boxes">
              <ul className="Mentors" id="Email" >
                <li className="link_name" id="c1">CONTACT US :</li>
                <div><li><Link to='#'>Priyal Saxena : iec2020123@iiita.ac.in</Link></li></div>
                <hr/>
                <div><li><Link to='#'>Mudit Agarwal : iit2020092@iiita.ac.in</Link></li></div>
                <hr/>
                <div><li><Link to='/#'>Akshaj Kansal : iit2020245@iiita.ac.in</Link></li></div>
                
              </ul>
              <ul className="Mentors" id="contents">
                <li className="link_name">EXPLORE</li>
                <li><Link to='/#'>Home</Link></li>
                <li><Link to='/#'>About</Link></li>
                <li><Link to='/#'>Team</Link></li>
                
              
              </ul>
              <ul className="Mentors" >
                <li className="link_name">LEGALS</li>
                <li><Link to='/#'>Contact us</Link></li>
                <li><Link to='/#'>Team</Link></li>
                <li><Link to='/#'>Privacy</Link></li>
              </ul>
          <ul className="Mentors" >                                
                <li className="link_name">JOIN US</li>
                <li><Link to='/https://discord.com/invite/PX7uJCSXPw'>Discord</Link></li>
                <li><Link to='/https://devfolio.co/opencode/dashboard'>Discord</Link></li>
                <br/>
                <li><Link to='/https://opencodeiiita.github.io/'><button id="button"> VISIT US </button></Link></li>
              </ul> 
            </div>
          </div>
          <hr/>
              <div className="bottom-details">
              <div className="bottom_text">
                <span className="copyright_text">Copyright©2021 <Link to='/https://geek-editor-frontend.herokuapp.com/compiler'>Geek Editor.</Link> </span>
                <span className="policy_terms">                
                  <img src="../assets/images/Logo.png" height="100" alt="Logo"/>
                </span>
              </div>
            </div>
        </footer>
        
    );

};

export default Footer;
