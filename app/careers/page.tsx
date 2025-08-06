import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-purple-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build your career with a leading IT service provider and shape the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Secure & Scalable IT Solutions for Businesses
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p className="transform hover:scale-105 transition-transform duration-300">
                  We provide a complete range of IT hardware, software, and solutions to drive business efficiency and security. 
                  Our offerings include desktops, servers, networking, cloud computing, artificial intelligence, and automation.
                </p>
                <p className="transform hover:scale-105 transition-transform duration-300">
                  Partnering with leading brands, we empower businesses across Government, PSU, BFSI, Education, and Corporate 
                  sectors with innovative technology solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation at Work</h3>
                  <p className="text-gray-600">Join us in shaping the future of technology</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We Offer <span className="text-purple-600">Diverse Career Paths</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities across various technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Service Desk", icon: "🖥️", color: "purple" },
              { title: "Networking/Communications", icon: "🌐", color: "green" },
              { title: "Systems Administration", icon: "⚙️", color: "purple" },
              { title: "Systems Engineering", icon: "🔧", color: "green" },
              { title: "Database Administration", icon: "🗄️", color: "purple" },
              { title: "Information Security", icon: "🔒", color: "green" },
              { title: "Client Services", icon: "👥", color: "purple" },
              { title: "Training", icon: "📚", color: "green" },
              { title: "Human Resources", icon: "👨‍💼", color: "purple" }
            ].map((career, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-l-4 border-${career.color}-500`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${career.color}-100 rounded-lg flex items-center justify-center`}>
                    <span className="text-2xl">{career.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{career.title}</h3>
                    <p className="text-sm text-gray-500">Join our dynamic team</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Commitment to Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We strive to foster a culture of innovation, integrity, and teamwork. Our guiding principles drive us to deliver 
              outstanding service, build strong relationships, and continuously improve to meet the evolving needs of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Fostering creativity and cutting-edge solutions</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">Building trust through honest practices</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Teamwork</h3>
              <p className="text-gray-600">Collaborating for collective success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Competitive & <span className="text-purple-600">Comprehensive Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our goal is for our employees to thrive in every aspect of their lives by providing benefit solutions that meet their evolving needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Health Insurance", icon: "🏥", color: "purple" },
              { title: "Flexible Hours", icon: "⏰", color: "green" },
              { title: "Professional Development", icon: "📈", color: "purple" },
              { title: "Work-Life Balance", icon: "⚖️", color: "green" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-t-4 border-${benefit.color}-500`}
              >
                <div className={`w-16 h-16 bg-${benefit.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">Comprehensive coverage and support</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Software Solutions <span className="text-green-600">Overview</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Work with cutting-edge technologies and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Development</h3>
              <p className="text-gray-600">Build innovative software solutions tailored to client needs</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Solutions</h3>
              <p className="text-gray-600">Scalable cloud infrastructure and migration services</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & Automation</h3>
              <p className="text-gray-600">Intelligent automation and AI-powered solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Do <span className="text-purple-600">Employees Say</span> About Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Senior Developer",
                content: "Atlas Informatics provides an amazing work environment with cutting-edge projects and supportive team members.",
                avatar: "👩‍💻"
              },
              {
                name: "Michael Chen",
                role: "Systems Engineer",
                content: "The company's commitment to innovation and professional growth has helped me advance my career significantly.",
                avatar: "👨‍💼"
              },
              {
                name: "Emily Rodriguez",
                role: "Project Manager",
                content: "Working here has been incredibly rewarding. The culture of teamwork and excellence is truly inspiring.",
                avatar: "👩‍💼"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start your journey with Atlas Informatics and be part of something extraordinary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us" 
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now →
            </Link>
            <Link 
              href="/about-us" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}







