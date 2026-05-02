import greekSalad from './images/greek salad.jpg';
import bruchetta from './images/bruchetta.png';
import lemonDessert from './images/lemon dessert.jpg';

const handleOrderOnline = (e) => {
  e.preventDefault();
  alert("Order Online is coming soon! We're working hard to bring this to you.");
};

function Specials() {
  return (
    <section id="menu" className="specials" aria-label="Weekly specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <a href="#order" className="btn" aria-label="View Online Menu" onClick={handleOrderOnline}>
          Online Menu
        </a>
      </div>
      <div className="specials-cards" role="list">
        <article className="card" role="listitem" aria-label="Greek Salad special">
          <div className="card-img-wrapper">
            <img src={greekSalad} alt="Fresh Greek Salad with feta cheese and olives" />
          </div>
          <div className="card-body">
            <div className="card-title-row">
              <h3>Greek Salad</h3>
              <span className="card-price" aria-label="Price: 12 dollars 99 cents">$12.99</span>
            </div>
            <p>Crispy lettuce, peppers, olives and our Chicago-style
            feta cheese, straight from the markets.</p>
            <a href="#order" className="card-order" aria-label="Order Greek Salad for delivery" onClick={handleOrderOnline}>
              Order a delivery →
            </a>
          </div>
        </article>

        <article className="card" role="listitem" aria-label="Bruschetta special">
          <div className="card-img-wrapper">
            <img src={bruchetta} alt="Bruschetta with garlic and olive oil on grilled bread" />
            <span className="dish-tag">Starter</span>
          </div>
          <div className="card-body">
            <div className="card-title-row">
              <h3>Bruschetta</h3>
              <span className="card-price" aria-label="Price: 7 dollars 99 cents">$7.99</span>
            </div>
            <p>Our Bruschetta is made from grilled bread rubbed with
            garlic and seasoned with salt and olive oil.</p>
            <a href="#order" className="card-order" aria-label="Order Bruschetta for delivery" onClick={handleOrderOnline}>
              Order a delivery →
            </a>
          </div>
        </article>

        <article className="card" role="listitem" aria-label="Lemon Dessert special">
          <div className="card-img-wrapper">
            <img src={lemonDessert} alt="Lemon dessert from Grandma's recipe" />
          </div>
          <div className="card-body">
            <div className="card-title-row">
              <h3>Lemon Dessert</h3>
              <span className="card-price" aria-label="Price: 5 dollars">$5.00</span>
            </div>
            <p>This comes straight from Grandma's recipe book. Every
            bite is a note of zesty Mediterranean bliss.</p>
            <a href="#order" className="card-order" aria-label="Order Lemon Dessert for delivery" onClick={handleOrderOnline}>
              Order a delivery →
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
export default Specials;