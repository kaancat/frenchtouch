// Window type definitions for Danish residential windows
export interface WindowType {
  id: string
  label: string
  description: string
  image: string
}

export const windows: WindowType[] = [
  {
    id: 'enkelt-vindue',
    label: 'Enkelt vindue',
    description: 'Standard enkelt fløj vindue',
    image: '/windows/vindue-1.jpg'
  },
  {
    id: 'dobbelt-vindue',
    label: 'Dobbelt vindue', 
    description: 'Dobbelt fløj vindue',
    image: '/windows/vindue-2.jpg'
  },
  {
    id: 'tredobbelt-vindue',
    label: 'Tredobbelt vindue',
    description: 'Tredobbelt fløj vindue',
    image: '/windows/vindue-3.jpg'
  },
  {
    id: 'dreje-vip-vindue',
    label: 'Dreje-vip vindue',
    description: 'Dreje og vip funktion',
    image: '/windows/vindue-4.jpg'
  },
  {
    id: 'altandor',
    label: 'Altandør',
    description: 'Dør til altan eller have',
    image: '/windows/vindue-5.jpg'
  },
  {
    id: 'fast-vindue',
    label: 'Fast vindue',
    description: 'Stort fast vindue',
    image: '/windows/vindue-6.jpg'
  }
]

// Quantity options for dropdown
export const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1) 