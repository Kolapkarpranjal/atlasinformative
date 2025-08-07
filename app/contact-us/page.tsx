'use client'


import Footer from '../../component/footer'
import ContactForm from '../../component/ContactForm'

export default function ContactPage() {

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CONTACT US
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8">
            Atlas Informatics - Innovate Beyond Limits
          </p>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-lg text-gray-600">
              Government, PSU, BFSI, Education, and Corporate sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {['Government', 'PSU', 'BFSI', 'Education', 'Corporate'].map((sector) => (
              <div key={sector} className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                <h3 className="font-semibold text-purple-700">{sector}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR OFFERINGS</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Hardware Products</h3>
              <ul className="space-y-2 text-gray-600">
                {['Desktops', 'Laptops', 'Printers', 'Scanners', 'Biometric Machines', 'Servers', 'Networking', 'CCTV Equipment'].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Software Products</h3>
              <ul className="space-y-2 text-gray-600">
                {['Adobe', 'Microsoft Office', 'Antivirus', 'Autodesk', 'Data Recovery', 'Data Backup'].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                {['Cloud Computing', 'Artificial Intelligence', 'Automation'].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Alliances Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR ALLIANCES</h2>
            <p className="text-lg text-gray-600 mb-8">
              We collaborate with top brands:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'HP', 'DELL', 'LENOVO', 'LOGITECH',
              'CANON', 'EPSON', 'VERITAS', 'IBM',
              'MICROSOFT', 'CISCO'
            ].map((brand) => (
              <div key={brand} className="p-4 bg-purple-50 rounded-lg text-center hover:bg-purple-100 transition-colors duration-300">
                <span className="font-bold text-purple-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registered Portals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">REGISTERED PORTALS</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'GeM eMarketplace', 'Mahatenders', 'E-Procurement', 
              'iREEN', 'Tenderwizard', 'ABCProcure'
            ].map((portal) => (
              <div key={portal} className="p-4 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <span className="font-semibold text-gray-700 text-sm">{portal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">CONTACT INFORMATION</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91-8799962145</p>
                    <p className="text-gray-600">+91-9699593302</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@atlasinformatics.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Shop No - 803, Business Point,<br />
                      Trimurti Kamathwade Road,<br />
                      Trimurti Chowk, Durga Nagar,<br />
                      Nashik, Nashik, 422009
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
