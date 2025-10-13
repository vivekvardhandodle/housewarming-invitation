import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'గృహప్రవేశం - Griha Pravesh Ceremony - Dodle Family',
  description: 'మీరు మా గృహప్రవేశ వేడుకకు ఆహ్వానించబడ్డారు - You are cordially invited to our Griha Pravesh ceremony',
  openGraph: {
    title: 'గృహప్రవేశం - Dodle Family House Warming',
    description: 'Join us for our Griha Pravesh ceremony - గాయత్రీ మంత్రం',
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

