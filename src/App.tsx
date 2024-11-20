import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CompanyLogos from './components/CompanyLogos';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <CompanyLogos />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;