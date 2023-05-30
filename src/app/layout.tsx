import './globals.css'
import { Inter } from 'next/font/google'

import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'q-weather',
  description: 'Access weather data throughout the world quickly',
  favicon: "favicon.ico",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-zinc-900'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
