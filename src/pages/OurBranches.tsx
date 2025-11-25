export default function OurBranches() {
  const branches = [
    {
      name: 'Thiruvanmiyur Branch',
      address: 'NEW HAIR LIFE , 2nd floor, 68/53, Valmiki St, opp. Thiruvanmiyur Bus Stand Road, Kamaraj Nagar, Thiruvanmiyur, Chennai.',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.755800969267!2d80.25734447507678!3d12.987464787329328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d33bfffee23%3A0xa921aa3d5e6e0087!2sNEW%20HAIR%20LIFE%20%2C%20THIRUVANMIYUR!5e0!3m2!1sen!2sin!4v1764075043310!5m2!1sen!2sin'
    },
    {
      name: 'Salem Branch',
      address: 'New Hair Life, 2nd Floor, 5/3, Manivannan Rd, opp. to New Bus Stand Road, near Lena Photo Studio, Gokul Nagar, Swarnapuri, Salem.',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.313493356802!2d78.13588538885494!3d11.672180500000021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf037e58d1963%3A0x9f7bb3714878630c!2sNew%20hair%20life!5e0!3m2!1sen!2sin!4v1764075161564!5m2!1sen!2sin'
    },
    {
      name: 'Hair Fixing and Beauty Life',
      address: 'New Hair Life, 1st Floor, Girija Appartment, 50-FF2, Jawaharlal Nehru Salai, near MMDA, Signal, Chennai.',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124403.38775126298!2d80.08259119400851!3d12.997041915006962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526692eb60ce41%3A0xf50057b0b3581700!2sNEW%20HAIR%20LIFE%20HAIR%20FIXING%20AND%20BEAUTY%20LIFE!5e0!3m2!1sen!2sin!4v1764075241653!5m2!1sen!2sin'
    },
    {
      name: 'Tambaram Branch',
      address: 'New Hair Life Hair Fixing, Old no27,1st floor, Gandhi Rd, opp. to Punjab national bank, West Tambaram, Tambaram, Chennai.',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.291052617151!2d80.10962167770995!3d12.9304895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f65157174c9%3A0x87b153538b006408!2sNEW%20HAIR%20LIFE%20HAIR%20FIXING!5e0!3m2!1sen!2sin!4v1764075471818!5m2!1sen!2sin'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">Our Branches</h1>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">Visit us at any of our convenient locations across Tamil Nadu</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80">
                <iframe
                  src={branch.embed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{branch.name}</h3>
                <p className="text-neutral-600 text-sm">{branch.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
