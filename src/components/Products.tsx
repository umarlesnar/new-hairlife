import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    name: "Premium Leave-On Conditioner",
    image: "https://i.pinimg.com/1200x/86/55/55/86555551bc25376aa2001ae3c71e306f.jpg",
    description: "Helps dry hair to feel wet, non-sticky, maximum manageability and softness. This pleasant-smelling spray protects hair from heat.",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    name: "Hair Repair Conditioner",
    image: "https://i.pinimg.com/736x/9b/53/fb/9b53fbd9d6ca1d82b2fde11fb2b4828c.jpg",
    description: "A consistent blend of organic ingredients that will leave your hair feeling smooth as silk while kicking tangles to the curb.",
    color: "from-[#B78F59] to-[#202A5B]"
  },
  {
    name: "Nourishing Hair Serum",
    image: "https://i.pinimg.com/1200x/56/e1/47/56e147f6f3f69d7c70c9b959feff9076.jpg",
    description: "Advanced formula for maximum shine and protection. Keeps your hair looking natural and feeling soft throughout the day.",
    color: "from-sky-400 to-sky-600"
  }
];

export default function Products() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % products.length);
  const prev = () => setCurrent((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202A5B] mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-[#B78F59] mx-auto mb-6"></div>
          <p className="text-[#939598] text-lg">Premium Hair Care Solutions</p>
        </div>
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105 ${index === current ? 'ring-4 ring-[#B78F59]' : ''}`}>
                <div className={`h-64 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-overlay" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#202A5B] mb-3">{product.name}</h3>
                  <p className="text-[#939598] mb-4 leading-relaxed">{product.description}</p>
                  <button className="text-[#B78F59] font-semibold hover:text-[#202A5B] transition-colors">Learn More →</button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-xl p-3 rounded-full hover:bg-neutral-50 transition-colors hidden md:block">
            <ChevronLeft className="w-6 h-6 text-[#202A5B]" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-xl p-3 rounded-full hover:bg-neutral-50 transition-colors hidden md:block">
            <ChevronRight className="w-6 h-6 text-[#202A5B]" />
          </button>
        </div>
      </div>
    </section>
  );
}