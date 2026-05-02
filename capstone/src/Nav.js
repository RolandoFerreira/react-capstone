import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Main navigation" role="navigation">
      <ul role="list">
        <li><Link to="/" aria-label="Go to Home page">Home</Link></li>
        <li><Link to="/about" aria-label="Go to About page">About</Link></li>
        <li><Link to="/menu" aria-label="Go to Menu page">Menu</Link></li>
        <li><Link to="/booking" aria-label="Go to Reservations page">Reservations</Link></li>
        <li><Link to="/order" aria-label="Go to Order Online page">Order Online</Link></li>
        <li><Link to="/login" aria-label="Go to Log In page">Log In</Link></li>
      </ul>
    </nav>
  );
}
export default Nav;