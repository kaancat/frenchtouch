import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import '../styles/globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Klik-en-pris | French Touch - Få et tilbud på vinduesrengøring',
  description: 'Få et hurtigt og gratis tilbud på professionel vinduesrengøring. Moderne, pålidelig service fra French Touch.',
  keywords: 'vinduesrengøring, tilbud, French Touch, Danmark, professionel rengøring',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className={dmSans.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
} 