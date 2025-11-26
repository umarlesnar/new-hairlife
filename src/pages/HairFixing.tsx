import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Custom Before/After Slider Component
const BeforeAfterSlider = ({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as any).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging) handleMove(e);
    };
    const handleGlobalUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchmove', handleGlobalMove);
    window.addEventListener('touchend', handleGlobalUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-xl cursor-ew-resize select-none shadow-2xl"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-sm font-bold text-[#202A5B] z-10">
        After
      </div>

      {/* Before Image (Foreground) */}
      <img 
        src={beforeImage} 
        alt="Before" 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} 
      />
      <div 
        className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-bold text-[#202A5B] z-10"
        style={{ opacity: sliderPosition > 15 ? 1 : 0, transition: 'opacity 0.2s' }}
      >
        Before
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-[#202A5B]">
          <div className="flex gap-0.5">
            <ChevronLeft className="w-3 h-3" />
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HairFixing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformations = [
    {
      before: "/client/1-before.jpg",
      after: "/client/1-after.jpg"
    },
    {
      before: "/client/2-before.jpg",
      after: "/client/2-after.jpg"
    },
    {
      before: "/client/3-before.jpg",
      after: "/client/3-after.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-[#202A5B] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Hair Fixing</h1>
          <p className="text-sm text-gray-300">Home / Hair Fixing</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#202A5B] mb-6 leading-tight">
                Knocking Years <br/> off Your Appearance
              </h2>
              <div className="w-20 h-1 bg-[#B78F59] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
                <p>
                  Approximately 25 percent of men start balding by the age of 30. More than half of the male population is affected by baldness by the age of 50. Most women too experience hair loss, though it's less noticeable among them because they usually have longer hair. Billions of dollars have gone into research on possible remedies to baldness, but no economically viable solution has come up as yet.
                </p>
                <p>
                  <span className="font-semibold text-[#202A5B] border-b-2 border-[#B78F59]">Hair fixing</span> creates fitments made of hair that looks absolutely natural, fits you snugly, and matches your countenance perfectly. You will look and feel your natural self. But what we do is more than merely fixing a bald patch on your pate.
                </p>
                <p>
                  What we do is, knock years off your appearance to make you look as young as you feel. What we do is, give you a new personality, a booster dose of self-confidence, the feeling that you can, and you will prevail. <span className="font-bold text-[#B78F59]">New Hair Life</span> hair fixing makes you look the way you want yourself to look – and nobody will be the wiser.
                </p>
              </div>
            </div>

            {/* Image Slider Section */}
            <div className="flex flex-col items-center">
               {/* Functional Before/After Slider */}
               <BeforeAfterSlider 
                 key={currentSlide} // Key forces re-render to reset slider position when changing images
                 beforeImage={transformations[currentSlide].before} 
                 afterImage={transformations[currentSlide].after} 
               />
               
               {/* Functional Pagination Dots */}
               <div className="flex gap-3 mt-8">
                 {transformations.map((_, index) => (
                   <button
                     key={index}
                     onClick={() => setCurrentSlide(index)}
                     className={`w-3 h-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                       currentSlide === index 
                         ? 'bg-transparent border border-[#202A5B] scale-125' 
                         : 'bg-gray-300 hover:bg-gray-400'
                     }`}
                     aria-label={`View transformation ${index + 1}`}
                   >
                     {currentSlide === index && (
                       <div className="w-1.5 h-1.5 bg-[#202A5B] rounded-full"></div>
                     )}
                   </button>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}