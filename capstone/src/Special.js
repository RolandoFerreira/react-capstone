import greekSalad from './images/greek salad.jpg';
import bruchetta from './images/bruchetta.png';
import lemonDessert from './images/lemon dessert.jpg'

function Specials(){
    return(
        <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <a href="#menu" className="btn">Online Menu</a>
      </div>
      <div className="specials-cards">
        <article className="card">
          <div className="card-img-wrapper">
          <img src={greekSalad} alt="Greek Salad" />
          </div>
          <div className="card-body">
            <div className="card-title-row">
              <h3>Greek Salad</h3>
              <span className="card-price">$12.99</span>
            </div>
            <p>Crispy lettuce, peppers, olives and our Chicago-style
            feta cheese, straight from the markets.</p>
            <a href="#order" className="card-order">Order a delivery →</a>
          </div>
        </article>

        <article className="card">
          <div className="card-img-wrapper">
          <img src={bruchetta} alt="Bruschetta" />
          <span className="dish-tag">Starter</span>
          </div>
          <div className="card-body">
            <div className="card-title-row">
              <h3>Bruschetta</h3>
              <span className="card-price">$7.99</span>
            </div>
            <p>Our Bruschetta is made from grilled bread rubbed with
            garlic and seasoned with salt and olive oil.</p>
            <a href="#order" className="card-order">Order a delivery →</a>
          </div>
        </article>

        <article className="card">
          <div className="card-img-wrapper">
          <img src={lemonDessert} alt="Lemon Dessert" />
          </div>
          <div className="card-body">
            <div className="card-title-row">
              <h3>Lemon Dessert</h3>
              <span className="card-price">$5.00</span>
            </div>
            <p>This comes straight from Grandma's recipe book. Every
            bite is a note of zesty Mediterranean bliss.</p>
            <a href="#order" className="card-order">Order a delivery →</a>
          </div>
        </article>
      </div>
    </section>
    );
}
export default Specials;