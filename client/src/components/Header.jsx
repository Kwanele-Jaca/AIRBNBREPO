import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaBars,
  FaUserCircle,
  FaGlobe,
  FaSearch,
} from "react-icons/fa";

import logo from "../assets/airbnb-logo.svg";



function Header() {
  const [showHostMenu, setShowHostMenu] = useState(false);
const [showUserMenu, setShowUserMenu] = useState(false);
  return (
    <header className="header">

      {/* LEFT SIDE */}

    <div className="logo-container">
  <Link to="/">
    <img src={logo} alt="Airbnb Logo" />
  </Link>
</div>


      {/* CENTER SEARCH BAR */}

      <div className="search-container">
        <Link to="/locations" className="search-link">

  <div className="search-item">

    <h4>Location</h4>

    <p>Select location</p>

  </div>

</Link>
        


        <div className="search-item">

          <h4>Check In</h4>

          <p>Select date</p>

        </div>


        <div className="search-item">

          <h4>Check Out</h4>

          <p>Select date</p>

        </div>


        <div className="search-item">

          <h4>Guests</h4>

          <p>Add guests</p>

        </div>


        <button className="search-btn">

          <FaSearch />

        </button>

      </div>


      {/* RIGHT SIDE */}

      <div className="header-right">

        <button className="globe-btn">

          <FaGlobe />

        </button>

           <div className="host-dropdown">

  <button
    className="host-btn"
    onClick={() => setShowHostMenu(!showHostMenu)}
  >
    Become a Host
  </button>

  {showHostMenu && (
    <div className="dropdown-menu">

      <Link to="/host">
        Start Hosting
      </Link>

      <Link to="/host">
        Host Dashboard
      </Link>

      <Link to="/my-listings">
        My Listings
      </Link>

    </div>
  )}

</div>

       <div className="profile-wrapper">

  <div
    className="profile-menu"
    onClick={() => setShowUserMenu(!showUserMenu)}
  >
    <button className="icon-btn">
      <FaBars />
    </button>

    <button className="icon-btn">
      <FaUserCircle />
    </button>
  </div>

  {showUserMenu && (
    <div className="dropdown-menu">

      <Link to="/signup">
        Sign Up
      </Link>

      <Link to="/login">
        Log In
      </Link>

    </div>
  )}

</div>
      </div>

    </header>
  );
}

export default Header;