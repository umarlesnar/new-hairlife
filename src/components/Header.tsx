import { Menu, X, ChevronDown } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For mobile menu toggling

  const servicesStructure = [
    {
      category: "Non-Surgical Hair Replacement Services",
      items: [
        "Non-surgical Hair Replacement",
        "Hair Fixing",
        "Hair Bonding",
        "Hair Weaving",
        "Hair Patch Application",
        "Natural Men's Hair Patch",
        "100% Natural Hair Patch",
        "Natural Men's Hair Toupee"
      ]
    },
    {
      category: "Hair Patch & Wig Solutions",
      items: [
        "Human Hair Patch",
        "Human Hair Wig",
        "Men's Hair Wig"
      ]
    },
    {
      category: "Hair Extension Services",
      items: ["Hair Extensions"]
    },
    {
      category: "Hair Glue / Adhesive Services",
      items: [] 
    }
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          {/* Branch Names */}
          <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center md:justify-start text-xs md:text-sm">
            <span className="tracking-wide text-[#B78F59] hover:text-white transition-colors cursor-default px-2">Tambaram</span>
            <span className="text-gray-600">•</span>
            <span className="tracking-wide text-[#B78F59] hover:text-white transition-colors cursor-default px-2">MMDA (Arumbakkam)</span>
            <span className="text-gray-600">•</span>
            <span className="tracking-wide text-[#B78F59] hover:text-white transition-colors cursor-default px-2">Thiruvanmiyur</span>
            <span className="text-gray-600 hidden md:inline">•</span>
            <span className="tracking-wide text-[#B78F59] hover:text-white transition-colors cursor-default hidden md:inline px-2">Salem</span>
            <span className="text-gray-600 hidden md:inline">•</span>
            <span className="tracking-wide text-[#B78F59] hover:text-white transition-colors cursor-default hidden md:inline px-2">Hosur</span>
            <span className="text-gray-600 hidden md:inline">•</span>
            <span className="tracking-wide text-[#B78F59] hover:text-white transition-colors cursor-default hidden md:inline px-2">Puducherry</span>
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
          <div className="flex justify-between items-center gap-4">
            {/* Logo Section - Left */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3">
                <img src="/logo/logo.jpeg" alt="New Hair Life" className="w-12 h-12 object-cover" />
                <div>
                  <div
                    className="text-[#202A5B] font-bold text-xl leading-tight whitespace-nowrap"
                    style={{ fontFamily: '"Cinzel", serif' }}
                  >
                    New Hair Life
                  </div>
                  <div className="text-xs text-gray-600 whitespace-nowrap font-medium tracking-wider">
                    RESTORE YOUR CONFIDENCE
                  </div>
                </div>
              </Link>
            </div>

            {/* Navigation - Center - Desktop */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
              <Link to="/about" className="text-[#202A5B] hover:text-[#B78F59] transition-colors text-sm font-medium whitespace-nowrap">About Us</Link>

              <Link to="/hair-fixing" className="text-[#202A5B] hover:text-[#B78F59] transition-colors text-sm font-medium whitespace-nowrap">Hair Fixing</Link>
              
              {/* Dropdown for Services */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-[#202A5B] group-hover:text-[#B78F59] transition-colors text-sm font-medium whitespace-nowrap py-4">
                  Our Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 p-6 z-50">
                  <div className="grid grid-cols-2 gap-6">
                    {servicesStructure.map((section, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="text-[#B78F59] font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-2">
                          {section.category}
                        </h4>
                        <ul className="space-y-1">
                          {section.items.length > 0 ? (
                            section.items.map((item, i) => (
                              <li key={i}>
                                <Link to="/hair-fixing" className="text-gray-600 hover:text-[#202A5B] hover:translate-x-1 transition-all text-xs block py-1">
                                  • {item}
                                </Link>
                              </li>
                            ))
                          ) : (
                            <li>
                               <Link to="/hair-fixing" className="text-gray-600 hover:text-[#202A5B] hover:translate-x-1 transition-all text-xs block py-1">
                                  View Service
                                </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/photo-gallery" className="text-[#202A5B] hover:text-[#B78F59] transition-colors text-sm font-medium whitespace-nowrap">Photo Gallery</Link>
              <Link to="/video-gallery" className="text-[#202A5B] hover:text-[#B78F59] transition-colors text-sm font-medium whitespace-nowrap">Video Gallery</Link>
              <Link to="/faq" className="text-[#202A5B] hover:text-[#B78F59] transition-colors text-sm font-medium whitespace-nowrap">FAQ</Link>
              <Link to="/branches" className="text-[#202A5B] hover:text-[#B78F59] transition-colors text-sm font-medium whitespace-nowrap">Our Branches</Link>
            </nav>

            {/* CTA Button - Right */}
            <div className="hidden lg:flex justify-end flex-shrink-0">
              <Link 
                to="/contact"
                className="bg-[#B78F59] text-white px-6 py-2 rounded-md hover:bg-[#202A5B] transition-colors font-medium whitespace-nowrap"
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
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
              <Link to="/about" className="text-[#202A5B] py-2 border-b border-neutral-100" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              
              {/* Mobile Accordion for Services */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-[#202A5B] py-2 border-b border-neutral-100"
                >
                  Our Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 py-2 space-y-4 bg-gray-50 rounded-lg mt-2">
                    {servicesStructure.map((section, idx) => (
                      <div key={idx}>
                        <h5 className="text-[#B78F59] text-xs font-bold uppercase mb-2">{section.category}</h5>
                        <ul className="space-y-2 border-l-2 border-gray-200 pl-3">
                          {section.items.map((item, i) => (
                            <li key={i}>
                              <Link 
                                to="/hair-fixing" 
                                className="text-gray-600 text-xs block"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                          {section.items.length === 0 && (
                             <li>
                                <Link 
                                  to="/hair-fixing" 
                                  className="text-gray-600 text-xs block"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  Explore Service
                                </Link>
                             </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/photo-gallery" className="text-[#202A5B] py-2 border-b border-neutral-100" onClick={() => setIsMenuOpen(false)}>Photo Gallery</Link>
              <Link to="/video-gallery" className="text-[#202A5B] py-2 border-b border-neutral-100" onClick={() => setIsMenuOpen(false)}>Video Gallery</Link>
              <Link to="/faq" className="text-[#202A5B] py-2 border-b border-neutral-100" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/branches" className="text-[#202A5B] py-2 border-b border-neutral-100" onClick={() => setIsMenuOpen(false)}>Our Branches</Link>
              
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