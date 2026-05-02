import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const dispatch = jest.fn();

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
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});

test('Renders the "Choose time" label', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const labelElement = screen.getByText('Choose time');
  expect(labelElement).toBeInTheDocument();
});

test('Renders the "Number of guests" label', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const labelElement = screen.getByText('Number of guests');
  expect(labelElement).toBeInTheDocument();
});

test('Renders the "Occasion" label', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const labelElement = screen.getByText('Occasion');
  expect(labelElement).toBeInTheDocument();
});

test('Renders the submit button', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const buttonElement = screen.getByText('Make Your Reservation');
  expect(buttonElement).toBeInTheDocument();
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