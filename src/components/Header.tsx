import { Menu, X, Phone } from 'lucide-react';
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
      <div className="bg-[#202A5B] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              Chennai: +91 9876 543 210
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              Coimbatore: +91 9876 543 214
            </span>
          </div>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B78F59] transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
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

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-[#202A5B] hover:text-[#B78F59] transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-[#B78F59] text-white px-6 py-2 rounded-md hover:bg-[#202A5B] transition-colors font-medium">
                Contact Us
              </button>
            </nav>

            <button
              className="lg:hidden text-[#202A5B]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

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
              <button className="bg-[#B78F59] text-white px-6 py-3 rounded-md hover:bg-[#202A5B] transition-colors font-medium w-full mt-2">
                Contact Us
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
