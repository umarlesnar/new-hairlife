import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GlobalPresence() {
  const branches = [
    { 
      name: 'Thiruvanmiyur', 
      address: 'NEW HAIR LIFE , 2nd floor, 68/53, Valmiki St, opp. Thiruvanmiyur Bus Stand Road, Kamaraj Nagar, Thiruvanmiyur, Chennai.' 
    },
    { 
      name: 'MMDA Arumbakam', 
      address: 'New Hair Life, 1st Floor, Girija Appartment, 50-FF2, Jawaharlal Nehru Salai, near MMDA, Signal, Chennai.' 
    },
    { 
      name: 'Tambaram', 
      address: 'New Hair Life Hair Fixing, Old no27, 1st floor, Gandhi Rd, opp. to Punjab national bank, West Tambaram, Tambaram, Chennai.' 
    },
    { 
      name: 'Salem', 
      address: 'New Hair Life, 2nd Floor, 5/3, Manivannan Rd, opp. to New Bus Stand Road, near Lena Photo Studio, Gokul Nagar, Swarnapuri, Salem.' 
    },
    { 
      name: 'Puducherry', 
      address: 'Muthamizh Nagar Krishna Samy Building, Chennai silks road, near Krishna bakery, opposite New bus stand, Raja Nagar, Pudupalaiyam, Puducherry, 605013' 
    },
    {
      name: 'Hosur',
      address: '2/30 1STfloor, susheela complex, opposite GRT, Bangalore By Pass Rd, above Sri gokulam paint, Hosur, Tamil Nadu 635109.'
    },
    {
      name: 'Avadi',
      address: 'JSK Complex 43CV+5V4, Anna St, Gandhi Nagar, Avadi, Tamil Nadu 600054.'
    }
  ];

  const openMap = (address: string) => {
    const query = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Our Presence
          </h2>
          <div className="w-20 h-1 bg-[#B78F59] mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">
            Serving clients across Tamil Nadu & Puducherry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {branches.map((branch, index) => (
            <div
              key={index}
              onClick={() => openMap(branch.address)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:transform hover:-translate-y-1 text-center cursor-pointer group h-full flex flex-col items-center justify-center"
              title="Click to view on map"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B78F59]/10 rounded-full mb-4 group-hover:bg-[#B78F59]/20 transition-colors">
                <MapPin className="w-8 h-8 text-[#B78F59]" />
              </div>
              <p className="text-neutral-800 font-bold mb-2">{branch.name}</p>
              <p className="text-xs text-neutral-500 line-clamp-3">{branch.address}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="h-96 bg-neutral-200 relative">
            <img
              src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Global map"
              className="w-full h-full object-cover opacity-60 grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl text-center max-w-md mx-4">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  7 Branches Across Tamil Nadu & Puducherry
                </h3>
                <p className="text-neutral-600 mb-6">
                  Experience world-class hair fixing services at any of our convenient locations
                </p>
                <Link to="/branches" className="inline-block bg-[#B78F59] text-white px-8 py-3 rounded-md hover:bg-[#202A5B] transition-colors font-medium">
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