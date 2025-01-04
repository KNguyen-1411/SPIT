import METADATA from '@/config/Metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = METADATA({ path: 'Bài viết' })

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
