"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

const NextThemesProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} enableColorScheme={true} disableTransitionOnChange={true}>
      {children}
    </ThemeProvider>
  )
}

export default NextThemesProvider