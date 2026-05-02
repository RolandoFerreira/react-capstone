import BookingForm from './BookingForm';
import Footer from './Footer';

function BookingPage() {
  return (
    <>
      <section className= "booking">
        <div className="secion-inner">
          <h1>Reserve a Table</h1>
          <BookingForm />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookingPage;