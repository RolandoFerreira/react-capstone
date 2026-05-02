import { Link } from 'react-router-dom';
import Footer from './Footer';

function ConfirmedBooking() {
  return (
    <>
      <section className="booking">
        <div className="section-inner">
          <h1>Booking Confirmed!</h1>
          <p style={{ color: '#edefee', fontSize: '1.125rem', margin: '1rem 0' }}>
            Thank you for your reservation. We look forward to seeing you at Little Lemon.
          </p>
          <Link to="/" className="btn" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ConfirmedBooking;