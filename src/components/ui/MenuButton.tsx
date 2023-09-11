import React from "react";
import { MdMenu, MdClose } from "react-icons/md"

type Props = {
  open: boolean;
  iconClassName?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const MenuButton = ({ open, iconClassName, ...props }: Props) => {

  return (
    <button {...props}>
      {
        open
          ? <MdClose size={20} className={iconClassName} />
          : <MdMenu size={20} className={iconClassName} />
      }
    </button>
  )
}

export default MenuButton