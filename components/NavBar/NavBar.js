import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <Navbar className="nav-head my-4" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-center">
                  <Link className="nav-item nav-link px-4" to="/">Home</Link>
                  <Link className="nav-item nav-link px-4" to="/appointment">Appointment</Link>
                  <a className="nav-item nav-link px-4" rel="noopener noreferrer" href="https://squareup.com/gift/YTS2NZM3DKMKQ/order" target="_blank">Gift Card</a>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;