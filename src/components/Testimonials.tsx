import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Kumar Vel",
    location: "Chennai, Tamil Nadu",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    before: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "Life-changing experience! The natural look and feel exceeded my expectations. I feel confident again.",
    rating: 5
  },
  {
    name: "Rajesh Kannan",
    location: "Coimbatore, Tamil Nadu",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    before: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "Professional service and amazing results. The team was supportive throughout the entire process.",
    rating: 5
  },
  {
    name: "Arun Prakash",
    location: "Salem, Tamil Nadu",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
    before: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "Best decision I ever made. The hair looks completely natural and the aftercare service is excellent.",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202A5B] mb-4">
            Client Transformations
          </h2>
          <div className="w-20 h-1 bg-[#B78F59] mx-auto mb-6"></div>
          <p className="text-[#939598] text-lg">Real people, real results</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative group">
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg z-10">
                  <span className="font-bold text-[#202A5B]">Before</span>
                </div>
                <img
                  src={testimonial.before}
                  alt="Before"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="relative group">
                <div className="absolute top-4 left-4 bg-[#B78F59] text-white px-4 py-2 rounded-full shadow-lg z-10">
                  <span className="font-bold">After</span>
                </div>
                <img
                  src={testimonial.after}
                  alt="After"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B78F59] text-[#B78F59]" />
                ))}
              </div>
              <p className="text-neutral-700 text-lg italic mb-6 max-w-2xl mx-auto">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-bold text-[#202A5B]">{testimonial.name}</p>
                  <p className="text-[#939598] text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-xl p-3 rounded-full hover:bg-neutral-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#202A5B]" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-xl p-3 rounded-full hover:bg-neutral-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#202A5B]" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? 'bg-[#B78F59] w-8' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
