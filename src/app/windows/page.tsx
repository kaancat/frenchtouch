import { Metadata } from 'next'
import WindowSelector from '@/components/WindowSelector'
import ProgressTracker from '@/components/ProgressTracker'

export const metadata: Metadata = {
  title: 'Vælg vinduer - French Touch Vinduesrengøring',
  description: 'Vælg dine vinduestyper og få et skræddersyet tilbud på professionel vinduesrengøring i København',
}

export default function WindowsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Mascot Watermark - consistent with homepage */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://fs.frenchtouch.dk/wp-content/uploads/2025/05/Frenchtouchguygoodblue-977x1024.webp"
          alt=""
          className="absolute bottom-0 right-0 w-80 h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[32rem] object-contain opacity-15 transform translate-x-12 translate-y-8"
        />
      </div>

      {/* Progress Tracker */}
      <ProgressTracker currentStep={1} />

      {/* Main Content */}
      <main className="relative z-20 pt-6 md:pt-8">
        <div className="container-custom">
          {/* Page Title */}
          <div className="text-center mb-8 md:mb-12 bg-white/90 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Vælg dine vinduer
            </h1>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Vælg de typer af vinduer du har, og angiv antal
            </p>
          </div>
          
          {/* Window Selector Component */}
          <WindowSelector />
        </div>
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