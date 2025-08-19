import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function CloudComputingPage() {
  return (
    <main className="min-h-screen bg-[#0F0A1F] relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg fixed inset-0 z-0">
        {/* Floating Geometric Shapes */}
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cloud <span className="gradient-text">Computing</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6">
                Cloud Computing Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
                As businesses increasingly rely on digital applications, cloud computing has become the preferred 
                solution for scalability, security, and efficiency. Atlas Informatics provides comprehensive 
                cloud solutions to optimize your infrastructure, reduce hardware costs, and ensure seamless accessibility.
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
      src="/assets/cloud1.gif" // 👉 Place your GIF in public/
    alt="Hardware Animation"
    className="rounded-2xl shadow-2xl object-contain w-[500px] h-[400px]"
  />
</div>

            </div>
         
        </div>
      </section>

      {/* What Is Cloud Computing Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                What Is <span className="gradient-text">Cloud Computing?</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Cloud computing enables businesses to store, manage, and process data on remote servers rather 
                than on-premises hardware. This allows for flexible access, increased efficiency, and better security.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Atlas Informatics, we leverage leading cloud technologies to ensure your business runs smoothly. 
                Our cloud services provide secure data management, high-speed accessibility, and a scalable 
                infrastructure tailored to your needs.
              </p>
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-xl p-6 card-hover">
                <h3 className="text-xl font-semibold text-white mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✅</span>
                    <span className="text-gray-300">Flexible access from anywhere</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✅</span>
                    <span className="text-gray-300">Increased efficiency and productivity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✅</span>
                    <span className="text-gray-300">Enhanced security and data protection</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-96 flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="text-6xl mb-4">☁️</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h3>
                  <p className="text-gray-300">Scalable and secure cloud solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Atlas Informatics */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Atlas Informatics for <span className="gradient-text">Cloud Solutions?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              With Atlas Informatics, you gain access to cutting-edge cloud infrastructure, expert support, 
              and customized solutions. We help you transition smoothly from traditional setups to cloud 
              environments with minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cost-efficient Infrastructure */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-white">Cost-efficient Infrastructure</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Flexible scaling options that allow you to pay only for what you use, reducing hardware 
                costs and optimizing your IT budget.
              </p>
            </div>

            {/* Private and Public Cloud */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-white">Private and Public Cloud</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tailored cloud options designed specifically for your business needs, whether you require 
                private cloud security or public cloud flexibility.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl">🛎️</span>
                </div>
                <h3 className="text-xl font-bold text-white">24/7 Support</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Round-the-clock support for cloud connectivity, data security, and performance optimization 
                to ensure your business runs smoothly.
              </p>
            </div>

            {/* Seamless Integration */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-white">Seamless Integration</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Smooth integration with your existing IT systems and applications, ensuring minimal 
                disruption during cloud migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure and Scalable Solutions */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Secure and <span className="gradient-text">Scalable Cloud Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Whether you need a private cloud for sensitive data or a public cloud for seamless collaboration, 
              Atlas Informatics offers solutions that align with your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Private Cloud */}
            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-purple">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Private Cloud</h3>
              <p className="text-gray-300">
                Dedicated cloud infrastructure for sensitive data with enhanced security controls 
                and compliance features.
              </p>
            </div>

            {/* Public Cloud */}
            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-blue">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Public Cloud</h3>
              <p className="text-gray-300">
                Shared cloud resources for seamless collaboration and cost-effective scalability 
                for growing businesses.
              </p>
            </div>

            {/* Hybrid Cloud */}
            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-purple">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Hybrid Cloud</h3>
              <p className="text-gray-300">
                Best of both worlds with flexible deployment options combining private and public 
                cloud benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Features */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Cloud <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team ensures secure access, compliance with industry standards, and continuous 
                monitoring for optimal performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3">✅</span>
                  <span className="text-gray-300">Secure access and authentication</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3">✅</span>
                  <span className="text-gray-300">Industry compliance standards</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3">✅</span>
                  <span className="text-gray-300">Continuous performance monitoring</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3">✅</span>
                  <span className="text-gray-300">Automated backup and disaster recovery</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3">✅</span>
                  <span className="text-gray-300">Real-time scalability and flexibility</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-96 flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud Excellence</h3>
                  <p className="text-gray-300">Empowering businesses with cloud technology</p>
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
                Transform Your Business with <span className="gradient-text">Cloud Computing</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with Atlas Informatics to leverage the power of cloud computing. Let us help you 
                optimize your infrastructure, reduce costs, and enhance your business efficiency.
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






