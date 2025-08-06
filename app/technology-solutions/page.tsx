import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function TechnologySolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Technology <span className="text-purple-600">Solutions</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Comprehensive Technology Solutions by Atlas Informatics
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              At Atlas Informatics, we provide cutting-edge technology solutions to help businesses streamline 
              operations, enhance productivity, and secure their digital assets. From software support to 
              hardware management, our solutions are tailored to meet your unique IT needs.
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

      {/* Software Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Software <span className="text-green-600">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expert team ensures your software applications are always up to date, optimized for 
                performance, and protected with the latest security patches. We offer hosting, management, 
                and ongoing technical support for a wide range of software, including:
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Cloud-based applications</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Enterprise resource planning (ERP) systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Productivity and collaboration tools</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Security and firewall software</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Data management and reporting solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Excellence</h3>
                  <p className="text-gray-600">Optimized and secure software solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🖥️</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Hardware Infrastructure</h3>
                  <p className="text-gray-600">Reliable and efficient hardware solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-ping"></div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hardware <span className="text-purple-600">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Choosing the right hardware is crucial for business efficiency. At Atlas Informatics, 
                we help you select, configure, and maintain IT infrastructure that aligns with your 
                operational goals. Our services include:
              </p>
              <div className="bg-gradient-to-r from-green-100 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hardware Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Hardware procurement and setup</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Server and network management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">IT infrastructure maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">24/7 help desk support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Vendor management for seamless hardware integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Informatics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">Atlas Informatics?</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With years of experience in IT solutions, Atlas Informatics is your trusted partner for 
              innovative and secure technology services. We provide proactive monitoring, expert consultations, 
              and customized IT strategies to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Proactive Monitoring */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proactive Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring of your IT infrastructure to identify and resolve issues before 
                they impact your business operations.
              </p>
            </div>

            {/* Expert Consultations */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Consultations</h3>
              <p className="text-gray-600">
                Access to experienced IT professionals who provide strategic guidance and technical 
                expertise for your technology decisions.
              </p>
            </div>

            {/* Customized IT Strategies */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customized IT Strategies</h3>
              <p className="text-gray-600">
                Tailored technology solutions designed specifically for your business needs and 
                growth objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technology Solutions <span className="text-purple-600">Overview</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive technology solutions encompass both software and hardware management, 
                ensuring your business has the tools and infrastructure needed for success in today's 
                digital landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">End-to-end technology management</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Security-first approach</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Scalable and flexible solutions</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">24/7 technical support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Cost-effective technology solutions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Transformation</h3>
                  <p className="text-gray-600">Empowering businesses with technology</p>
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
            Transform Your Business with Technology Solutions
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Partner with Atlas Informatics to leverage cutting-edge technology solutions. Let us help you 
            streamline operations, enhance productivity, and secure your digital assets for sustainable growth.
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






