import type { Metadata } from 'next'
import METADATA from '@/config/Metadata'

import '@/styles/tailwind.css'
import '@/styles/index.css'

import Footer from '@/layouts/footer'
import Navbar from '@/layouts/navbar'
// import ScrollToTop from '@/components/scroll-to-top'

export const metadata: Metadata = METADATA({ path: 'Trang chủ' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
        {/* <ScrollToTop /> */}
      </body>
    </html>
  )
}
