import restaurantImg from'./images/restaurant.jpg';
function Main(){
    return(
        <main>
            <secction className="hero">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href="#reservations" className="btn">Reserve a Table</a>
                </article>
                <img src={restaurantImg} alt="Restaurant" />
            </secction>
        </main>
    );
}
export default Main;