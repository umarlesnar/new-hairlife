import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      
      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#B78F59] font-bold text-sm tracking-wider uppercase mb-2 block">
              Welcome To
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#202A5B] mb-6 leading-tight">
              New Hair Life Hair Fixing
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
              Baldness is a prevalent condition that has garnered significant attention and financial investment in the quest for effective remedies. Despite extensive research efforts, affordable and reliable solutions have remained elusive for the general public. New Hair Life, however, has pioneered a methodology that results in hair fitments so natural in appearance and perfect in their compatibility with your individual features that you will find it easy to forget any previous experience of baldness.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              These fitments can be seamlessly integrated into your daily routine, allowing you to comb, bathe, swim, and even ride bare-headed with ease. The transformation they offer extends beyond your physical appearance, positively impacting your self-perception and overall confidence. Say goodbye to that familiar sensation of baldness; New Hair Life's solution promises a newfound sense of self-assuredness.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 mt-8 md:mt-0">
             <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-5xl font-bold text-[#B78F59] mb-2">20+</h3>
                <p className="text-gray-800 font-medium">Years of Experience</p>
             </div>
             <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-5xl font-bold text-[#B78F59] mb-2">24K+</h3>
                <p className="text-gray-800 font-medium">Happy Clients</p>
             </div>
             <div className="col-span-2 text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-5xl font-bold text-[#B78F59] mb-2">99%</h3>
                <p className="text-gray-800 font-medium">Customer Satisfaction</p>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Carousel) */}
      <WhyChooseUs />

      {/* Vision & Mission Section - 3 Column Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Column: Vision Text Top, Image Bottom */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-bold text-[#202A5B] mb-4">
                  Our <span className="text-[#B78F59]">Vision</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  At New Hair Life our Vision is to find a permanent solution to baldness so that people are not held back by their lack of self confidence, but can go out and perform to the full extent of their capabilities.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 group">
                <img 
                  src="https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg" 
                  alt="Growth and Success" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            </div>

            {/* Center Column: Tall Portrait Image */}
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#202A5B]/50 to-transparent z-10"></div>
              <img 
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Confident Man" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Right Column: Image Top, Mission Text Bottom */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 group order-1">
                <img 
                  src="https://images.pexels.com/photos/33118147/pexels-photo-33118147.jpeg" 
                  alt="Target and Goal" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="order-2">
                <h2 className="text-3xl font-bold text-[#202A5B] mb-4">
                  Our <span className="text-[#B78F59]">Mission</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  Our Mission is to offer an affordable alternative that will help the common man to banish the bald look, make him feel he has a natural head of hair, and give him the confidence to face up to the world.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}