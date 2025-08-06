import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-purple-600">Atlas Informatics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading IT service provider delivering innovative and secure technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* About Us Content */}
            <div className="space-y-8">
              <div className="group">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                  About Us
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p className="transform hover:scale-105 transition-transform duration-300">
                    Atlas Informatics is a leading IT service provider, delivering innovative and secure technology solutions. 
                    With expertise in IT hardware, software, and solutions, we cater to multiple industries, including 
                    government, education, corporate, and BFSI sectors.
                  </p>
                  <p className="transform hover:scale-105 transition-transform duration-300">
                    Our commitment to excellence drives us to provide cutting-edge technology tailored to modern business needs.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-purple-600 mb-2">700+</div>
                  <div className="text-sm text-gray-600">Businesses Supported</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-green-600 mb-2">40+</div>
                  <div className="text-sm text-gray-600">States Covered</div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Technology Partner</h3>
                  <p className="text-gray-600">Serving multiple industries with innovative solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Story</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Atlas Informatics was founded with the vision of making IT solutions accessible, secure, and efficient 
                    for businesses across various industries. Our leadership, with extensive experience in IT infrastructure 
                    and digital transformation, recognized the growing demand for reliable, industry-specific technology solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration & Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We have collaborated with leading organizations across government, education, corporate, and BFSI sectors 
                    to build a company focused on delivering cutting-edge, secure, and scalable IT services. With that, 
                    Atlas Informatics was born.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Today&apos;s Success</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Today, Atlas Informatics supports over 700 businesses across multiple industries, including finance, 
                    healthcare, education, and government sectors, spanning 40+ states. We specialize in providing secure, 
                    scalable, and innovative IT solutions tailored to industry needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We <span className="text-green-600">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We cater to multiple industries with specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🏛️", name: "Government", color: "purple" },
              { icon: "🎓", name: "Education", color: "green" },
              { icon: "🏢", name: "Corporate", color: "purple" },
              { icon: "🏦", name: "BFSI", color: "green" }
            ].map((industry, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-xl bg-${industry.color}-50 hover:bg-${industry.color}-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Organizations trust us as a proven technology partner, and we can do the same for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/brochure" 
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Digital Brochure →
            </Link>
            <Link 
              href="/contact-us" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}







