import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'VPS.DOG',
  description: '一个简洁的VPS导航站点',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
    other: {
      rel: 'mask-icon',
      url: '/icon.svg',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}