import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate]         = useState('');
  const [time, setTime]         = useState(availableTimes[0]);
  const [guests, setGuests]     = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errors, setErrors]     = useState({});
  const [touched, setTouched]   = useState({});

  const validate = (fields) => {
    const newErrors = {};
    if (!fields.date) newErrors.date = 'Please select a date.';
    if (!fields.time) newErrors.time = 'Please select a time.';
    if (!fields.guests || fields.guests < 1 || fields.guests > 10)
      newErrors.guests = 'Number of guests must be between 1 and 10.';
    if (!fields.occasion) newErrors.occasion = 'Please select an occasion.';
    return newErrors;
  };

  const isFormValid = () =>
    Object.keys(validate({ date, time, guests, occasion })).length === 0;

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate({ date, time, guests, occasion }));
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    setErrors(validate({ date: selectedDate, time, guests, occasion }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true, occasion: true });
    const validationErrors = validate({ date, time, guests, occasion });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table reservation form"
      noValidate
    >
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          onBlur={() => handleBlur('date')}
          min={new Date().toISOString().split('T')[0]}
          aria-required="true"
          aria-invalid={touched.date && errors.date ? 'true' : 'false'}
          aria-describedby={errors.date ? 'date-error' : undefined}
          required
        />
        {touched.date && errors.date &&
          <span id="date-error" className="error-msg" role="alert">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => { setTime(e.target.value); handleBlur('time'); }}
          aria-required="true"
          aria-label="On Click"
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {touched.time && errors.time &&
          <span id="time-error" className="error-msg" role="alert">{errors.time}</span>}
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
          onBlur={() => handleBlur('guests')}
          aria-required="true"
          aria-invalid={touched.guests && errors.guests ? 'true' : 'false'}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
          required
        />
        {touched.guests && errors.guests &&
          <span id="guests-error" className="error-msg" role="alert">{errors.guests}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          onBlur={() => handleBlur('occasion')}
          aria-required="true"
          aria-label="On Click"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {touched.occasion && errors.occasion &&
          <span id="occasion-error" className="error-msg" role="alert">{errors.occasion}</span>}
      </div>

      <button
        type="submit"
        className="btn"
        disabled={!isFormValid()}
        aria-label="On Click"
        aria-disabled={!isFormValid()}
        style={{ opacity: isFormValid() ? 1 : 0.5, cursor: isFormValid() ? 'pointer' : 'not-allowed' }}
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;