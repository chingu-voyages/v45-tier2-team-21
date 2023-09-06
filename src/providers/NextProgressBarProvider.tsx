"use client"
import { AppProgressBar } from 'next-nprogress-bar'

const NextProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <AppProgressBar
        height='4px'
        color="#ef954b"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default NextProgressBarProvider