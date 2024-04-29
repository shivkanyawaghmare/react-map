import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import ExploreLogo from '../assets/Vector/ExploreLogo.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/GroupsOutlined';
import Button  from '../components/Button';
import './Navbar.css'; // Import custom Navbar styles

export default function Navbar() {
  const location = useLocation();

  return (
    <header id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={ExploreLogo} className="logo" alt="Koshish Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item nav-home">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                  Home <HomeOutlinedIcon />
                </Link>
              </li>
              {/* <li className="nav-item nav-cp">
                <NavLink className={`nav-link ${location.pathname === '/addprofile' ? 'active' : ''}`} to="/addprofile">
                  Create Profile <Groups2OutlinedIcon />
                </NavLink>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  <Button label="Explore Profile" c="login-btn" type="start" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
