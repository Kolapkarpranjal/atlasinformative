import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function HardwareProductsPage() {
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
            
            {/* Left Text Section */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hardware <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
                In today's technology-driven world, having reliable and efficient hardware is critical to the success of any organization. However, managing and maintaining hardware infrastructure can be challenging, requiring significant time, expertise, and resources.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Outsourcing your Hardware Solutions to trusted professionals is a strategic way to optimize your IT environment and ensure peak performance.
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
      src="/assets/hardware1.gif" // 👉 Place your GIF in public/
    alt="Hardware Animation"
    className="rounded-2xl shadow-2xl object-contain w-[500px] h-[400px]"
  />
</div>

            </div>
         
        </div>
      </section>
    
      {/* Our Hardware Solutions */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Hardware Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Atlas Informatics offers a wide range of hardware products and services to enhance your IT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enterprise-Grade Servers */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl text-white">🖥️</span>
                </div>
                <h3 className="text-xl font-bold text-white">Enterprise-Grade Servers</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                High-performance servers designed to support critical business applications and workloads.
              </p>
            </div>

            {/* Networking Equipment */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-white">Networking Equipment</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Advanced routers, switches, and firewalls to ensure seamless connectivity and security.
              </p>
            </div>

            {/* Workstations & Laptops */}
            <div id="workstations" className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl text-white">💻</span>
                </div>
                <h3 className="text-xl font-bold text-white">Workstations & Laptops</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Powerful computing solutions tailored to meet the demands of various industries.
              </p>
            </div>

            {/* Storage Solutions */}
            <div id="storage" className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl text-white">💾</span>
                </div>
                <h3 className="text-xl font-bold text-white">Storage Solutions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Scalable storage options, including NAS and cloud-integrated storage, for efficient data management.
              </p>
            </div>

            {/* Power Backup & UPS Systems */}
            <div id="power" className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white">Power Backup & UPS</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Reliable power protection to prevent data loss and downtime during power outages.
              </p>
            </div>

            {/* Custom Solutions */}
            <div id="custom" className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl text-white">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-white">Custom Solutions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tailored hardware configurations designed specifically for your business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How Our Hardware Solutions <span className="gradient-text">Benefit Your Business</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choosing the right hardware partner can significantly impact your business operations. 
              With Atlas Informatics, you gain:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* High-Quality Equipment */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-white">High-Quality Equipment</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We provide industry-leading hardware solutions from top manufacturers, ensuring reliability 
                and performance for your business operations.
              </p>
            </div>

            {/* Expert Consultation */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-white">Expert Consultation</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our team helps you select the best hardware based on your business needs, providing 
                personalized recommendations and strategic guidance.
              </p>
            </div>

            {/* Scalability & Future-Proofing */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white">Scalability & Future-Proofing</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Solutions designed to grow with your business, ensuring your hardware infrastructure 
                can adapt to changing needs and technological advancements.
              </p>
            </div>

            {/* Comprehensive Support & Maintenance */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-white">Comprehensive Support & Maintenance</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ongoing support to ensure optimal performance and minimal downtime, with proactive 
                maintenance and rapid response to issues.
              </p>
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
                Partner with <span className="gradient-text">Atlas Informatics</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                For reliable and efficient hardware solutions that power your business. Contact us today 
                to learn more about our offerings and how we can help optimize your IT infrastructure.
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
