import React from 'react'
import styles from '@/styles/popUp.module.css'
import useOutsideClick from '@/hooks/useOutsideClick';
import { MdClose } from 'react-icons/md';

type Props = {
  close: () => void;
  children: React.ReactNode
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const PopUp = ({ children, close }: Props) => {
  const childRef = React.useRef<HTMLDivElement>(null)
  useOutsideClick(childRef, close)

  React.useEffect(() => {
    document.body.style.height = "100dvh";
    document.body.style.overflow = 'hidden';
    
    return ()=> {
      document.body.style.height = "auto";
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div id={styles['container']}>
      <div id={styles['child']} ref={childRef}>
        <div id={styles['close-icon']} onClick={() => close()}>
          <MdClose size={24} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default PopUp