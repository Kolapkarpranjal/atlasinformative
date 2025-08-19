'use client'

import Footer from '../../component/footer'
import ContactForm from '../../component/ContactForm';

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#0F0A1F] relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Get <span className="gradient-text">In Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0">
                Ready to transform your business? Let's discuss how our innovative IT solutions 
                can drive your digital success and accelerate your growth.
              </p>
            </div>

                    {/* Right Side - GIF instead of animated graphic */}
<div className="relative animate-slide-in-right flex justify-center">
  <img
      src="/assets/contct.jpg" // 👉 Place your GIF in public/
    alt="Hardware Animation"
    className="rounded-2xl shadow-2xl object-contain w-[500px] h-[400px]"
  />
</div>

            </div>
         
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 text-lg mb-8">
                  We're here to help you succeed. Reach out to us through any of these channels 
                  or fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 p-6 bg-[#1A1035] rounded-xl border border-[#2D1B69] hover:border-purple-500/40 transition-all duration-300 card-hover">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 glow-purple">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-300">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-[#1A1035] rounded-xl border border-[#2D1B69] hover:border-purple-500/40 transition-all duration-300 card-hover">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 glow-blue">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+91-8799962145</p>
                    <p className="text-gray-300">+91-9699593302</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-[#1A1035] rounded-xl border border-[#2D1B69] hover:border-purple-500/40 transition-all duration-300 card-hover">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 glow-purple">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">contact@atlasinformatics.in</p>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="flex items-start space-x-4 p-6 bg-[#1A1035] rounded-xl border border-[#2D1B69] hover:border-purple-500/40 transition-all duration-300 card-hover">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 glow-blue">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-[#1A1035] rounded-2xl p-8 border border-[#2D1B69] card-hover">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-gray-300">Visit our office or get in touch for a consultation</p>
          </div>
          {/* Placeholder for Map */}
          <div className="bg-[#140E2A] rounded-xl h-96 flex items-center justify-center border border-[#2D1B69] card-hover">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-300 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-400">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
