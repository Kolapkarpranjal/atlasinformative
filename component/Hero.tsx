import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Floating gradient shapes */}
      <div className="absolute w-[28rem] h-[28rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[26rem] h-[26rem] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slower bottom-[-150px] right-[-100px]"></div>
      <div className="absolute w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply blur-3xl animate-float-slow left-[20%] top-[60%]"></div>
      <div className="absolute w-64 h-64 bg-purple-400/20 rounded-full mix-blend-multiply blur-3xl animate-float-slower right-[25%] top-[30%]"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Animated Heading with Typewriter */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight relative"
        >
          <TypeAnimation
            sequence={[
              'Transforming Business Through',
              2000,
              'Empowering Your Digital Future',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="relative z-10"
          />
          <span className="block bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#a855f7] text-transparent bg-clip-text mt-2 drop-shadow-[0_0_20px_rgba(236,72,153,0.7)]">
            Innovative Technology
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Atlas Informatics delivers cutting-edge digital solutions that empower businesses
          to thrive in the modern digital landscape. From AI-driven insights to seamless
          cloud infrastructure, we're your strategic technology partner.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="relative bg-gradient-to-r from-[#a855f7] to-[#ec4899] px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.8)] hover:shadow-[0_0_30px_rgba(236,72,153,1)]"
          >
            Get Started Today
          </Link>

          <Link
            href="/services"
            className="relative border-2 border-pink-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#a855f7] hover:to-[#ec4899] hover:border-transparent shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)]"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          className="w-6 h-6 text-pink-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: floatSlower 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
