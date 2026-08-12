import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Features />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}

export default App;
