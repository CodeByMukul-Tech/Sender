import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage / cookies
    sessionStorage.clear();
    // Optionally clear auth tokens in localStorage
    localStorage.removeItem('authToken');
    // Redirect to home page
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0b0c10'
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontFamily: 'Courier New, monospace',
    color: '#0b0c10',
    backgroundColor: '#45a29e',
    border: '2px solid #66fcf1',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 0 10px #45a29e'
  }
};