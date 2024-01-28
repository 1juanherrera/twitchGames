import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitch Games'
}

export default function RootLayout ({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='/twitch.svg' type='image/x-icon' />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className='flex-grow'>
          { children }
        </main>
        <Footer />
      </body>
    </html>
  )
}
