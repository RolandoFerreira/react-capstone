import BookingForm from './BookingForm';
import Footer from './Footer';
import restaurantImg from './images/restaurant chef B.jpg';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <section className="booking">
        <div className="booking-layout">
          <div className="section-inner">
            <h1>Reserve a Table</h1>
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          </div>
          <div className="booking-image">
            <img src={restaurantImg} alt="Inside view of Little Lemon restaurant" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookingPage;