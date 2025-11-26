import { Menu, X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About Us', path: '/about' },
    { label: 'Photo Gallery', path: '/photo-gallery' },
    { label: 'Video Gallery', path: '/video-gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Our Branches', path: '/branches' }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/yournewhairlife/', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/newhairlife_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
    { icon: FaYoutube, url: 'https://youtube.com/@newhairlifechennai?si=dzprBe4qusbx7ay0', label: 'YouTube' }
  ];

  return (
    <>
      {/* Top Bar Section */}
      <div className="bg-[#1a1a1a] text-white py-2 px-4 text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end items-center gap-4 md:gap-8">
          {/* Phone Numbers */}
          <div className="flex items-center gap-6">
            <span className="tracking-wide">
              <span className="text-[#B78F59] mr-1">Chennai :</span>
              +91 96777 30152
            </span>
            <span className="tracking-wide">
              <span className="text-[#B78F59] mr-1">Salem :</span>
              +91 99446 18228
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:border-l md:border-gray-700 md:pl-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B78F59] transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section - Left */}
            <div className="flex-shrink-0 w-48">
              <Link to="/" className="flex items-center gap-2">
                <img src="/logo/logo.jpeg" alt="New Hair Life" className="w-12 h-12 object-cover" />
                <div>
                  <div
                    className="text-[#202A5B] font-bold text-xl leading-tight"
                    style={{ fontFamily: '"Cinzel", serif' }}
                  >
                    New Hair Life
                  </div>
                  <div className="text-xs text-gray-600">
                    Restore Your Confidence
                  </div>
                </div>
              </Link>
            </div>

            {/* Navigation - Center */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-[#202A5B] hover:text-[#B78F59] transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Right */}
            <div className="hidden lg:flex justify-end w-48">
              <Link 
                to="/contact"
                className="bg-[#B78F59] text-white px-6 py-2 rounded-md hover:bg-[#202A5B] transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#202A5B]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-[#202A5B] hover:text-[#B78F59] transition-colors py-2 border-b border-neutral-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-[#B78F59] text-white px-6 py-3 rounded-md hover:bg-[#202A5B] transition-colors font-medium w-full mt-2 text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}