import Navbar from '../../component/Navbar';
import Footer from '../../component/footer';
import Link from 'next/link';

export default function CareersPage() {
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
                Join Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Build your career with a leading IT service provider and shape the future of technology
              </p>
            </div>
            {/* Right Side - GIF instead of animated graphic */}
<div className="relative animate-slide-in-right flex justify-center">
  <img
      src="/assets/team.jpg" // 👉 Place your GIF in public/
    alt="Hardware Animation"
    className="rounded-2xl shadow-2xl object-contain w-[500px] h-[400px]"
  />
</div>

            </div>
         
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Secure & Scalable IT Solutions for Businesses
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
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
            <div className="relative animate-slide-in-right">
              <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 h-96 flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation at Work</h3>
                  <p className="text-gray-300">Join us in shaping the future of technology</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full opacity-50 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              We Offer <span className="gradient-text">Diverse Career Paths</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore exciting opportunities across various technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Service Desk', icon: '🖥️', color: 'purple' },
              { title: 'Networking/Communications', icon: '🌐', color: 'blue' },
              { title: 'Systems Administration', icon: '⚙️', color: 'purple' },
              { title: 'Systems Engineering', icon: '🔧', color: 'blue' },
              { title: 'Database Administration', icon: '🗄️', color: 'purple' },
              { title: 'Information Security', icon: '🔒', color: 'blue' },
              { title: 'Client Services', icon: '👥', color: 'purple' },
              { title: 'Training', icon: '📚', color: 'blue' },
              { title: 'Human Resources', icon: '👨‍💼', color: 'purple' }
            ].map((career, index) => (
              <div
                key={index}
                className={
                  `rounded-xl p-6 card-hover animate-slide-in-bottom ` +
                  `${index % 2 ? 'delay-200' : ''} ` +
                  `bg-[#1A1035] border border-[#2D1B69]`
                }
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${career.color === 'purple' ? 'bg-purple-600/20' : 'bg-blue-600/20'} ${career.color === 'purple' ? 'glow-purple' : 'glow-blue'}`}>
                    <span className="text-2xl">{career.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white animate-fade-in">{career.title}</h3>
                    <p className="text-sm text-gray-400 animate-fade-in" style={{animationDelay: '0.1s'}}>Join our dynamic team</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Commitment to Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We strive to foster a culture of innovation, integrity, and teamwork. Our guiding principles drive us to deliver 
              outstanding service, build strong relationships, and continuously improve to meet the evolving needs of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay:'0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">Fostering creativity and cutting-edge solutions</p>
            </div>
            <div className="text-center bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay:'0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
              <p className="text-gray-300">Building trust through honest practices</p>
            </div>
            <div className="text-center bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover animate-slide-in-bottom" style={{animationDelay:'0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Teamwork</h3>
              <p className="text-gray-300">Collaborating for collective success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Competitive & <span className="gradient-text">Comprehensive Benefits</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our goal is for our employees to thrive in every aspect of their lives by providing benefit solutions that meet their evolving needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Health Insurance', icon: '🏥', color: 'purple' },
              { title: 'Flexible Hours', icon: '⏰', color: 'blue' },
              { title: 'Professional Development', icon: '📈', color: 'purple' },
              { title: 'Work-Life Balance', icon: '⚖️', color: 'blue' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl card-hover animate-slide-in-bottom bg-[#1A1035] border border-[#2D1B69]"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${benefit.color === 'purple' ? 'bg-purple-600/20 glow-purple' : 'bg-blue-600/20 glow-blue'}`}>
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 animate-fade-in">{benefit.title}</h3>
                <p className="text-sm text-gray-300 animate-fade-in" style={{animationDelay: '0.1s'}}>Comprehensive coverage and support</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions Overview */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Software Solutions <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Work with cutting-edge technologies and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 text-center card-hover animate-slide-in-bottom" style={{animationDelay:'0.1s'}}>
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Development</h3>
              <p className="text-gray-300">Build innovative software solutions tailored to client needs</p>
            </div>
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 text-center card-hover animate-slide-in-bottom" style={{animationDelay:'0.2s'}}>
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
              <p className="text-gray-300">Scalable cloud infrastructure and migration services</p>
            </div>
            <div className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 text-center card-hover animate-slide-in-bottom" style={{animationDelay:'0.3s'}}>
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI & Automation</h3>
              <p className="text-gray-300">Intelligent automation and AI-powered solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Do <span className="gradient-text">Employees Say</span> About Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Senior Developer', content: 'Atlas Informatics provides an amazing work environment with cutting-edge projects and supportive team members.', avatar: '👩‍💻' },
              { name: 'Michael Chen', role: 'Systems Engineer', content: "The company's commitment to innovation and professional growth has helped me advance my career significantly.", avatar: '👨‍💼' },
              { name: 'Emily Rodriguez', role: 'Project Manager', content: 'Working here has been incredibly rewarding. The culture of teamwork and excellence is truly inspiring.', avatar: '👩‍💼' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 shadow-lg card-hover animate-slide-in-bottom" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mr-4 glow-purple">
                    <span className="text-xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white animate-fade-in">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400 animate-fade-in" style={{animationDelay:'0.1s'}}>{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">“{testimonial.content}”</p>
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
                Ready to <span className="gradient-text">Join Our Team</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey with Atlas Informatics and be part of something extraordinary
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact-us" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now →
                </Link>
                <Link 
                  href="/about-us" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Learn More →
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







