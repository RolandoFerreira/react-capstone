import chefsTalking from './images/Mario and Adrian A.jpg';
import mediterraneanFood from './images/restauranfood.jpg';

function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
            Mario Rossi grew up in Naples, Italy, where his grandmother's kitchen
          became his first classroom. Trained in traditional Mediterranean cooking,
          he brings authentic family recipes and years of professional experience to
          every dish at Little Lemon.</p>
        <p>  Adrian Rossi, Mario's younger brother, leads
          the marketing and expanded the menu beyond classic Italian to include
          flavors from Greece, Lebanon, and Turkey. Together, they created a warm,
          rustic restaurant where great food meets a welcoming atmosphere for everyone
        </p>
      </div>
      <div className="about-images">
        <img className="img-top" src={chefsTalking} alt="Chefs talking" />
        <img className="img-bottom" src={mediterraneanFood} alt="Mediterranean food" />
      </div>
    </section>
  );
}

export default About;