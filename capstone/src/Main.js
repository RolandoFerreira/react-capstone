import { Link } from 'react-router-dom';
import restaurantImg from './images/restaurant.jpg';

export function initializeTimes() {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(new Date());
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
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

function Main() {
  return (
    <main>
      <section className="hero">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.</p>
          <Link to="/booking" className="btn">Reserve a Table</Link>
        </article>
        <img src={restaurantImg} alt="Restaurant" />
      </section>
    </main>
  );
}

export default Main;