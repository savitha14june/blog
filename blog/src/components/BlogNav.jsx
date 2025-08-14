// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import logo from "../images/logo.jpeg";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md'; 
import '../styles.css';

const BlogNav = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

    return (
        <div>
            <Navbar className={isDarkMode ? 'navbar-dark' : 'navbar-light'}>
                <img
                    src={logo}
                    height='30'
                    alt=''
                    loading='cool'
                />
                <Navbar.Brand href="/" style={{ color: "white", marginLeft: "10px" }}>Welcome to my  blog...</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Link to="/drawings" className="nav-link" style={{ color: "white" }}>
                            Drawings
                        </Link>
                        <Nav.Link href="/books" style={{ color: "white" }}>
                            Books
                        </Nav.Link>
                        <Nav.Link href="/cooking" style={{ color: "white" }}>
                            Cooking experiments
                        </Nav.Link>
                        <Nav.Link href="/learning" style={{ color: "white" }}>
                            Learning corner
                        </Nav.Link>
                    </Nav>
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
                    </button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default BlogNav;
