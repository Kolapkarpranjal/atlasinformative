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
  
  // Check if we're on contact page to change navbar text color
  const isContactPage = pathname === '/contact-us';

  return (
    <nav className={`fixed top-0 w-full z-[9999] bg-white transition-all duration-300 shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* ✅ Company Logo with Image component */}
        <Link href="/" onClick={closeAll} className="flex items-center">
          <Image
            src="/assets/logo.webp"
            alt="Atlas Logo"
            width={180}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/" active={isActive('/')} isContactPage={isContactPage}>Home</NavLink>
          <NavLink href="/about" active={isActive('/about')} isContactPage={isContactPage}>About</NavLink>

          <div className="relative">
            <button
              onClick={toggleServices}
              className="flex items-center gap-1 transition text-purple-600 hover:text-purple-800"
            >
              Services
              <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full mt-2 w-64 bg-white shadow-md rounded p-3 space-y-2 z-[9999]">
                <DropdownItem href="/hardware-products" icon="🖥️" title="Hardware Products" description="Quality hardware solutions" onClick={closeAll} />
                <DropdownItem href="/software-products" icon="💻" title="Software Products" description="Custom software development" onClick={closeAll} />
                <DropdownItem href="/cloud-computing" icon="☁️" title="Cloud Computing" description="Scalable cloud solutions" onClick={closeAll} />
                <DropdownItem href="/technology-solutions" icon="🔧" title="Technology Solutions" description="Comprehensive tech solutions" onClick={closeAll} />
              </div>
            )}
          </div>

          <NavLink href="/success-stories" active={isActive('/success-stories')} isContactPage={isContactPage}>Success Stories</NavLink>
          
          <NavLink href="/careers" active={isActive('/careers')} isContactPage={isContactPage}>Careers</NavLink>
          
          {/* Contact NavLink (desktop) */}
          <NavLink 
            href="/contact-us" 
            active={isActive('/contact-us')} 
            className="font-bold px-4 py-2 rounded border-2 border-purple-600 bg-white text-purple-700 shadow-sm hover:bg-purple-100"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile toggle */}
        {/* Hamburger icon (mobile toggle) */}
        <button onClick={toggleMenu} className="md:hidden text-purple-600">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <MobileLink href="/" label="Home" closeAll={closeAll} active={isActive('/')} isContactPage={isContactPage} />
          <MobileLink href="/about" label="About" closeAll={closeAll} active={isActive('/about')} isContactPage={isContactPage} />

          <div>
            <button
              onClick={toggleServices}
              className={`flex items-center justify-between w-full text-left text-purple-600`}
            >
              <span>Services</span>
              <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isServicesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <MobileLink href="/hardware-products" label="🖥️ Hardware Products" closeAll={closeAll} isContactPage={isContactPage} />
                <MobileLink href="/software-products" label="💻 Software Products" closeAll={closeAll} isContactPage={isContactPage} />
                <MobileLink href="/cloud-computing" label="☁️ Cloud Computing" closeAll={closeAll} isContactPage={isContactPage} />
                <MobileLink href="/technology-solutions" label="🔧 Technology Solutions" closeAll={closeAll} isContactPage={isContactPage} />
              </div>
            )}
          </div>

          <MobileLink href="/success-stories" label="Success Stories" closeAll={closeAll} isContactPage={isContactPage} />
          <MobileLink href="/careers" label="Careers" closeAll={closeAll} isContactPage={isContactPage} />
          {/* Contact NavLink (mobile menu) */}
          <MobileLink href="/contact-us" label="Contact" closeAll={closeAll} className="text-purple-600 font-semibold" isContactPage={isContactPage} />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, active, children, className = '' }: any) => (
  <Link href={href} className={`relative group ${className}`}>
    <span className={`transition ${
      active 
        ? 'text-purple-800 font-semibold'
        : 'text-purple-600 hover:text-purple-800'
    }`}>
      {children}
    </span>
    <span className={`block h-0.5 w-0 transition-all duration-300 bg-purple-600 group-hover:w-full`}></span>
  </Link>
);

const DropdownItem = ({ href, icon, title, description, onClick }: any) => (
  <Link href={href} onClick={onClick} className="flex items-start gap-2 p-2 rounded hover:bg-gray-100 transition">
    <span className="text-xl">{icon}</span>
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </Link>
);

const MobileLink = ({ href, label, closeAll, className = '', active = false }: any) => (
  <Link href={href} onClick={closeAll} className={`block py-1 ${active ? 'text-purple-800 font-semibold' : 'text-purple-600'} ${className}`}>
    {label}
  </Link>
);

export default Navbar;
