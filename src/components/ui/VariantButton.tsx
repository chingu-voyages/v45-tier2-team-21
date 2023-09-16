import React from 'react'

type Props = {
  children: React.ReactNode
  color: "red" | "blue"
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const VariantButton = ({children, color, ...props}: Props) => {
  return (
    <button className="variant-btn" style={{backgroundColor: color === "red" ? "#fe2c2c" : "#2e2efd"}} {...props}>
      {children}
    </button>
  )
}

export default VariantButton