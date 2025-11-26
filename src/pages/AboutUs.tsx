export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      
      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#B78F59] font-bold text-sm tracking-wider uppercase mb-2 block">
              Welcome To
            </span>
            <h1 className="text-5xl font-bold text-[#202A5B] mb-6 leading-tight">
              New Hair Life <br />
              Hair Fixing
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

      {/* Vision Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#202A5B] mb-6 flex items-center gap-3">
                Our <span className="text-[#B78F59]">Vision</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At New Hair Life our Vision is to find a permanent solution to baldness so that people are not held back by their lack of self confidence, but can go out and perform to the full extent of their capabilities.
              </p>
              <div className="mt-8">
                 <img 
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Vision" 
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                 />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#202A5B] rounded-lg transform rotate-3 opacity-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Man Looking Confident" 
                    className="relative rounded-lg shadow-2xl w-full max-w-md h-[500px] object-cover"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#B78F59] rounded-lg transform -rotate-3 opacity-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Target Success" 
                    className="relative rounded-lg shadow-2xl w-full max-w-md object-cover"
                  />
                </div>
            </div>
            <div>
              <div className="mb-8">
                <img 
                   src="https://images.pexels.com/photos/669578/pexels-photo-669578.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Mission Goal" 
                   className="rounded-lg shadow-xl w-full h-64 object-cover mb-8"
                />
              </div>
              <h2 className="text-3xl font-bold text-[#202A5B] mb-6 flex items-center gap-3">
                Our <span className="text-[#B78F59]">Mission</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our Mission is to offer an affordable alternative that will help the common man to banish the bald look, make him feel he has a natural head of hair, and give him the confidence to face up to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}