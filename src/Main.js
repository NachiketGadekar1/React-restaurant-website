import React, { useState, useReducer} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './More Components/Home';
import About from './More Components/About.js';
import Order from './More Components/Order';
import Login from './More Components/Login';
import BookingForm from './More Components/BookingPage';
import Menu from './More Components/Menu';
import './styles.css';

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
const [guests, setGuests] = useState(1);
const [occasion, setOccasion] = useState('');

  function timesReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(action.date);
      default:
        return state;
    }
  }

  function updateTimes(selectedDate) {
       return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

  function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

  return (
    <main className='main'>
        <Routes>
         <Route path="/More Components/Home" element={<Home />} /> 
        <Route path="/More Components/About" element={<About />} />
        <Route path="/More Components/Login" element={<Login />} />
        <Route path="/More Components/Menu" element={<Menu />} />
        <Route
          path="/More Components/Order"
          element={<Order availableTimes={availableTimes} />}
        />
        <Route
  path="/More Components/BookingPage"
  element={
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
    />
  }
/>


      </Routes>
    </main>
  );
}

export default Main;