import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="text-purple-600">Stories</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Real Results from Real Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how Atlas Informatics has transformed businesses across various industries. 
              From government institutions to corporate enterprises, our technology solutions have 
              delivered measurable results and lasting impact.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Success Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-green-600">Success Story</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we helped a major government institution achieve digital transformation
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">G</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Government Institution</h3>
                    <p className="text-gray-600">Digital Transformation Project</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A major government institution was struggling with outdated IT infrastructure, 
                    security vulnerabilities, and inefficient manual processes that were affecting 
                    service delivery to citizens.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-900">Our Solution</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Atlas Informatics implemented a comprehensive digital transformation including 
                    cloud migration, security upgrades, and automated workflow systems.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-900">The Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">85%</div>
                      <div className="text-sm text-gray-600">Faster Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">60%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-gray-600">Security Compliant</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏛️</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Government</h3>
                    <p className="text-gray-600">Transforming public services</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Across <span className="text-purple-600">Industries</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From healthcare to education, finance to manufacturing, we&apos;ve helped organizations 
              achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare Success Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Healthcare Provider</h3>
                  <p className="text-gray-600">Patient Care Optimization</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Implemented secure patient management systems and telemedicine solutions, 
                improving patient care by 40% and reducing wait times by 60%.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="text-green-500 mr-2">✅</span>
                <span>40% Improved Patient Care</span>
              </div>
            </div>

            {/* Education Success Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Educational Institution</h3>
                  <p className="text-gray-600">Digital Learning Platform</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Deployed comprehensive e-learning infrastructure supporting 10,000+ students 
                with 99.9% uptime and seamless remote learning capabilities.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="text-green-500 mr-2">✅</span>
                <span>10,000+ Students Supported</span>
              </div>
            </div>

            {/* Banking Success Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Financial Institution</h3>
                  <p className="text-gray-600">Security & Compliance</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Enhanced cybersecurity infrastructure and achieved 100% regulatory compliance 
                while reducing security incidents by 90% and improving transaction processing speed.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="text-green-500 mr-2">✅</span>
                <span>90% Reduced Security Incidents</span>
              </div>
            </div>

            {/* Manufacturing Success Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Manufacturing Company</h3>
                  <p className="text-gray-600">Process Automation</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Implemented IoT-based monitoring systems and automated production workflows, 
                increasing efficiency by 35% and reducing operational costs by 25%.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="text-green-500 mr-2">✅</span>
                <span>35% Increased Efficiency</span>
              </div>
            </div>

            {/* Retail Success Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Retail Chain</h3>
                  <p className="text-gray-600">Omnichannel Integration</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Integrated online and offline systems across 50+ locations, resulting in 
                45% increase in online sales and 30% improvement in customer satisfaction.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="text-green-500 mr-2">✅</span>
                <span>45% Increase in Online Sales</span>
              </div>
            </div>

            {/* Technology Success Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Tech Startup</h3>
                  <p className="text-gray-600">Scalable Infrastructure</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Built scalable cloud infrastructure supporting 100,000+ users with 99.99% 
                uptime, enabling rapid growth and seamless user experience.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="text-green-500 mr-2">✅</span>
                <span>100,000+ Users Supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-green-600">Clients Say</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear directly from the organizations we&apos;ve helped transform their digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">R</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-gray-600">IT Director, Government Institution</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                &ldquo;Atlas Informatics transformed our entire IT infrastructure. Their expertise 
                in government compliance and security made the transition seamless. We&apos;ve seen 
                incredible improvements in efficiency and service delivery.&rdquo;
              </p>
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">S</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600">CEO, Healthcare Provider</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                &ldquo;The team at Atlas Informatics understood our unique healthcare challenges. 
                Their patient management solution has revolutionized how we deliver care. 
                Our patients and staff couldn&apos;t be happier.&rdquo;
              </p>
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">M</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-gray-600">CTO, Financial Institution</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                &ldquo;Atlas Informatics helped us achieve 100% regulatory compliance while 
                significantly improving our security posture. Their expertise in financial 
                technology is unmatched.&rdquo;
              </p>
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that tell the story of transformation and success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-purple-600">700+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Businesses Served</h3>
              <p className="text-gray-600">Across multiple industries</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-green-600">40+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">States Covered</h3>
              <p className="text-gray-600">Nationwide presence</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-purple-600">99.9%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Average Uptime</h3>
              <p className="text-gray-600">Reliable solutions</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-green-600">98%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">Proven track record</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join hundreds of organizations that have transformed their business with Atlas Informatics. 
            Let&apos;s discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey →
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}






