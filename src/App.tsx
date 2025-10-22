import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
// PageTransition removed — hero-only glides handled in Home.tsx
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import WhyChooseUs from './pages/WhyChooseUs';
function AppRoutes() {
  
  // No glide controls: navigation handled by normal links

  return (
    <div className="min-h-screen bg-futuristic futuristic-accent text-white relative">
      <Header />
      <ScrollToTop />
      <WhatsAppButton />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

  <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
