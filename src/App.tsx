import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import News from './components/News';
import ContactForm from './components/ContactForm';
import GlobalPresence from './components/GlobalPresence';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import PhotoGallery from './pages/PhotoGallery';
import VideoGallery from './pages/VideoGallery';
import FAQ from './pages/FAQ';
import OurBranches from './pages/OurBranches';
import ContactUs from './pages/ContactUs';
import HairFixing from './pages/HairFixing'; // Imported

function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <Testimonials />
      <Products />
      <News />
      <ContactForm />
      <GlobalPresence />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/hair-fixing" element={<HairFixing />} /> {/* Added Route */}
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/branches" element={<OurBranches />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;