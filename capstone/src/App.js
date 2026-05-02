import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import "./App.css";

function initializeTimes() {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(new Date());
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof window.fetchAPI === 'function') {
        return window.fetchAPI(new Date(action.date));
      }
      return state;
    default:
      return state;
  }
}

function AppContent() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (typeof window.submitAPI === 'function') {
      const success = window.submitAPI(formData);
      if (success) {
        const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
        existing.push(formData);
        localStorage.setItem('bookings', JSON.stringify(existing));
        navigate('/confirmed');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } else {
      const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
      existing.push(formData);
      localStorage.setItem('bookings', JSON.stringify(existing));
      navigate('/confirmed');
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;