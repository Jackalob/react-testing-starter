import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header/Header'
import GalleryProvider from '@/app/components/Gallery/GalleryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Gallery',
  description: 'Share your images in Next Gallery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <GalleryProvider>
          {children}
        </GalleryProvider>
      </body>
    </html>
  )
}
