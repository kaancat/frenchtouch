import { Metadata } from 'next'
import ServiceSelector from '@/components/ServiceSelector'
import ProgressTracker from '@/components/ProgressTracker'

export const metadata: Metadata = {
  title: 'Vælg service - French Touch Vinduesrengøring',
  description: 'Vælg mellem engangsbestilling og abonnement for professionel vinduesrengøring i København',
}

export default function ServicePage() {
  return (
    <div className="min-h-screen">
      {/* Progress Tracker */}
      <ProgressTracker currentStep={2} />

      {/* Main Content */}
      <main className="relative">
        <ServiceSelector />
      </main>

      {/* Footer Contact Info */}
      <footer className="relative z-20 bg-white/90 border-t border-gray-200 py-8 mt-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex flex-col items-center">
              <img
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/65b249348520b59532495e56/0x0.png"
                alt="French Touch Logo"
                className="h-16 w-auto mb-3 object-contain"
              />
              <p className="text-sm text-gray-600">
                Professionel vinduesrengøring i København
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-700">
              {/* Phone */}
              <div className="flex items-center justify-center space-x-2">
                <span className="text-accent">📞</span>
                <a 
                  href="tel:+4527513273" 
                  className="hover:text-primary transition-colors duration-200"
                >
                  +45 27 51 32 73
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center space-x-2">
                <span className="text-accent">✉️</span>
                <a 
                  href="mailto:kontakt@frenchtouch.dk" 
                  className="hover:text-primary transition-colors duration-200"
                >
                  kontakt@frenchtouch.dk
                </a>
              </div>

              {/* CVR */}
              <div className="flex items-center justify-center space-x-2">
                <span className="text-accent">🏢</span>
                <span>CVR: 42294209</span>
              </div>

              {/* Address */}
              <div className="flex items-center justify-center space-x-2">
                <span className="text-accent">🏠</span>
                <span className="text-center">
                  Store Kongensgade 110A, st<br />
                  1264 København K
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                © 2024 French Touch Vinduesrengøring. Alle rettigheder forbeholdt.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 