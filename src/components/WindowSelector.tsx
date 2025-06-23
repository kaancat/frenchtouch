'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { windows, quantityOptions, WindowType } from '@/data/windows'

// Type for tracking selected quantities
type WindowSelections = Record<string, number>

export default function WindowSelector() {
  const [selections, setSelections] = useState<WindowSelections>({})
  const router = useRouter()

  // Handle quantity selection for a specific window type
  const handleQuantityChange = (windowId: string, quantity: number) => {
    setSelections(prev => ({
      ...prev,
      [windowId]: quantity
    }))
  }

  // Get selected quantity for a window (default to 0)
  const getSelectedQuantity = (windowId: string) => {
    return selections[windowId] || 0
  }

  // Handle navigation to service page
  const handleProceedToService = () => {
    router.push('/service')
  }

  return (
    <div className="bg-white/90 p-6 rounded-lg shadow-lg">
      {/* Window Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {windows.map((window, index) => (
          <motion.div
            key={window.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            {/* Window Image */}
            <div className="relative h-40 sm:h-48 w-full mb-3 sm:mb-4 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={window.image}
                alt={window.label}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={index < 4} // Priority load for first 4 images
              />
            </div>

            {/* Window Info */}
            <div className="text-center mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-primary mb-1">
                {window.label}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {window.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label 
                htmlFor={`quantity-${window.id}`}
                className="block text-sm font-medium text-gray-700"
              >
                Antal:
              </label>
              <select
                id={`quantity-${window.id}`}
                value={getSelectedQuantity(window.id)}
                onChange={(e) => handleQuantityChange(window.id, parseInt(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
              >
                <option value={0}>Vælg antal</option>
                {quantityOptions.map(qty => (
                  <option key={qty} value={qty}>
                    {qty} stk
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Indicator */}
            {getSelectedQuantity(window.id) > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-3 flex items-center justify-center"
              >
                <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  ✓ {getSelectedQuantity(window.id)} valgt
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Selection Summary */}
      {Object.keys(selections).some(key => selections[key] > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-primary mb-4">
            Dit valg:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(selections)
              .filter(([_, quantity]) => quantity > 0)
              .map(([windowId, quantity]) => {
                const window = windows.find(w => w.id === windowId)
                return window ? (
                  <div key={windowId} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                    <span className="font-medium text-gray-900">{window.label}</span>
                    <span className="text-accent font-semibold">{quantity} stk</span>
                  </div>
                ) : null
              })}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-6">
              I alt {Object.values(selections).reduce((sum, qty) => sum + qty, 0)} vinduer valgt
            </p>
            
            {/* Continue to Service Selection Button */}
            <motion.button
              onClick={handleProceedToService}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
            >
              Vis tilbud →
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  )
} 