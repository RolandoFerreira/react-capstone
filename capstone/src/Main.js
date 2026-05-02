import { Link } from 'react-router-dom';
import restaurantImg from './images/restaurant.jpg';

function Main() {
  return (
    <main aria-label="Main content">
      <section className="hero" aria-label="Hero section">
        <article aria-label="Restaurant introduction">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.</p>
          <Link to="/booking" className="btn" aria-label="Reserve a Table">
            Reserve a Table
          </Link>
        </article>
        <img src={restaurantImg} alt="Inside view of Little Lemon restaurant" />
      </section>
    </main>
  );
}

export default Main;