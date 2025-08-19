'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsServicesOpen(false);
  };

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const closeAll = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-[9999] transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-gradient-to-r from-[#0F0A1F]/98 to-[#0A0618]/98 backdrop-blur-xl shadow-2xl border-b border-purple-500/50'
          : 'bg-gradient-to-r from-[#0F0A1F]/95 to-[#0A0618]/95 backdrop-blur-lg border-b border-purple-500/30'
      }`}
      style={{
        boxShadow: isScrolled 
          ? '0 10px 30px rgba(139, 92, 246, 0.2)' 
          : '0 4px 20px rgba(139, 92, 246, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center group">
          <div className="relative overflow-hidden rounded-lg p-2 transition-all duration-300 group-hover:bg-purple-500/10">
            <Image
              src="/assets/logo.webp"
              alt="Atlas Logo"
              width={180}
              height={50}
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="/" active={isActive('/')} onHover={() => setIsHovering('home')} onLeave={() => setIsHovering(null)}>
            Home
          </NavLink>
          <NavLink href="/about" active={isActive('/about')} onHover={() => setIsHovering('about')} onLeave={() => setIsHovering(null)}>
            About
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={toggleServices}
              onMouseEnter={() => setIsHovering('services')}
              onMouseLeave={() => setIsHovering(null)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-white hover:text-purple-400 hover:bg-purple-500/10 font-medium"
            >
              <span className="font-medium">Services</span>
              <FaChevronDown
                className={`transition-all duration-300 ${
                  isServicesOpen || isHovering === 'services' ? 'rotate-180 text-purple-400' : ''
                }`}
              />
            </button>

            <div
              className={`absolute top-full mt-3 left-0 w-72 bg-[#1A1035]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/40 transition-all duration-300 transform origin-top ${
                isServicesOpen || isHovering === 'services'
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="p-4 space-y-2">
                <DropdownItem href="/hardware-products" icon="🖥️" title="Hardware Products" description="Quality hardware solutions" onClick={closeAll} />
                <DropdownItem href="/software-products" icon="💻" title="Software Products" description="Custom software development" onClick={closeAll} />
                <DropdownItem href="/cloud-computing" icon="☁️" title="Cloud Computing" description="Scalable cloud solutions" onClick={closeAll} />
                <DropdownItem href="/technology-solutions" icon="🔧" title="Technology Solutions" description="Comprehensive tech solutions" onClick={closeAll} />
              </div>
              <div className="absolute -top-2 left-6 w-4 h-4 bg-[#1A1035]/98 border-l border-t border-purple-500/40 transform rotate-45"></div>
            </div>
          </div>

          <NavLink href="/success-stories" active={isActive('/success-stories')} onHover={() => setIsHovering('stories')} onLeave={() => setIsHovering(null)}>
            Success Stories
          </NavLink>
          <NavLink href="/careers" active={isActive('/careers')} onHover={() => setIsHovering('careers')} onLeave={() => setIsHovering(null)}>
            Careers
          </NavLink>

          {/* Contact Button */}
          <Link href="/contact-us" className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="relative px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full transition-all duration-300 transform group-hover:scale-105 hover:shadow-purple-500/50 border border-purple-400/20 shadow-lg hover:shadow-2xl">
              <span className="relative z-10">Contact Us</span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 group border border-purple-500/20 hover:border-purple-500/40"
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="text-white transition-all duration-300 transform rotate-180" />
          ) : (
            <FaBars size={24} className="text-white transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#1A1035]/98 backdrop-blur-xl border-t border-purple-500/40 px-4 pb-6 space-y-4 shadow-2xl">
          <MobileLink href="/" label="Home" closeAll={closeAll} active={isActive('/')} />
          <MobileLink href="/about" label="About" closeAll={closeAll} active={isActive('/about')} />
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center justify-between w-full text-left text-white hover:text-purple-400 p-3 rounded-lg hover:bg-purple-500/10"
            >
              <span className="font-medium">Services</span>
              <FaChevronDown className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-2 mt-2">
                <MobileDropdownItem href="/hardware-products" label="🖥️ Hardware Products" closeAll={closeAll} />
                <MobileDropdownItem href="/software-products" label="💻 Software Products" closeAll={closeAll} />
                <MobileDropdownItem href="/cloud-computing" label="☁️ Cloud Computing" closeAll={closeAll} />
                <MobileDropdownItem href="/technology-solutions" label="🔧 Technology Solutions" closeAll={closeAll} />
              </div>
            </div>
          </div>
          <MobileLink href="/success-stories" label="Success Stories" closeAll={closeAll} />
          <MobileLink href="/careers" label="Careers" closeAll={closeAll} />
          <Link href="/contact-us" onClick={closeAll} className="block">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50 shadow-lg">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, active, children, onHover, onLeave }: any) => (
  <Link href={href} className="relative group px-3 py-2 rounded-lg transition-all duration-300" onMouseEnter={onHover} onMouseLeave={onLeave}>
    <span
      className={`relative z-10 transition-all duration-300 font-medium ${
        active ? 'text-purple-400 font-semibold' : 'text-white hover:text-purple-400'
      }`}
    >
      {children}
    </span>
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></div>
    <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-lg transition-all duration-300"></div>
  </Link>
 );

const DropdownItem = ({ href, icon, title, description, onClick }: any) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 group"
  >
    <div className="text-2xl">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-white group-hover:text-purple-400">{title}</p>
      <p className="text-xs text-gray-300 group-hover:text-purple-300">{description}</p>
    </div>
  </Link>
 );

const MobileLink = ({ href, label, closeAll, active = false }: any) => (
  <Link
    href={href}
    onClick={closeAll}
    className={`block p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
      active ? 'text-purple-400 font-semibold bg-purple-500/10' : 'text-white hover:text-purple-400 hover:bg-purple-500/10'
    }`}
  >
    {label}
  </Link>
 );

const MobileDropdownItem = ({ href, label, closeAll }: any) => (
  <Link
    href={href}
    onClick={closeAll}
    className="block p-3 rounded-lg text-white hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
  >
    {label}
  </Link>
 );

export default Navbar;
