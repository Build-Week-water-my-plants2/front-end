import React from "react";
import {Link} from "react-router-dom";
import "./header.css";



export default function Header() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "login"
    }

    return(
        <header id="header">
            <h1>Water My Plants </h1>
            <nav>
                <Link className="header-link" to="/">Home</Link>
                <Link className="header-link" to="/PlantForm">Add New Plant</Link>
                <Link className="header-link" to="/PlantList">My Plants</Link>
                <Link className="header-link" to="/Signup">Sign Up</Link>
                <Link className="header-link" to="profile">Profile</Link>
                <Link className="header-link" to="Login">Login</Link>
                <a className="header-link" id="logout-style" href="/" onClick={logout}>Log Out</a>
            </nav>
        </header>
    )
}