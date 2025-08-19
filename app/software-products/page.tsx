import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function SoftwareProductsPage() {
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
                Software <span className="gradient-text">Development</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
                At Atlas Informatics, we provide a comprehensive range of software products designed to enhance 
                efficiency, security, and business operations.
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mb-8">
                Our team of experts understands the evolving technology landscape and offers industry-leading 
                software solutions that help businesses streamline workflows, improve productivity, and stay ahead of the competition.
              </p>
              <Link 
                href="/contact-us" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us →
              </Link>
            </div>
            
            {/* Right Side - REPLACED animated graphic with GIF */}
            {/* Right Side - GIF instead of animated graphic */}
<div className="relative animate-slide-in-right flex justify-center">
  <img
      src="/assets/software1.gif" // 👉 Place your GIF in public/
    alt="Hardware Animation"
    className="rounded-2xl shadow-2xl object-contain w-[500px] h-[400px]"
  />
</div>
</div>
</div>
</section>

      {/* Introduction Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Tailored <span className="gradient-text">Software Solutions</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We work closely with organizations to deliver tailored software solutions that meet their specific needs.
              </p>
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-xl p-6 card-hover">
                <h3 className="text-xl font-semibold text-white mb-3">Trusted Partner</h3>
                <p className="text-gray-300 mb-3">
                  As a trusted partner of industry-leading brands like Microsoft, Adobe, Autodesk, and Veritas, 
                  we ensure that our clients receive top-notch software products with seamless integration and ongoing support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">Microsoft</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">Adobe</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">Autodesk</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">Veritas</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-96 flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Software Excellence</h3>
                  <p className="text-gray-300">Innovative solutions for modern businesses</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Offerings */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Software <span className="gradient-text">Offerings Include</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive software solutions designed to meet the diverse needs of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Microsoft Office Suite & Windows OS */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl text-white">📄</span>
                </div>
                <h3 className="text-xl font-bold text-white">Microsoft Office Suite & Windows OS</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Complete productivity suite with Word, Excel, PowerPoint, and Windows operating system for seamless business operations.
              </p>
            </div>

            {/* Adobe Creative Cloud & Document Solutions */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl text-white">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-white">Adobe Creative Cloud & Document Solutions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Professional creative tools and document management solutions for design and content creation.
              </p>
            </div>

            {/* Autodesk Design & Engineering Software */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl text-white">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-white">Autodesk Design & Engineering Software</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Advanced CAD and engineering software for architects, engineers, and construction professionals.
              </p>
            </div>

            {/* Antivirus & Cybersecurity Solutions */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-white">Antivirus & Cybersecurity Solutions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive security software to protect your business from cyber threats and data breaches.
              </p>
            </div>

            {/* Data Recovery & Backup Solutions */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl text-white">💾</span>
                </div>
                <h3 className="text-xl font-bold text-white">Data Recovery & Backup Solutions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Reliable data protection and recovery tools to ensure business continuity and data security.
              </p>
            </div>

            {/* Cloud-Based Productivity & Collaboration Tools */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl text-white">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-white">Cloud-Based Productivity & Collaboration Tools</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Modern collaboration platforms and cloud-based tools for enhanced team productivity and communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Software Solutions for <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Atlas Informatics serves businesses across multiple sectors, including Government, BFSI, Education, 
              and Corporate Enterprises. Our software solutions are designed to optimize performance, enhance 
              security, and ensure compliance with industry regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Government */}
            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-purple">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Government</h3>
              <p className="text-gray-300">Compliance-focused solutions for public sector organizations with enhanced security and regulatory adherence.</p>
            </div>

            {/* BFSI */}
            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-blue">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">BFSI</h3>
              <p className="text-gray-300">Financial services software with robust security, compliance, and risk management capabilities.</p>
            </div>

            {/* Education */}
            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-purple">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
              <p className="text-gray-300">Learning management systems and educational software for institutions and students.</p>
            </div>

            {/* Corporate Enterprises */}
            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-blue">
                <span className="text-xl font-semibold text-white mb-3">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Corporate Enterprises</h3>
              <p className="text-gray-300">Scalable enterprise solutions for large organizations with advanced features and integration capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Solutions Overview */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Software Solutions <span className="gradient-text">Overview</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our comprehensive software portfolio is designed to address the unique challenges faced by 
                businesses in today&apos;s digital landscape. From productivity tools to security solutions, 
                we provide the software foundation your organization needs to succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3">✅</span>
                  <span className="text-gray-300">Industry-leading software partnerships</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3">✅</span>
                  <span className="text-gray-300">Seamless integration and deployment</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3">✅</span>
                  <span className="text-gray-300">Ongoing support and maintenance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-3">✅</span>
                  <span className="text-gray-300">Compliance and security focused</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-96 flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Digital Transformation</h3>
                  <p className="text-gray-300">Empowering businesses with innovative software solutions</p>
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
                Transform Your Business with <span className="gradient-text">Software Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with Atlas Informatics to access industry-leading software products and expert support. 
                Let us help you streamline operations, enhance security, and drive innovation.
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






