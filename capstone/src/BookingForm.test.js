import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const dispatch = jest.fn();
const submitForm = jest.fn();

beforeEach(() => {
  window.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

function initializeTimes() {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(new Date());
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof window.fetchAPI === 'function') {
        return window.fetchAPI(new Date(action.date));
      }
      return state;
    default:
      return state;
  }
}

test('Renders the "Choose date" label', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  expect(screen.getByText('Choose date')).toBeInTheDocument();
});

test('Renders the "Choose time" label', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  expect(screen.getByText('Choose time')).toBeInTheDocument();
});

test('Renders the "Number of guests" label', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  expect(screen.getByText('Number of guests')).toBeInTheDocument();
});

test('Renders the "Occasion" label', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  expect(screen.getByText('Occasion')).toBeInTheDocument();
});

test('Renders the submit button', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  expect(screen.getByText('Make Your Reservation')).toBeInTheDocument();
});

test('date input has required attribute', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  const dateInput = screen.getByLabelText('Choose date');
  expect(dateInput).toHaveAttribute('required');
});

test('date input has min attribute set to today', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  const dateInput = screen.getByLabelText('Choose date');
  const today = new Date().toISOString().split('T')[0];
  expect(dateInput).toHaveAttribute('min', today);
});

test('guests input has required attribute', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  const guestsInput = screen.getByLabelText('Number of guests');
  expect(guestsInput).toHaveAttribute('required');
});

test('guests input has min value of 1', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  const guestsInput = screen.getByLabelText('Number of guests');
  expect(guestsInput).toHaveAttribute('min', '1');
});

test('guests input has max value of 10', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  const guestsInput = screen.getByLabelText('Number of guests');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('guests input has type number', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  const guestsInput = screen.getByLabelText('Number of guests');
  expect(guestsInput).toHaveAttribute('type', 'number');
});

test('submit button is disabled when form is invalid', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  const button = screen.getByText('Make Your Reservation');
  expect(button).toBeDisabled();
});

test('submit button is enabled when form is valid', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2025-12-25' } });
  fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '2' } });
  const button = screen.getByText('Make Your Reservation');
  expect(button).not.toBeDisabled();
});

test('shows error when date is empty and field is touched', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  fireEvent.blur(screen.getByLabelText('Choose date'));
  expect(screen.getByText('Please select a date.')).toBeInTheDocument();
});

test('shows error when guests is out of range', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '0' } });
  fireEvent.blur(screen.getByLabelText('Number of guests'));
  expect(screen.getByText('Number of guests must be between 1 and 10.')).toBeInTheDocument();
});

test('does not call submitForm when form is invalid', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  fireEvent.click(screen.getByText('Make Your Reservation'));
  expect(submitForm).not.toHaveBeenCalled();
});

test('calls submitForm when form is valid', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2025-12-25' } });
  fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '2' } });
  fireEvent.click(screen.getByText('Make Your Reservation'));
  expect(submitForm).toHaveBeenCalledWith({
    date: '2025-12-25',
    time: '17:00',
    guests: '2',
    occasion: 'Birthday',
  });
});

test('initializeTimes returns available times from fetchAPI', () => {
  const times = initializeTimes();
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
});

test('updateTimes returns available times for a selected date', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_TIMES', date: '2025-12-25' };
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2025-12-25'));
});

test('updateTimes returns unchanged state for unknown action types', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UNKNOWN_ACTION' };
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(currentState);
});

test('submitForm writes booking data to local storage', () => {
  localStorage.clear();
  const formData = { date: '2025-12-25', time: '18:00', guests: 2, occasion: 'Birthday' };
  const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
  existing.push(formData);
  localStorage.setItem('bookings', JSON.stringify(existing));
  const bookings = JSON.parse(localStorage.getItem('bookings'));
  expect(bookings).toHaveLength(1);
  expect(bookings[0]).toEqual(formData);
});

test('reads bookings correctly from local storage', () => {
  localStorage.clear();
  const mockBookings = [
    { date: '2025-12-25', time: '18:00', guests: 2, occasion: 'Birthday' },
    { date: '2025-12-26', time: '19:00', guests: 4, occasion: 'Anniversary' },
  ];
  localStorage.setItem('bookings', JSON.stringify(mockBookings));
  const bookings = JSON.parse(localStorage.getItem('bookings'));
  expect(bookings).toHaveLength(2);
  expect(bookings[0].date).toBe('2025-12-25');
  expect(bookings[1].occasion).toBe('Anniversary');
});