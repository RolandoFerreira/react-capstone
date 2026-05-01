import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
