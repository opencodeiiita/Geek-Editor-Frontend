import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from '../assets/images/Logo.png'; 
const Navbar = (props) => {
    const [link, setLink] = useState('link');
    const arr = ['moon', 'sun'];
    
    const [forMode, setForMode] = useState(`${arr[Number(props.check)]}`);
  
    const changemode=()=>{
        if(forMode==='moon')
        {  setForMode('sun');
           props.checkfunc();
        }
          else 
         {  setForMode('moon');
            props.checkfunc();
        }
             
    }
    const mode = props.thememode;
    return (
        <>
            
            <div  className={`navbar ${mode}`}>
                <div className="logo">
                    <img className="logoImg" src={logo} alt="geek editor logo" />

                </div>
                
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="fa fa-bars menu-icon" ></label>
                <label htmlFor="click" className="fa fa-close close-icon"></label>
                <ul>

                    <li className="nav-item">
                        <NavLink className={`${link} itemm`} to="/compiler" activeStyle={{background: "white",color:"black" }}>Compiler</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`${link} active itemm`} to="/dashboard"  activeStyle={{background: "white",color:"black" }}>Dashboard</NavLink>
                    </li>
                </ul>
            </div>
            <div className="darkmode" onClick={changemode}>
               <i className={`fa fa-${forMode}-o ${forMode}`} ></i>  
           </div>
            {/* if(`${link}`==) */}
            
        </>
    );

};

export default Navbar;
