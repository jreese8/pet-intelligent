import React from 'react';
import { Nav } from 'reactstrap';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.png";

function Navigation() {

  // function showNavigation() {
    if (Auth.loggedIn()) {
      return (

      <nav className="navbar navbar-light" role="navigation">
        <Nav className="w-100">
          <div className="d-flex justify-content-around w-100">

            <Link className="title" to="/">
              <img
              src={logoImg}
              alt="Pet Intelligent"
              width="25%"
            />
            Pet Intelligent
            </Link>

            <Link className='link' to="/">
              Home
            </Link>

            <Link className='link' to="/shop">
              Shop
            </Link>

            <Link className='link' to="/contact">
              Contact
            </Link>

            <ul className="pt-2">
              <li>
                <Link className='link' to="/orderHistory">
                  Order History
                </Link>
              </li>

              <li>
                {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                <a className="link" href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </Nav>
      </nav>
    );
    } else {

      return (
      <nav className="navbar navbar-light" role="navigation">
        <Nav className="w-100">
          <div className="d-flex justify-content-around w-100">

            <Link className="title" to="/">
              <img
              src={logoImg}
              alt="Pet Intelligent"
              width="25%"
            />
              Pet Intelligent
            </Link>

            <Link className='link' to="/">
              Home
            </Link>

            <Link className='link' to="/shop">
              Shop
            </Link>

            <Link className='link' to="/contact">
              Contact
            </Link>

            <ul className='pt-2'>
              <li>
                <Link className='link' to="/signup">
                  Signup
                </Link>
              </li>

              <li>
                <Link className='link' to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
      </nav>
      );
    }
  }

export default Navigation;