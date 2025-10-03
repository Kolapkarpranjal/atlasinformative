'use client'

import { useState } from 'react'
import Footer from '../../component/footer'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <main className="min-h-screen bg-[#0F0A1F] relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Get <span className="gradient-text">In Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0">
                Ready to transform your business? Let’s discuss how our innovative IT solutions 
                can drive your digital success and accelerate your growth.
              </p>
            </div>

            <div className="relative animate-slide-in-right flex justify-center">
              <img
                src="/assets/contct.jpg"
                alt="Contact Illustration"
                className="rounded-2xl shadow-2xl object-contain w-[500px] h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
{/* Contact Info */}
<div className="space-y-8">
  <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
  <p className="text-gray-300 text-lg mb-8">
    We’re here to help you succeed. Reach out to us through any of these channels.
  </p>

  <p className="text-gray-300 font-semibold">🏢 Company: ATLAS INFORMATICS</p>
  <p className="text-gray-300">
    📍 Head Office: 803, Roongta Business Point, Durga Nagar, Trimurti Ambad Road,
    Trimurti Chowk, Nashik, Maharashtra, 422009  
    <a 
      href="https://www.google.com/maps/search/?api=1&query=Roongta+Business+Point,+Trimurti+Ambad+Road,+Nashik"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 hover:underline ml-1"
    >
      📌 View on Google Maps
    </a>
  </p>

  <p className="text-gray-300">🌍 Presence: Mumbai, Pune, Sambhaji Nagar, Nagpur</p>
  <p className="text-gray-300">🕒 Business Hours: Monday – Friday, 10 AM – 7 PM</p>

  <p className="text-gray-300">📞 +91-8799962145 / +91-9699593302</p>
  <p className="text-gray-300">📧 contact@atlasinformatics.in</p>
</div>


            {/* Contact Form */}
            <div className="bg-[#1A1035] rounded-2xl p-8 border border-[#2D1B69]">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#140E2A] text-gray-200 border border-[#2D1B69] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#140E2A] text-gray-200 border border-[#2D1B69] focus:outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#140E2A] text-gray-200 border border-[#2D1B69] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </form>

              {success && (
                <div className="mt-4 p-3 bg-green-600 text-white rounded-lg text-center">
                  ✅ Message sent successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
