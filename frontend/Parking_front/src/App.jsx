import React from "react";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register.jsx";
import Navbar from "./components/mini/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login.jsx";
import Logout from "./components/pages/Logout/Logout.jsx";
import Sidebar from "./components/mini/Sidebar_navigate.jsx";
import BookingForm from "./components/pages/Booking_forms/Booking.jsx";
function App() {
  return (
    <>
     <Navbar/>
     <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout/>} />
        <Route path="/Booking" element={<BookingForm/>}/>
      </Routes>
    </>
  );
}

export default App;
