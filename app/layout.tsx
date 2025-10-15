import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Dodla's Nuthana Gruhapravesham - నూతన గృహ ప్రవేశం",
  description: 'మీరు మా నూతన గృహప్రవేశ వేడుకకు ఆహ్వానించబడ్డారు - You are cordially invited to Dodla Family Housewarming Ceremony',
  openGraph: {
    title: "Dodla's Nuthana Gruhapravesham - నూతన గృహ ప్రవేశం",
    description: 'Join us for our Housewarming Ceremony - Dodla Family - October 24, 2025',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

