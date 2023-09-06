import '@/styles/globals.css';
import type { Metadata } from 'next'
import Link from 'next/link'
import NextThemesProvider from '@/providers/NextThemesProvider';
import Header from '@/components/Header';
import NavBar from '@/components/ui/NavBar';

export const metadata: Metadata = {
  title: 'Team 21 Fireball',
  description: 'Web App to explore data about meteorites near Earth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemesProvider>
          <main>
              <Header />
              <NavBar iconsSize={24} id='navbar'/>
            {children}
            <footer>© Copyright 2023 - Code Source&nbsp;<Link href="" id='code-source-link'>Here</Link></footer>
          </main>
        </NextThemesProvider>
      </body>
    </html>
  )
}
