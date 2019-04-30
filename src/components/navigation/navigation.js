import React from 'react'

import { Link } from 'gatsby'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
            Simple App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/about" className="nav-link">
                    About
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation