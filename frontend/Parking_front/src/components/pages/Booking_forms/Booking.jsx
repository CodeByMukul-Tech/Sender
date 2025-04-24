import React, { useState, useEffect } from 'react';
import './Booking.css';

export default function BookingForm({ calculateCost }) {
  const [location, setLocation] = useState('');
  const [pickup, setPickup] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(null);

  // Re-calculate cost whenever pickup/return change
  useEffect(() => {
    if (pickup && returnTime && calculateCost) {
      const cost = calculateCost(pickup, returnTime);
      setEstimatedCost(cost);
    }
  }, [pickup, returnTime, calculateCost]);

  const handleSubmit = e => {
    e.preventDefault();
    // send booking data to server...
    const booking = { location, pickup, returnTime, estimatedCost };
    console.log('Booking submitted:', booking);
    // TODO: replace with actual API call and navigation
    alert('Booking confirmed!');
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Car Rental Booking</h2>

        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Enter pickup location"
          required
        />

        <label htmlFor="pickup">Pickup Date & Time</label>
        <input
          id="pickup"
          type="datetime-local"
          value={pickup}
          onChange={e => setPickup(e.target.value)}
          required
        />

        <label htmlFor="return">Return Date & Time</label>
        <input
          id="return"
          type="datetime-local"
          value={returnTime}
          onChange={e => setReturnTime(e.target.value)}
          required
        />

        {estimatedCost !== null && (
          <div className="cost-estimate">
            Estimated Cost: ₹{estimatedCost}
          </div>
        )}

        <button type="submit" className="book-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
