import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // 1. Check if email exists
      let response = await fetch('/api/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const emailData = await response.json();

      if (!emailData.exists) {
        setError('Email not found. Please sign up first.');
        return;
      }

      // 2. Validate password
      response = await fetch('/api/check-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const passData = await response.json();

      if (!passData.valid) {
        setError('Incorrect password. Please try again.');
        return;
      }

      // 3. On success, navigate to home
      navigate('/home');

    } catch (err) {
      console.error('Login error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="error-msg">{error}</div>}
        <label className='texts' htmlFor="email">Email ID</label>
        <input

          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label className='texts' htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">Sign In</button>
 
         
      </form>
    </div>
  );
}
