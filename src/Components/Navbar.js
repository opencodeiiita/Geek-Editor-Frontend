import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div className="logo">

                </div>
                <ul>
                    <li className="item">
                        <Link className="link" to="/compiler">Compiler</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
