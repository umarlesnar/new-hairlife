import { MapPin, Phone } from 'lucide-react';

export default function OurBranches() {
  const branches = [
    {
      name: 'THIRUVANMIYUR',
      address: '2nd floor, 68/53, Valmiki St, opp. Thiruvanmiyur Bus Stand Road, Kamaraj Nagar, Thiruvanmiyur, Chennai.',
      phone: '+91 91502 55564',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.755800969267!2d80.25734447507678!3d12.987464787329328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d33bfffee23%3A0xa921aa3d5e6e0087!2sNEW%20HAIR%20LIFE%20%2C%20THIRUVANMIYUR!5e0!3m2!1sen!2sin!4v1764075043310!5m2!1sen!2sin'
    },
    {
      name: 'MMDA ARUMBAKAM',
      address: '1st Floor, Girija Appartment, 50-FF2, Jawaharlal Nehru Salai, near MMDA, Signal, Chennai.',
      phone: '+91 95006 33506',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5635795383587!2d80.20874717409778!3d13.063428087260462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266985e03f625%3A0x168050506f0e73f5!2sNew%20Hair%20Life%20MMDA%20arumbakkam!5e0!3m2!1sen!2sin!4v1764160316983!5m2!1sen!2sin'
    },
    {
      name: 'TAMBARAM',
      address: 'Old no27, 1st floor, Gandhi Rd, opp. to Punjab national bank, West Tambaram, Tambaram, Chennai.',
      phone: '+91 96777 30152',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.291052617151!2d80.10962167770995!3d12.9304895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f65157174c9%3A0x87b153538b006408!2sNEW%20HAIR%20LIFE%20HAIR%20FIXING!5e0!3m2!1sen!2sin!4v1764075471818!5m2!1sen!2sin'
    },
    {
      name: 'SALEM',
      address: '2nd Floor, 5/3, Manivannan Rd, opp. to New Bus Stand Road, near Lena Photo Studio, Gokul Nagar, Swarnapuri, Salem.',
      phone: '+91 99446 18228',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.313493356802!2d78.13588538885494!3d11.672180500000021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf037e58d1963%3A0x9f7bb3714878630c!2sNew%20hair%20life!5e0!3m2!1sen!2sin!4v1764075161564!5m2!1sen!2sin'
    },
    {
      name: 'PUDUCHERRY',
      address: 'Muthamizh Nagar Krishna Samy Building, Chennai silks road, near Krishna bakery, opposite New bus stand, Raja Nagar, Pudupalaiyam, Puducherry, 605013.',
      phone: '+91 99946 16236',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6019878566362!2d79.81109737407472!3d11.932763088295223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53615f40e3a26f%3A0x4a92f05829f2b4f8!2sNEW%20HAIR%20LIFE!5e0!3m2!1sen!2sin!4v1764160407319!5m2!1sen!2sin'
    },
    {
      name: 'HOSUR',
      address: '2/30 1STfloor, susheela complex, opposite GRT, Bangalore By Pass Rd, above Sri gokulam paint, Hosur, Tamil Nadu 635109.',
      phone: '+91 97904 03033',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.6765144579463!2d77.8300959!3d12.7345138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70c5f158487d%3A0x38bcc7a4ac567d75!2sNEW%20HAIR%20LIFE%20HAIR%20FIXING%20AND%20BEAUTY%20CARE!5e0!3m2!1sen!2sin!4v1764086248230!5m2!1sen!2sin'
    },
    {
      name: 'AVADI',
      address: 'JSK Complex 43CV+5V4, Anna St, Gandhi Nagar, Avadi, Tamil Nadu 600054.',
      phone: '+91 99947 60750',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.75444500772!2d80.09477797749692!3d13.120302785657369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289d4d01b653b%3A0x6e40f1e8746a931c!2sJSK%20Complex!5e0!3m2!1sen!2sin!4v1764159851756!5m2!1sen!2sin'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">OUR BRANCHES</h1>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-neutral-600 text-lg">Visit us at any of our convenient locations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden">
              {/* Map Section */}
              <div className="h-48 w-full bg-gray-100 relative">
                 <iframe
                  src={branch.embed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              
              {/* Details Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase">{branch.name}</h3>
                
                <div className="mb-4">
                    <p className="text-gray-600 text-sm leading-relaxed mb-1">
                      {branch.address}
                    </p>
                </div>

                <div className="flex items-start gap-2 text-sm text-gray-800 font-medium">
                  <span className="font-bold">Mob:</span>
                  <span>{branch.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}