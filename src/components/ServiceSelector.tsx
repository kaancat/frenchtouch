'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ServiceSelector() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const services = [
    {
      id: 'enkeltbestilling',
      header: 'Bestil når det passer dig',
      title: 'Enkeltbestilling*',
      subtitle: 'Mulighed for både ud- og indvendig pudsning',
      price: 'Fra DKK 545',
      priceUnit: 'pr. besøg',
      tooltipPrice: 'Fra 403 DKK pr. besøg med servicefradrag',
      benefits: [
        'Bestem selv dato og tid for din polering',
        'Fri afbestilling op til 24 timer før aftale',
        'Mulighed for at vælge imellem forskellige services',
        'Bestil igen indenfor 3 måneder og få det til fraprisen'
      ],
      ctaText: 'Se tilbud',
      popular: false
    },
    {
      id: 'abonnement',
      header: 'Mest for pengene',
      title: 'Abonnement*',
      subtitle: 'Kun mulighed for udvendig pudsning',
      price: 'Fra DKK 205',
      priceUnit: 'pr. besøg',
      tooltipPrice: 'Fra 152 DKK pr. besøg med servicefradrag',
      benefits: [
        'Altid spejlblanke vinduer',
        'Kort opsigelsesperiode – kun én polering',
        'Vi tilbyder kun udvendig pudsning på abonnement',
        'Uhindret adgang til alle vinduerne er påkrævet'
      ],
      ctaText: 'Se tilbud',
      popular: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#255071] to-[#1e4a63] py-12">
      <div className="container-custom">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Vælg mellem engangsbestilling og abonnement
          </h1>
          <p className="text-xl text-white/90 mb-2">
            Alle priser er inkl. moms.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className={`p-4 rounded-t-xl text-center text-white font-semibold ${
                service.popular ? 'bg-[#db413f]' : 'bg-[#6c757d]'
              }`}>
                {service.header}
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Service Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#db413f] font-medium underline">
                    {service.subtitle}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <span className="text-sm text-gray-600 mr-2">Fra DKK</span>
                    <span className="text-4xl font-bold text-gray-900">
                      {service.price.replace('Fra DKK ', '')}
                    </span>
                    <span className="text-sm text-gray-600 ml-2">{service.priceUnit}</span>
                  </div>
                  
                  {/* Tooltip Price */}
                  <div className="relative inline-block">
                    <button
                      className="text-sm text-[#db413f] hover:text-[#255071] transition-colors duration-200 flex items-center justify-center gap-1"
                      onMouseEnter={() => setShowTooltip(service.id)}
                      onMouseLeave={() => setShowTooltip(null)}
                      onClick={() => setShowTooltip(showTooltip === service.id ? null : service.id)}
                    >
                      {service.tooltipPrice}
                      <span className="w-4 h-4 bg-gray-400 text-white rounded-full text-xs flex items-center justify-center">
                        ?
                      </span>
                    </button>
                    
                    {/* Tooltip */}
                    {showTooltip === service.id && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap z-10">
                        Servicefradrag gælder ved kvalificerende forhold
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#255071] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                {service.id === 'enkeltbestilling' && (
                  <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Mulighed for at vælge imellem forskellige services.</li>
                      <li>• Bestil igen indenfor 3 måneder og få det til fraprisen.</li>
                    </ul>
                  </div>
                )}

                {service.id === 'abonnement' && (
                  <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Vi tilbyder <span className="font-medium text-[#db413f]">kun udvendig pudsning</span> på abonnement.</li>
                      <li>• Uhindret adgang til alle vinduerne er <span className="font-medium underline">påkrævet</span>.</li>
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#255071] hover:bg-[#1e4a63] text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-lg shadow-md hover:shadow-lg"
                >
                  {service.ctaText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 