import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function CloudComputingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cloud <span className="text-purple-600">Computing</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Cloud Computing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              As businesses increasingly rely on digital applications, cloud computing has become the preferred 
              solution for scalability, security, and efficiency. Atlas Informatics provides comprehensive 
              cloud solutions to optimize your infrastructure, reduce hardware costs, and ensure seamless accessibility.
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

      {/* What Is Cloud Computing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Is <span className="text-green-600">Cloud Computing?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cloud computing enables businesses to store, manage, and process data on remote servers rather 
                than on-premises hardware. This allows for flexible access, increased efficiency, and better security.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Atlas Informatics, we leverage leading cloud technologies to ensure your business runs smoothly. 
                Our cloud services provide secure data management, high-speed accessibility, and a scalable 
                infrastructure tailored to your needs.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Flexible access from anywhere</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Increased efficiency and productivity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Enhanced security and data protection</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">☁️</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud Infrastructure</h3>
                  <p className="text-gray-600">Scalable and secure cloud solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Informatics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Atlas Informatics for <span className="text-purple-600">Cloud Solutions?</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With Atlas Informatics, you gain access to cutting-edge cloud infrastructure, expert support, 
              and customized solutions. We help you transition smoothly from traditional setups to cloud 
              environments with minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cost-efficient Infrastructure */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cost-efficient Infrastructure</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Flexible scaling options that allow you to pay only for what you use, reducing hardware 
                costs and optimizing your IT budget.
              </p>
            </div>

            {/* Private and Public Cloud */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Private and Public Cloud</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tailored cloud options designed specifically for your business needs, whether you require 
                private cloud security or public cloud flexibility.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🛎️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">24/7 Support</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock support for cloud connectivity, data security, and performance optimization 
                to ensure your business runs smoothly.
              </p>
            </div>

            {/* Seamless Integration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Seamless Integration</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Smooth integration with your existing IT systems and applications, ensuring minimal 
                disruption during cloud migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure and Scalable Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Secure and <span className="text-green-600">Scalable Cloud Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you need a private cloud for sensitive data or a public cloud for seamless collaboration, 
              Atlas Informatics offers solutions that align with your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Private Cloud */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Private Cloud</h3>
              <p className="text-gray-600">
                Dedicated cloud infrastructure for sensitive data with enhanced security controls 
                and compliance features.
              </p>
            </div>

            {/* Public Cloud */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Public Cloud</h3>
              <p className="text-gray-600">
                Shared cloud resources for seamless collaboration and cost-effective scalability 
                for growing businesses.
              </p>
            </div>

            {/* Hybrid Cloud */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hybrid Cloud</h3>
              <p className="text-gray-600">
                Best of both worlds with flexible deployment options combining private and public 
                cloud benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cloud <span className="text-purple-600">Features</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team ensures secure access, compliance with industry standards, and continuous 
                monitoring for optimal performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Secure access and authentication</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Industry compliance standards</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Continuous performance monitoring</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Automated backup and disaster recovery</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Real-time scalability and flexibility</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud Excellence</h3>
                  <p className="text-gray-600">Empowering businesses with cloud technology</p>
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
            Transform Your Business with Cloud Computing
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Partner with Atlas Informatics to leverage the power of cloud computing. Let us help you 
            optimize your infrastructure, reduce costs, and enhance your business efficiency.
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






