import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: "Transforming Lives: The Impact of Hair Fixing on Confidence",
    excerpt: "In a world where personal appearance plays a significant role in shaping one's confidence, hair-related concerns...",
    image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "January 3, 2024"
  },
  {
    title: "Embracing Confidence: The Rise of Non-Surgical Hair Fixing Solutions",
    excerpt: "In the dynamic world of beauty and personal care, the quest for a full head of hair has taken a transformative turn...",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "January 30, 2024"
  },
  {
    title: "Celebrating Excellence: 20 Years of Hair Restoration Success",
    excerpt: "As we celebrate our anniversary, we extend our heartfelt gratitude for your unwavering support and trust in our services...",
    image: "https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "January 31, 2024"
  }
];

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            News & Events
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">Read industry related news and articles here</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-amber-700 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <button className="text-amber-700 font-semibold hover:text-amber-800 transition-colors flex items-center gap-2 group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-neutral-900 text-white px-8 py-3 rounded-md hover:bg-neutral-800 transition-colors font-medium">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
