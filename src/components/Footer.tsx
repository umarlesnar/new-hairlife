import { Mail, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Photo Gallery', path: '/photo-gallery' },
    { label: 'Video Gallery', path: '/video-gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Our Branches', path: '/branches' }
  ];

  const services = [
    'Non-Surgical Hair Fixing',
    'Hair Consultation',
    'After-Care Services',
    'Hair Products',
    'Branch Locator'
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/yournewhairlife/', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/newhairlife_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
    { icon: FaYoutube, url: 'https://youtube.com/@newhairlifechennai?si=dzprBe4qusbx7ay0', label: 'YouTube' }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo/logo2.png" alt="New Hair Life" className="w-14 h-14 object-cover p-1" />
              <div>
                <div
                  className="text-white font-bold text-xl leading-tight"
                  style={{ fontFamily: '"Cinzel", serif' }}
                >
                  New Hair Life
                </div>
                <div className="text-xs text-[#B78F59] font-medium tracking-wide">
                  RESTORE YOUR CONFIDENCE
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your look and restore your confidence with South India's premier non-surgical hair replacement center.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-700 hover:border-[#B78F59] flex items-center justify-center hover:bg-[#B78F59] transition-all text-gray-400 hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-[#B78F59] inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#B78F59] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#B78F59] rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-[#B78F59] inline-block pb-1">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-default block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-[#B78F59] inline-block pb-1">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B78F59] flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-gray-400 mb-1 font-medium">Chennai</p>
                  <p className="text-white">+91 96777 30152</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B78F59] flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-gray-400 mb-1 font-medium">Salem</p>
                  <p className="text-white">+91 99446 18228</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#B78F59] flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-white">contact@newhairlife.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-3 text-white">Subscribe to Newsletter</h5>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-md bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#B78F59] focus:border-[#B78F59] transition-all"
                />
                <button className="w-full bg-[#B78F59] text-white px-4 py-2.5 rounded-md hover:bg-[#a07a4d] transition-colors text-sm font-bold uppercase tracking-wide">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p className="text-center md:text-left">© {new Date().getFullYear()} New Hair Life. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#B78F59] transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-[#B78F59] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}