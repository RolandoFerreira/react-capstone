import logo from './images/stamplogo.png';
function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />

      <div className="footer-col">
        <h4>Doormat Navigation</h4>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#order">Order Online</a>
        <a href="#login">Login</a>
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
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
        <a href="#twitter">Twitter</a>
      </div>
    </footer>
  );
}
export default Footer;
