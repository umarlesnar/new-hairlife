import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb / Header */}
      <div className="bg-[#202A5B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-200 text-lg">We'd love to hear from you. Reach out to us for any queries.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Info Side */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#202A5B] mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                For additional information regarding our Hair Fixing methodologies, or to book a consultation, kindly reach out to us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-[#B78F59]">
                  <Phone strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600 text-sm">Chennai: +91 96777 30152</p>
                  <p className="text-gray-600 text-sm">Salem: +91 99446 18228</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-[#B78F59]">
                  <Mail strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600 text-sm">contact@newhairlife.com</p>
                </div>
              </div>

              <Link 
                to="/branches"
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="text-[#B78F59]">
                  <MapPin strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600 text-sm">
                    Check our branches page to find the center nearest to you.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#202A5B] mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B78F59]/50 focus:border-[#B78F59] transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B78F59]/50 focus:border-[#B78F59] transition-all"
                    placeholder="Your Phone"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B78F59]/50 focus:border-[#B78F59] transition-all"
                    placeholder="Your Email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B78F59]/50 focus:border-[#B78F59] transition-all"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B78F59]/50 focus:border-[#B78F59] transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[#202A5B] text-white px-10 py-4 rounded-lg text-sm font-bold hover:bg-[#B78F59] transition-colors shadow-lg"
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