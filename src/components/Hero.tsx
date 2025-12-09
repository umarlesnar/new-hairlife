import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: "The perfect solution to your embarrassment",
    subtitle: "{{ }} ",
    // subtitle: "Discover the perfect hair fixing solution for a natural, confident look.",
    image: "/hero/4.jpeg"
  },
  {
    title: "Transform Your Appearance",
    subtitle: "Experience world-class non-surgical hair fixing technology.",
    image: "/hero/1.png"
  },
  {
    title: "Natural Looking Results",
    subtitle: "100% natural appearance with Canadian technology.",
    image: "/hero/3.png"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Adjusted gradient to be clearer: Lighter start and fades to transparent */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#202A5B]/80 via-[#202A5B]/20 to-transparent z-10" /> */}
          
          <img
            src={slide.image}
            alt={slide.title}
            /* Added object-top to ensure heads/top sections are visible */
            className="w-full h-full object-cover object-top"
          />
          
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl text-white">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-sm">
                  {slide.subtitle}
                </p>
                <button className="bg-[#B78F59] text-white px-8 py-4 rounded-md hover:bg-[#202A5B] transition-all transform hover:scale-105 font-medium text-lg shadow-xl">
                  DISCOVER
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#B78F59] w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}