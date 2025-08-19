import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function TechnologySolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0F0A1F] relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '0.5s'}}></div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Technology <span className="gradient-text">Solutions</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
                Comprehensive Technology Solutions by Atlas Informatics
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
                At Atlas Informatics, we provide cutting-edge technology solutions to help businesses streamline 
                operations, enhance productivity, and secure their digital assets. From software support to 
                hardware management, our solutions are tailored to meet your unique IT needs.
              </p>
              <Link 
                href="/contact-us" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us →
              </Link>
            </div>
               {/* Right Side - GIF instead of animated graphic */}
<div className="relative animate-slide-in-right flex justify-center">
  <img
      src="/assets/tech.gif" // 👉 Place your GIF in public/
    alt="Hardware Animation"
    className="rounded-2xl shadow-2xl object-contain w-[500px] h-[400px]"
  />
</div>

            </div>
         
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Software <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our expert team ensures your software applications are always up to date, optimized for 
                performance, and protected with the latest security patches. We offer hosting, management, 
                and ongoing technical support for a wide range of software, including:
              </p>
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-xl p-6 card-hover">
                <h3 className="text-xl font-semibold text-white mb-3">Software Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Cloud-based applications</span></li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Enterprise resource planning (ERP) systems</span></li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Productivity and collaboration tools</span></li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Security and firewall software</span></li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Data management and reporting solutions</span></li>
                </ul>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-96 flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Software Excellence</h3>
                  <p className="text-gray-300">Optimized and secure software solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Solutions Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 animate-slide-in-left">
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-96 flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="text-6xl mb-4">🖥️</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Hardware Infrastructure</h3>
                  <p className="text-gray-300">Reliable and efficient hardware solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full opacity-50 animate-ping"></div>
            </div>
            <div className="space-y-6 order-1 lg:order-2 animate-slide-in-right">
              <h2 className="text-3xl font-bold text-white mb-6">
                Hardware <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Choosing the right hardware is crucial for business efficiency. At Atlas Informatics, 
                we help you select, configure, and maintain IT infrastructure that aligns with your 
                operational goals. Our services include:
              </p>
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-xl p-6 card-hover">
                <h3 className="text-xl font-semibold text-white mb-3">Hardware Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Hardware procurement and setup</span></li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Server and network management</span></li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">IT infrastructure maintenance</span></li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">24/7 help desk support</span></li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Vendor management for seamless hardware integration</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Informatics */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Atlas Informatics?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              With years of experience in IT solutions, Atlas Informatics is your trusted partner for 
              innovative and secure technology services. We provide proactive monitoring, expert consultations, 
              and customized IT strategies to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay:'0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proactive Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring of your IT infrastructure to identify and resolve issues before they impact operations.</p>
            </div>
            <div className="text-center bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay:'0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Consultations</h3>
              <p className="text-gray-300">Access to experienced IT professionals who provide strategic guidance and technical expertise.</p>
            </div>
            <div className="text-center bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay:'0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customized IT Strategies</h3>
              <p className="text-gray-300">Tailored technology solutions designed specifically for your business needs and growth objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions Overview */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Technology Solutions <span className="gradient-text">Overview</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our comprehensive technology solutions encompass both software and hardware management, 
                ensuring your business has the tools and infrastructure needed for success in today's 
                digital landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">End-to-end technology management</span></div>
                <div className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Security-first approach</span></div>
                <div className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Scalable and flexible solutions</span></div>
                <div className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">24/7 technical support</span></div>
                <div className="flex items-center"><span className="text-purple-400 mr-3">✅</span><span className="text-gray-300">Cost-effective technology solutions</span></div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-96 flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Digital Transformation</h3>
                  <p className="text-gray-300">Empowering businesses with technology</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-[#1A1035] border border-[#2D1B69] rounded-3xl p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Transform Your Business with <span className="gradient-text">Technology Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with Atlas Informatics to leverage cutting-edge technology solutions. Let us help you 
                streamline operations, enhance productivity, and secure your digital assets for sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact-us" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us →
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}






