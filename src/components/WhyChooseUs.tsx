import { Shield, Scissors, Award, Wrench, HeartHandshake, Users, Sparkles, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Shield,
      title: "100% free from any side effects",
      description: "Completely safe and natural process"
    },
    {
      icon: Scissors,
      title: "No surgery or medication required",
      description: "Non-invasive hair fixing solution"
    },
    {
      icon: Award,
      title: "Unparalleled quality",
      description: "Premium materials and craftsmanship"
    },
    {
      icon: Sparkles,
      title: "World class Technical Perfection",
      description: "Advanced Canadian technology"
    },
    {
      icon: Wrench,
      title: "Best after-service",
      description: "Ongoing support and maintenance"
    },
    {
      icon: Users,
      title: "Service for both men and women",
      description: "Inclusive solutions for everyone"
    },
    {
      icon: HeartHandshake,
      title: "Non-invasive procedure",
      description: "Painless and comfortable process"
    },
    {
      icon: Globe,
      title: "Natural Canadian technology",
      description: "International quality standards"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 320; // Approximately card width + gap
      const currentScroll = containerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
        
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202A5B] mb-4 uppercase">
            Why New Hair Life?
          </h2>
          <p className="text-gray-600 text-lg">
            Unlock Confidence, Restore Beauty, Choose New Hair Life
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group px-12">
          {/* Previous Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-[#202A5B] transition-colors focus:outline-none"
            aria-label="Previous"
          >
            <ChevronLeft className="w-12 h-12" strokeWidth={1} />
          </button>

          {/* Cards Container */}
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] snap-start"
              >
                <div className="h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group/card hover:bg-[#202A5B] hover:text-white hover:-translate-y-2 cursor-default flex flex-col items-center justify-center text-center min-h-[320px]">
                  <div className="mb-6 p-4 rounded-full border-2 border-[#202A5B] group-hover/card:border-white transition-colors">
                    <feature.icon className="w-10 h-10 text-[#202A5B] group-hover/card:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover/card:text-white transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover/card:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-[#202A5B] transition-colors focus:outline-none"
            aria-label="Next"
          >
            <ChevronRight className="w-12 h-12" strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
}