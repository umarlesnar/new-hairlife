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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo/logo2.png" alt="New Hair Life" className="w-12 h-12 object-cover" />
              <div>
                <div
                  className="text-white font-bold text-xl leading-tight"
                  style={{ fontFamily: '"Cinzel", serif' }}
                >
                  New Hair Life
                </div>
                <div className="text-xs text-gray-400">
                  Restore Your Confidence
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
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
                    className="w-10 h-10 rounded-full border border-gray-700 hover:border-amber-600 flex items-center justify-center hover:bg-amber-600 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-gray-400 mb-1">India</p>
                  <p>+91 9287 222 333</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-gray-400 mb-1">UAE</p>
                  <p>+971 50 6767 312</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>Contact@NewHairLife.Com</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 New Hair Life Hair Fixing. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
