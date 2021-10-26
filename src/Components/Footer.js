import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Footer.css";
import logo from '../assets/images/Logo.png'; 
import Git from '../assets/images/Github.png'; 
import Twitter from '../assets/images/Twitter.png'; 
import Facebook from '../assets/images/Facebook.png'; 

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
                <img src="../assets/images/Facebook.png" src={Facebook}/>
                <img src="../assets/images/Twitter.png" src={Twitter}/>
                <img src="../assets/images/Github.png" src={Git}/>                
              </div> 
            </div>
            <hr className="line"/>
            <div className="link-boxes">
            
              <ul className="Mentors" id="Email" >
                <li className="link_name">CONTACT US :</li>
                <div className="contact-flex">
                <div>
                <div>Priyal Saxena</div> 
                <div>iec2020123@iiita.ac.in</div>
                </div>
                <div>
                <div>Mudit Agarwal</div> 
                <div>iit2020092@iiita.ac.in</div>
                </div>
                <div>
                <p>Akshaj Kansal</p> 
                <p>iit2020245@iiita.ac.in</p>
                </div>
                </div>
              </ul>
              <div className="explore">
              <div className="Mentors" id="contents">
                <li className="link_name">EXPLORE</li>
                <li><Link to='/#'>Home</Link></li>
                <li><Link to='/#'>About</Link></li>
                <li><Link to='/#'>Team</Link></li>
                
              
              </div>
              <div className="Mentors" >
                <li className="link_name">LEGALS</li>
                <li><Link to='/#'>Contact us</Link></li>
                <li><Link to='/#'>Team</Link></li>
                <li><Link to='/#'>Privacy</Link></li>
              </div>
          <div className="Mentors" >                                
                <li className="link_name">JOIN US</li>
                <li><Link to='/https://discord.com/invite/PX7uJCSXPw'>Discord</Link></li>
                <li><Link to='/https://devfolio.co/opencode/dashboard'>DevFolio</Link></li>
                <li><Link to='/https://opencodeiiita.github.io/'>VISIT US</Link></li>
            </div> 
              </div>
              
            </div>
          </div>
          <hr/>
              <div className="bottom-details">
              <div className="bottom_text">
                <span className="copyright_text">Copyright©2021 <Link to='/https://geek-editor-frontend.herokuapp.com/compiler'>Geek Editor.</Link> </span>
                <span className="policy_terms">                
                  <img src={logo} height="55" alt="Logo"/>
                </span>
              </div>
            </div>
        </footer>
        
    );

};

export default Footer;
