import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Branch = {
  name: string;
  address: string;
  phone: string;
};

export default function GlobalPresence(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const branches: Branch[] = [
    {
      name: "Tambaram",
      address:
        "Old no27, 1st floor, Gandhi Rd, opp. to Punjab national bank, West Tambaram, Tambaram, Chennai.",
      phone: "+919677730152",
    },
    {
      name: "MMDA (Arumbakkam)",
      address:
        "1st Floor, Girija Appartment, 50-FF2, Jawaharlal Nehru Salai, near MMDA, Signal, Chennai.",
      phone: "+919500633506",
    },
    {
      name: "Thiruvanmiyur",
      address:
        "2nd floor, 68/53, Valmiki St, opp. Thiruvanmiyur Bus Stand Road, Kamaraj Nagar, Thiruvanmiyur, Chennai.",
      phone: "+919150255564",
    },
    {
      name: "Salem",
      address:
        "2nd Floor, 5/3, Manivannan Rd, opp. to New Bus Stand Road, near Lena Photo Studio, Gokul Nagar, Swarnapuri, Salem.",
      phone: "+919944618228",
    },
    {
      name: "Hosur",
      address:
        "2/30 1STfloor, susheela complex, opposite GRT, Bangalore By Pass Rd, above Sri gokulam paint, Hosur, Tamil Nadu 635109.",
      phone: "+919790403033",
    },
    {
      name: "Puducherry",
      address:
        "Muthamizh Nagar Krishna Samy Building, Chennai silks road, near Krishna bakery, opposite New bus stand, Raja Nagar, Pudupalaiyam, Puducherry, 605013",
      phone: "+919994616236",
    },
  ];

  const openMap = (address: string) => {
    const query = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + branches.length) % branches.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % branches.length);
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Presence</h2>
          <div className="w-20 h-1 bg-[#B78F59] mx-auto mb-6" />
          <p className="text-neutral-600 text-lg">Serving clients across Tamil Nadu & Puducherry</p>
        </div>

        {/* Card with side navigation buttons */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-10">
            {/* Side nav buttons */}
            <button
              onClick={goToPrevious}
              aria-label="Previous branch"
              className="absolute -left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all text-[#202A5B]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              aria-label="Next branch"
              className="absolute -right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all text-[#202A5B]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Branch content */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#202A5B] mb-2">
                {branches[currentIndex].name}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {branches[currentIndex].address}
              </p>

              <div className="bg-gradient-to-r from-[#B78F59]/10 to-[#202A5B]/10 rounded-lg p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">Contact Us</p>

                {/* tel: link — correct JSX expression */}
                <a
                  href={`tel:${branches[currentIndex].phone}`}
                  className="text-2xl font-bold text-[#B78F59] hover:underline inline-block"
                >
                  {branches[currentIndex].phone}
                </a>
              </div>

              <button
                onClick={() => openMap(branches[currentIndex].address)}
                className="bg-[#B78F59] text-white px-8 py-3 rounded-lg hover:bg-[#202A5B] transition-colors font-medium inline-flex items-center gap-2"
              >
                View on Google Maps
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
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
                  6 Branches Across Tamil Nadu & Puducherry
                </h3>
                <p className="text-neutral-600 mb-6">
                  Experience world-class hair fixing services at any of our convenient locations
                </p>
                <Link
                  to="/branches"
                  className="inline-block bg-[#B78F59] text-white px-8 py-3 rounded-md hover:bg-[#202A5B] transition-colors font-medium"
                >
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
