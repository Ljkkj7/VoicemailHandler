import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1><Link to="/">Heidi Calls</Link></h1>
                {hamburgerMenu()}
                {navLinks()}
            </nav>
        );
    }
}

function hamburgerMenu() {
    return (
        <div className="hamburger-menu" onClick={handleHamburgerClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
}

function navLinks() {
    return (
        <div className="nav-links">
            <ul className="nav-list">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
}

function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}

function handleHamburgerClick() {
    console.log('Hamburger menu clicked');
    toggleMenu();
}

function handleHamburgerOutsideClick(event) {
    const menu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger-menu');
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
}

document.addEventListener('click', handleHamburgerOutsideClick);


export default Navbar;