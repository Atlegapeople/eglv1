import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Eminent Global Logistics',
  description: 'Reliable, Scalable, Borderless Logistics Solutions for South Africa and beyond. Dependable, cross-border freight services.',
  keywords: 'logistics, freight, transportation, shipping, cross-border, South Africa, logistics company',
  authors: [{ name: 'Eminent Global Logistics' }],
  creator: 'Eminent Global Logistics',
  publisher: 'Eminent Global Logistics',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://eminentlogistics.co.za',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://eminentlogistics.co.za',
    title: 'Eminent Global Logistics',
    description: 'Reliable, Scalable, Borderless Logistics Solutions for South Africa and beyond.',
    siteName: 'Eminent Global Logistics',
    images: [
      {
        url: '/og-image.jpg', // Create this in public folder later
        width: 1200,
        height: 630,
        alt: 'Eminent Global Logistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eminent Global Logistics',
    description: 'Reliable, Scalable, Borderless Logistics Solutions',
    images: ['/og-image.jpg'], // Same as OpenGraph image
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
