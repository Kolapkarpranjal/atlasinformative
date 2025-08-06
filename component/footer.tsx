import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/assets/logo-footer.png"
                alt="Atlas Informatics Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering businesses with cutting-edge IT solutions and innovative technology services.
            </p>
            <div className="text-gray-300 text-sm leading-relaxed">
              <p className="mb-2">Shop No - 803,</p>
              <p className="mb-2">Business Point, Trimurti Kamathwade Road,</p>
              <p className="mb-2">Trimurti Chowk, Durga Nagar,</p>
              <p className="mb-2">Nashik, Nashik, 422009</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/hardware-products" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Hardware Products
                </Link>
              </li>
              <li>
                <Link href="/software-products" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Software Products
                </Link>
              </li>
              <li>
                <Link href="/cloud-computing" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link href="/technology-solutions" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Technology Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">ABOUT US</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">GET IN TOUCH</h3>
            <div className="space-y-4">
                             <div className="flex items-center space-x-3">
                 <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                   <span className="text-sm">📧</span>
                 </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-white">info@atlasinformatics.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">📞</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="text-white">+91 123 456 7890</p>
                </div>
              </div>

                             <div className="flex items-center space-x-3">
                 <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                   <span className="text-sm">📍</span>
                 </div>
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="text-white">Nashik, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">FOLLOW US</h4>
              <div className="flex space-x-3">
                                 <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200">
                   <span className="text-lg">📘</span>
                 </a>
                 <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                   <span className="text-lg">🐦</span>
                 </a>
                 <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-200">
                   <span className="text-lg">📷</span>
                 </a>
                 <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200">
                   <span className="text-lg">💼</span>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Atlas Informatics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
