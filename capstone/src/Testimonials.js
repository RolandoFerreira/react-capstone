function Testimonials() {
  const testimonials = [
    { id: 1, name: "John D.", rating: "⭐⭐⭐⭐⭐", review: "Amazing food and great atmosphere!" },
    { id: 2, name: "Sarah M.", rating: "⭐⭐⭐⭐⭐", review: "Best Mediterranean food in Chicago!" },
    { id: 3, name: "Mike R.", rating: "⭐⭐⭐⭐", review: "Lovely place, will definitely come back." },
    { id: 4, name: "Emma L.", rating: "⭐⭐⭐⭐⭐", review: "The lemon dessert is absolutely divine!" },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-cards">
        {testimonials.map((t) => (
          <article key={t.id} className="testimonial-card">
            <div className="testimonial-avatar">👤</div>
            <h3>{t.name}</h3>
            <p>{t.rating}</p>
            <p>{t.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;