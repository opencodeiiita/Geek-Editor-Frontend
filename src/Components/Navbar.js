import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from '../assets/images/Logo.png'; 
const Navbar = () => {
    const [link, setLink] = useState('link');
    return (
        <>
       
            <div id="navbar">
                <div className="logo">
                    <img className="logoImg" src={logo} alt="Logo" />
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
            {/* if(`${link}`==) */}
            
        </>
    );

};

export default Navbar;
