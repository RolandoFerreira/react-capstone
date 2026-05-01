// BookingPage.js
import Footer from './Footer';

function BookingPage() {
  return (
    <>
      <section className="booking">
        <div className="section-inner">
          <h1>Reserve a Table</h1>
          <form className="booking-form">

            <div className="form-group">
              <label htmlFor="date">Choose date</label>
              <input type="date" id="date" />
            </div>

            <div className="form-group">
              <label htmlFor="time">Choose time</label>
              <select id="time">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of guests</label>
              <input type="number" id="guests" min="1" max="10" placeholder="1" />
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
              </select>
            </div>

            <button type="submit" className="btn">Make Your Reservation</button>

          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookingPage;