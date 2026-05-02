import BookingForm from './BookingForm';
import Footer from './Footer';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <section className="booking">
        <div className="section-inner">
          <h1>Reserve a Table</h1>
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookingPage;