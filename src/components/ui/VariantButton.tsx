import React from "react";

type Props = {
  children: React.ReactNode;
  color: "red" | "blue" | "orange";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const colors = {
  red: "#fe2c2c",
  blue: "#2e2efd",
  orange: "#ef954b",
};

const VariantButton = ({ children, color, ...props }: Props) => {
  return (
    <button
      className="variant-btn"
      style={{ backgroundColor: colors[color] }}
      {...props}
    >
      {children}
    </button>
  );
};

export default VariantButton;
