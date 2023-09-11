import '@/styles/globals.css';
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Link from 'next/link'
import NextThemesProvider from '@/providers/NextThemesProvider';
import NextProgressBarProvider from '@/providers/NextProgressBarProvider';
import Header from '@/components/Header';
import NavBar from '@/components/ui/navBar';

export const metadata: Metadata = {
  title: 'Team 21 Fireball',
  description: 'Web App to explore data about meteorites near Earth',
}

const nunito_sans = Nunito_Sans({
  adjustFontFallback: true,
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito_sans.className} suppressHydrationWarning>
      <body>
        <NextThemesProvider>
          <NextProgressBarProvider>
            <main>
              <Header />
              <NavBar iconsSize={24} id='navbar'/>
              {children}
              <footer>© Copyright 2023 - Code Source&nbsp;<Link href="https://github.com/chingu-voyages/v45-tier2-team-21" id='code-source-link'>Here</Link></footer>
            </main>
          </NextProgressBarProvider>
        </NextThemesProvider>
      </body>
    </html>
  )
}
