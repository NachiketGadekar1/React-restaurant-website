import React from 'react';
import { render, screen } from "@testing-library/react";
import BookingForm from './More Components/BookingPage';

test('renders "Little Lemon Reservations Page"', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  render(<BookingForm availableTimes={availableTimes} />);

  const reservationsPageText = screen.getByText('Little Lemon Reservations Page');

  expect(reservationsPageText).toBeInTheDocument();
});
