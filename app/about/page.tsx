import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function AboutPage() {
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
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Atlas Informatics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading IT service provider delivering innovative and secure technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* About Us Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="group">
                <h2 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors duration-300">
                  About Us
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
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
                <div className="text-center p-6 bg-[#1A1035] border border-[#2D1B69] rounded-xl hover:bg-[#2D1B69] transition-all duration-300 transform hover:scale-105 card-hover animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
                  <div className="text-3xl font-bold text-purple-400 mb-2">700+</div>
                  <div className="text-sm text-gray-400">Businesses Supported</div>
                </div>
                <div className="text-center p-6 bg-[#1A1035] border border-[#2D1B69] rounded-xl hover:bg-[#2D1B69] transition-all duration-300 transform hover:scale-105 card-hover animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
                  <div className="text-3xl font-bold text-blue-400 mb-2">40+</div>
                  <div className="text-sm text-gray-400">States Covered</div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative animate-slide-in-right">
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-96 flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Trusted Technology Partner</h3>
                  <p className="text-gray-300">Serving multiple industries with innovative solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                icon: "🎯",
                title: "Our Vision",
                content: "Atlas Informatics was founded with the vision of making IT solutions accessible, secure, and efficient for businesses across various industries. Our leadership, with extensive experience in IT infrastructure and digital transformation, recognized the growing demand for reliable, industry-specific technology solutions.",
                bgColor: "from-purple-500/20 to-purple-600/20"
              },
              {
                icon: "🤝",
                title: "Collaboration & Growth",
                content: "We have collaborated with leading organizations across government, education, corporate, and BFSI sectors to build a company focused on delivering cutting-edge, secure, and scalable IT services. With that, Atlas Informatics was born.",
                bgColor: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: "🚀",
                title: "Today's Success",
                content: "Today, Atlas Informatics supports over 700 businesses across multiple industries, including finance, healthcare, education, and government sectors, spanning 40+ states. We specialize in providing secure, scalable, and innovative IT solutions tailored to industry needs.",
                bgColor: "from-purple-500/20 to-blue-500/20"
              }
            ].map((story, index) => (
              <div 
                key={index}
                className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom"
                style={{animationDelay: `${index * 0.2}s`}}
              >
              <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${story.bgColor} rounded-full flex items-center justify-center flex-shrink-0 glow-purple`}>
                    <span className="text-2xl">{story.icon}</span>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{story.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {story.content}
                  </p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We cater to multiple industries with specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🏛️", name: "Government", color: "purple" },
              { icon: "🎓", name: "Education", color: "blue" },
              { icon: "🏢", name: "Corporate", color: "purple" },
              { icon: "🏦", name: "BFSI", color: "cyan" }
            ].map((industry, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-[#1A1035] border border-[#2D1B69] hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 card-hover animate-slide-in-bottom"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-white">{industry.name}</h3>
              </div>
            ))}
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
                Ready to Transform Your <span className="gradient-text">Business</span>?
          </h2>
              <p className="text-xl text-gray-300 mb-8">
            Organizations trust us as a proven technology partner, and we can do the same for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/brochure" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Digital Brochure →
            </Link>
            <Link 
              href="/contact-us" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us →
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







