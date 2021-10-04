import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    const [link, setLink] = useState('link');  
    return (
        <>
            <div id="navbar">
                  <div className="logo">
                    <p>LOGO</p>
                  </div>
                  <input type="checkbox" id="click"/>
                  <label htmlFor="click" className="fa fa-bars menu-icon" ></label>
                 <label htmlFor="click" className="fa fa-close close-icon"></label>
                  <ul>
                   
                    <li className="nav-item">
                        <Link className={`${link} active`} to="/compiler">Compiler</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`${link}`} to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
