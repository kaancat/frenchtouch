'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [address, setAddress] = useState('')
  const router = useRouter()

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (address.trim()) {
      // Navigate to windows page with address as query parameter
      router.push(`/windows?address=${encodeURIComponent(address)}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Mascot Watermark */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://fs.frenchtouch.dk/wp-content/uploads/2025/05/Frenchtouchguygoodblue-977x1024.webp"
          alt=""
          className="absolute bottom-0 right-0 w-80 h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[32rem] object-contain opacity-15 transform translate-x-12 translate-y-8"
        />
      </div>

      {/* Main Content - Full Screen */}
      <main className="relative z-10 container-custom py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Få et gratis tilbud på <span className="text-accent">vinduesrengøring</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
              Moderne, professionel vinduesrengøring til din bolig. 
              Indtast din adresse og få et skræddersyet tilbud på under 2 minutter.
            </p>
          </motion.div>

          {/* Address Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto relative z-20"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Start her med din adresse
            </h3>
            
            <form onSubmit={handleAddressSubmit} className="space-y-6">
              <div>
                <label htmlFor="address" className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Indtast din fulde adresse
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="F.eks. Vesterbrogade 123, 1620 Kbh V"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-lg"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Få mit tilbud →
              </motion.button>
            </form>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Gratis tilbud</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Ingen forpligtelse</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>2 min. proces</span>
              </div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20"
          >
            {[
              {
                icon: "✨",
                title: "Professionel kvalitet",
                description: "Vi bruger kun de bedste materialer og teknikker",
                color: "bg-primary"
              },
              {
                icon: "⚡",
                title: "Hurtig booking",
                description: "Book din rengøring online på under 2 minutter",
                color: "bg-accent"
              },
              {
                icon: "🛡️",
                title: "Forsikret service", 
                description: "Fuld forsikring og kvalitetsgaranti på alt arbejde",
                color: "bg-primary"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
} 