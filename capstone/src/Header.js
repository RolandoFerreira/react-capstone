import { useState, useEffect } from 'react';
import logo from './images/Logo.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const scrollToSection = (id) => {
    closeMenu();
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    closeMenu();
    alert('Log In is not available yet — this feature is coming soon!');
  };

  const handleOrderOnline = (e) => {
    e.preventDefault();
    closeMenu();
    alert("Order Online is coming soon! We're working hard to bring this to you.");
  };

  const ThemeToggle = ({ className = '' }) => (
    <button
      className={`theme-toggle ${darkMode ? 'theme-toggle--on' : ''} ${className}`}
      onClick={() => setDarkMode(prev => !prev)}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      role="switch"
      aria-checked={darkMode}
    >
      <span className="theme-toggle__thumb" />
    </button>
  );

  return (
    <header role="banner" aria-label="Little Lemon header">
      <img src={logo} alt="Little Lemon Restaurant Logo" />

      <button
        className="nav-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span /><span /><span />
      </button>

      <nav
        aria-label="Main navigation"
        role="navigation"
        className={menuOpen ? 'open' : ''}
      >
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a></li>
          <li><Link to="/booking" onClick={closeMenu}>Reservations</Link></li>
          <li><a href="#order" onClick={handleOrderOnline}>Order Online</a></li>
          <li><a href="#login" onClick={handleLogin}>Log In</a></li>
        </ul>
      </nav>

      <ThemeToggle className="theme-toggle--desktop-inline" />

      <div className="mobile-controls">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;