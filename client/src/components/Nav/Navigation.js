import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.png";

const tabs = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/shop",
    label: "Shop",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

function Navigation() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else 
    {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="tab-nav navbar navbar-light" role="navigation">
      <Nav className="w-100">
        <div className="d-flex flex-row justify-content-around w-100">
          {tabs.map((tab, index) => (
            <NavItem key={`tab-${index}`}>
              <Link
                to={tab.route}
                className="nav-link"
                activeClassName="active"
              >
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <div>{tab.label}</div>
                </div>
              </Link>
            </NavItem>
          ))}
        </div>
      </Nav>

      <header>
        <Link to="/">
        <img
          src={logoImg}
          alt="Pet Intelligent"
        />
        </Link>
      </header>

      <nav>
        {showNavigation()}
      </nav>
  </nav>
  );
}

export default Navigation;