"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

type Props = {}

const ThemeButton = (props: Props) => {
  const { resolvedTheme, setTheme } = useTheme();
  console.log("🚀 ~ file: ThemeButton.tsx:10 ~ ThemeButton ~ resolvedTheme:", resolvedTheme)

  const toggleTheme = (event: React.MouseEvent) => {
    event.preventDefault();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button onClick={toggleTheme} style={{
      padding: "0.45rem 0.5rem",
      border: "1px solid var(--secondary-color-800)",
      borderRadius: "var(--border-radius-sm)",
      color: "var(--secondary-color-800)",
      backgroundColor: "var(--secondary-color-100)",
      cursor: "pointer"
    }} >
      {
        resolvedTheme === "dark"
          ? <BsFillSunFill size={24} />
          : <BsFillMoonFill size={24} />
      }
    </button>
  )
}

export default ThemeButton