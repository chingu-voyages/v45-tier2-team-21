"use client"
import React from 'react'
import styles from '@/styles/NavBar.module.css'
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { AiFillHome, AiOutlineAreaChart } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

type Props = {

} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const NavBar = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav {...props} id={styles['navbar']}>
      <Link href="/" className={styles['icons']} id={pathname === "/" ? styles["active"] : ""} >
        <AiFillHome size={24} />
      </Link>
      <Link href="/search" className={styles['icons']} id={pathname === "/search" ? styles["active"] : ""} >
        <BsSearch size={24} />
      </Link>
      <Link href="/graph" className={styles['icons']} id={pathname === "/graph" ? styles["active"] : ""}>
        <AiOutlineAreaChart size={24} />
      </Link>
    </nav>
  )
}

export default NavBar