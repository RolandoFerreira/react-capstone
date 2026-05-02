import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from './images/stamplogo.png';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleOrderOnline = (e) => {
    e.preventDefault();
    alert("Order Online is coming soon! We're working hard to bring this to you.");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Log In is not available yet — this feature is coming soon!');
  };

  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />

      <div className="footer-col">
        <h4>Doormat Navigation</h4>
        <Link to="/">Home</Link>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
        <Link to="/booking">Reservations</Link>
        <a href="#order" onClick={handleOrderOnline}>Order Online</a>
        <a href="#login" onClick={handleLogin}>Login</a>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <p>123 Mediterranean Way</p>
        <p>Chicago, Illinois</p>
        <p>+1 (312) 555-0199</p>
        <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
        <p>Rolando Ferreira &mdash; Coursera Capstone Project</p>
      </div>

      <div className="footer-col">
        <h4>Social Media Links</h4>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
