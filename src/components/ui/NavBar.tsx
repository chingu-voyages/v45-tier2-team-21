"use client"
import styles from '@/styles/navBar.module.css'
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { AiFillHome, AiOutlineAreaChart } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

type Props = {
  iconsSize: number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const NavBar = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav {...props} >
      <Link href="/" className={styles['icons']} id={pathname === "/" ? styles["active"] : ""} >
        <AiFillHome size={props.iconsSize} />
      </Link>
      <Link href="/search" className={styles['icons']} id={pathname === "/search" ? styles["active"] : ""} >
        <BsSearch size={props.iconsSize} />
      </Link>
      <Link href="/graph" className={styles['icons']} id={pathname === "/graph" ? styles["active"] : ""}>
        <AiOutlineAreaChart size={props.iconsSize} />
      </Link>
    </nav>
  )
}

export default NavBar