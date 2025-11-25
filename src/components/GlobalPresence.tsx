import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GlobalPresence() {
  const branches = [
    { name: 'Thiruvanmiyur', count: 1 },
    { name: 'Coimbatore', count: 1 },
    { name: 'Hair Fixing and Beauty Life', count: 1 },
    { name: 'Hair Fixing Branch', count: 1 }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Our Presence
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">
            Serving clients across Tamil Nadu
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:transform hover:-translate-y-1 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-amber-700" />
              </div>
              <p className="text-neutral-600 font-medium">{branch.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="h-96 bg-neutral-200 relative">
            <img
              src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Global map"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl text-center max-w-md">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  4 Branches Across Tamil Nadu
                </h3>
                <p className="text-neutral-600 mb-6">
                  Experience world-class hair fixing services at any of our convenient locations
                </p>
                <Link to="/branches" className="inline-block bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-colors font-medium">
                  View All Branches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
