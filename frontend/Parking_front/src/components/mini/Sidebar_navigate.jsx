import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h1 className="sidebar-logo">MyApp</h1>
      <ul className="sidebar-list">
        <li><NavLink to="/" className="sidebar-link" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/login" className="sidebar-link" activeClassName="active">Login</NavLink></li>
        <li><NavLink to="/register" className="sidebar-link" activeClassName="active">Register</NavLink></li>
        <li><NavLink to="/profile" className="sidebar-link" activeClassName="active">Profile</NavLink></li>
        <li><NavLink to="/Booking" className="sidebar-link" activeClassName="active">Booking</NavLink></li>
        <li><NavLink to="/settings" className="sidebar-link" activeClassName="active">Settings</NavLink></li>
      </ul>
    </nav>
  );
}
