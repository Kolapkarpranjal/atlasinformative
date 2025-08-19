import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function SuccessStoriesPage() {
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
            <div className="text-center lg:text-left space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Success <span className="gradient-text">Stories</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
                Real Results from Real Clients
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Discover how Atlas Informatics has transformed businesses across various industries. 
                From government institutions to corporate enterprises, our technology solutions have 
                delivered measurable results and lasting impact.
              </p>
              <Link 
                href="/contact-us" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Story →
              </Link>
            </div>

            {/* Right Side - GIF instead of animated graphic */}
<div className="relative animate-slide-in-right flex justify-center">
  <img
      src="/assets/succes.png" // 👉 Place your GIF in public/
    alt="Hardware Animation"
    className="rounded-2xl shadow-2xl object-contain w-[500px] h-[400px]"
  />
</div>

            </div>
         
        </div>
      </section>


      {/* Featured Success Story */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Success Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              How we helped a major government institution achieve digital transformation
            </p>
          </div>

          <div className="bg-[#1A1035] border border-[#2D1B69] rounded-3xl p-8 md:p-12 shadow-xl card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center glow-purple">
                    <span className="text-white text-xl font-bold">G</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Government Institution</h3>
                    <p className="text-gray-300">Digital Transformation Project</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">The Challenge</h4>
                  <p className="text-gray-300 leading-relaxed">
                    A major government institution was struggling with outdated IT infrastructure, 
                    security vulnerabilities, and inefficient manual processes that were affecting 
                    service delivery to citizens.
                  </p>
                  <h4 className="text-xl font-semibold text-white">Our Solution</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Atlas Informatics implemented a comprehensive digital transformation including 
                    cloud migration, security upgrades, and automated workflow systems.
                  </p>
                  <h4 className="text-xl font-semibold text-white">The Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#140E2A] border border-[#2D1B69] rounded-xl card-hover">
                      <div className="text-3xl font-bold text-purple-400">85%</div>
                      <div className="text-sm text-gray-400">Faster Processing</div>
                    </div>
                    <div className="text-center p-4 bg-[#140E2A] border border-[#2D1B69] rounded-xl card-hover">
                      <div className="text-3xl font-bold text-blue-400">99.9%</div>
                      <div className="text-sm text-gray-400">Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-[#140E2A] border border-[#2D1B69] rounded-xl card-hover">
                      <div className="text-3xl font-bold text-purple-400">60%</div>
                      <div className="text-sm text-gray-400">Cost Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-[#140E2A] border border-[#2D1B69] rounded-xl card-hover">
                      <div className="text-3xl font-bold text-blue-400">100%</div>
                      <div className="text-sm text-gray-400">Security Compliant</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-80 flex items-center justify-center card-hover">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏛️</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Digital Government</h3>
                    <p className="text-gray-300">Transforming public services</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full opacity-50 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Success Stories */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Success Across <span className="gradient-text">Industries</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From healthcare to education, finance to manufacturing, we&apos;ve helped organizations 
              achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare Success Story */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Healthcare Provider</h3>
                  <p className="text-gray-300">Patient Care Optimization</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Implemented secure patient management systems and telemedicine solutions, 
                improving patient care by 40% and reducing wait times by 60%.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-purple-400 mr-2">✅</span>
                <span>40% Improved Patient Care</span>
              </div>
            </div>

            {/* Education Success Story */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Educational Institution</h3>
                  <p className="text-gray-300">Digital Learning Platform</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Deployed comprehensive e-learning infrastructure supporting 10,000+ students 
                with 99.9% uptime and seamless remote learning capabilities.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-purple-400 mr-2">✅</span>
                <span>10,000+ Students Supported</span>
              </div>
            </div>

            {/* Banking Success Story */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl">🏦</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Financial Institution</h3>
                  <p className="text-gray-300">Security & Compliance</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Enhanced cybersecurity infrastructure and achieved 100% regulatory compliance 
                while reducing security incidents by 90% and improving transaction processing speed.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-purple-400 mr-2">✅</span>
                <span>90% Reduced Security Incidents</span>
              </div>
            </div>

            {/* Manufacturing Success Story */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Manufacturing Company</h3>
                  <p className="text-gray-300">Process Automation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Implemented IoT-based monitoring systems and automated production workflows, 
                increasing efficiency by 35% and reducing operational costs by 25%.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-purple-400 mr-2">✅</span>
                <span>35% Increased Efficiency</span>
              </div>
            </div>

            {/* Retail Success Story */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-4 glow-blue">
                  <span className="text-2xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Retail Chain</h3>
                  <p className="text-gray-300">Omnichannel Integration</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Integrated online and offline systems across 50+ locations, resulting in 
                45% increase in online sales and 30% improvement in customer satisfaction.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-purple-400 mr-2">✅</span>
                <span>45% Increase in Online Sales</span>
              </div>
            </div>

            {/* Technology Success Story */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4 glow-purple">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Tech Startup</h3>
                  <p className="text-gray-300">Scalable Infrastructure</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Built scalable cloud infrastructure supporting 100,000+ users with 99.99% 
                uptime, enabling rapid growth and seamless user experience.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-purple-400 mr-2">✅</span>
                <span>100,000+ Users Supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear directly from the organizations we&apos;ve helped transform their digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 shadow-lg card-hover animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 glow-purple">
                  <span className="text-white text-xl font-bold">R</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Rajesh Kumar</h4>
                  <p className="text-gray-300">IT Director, Government Institution</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                “Atlas Informatics transformed our entire IT infrastructure. Their expertise 
                in government compliance and security made the transition seamless. We&apos;ve seen 
                incredible improvements in efficiency and service delivery.”
              </p>
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 shadow-lg card-hover animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 glow-blue">
                  <span className="text-white text-xl font-bold">S</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Sarah Johnson</h4>
                  <p className="text-gray-300">CEO, Healthcare Provider</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                “The team at Atlas Informatics understood our unique healthcare challenges. 
                Their patient management solution has revolutionized how we deliver care. 
                Our patients and staff couldn&apos;t be happier.”
              </p>
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 shadow-lg card-hover animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 glow-purple">
                  <span className="text-white text-xl font-bold">M</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Michael Chen</h4>
                  <p className="text-gray-300">CTO, Financial Institution</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                “Atlas Informatics helped us achieve 100% regulatory compliance while 
                significantly improving our security posture. Their expertise in financial 
                technology is unmatched.”
              </p>
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Numbers that tell the story of transformation and success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-purple-400">700+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Businesses Served</h3>
              <p className="text-gray-300">Across multiple industries</p>
            </div>

            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-blue-400">40+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">States Covered</h3>
              <p className="text-gray-300">Nationwide presence</p>
            </div>

            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-purple-400">99.9%</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Average Uptime</h3>
              <p className="text-gray-300">Reliable solutions</p>
            </div>

            <div className="text-center group animate-slide-in-bottom" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-blue-400">98%</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Client Satisfaction</h3>
              <p className="text-gray-300">Proven track record</p>
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
                Ready to Write Your <span className="gradient-text">Success Story</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of organizations that have transformed their business with Atlas Informatics. 
                Let&apos;s discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact-us" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey →
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services →
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






