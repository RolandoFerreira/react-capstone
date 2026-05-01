import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Special from './Special'
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import "./App.css"
function App() {
  return (
    <>
      <div className="container">
      <Header />
      <Nav />
      <Main/>
      <Special/>
      <Testimonials />
      <About />
      <Footer />
      </div>
    </>
  );
}

export default App;
