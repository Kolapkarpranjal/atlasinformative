import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function SoftwareProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Software <span className="text-purple-600">Development</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              At Atlas Informatics, we provide a comprehensive range of software products designed to enhance 
              efficiency, security, and business operations.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our team of experts understands the evolving technology landscape and offers industry-leading 
              software solutions that help businesses streamline workflows, improve productivity, and stay ahead of the competition.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tailored <span className="text-green-600">Software Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work closely with organizations to deliver tailored software solutions that meet their specific needs.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trusted Partner</h3>
                <p className="text-gray-700 mb-3">
                  As a trusted partner of industry-leading brands like Microsoft, Adobe, Autodesk, and Veritas, 
                  we ensure that our clients receive top-notch software products with seamless integration and ongoing support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">Microsoft</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">Adobe</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">Autodesk</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">Veritas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Excellence</h3>
                  <p className="text-gray-600">Innovative solutions for modern businesses</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Software <span className="text-purple-600">Offerings Include</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions designed to meet the diverse needs of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Microsoft Office Suite & Windows OS */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">📄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Microsoft Office Suite & Windows OS</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Complete productivity suite with Word, Excel, PowerPoint, and Windows operating system for seamless business operations.
              </p>
            </div>

            {/* Adobe Creative Cloud & Document Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Adobe Creative Cloud & Document Solutions</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Professional creative tools and document management solutions for design and content creation.
              </p>
            </div>

            {/* Autodesk Design & Engineering Software */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Autodesk Design & Engineering Software</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Advanced CAD and engineering software for architects, engineers, and construction professionals.
              </p>
            </div>

            {/* Antivirus & Cybersecurity Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Antivirus & Cybersecurity Solutions</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive security software to protect your business from cyber threats and data breaches.
              </p>
            </div>

            {/* Data Recovery & Backup Solutions */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">💾</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Data Recovery & Backup Solutions</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Reliable data protection and recovery tools to ensure business continuity and data security.
              </p>
            </div>

            {/* Cloud-Based Productivity & Collaboration Tools */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cloud-Based Productivity & Collaboration Tools</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Modern collaboration platforms and cloud-based tools for enhanced team productivity and communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Software Solutions for <span className="text-green-600">Every Industry</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Atlas Informatics serves businesses across multiple sectors, including Government, BFSI, Education, 
              and Corporate Enterprises. Our software solutions are designed to optimize performance, enhance 
              security, and ensure compliance with industry regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Government */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Government</h3>
              <p className="text-gray-600">Compliance-focused solutions for public sector organizations with enhanced security and regulatory adherence.</p>
            </div>

            {/* BFSI */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">BFSI</h3>
              <p className="text-gray-600">Financial services software with robust security, compliance, and risk management capabilities.</p>
            </div>

            {/* Education */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">Learning management systems and educational software for institutions and students.</p>
            </div>

            {/* Corporate Enterprises */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Enterprises</h3>
              <p className="text-gray-600">Scalable enterprise solutions for large organizations with advanced features and integration capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Software Solutions <span className="text-purple-600">Overview</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive software portfolio is designed to address the unique challenges faced by 
                businesses in today&apos;s digital landscape. From productivity tools to security solutions, 
                we provide the software foundation your organization needs to succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Industry-leading software partnerships</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Seamless integration and deployment</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Ongoing support and maintenance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Compliance and security focused</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Transformation</h3>
                  <p className="text-gray-600">Empowering businesses with innovative software solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Transform Your Business with Software Solutions
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Partner with Atlas Informatics to access industry-leading software products and expert support. 
            Let us help you streamline operations, enhance security, and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us →
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}






