interface ProgressStep {
  id: string
  label: string
  completed: boolean
  active: boolean
}

interface ProgressTrackerProps {
  currentStep: number // 1-5
}

export default function ProgressTracker({ currentStep }: ProgressTrackerProps) {
  const steps: ProgressStep[] = [
    { id: 'vinduer', label: 'Dine vinduer', completed: currentStep > 1, active: currentStep === 1 },
    { id: 'service', label: 'Vælg service', completed: currentStep > 2, active: currentStep === 2 },
    { id: 'tid', label: 'Vælg tid', completed: currentStep > 3, active: currentStep === 3 },
    { id: 'bruger', label: 'Opret bruger', completed: currentStep > 4, active: currentStep === 4 },
    { id: 'bekraeft', label: 'Bekræft', completed: currentStep > 5, active: currentStep === 5 }
  ]

  return (
    <div className="w-full bg-white/95 shadow-sm border-b border-gray-200 py-4 mb-6">
      <div className="container-custom">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Step Circle and Label */}
              <div className="flex flex-col items-center">
                {/* Circle */}
                <div className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold transition-all duration-200
                  ${step.active 
                    ? 'bg-[#255071] text-white shadow-lg' 
                    : step.completed 
                      ? 'bg-[#db413f] text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }
                `}>
                  {step.completed ? (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                
                {/* Label */}
                <span className={`
                  mt-2 text-xs sm:text-sm text-center px-1 transition-all duration-200
                  ${step.active 
                    ? 'text-[#255071] font-bold' 
                    : step.completed 
                      ? 'text-[#db413f] font-medium'
                      : 'text-gray-400'
                  }
                `}>
                  {step.label}
                </span>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-2 sm:mx-4 h-1 rounded-full relative">
                  <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                  <div 
                    className={`
                      absolute inset-0 rounded-full transition-all duration-500 ease-out
                      ${step.completed ? 'bg-[#db413f]' : 'bg-gray-200'}
                    `}
                    style={{
                      width: step.completed ? '100%' : '0%'
                    }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 