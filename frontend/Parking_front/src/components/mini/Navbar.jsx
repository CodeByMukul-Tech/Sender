import { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchText, setSearchText] = useState("");


  // fetch a random car image from your server on mount
  
  const handleSearch = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/search",
        { query: searchText },
        { headers: { "Content-Type": "application/json" } }
      );
      alert(res.data.result);
    } catch (err) {
      console.error(err);
      alert("Search failed");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          CarLux Rentals
        </Link>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search cars, locations..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <button className="search-btn" onClick={handleSearch}>
          🔍
        </button>

       
      
      </div>

      <ul className="navbar-right">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
