"use client"
import { useTheme } from 'next-themes'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import ClientComponent from '../clientComponent'

type Props = {}

const styles = {
  minHeight: "32px",
  minWidth: "32px",
  padding: "0.45rem 0.5rem",
  border: "1px solid var(--secondary-color-800)",
  borderRadius: "var(--border-radius-sm)",
  color: "var(--secondary-color-800)",
  backgroundColor: "var(--secondary-color-100)",
  cursor: "pointer"
}

const ThemeButton = (props: Props) => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = (event: React.MouseEvent) => {
    event.preventDefault();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <ClientComponent fallback={<button style={{
      ...styles,
      backgroundColor: "var(--secondary-color-400)",
      opacity: "25%",
      filter: "brightness(1.2) blur(1px)"
    }} />}>
      <button onClick={toggleTheme} style={styles} >
        {
          resolvedTheme === "dark"
            ? <BsFillSunFill size={16} />
            : <BsFillMoonFill size={16} />
        }
      </button>
    </ClientComponent>

  )
}

export default ThemeButton