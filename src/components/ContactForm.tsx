import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Top Section: Info Cards */}
      <div className="bg-gray-50 py-16 mb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Changed grid from lg:grid-cols-4 to lg:grid-cols-2 and centered max-width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            
            {/* Call Us */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="mb-4 text-[#B78F59]">
                <Phone strokeWidth={1.5} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 text-sm mb-1">Chennai: +91 96777 30152</p>
              <p className="text-gray-600 text-sm">Salem: +91 99446 18228</p>
            </div>

            {/* Mail Us */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="mb-4 text-[#B78F59]">
                <Mail strokeWidth={1.5} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mail Us</h3>
              <p className="text-gray-600 text-sm">contact@newhairlife.com</p>
              <p className="text-gray-600 text-sm mt-1">support@newhairlife.com</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section: Form */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Text */}
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
              Feel Free to <br /> contact us
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              For additional information regarding our Hair Fixing methodologies, kindly reach out to us using the provided form.
            </p>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-8 pl-0 lg:pl-12">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#B78F59] transition-colors bg-transparent placeholder-gray-500"
                  />
                </div>
                <div className="group">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#B78F59] transition-colors bg-transparent placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="group">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#B78F59] transition-colors bg-transparent placeholder-gray-500"
                  />
                </div>
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#B78F59] transition-colors bg-transparent placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="group">
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#B78F59] transition-colors bg-transparent placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="bg-[#202A5B] text-white px-8 py-3 rounded text-sm font-medium hover:bg-[#B78F59] transition-colors"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}