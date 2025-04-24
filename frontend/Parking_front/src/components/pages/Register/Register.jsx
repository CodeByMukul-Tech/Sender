import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    adhar: '',
    image: null,
    password: '',
    contact: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm(prev => ({ ...prev, image: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    try {
      // Prepare form data for registration
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => {
        formData.append(key, val);
      });

      // Register user
      const res = await fetch('http://127.0.0.1:5000/api/register', {
        method: 'POST',
        body: formData
      });
      const regData = await res.json();

      if (regData.success) {
        navigate('/login');
      } else {
        setError(regData.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Try again later.');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Register</h2>
        {error && <div className="error-msg">{error}</div>}

        <label className="texts" htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label className="texts" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label className="texts" htmlFor="adhar">Aadhar Card No</label>
        <input
          type="text"
          id="adhar"
          name="adhar"
          value={form.adhar}
          onChange={handleChange}
          required
        />

        <label className="texts" htmlFor="image">Profile Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <label className="texts" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label className="texts" htmlFor="contact">Contact No</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          required
        />

        <button type="submit" className="register-btn">Sign Up</button>
      </form>
    </div>
  );
}
