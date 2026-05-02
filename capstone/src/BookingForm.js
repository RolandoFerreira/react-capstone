import { useState } from 'react';
function BookingForm() {
  const [date, setDate]         = useState('');
  const [time, setTime]         = useState('17:00');
  const [guests, setGuests]     = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const [availableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', { date, time, guests, occasion });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button type="submit" className="btn">
        Make Your Reservation
      </button>

    </form>
  );
}

export default BookingForm;