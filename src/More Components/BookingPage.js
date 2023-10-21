import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, guests, setGuests, occasion, setOccasion }) {
  const [isFormValid, setIsFormValid] = useState(true);

  const handleDateChange = (e) => {
    // Dispatch an action to update available times based on the selected date
    dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if the form is valid before submitting
    if (isFormValid) {
      // Handle form submission here
    }
  }

  return (
    <div className='bookingform'>
      <h1>Little Lemon Reservations Page</h1>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleFormSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDateChange} required />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" required>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {
          setGuests(e.target.value);
          // Validate the input and set custom validity
          if (e.target.value < 1 || e.target.value > 10) {
            e.target.setCustomValidity('Number of guests must be between 1 and 10');
            setIsFormValid(false);
          } else {
            e.target.setCustomValidity('');
            setIsFormValid(true);
          }
        }} required />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your Reservation"
          disabled={!isFormValid}
          aria-label="On Click"
          className='bookbutton'
        />
      </form>
    </div>
  );
}

export default BookingForm;
