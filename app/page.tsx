"use client";

import Footer from '../component/footer';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 pt-20">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F0A1F]/80 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Technology Solutions for</span>
              <span className="block gradient-text mt-2">Advanced Industries</span>
          </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Accelerate innovation with cutting-edge IT hardware, software, and security solutions 
              designed for complex industries. Drive digital transformation with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
              Get Started Today
            </button>
            <button className="border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
              Explore Solutions
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-purple-500 rounded-full mt-2"
            />
        </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored for advanced manufacturing and complex industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🖥️",
                title: "Hardware Products",
                desc: "High-performance hardware solutions for optimal reliability and performance.",
                gradient: "from-purple-500 to-blue-500"
              },
              {
                icon: "💻",
                title: "Software Products",
                desc: "Custom enterprise software and digital transformation solutions.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "☁️",
                title: "Cloud Computing",
                desc: "Scalable cloud infrastructure and migration services.",
                gradient: "from-cyan-500 to-purple-500"
              },
              {
                icon: "🔧",
                title: "Technology Solutions",
                desc: "Comprehensive tech solutions for digital transformation.",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-3xl glow-purple`}>
                  {service.icon}
                </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{service.desc}</p>
                  <div className="mt-6 flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses achieve their digital transformation goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Tech Startup Growth",
                desc: "Helped a startup scale their infrastructure 10x while reducing costs by 40%.",
                metrics: "10x Scale, 40% Cost Reduction"
              },
              {
                icon: "🏢",
                title: "Enterprise Security",
                desc: "Implemented comprehensive security solutions for a Fortune 500 company.",
                metrics: "100% Security Coverage"
              },
              {
                icon: "🚀",
                title: "Digital Transformation",
                desc: "Accelerated digital transformation for a traditional manufacturing company.",
                metrics: "60% Efficiency Increase"
              }
            ].map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-[#1A1035] border border-[#2D1B69] rounded-2xl p-8 card-hover">
                  <div className="text-5xl mb-6">{story.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{story.desc}</p>
                  <div className="text-sm text-purple-400 font-semibold mb-4">{story.metrics}</div>
                  <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                    Read Case Study
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
            </div>
            </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">Atlas Informatics</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and unwavering commitment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Expert Team",
                desc: "Certified professionals with years of industry experience and deep technical knowledge.",
                color: "from-purple-500 to-blue-500"
              },
              {
                icon: "💡",
                title: "Innovation First",
                desc: "Cutting-edge solutions that keep you ahead of the competition and future-ready.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🛡️",
                title: "24/7 Support",
                desc: "Round-the-clock technical support and maintenance services for peace of mind.",
                color: "from-cyan-500 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-purple`}>
                  <span className="text-3xl">{feature.icon}</span>
              </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-[#1A1035] border border-[#2D1B69] rounded-3xl p-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="gradient-text">Business</span>?
          </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Let's discuss how our cutting-edge solutions can drive your digital success and accelerate innovation
          </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
              Get Free Consultation
            </button>
                <button className="border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
              View Our Portfolio
            </button>
          </div>
        </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
