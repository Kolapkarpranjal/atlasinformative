import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function HardwareProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hardware <span className="text-purple-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              In today's technology-driven world, having reliable and efficient hardware is critical to the success 
              of any organization. However, managing and maintaining hardware infrastructure can be challenging, 
              requiring significant time, expertise, and resources.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Outsourcing your Hardware Solutions to trusted professionals is a strategic way to optimize your 
              IT environment and ensure peak performance.
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
                Cutting-Edge <span className="text-green-600">Hardware Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Atlas Informatics, we provide cutting-edge Hardware Solutions tailored to meet the evolving 
                needs of businesses across various industries.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Atlas Informatics?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Industry-leading expertise</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Comprehensive support & maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">Scalable solutions for growth</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🖥️</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Enterprise Hardware</h3>
                  <p className="text-gray-600">Reliable solutions for modern businesses</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hardware Solutions Are Important */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Are Hardware <span className="text-purple-600">Solutions Important?</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technology is the backbone of modern businesses, and outdated or inefficient hardware can lead to 
              reduced productivity, security vulnerabilities, and increased operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seamless Operations</h3>
              <p className="text-gray-600">Investing in the right hardware ensures smooth business operations and enhanced productivity.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Security</h3>
              <p className="text-gray-600">Modern hardware solutions provide robust security features to protect your business data.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalability</h3>
              <p className="text-gray-600">Scalable solutions support future growth and evolving business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hardware Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Hardware Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Atlas Informatics offers a wide range of hardware products and services to enhance your IT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enterprise-Grade Servers */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">🖥️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enterprise-Grade Servers</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                High-performance servers designed to support critical business applications and workloads.
              </p>
            </div>

            {/* Networking Equipment */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Networking Equipment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Advanced routers, switches, and firewalls to ensure seamless connectivity and security.
              </p>
            </div>

            {/* Workstations & Laptops */}
            <div id="workstations" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Workstations & Laptops</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Powerful computing solutions tailored to meet the demands of various industries.
              </p>
            </div>

            {/* Storage Solutions */}
            <div id="storage" className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">💾</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Storage Solutions</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Scalable storage options, including NAS and cloud-integrated storage, for efficient data management.
              </p>
            </div>

            {/* Power Backup & UPS Systems */}
            <div id="power" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Power Backup & UPS</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Reliable power protection to prevent data loss and downtime during power outages.
              </p>
            </div>

            {/* Custom Solutions */}
            <div id="custom" className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Custom Solutions</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tailored hardware configurations designed specifically for your business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Our Hardware Solutions <span className="text-purple-600">Benefit Your Business</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choosing the right hardware partner can significantly impact your business operations. 
              With Atlas Informatics, you gain:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* High-Quality Equipment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">High-Quality Equipment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We provide industry-leading hardware solutions from top manufacturers, ensuring reliability 
                and performance for your business operations.
              </p>
            </div>

            {/* Expert Consultation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Expert Consultation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our team helps you select the best hardware based on your business needs, providing 
                personalized recommendations and strategic guidance.
              </p>
            </div>

            {/* Scalability & Future-Proofing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Scalability & Future-Proofing</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Solutions designed to grow with your business, ensuring your hardware infrastructure 
                can adapt to changing needs and technological advancements.
              </p>
            </div>

            {/* Comprehensive Support & Maintenance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Comprehensive Support & Maintenance</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ongoing support to ensure optimal performance and minimal downtime, with proactive 
                maintenance and rapid response to issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Partner with Atlas Informatics
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            For reliable and efficient hardware solutions that power your business. Contact us today 
            to learn more about our offerings and how we can help optimize your IT infrastructure.
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
