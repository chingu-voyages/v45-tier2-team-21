import Link from 'next/link';
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { AiFillHome, AiOutlineAreaChart } from 'react-icons/ai';

type Props = {

} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const NavBar = (props:Props) => {
  return (
    <div {...props}>
      <nav>
        <Link href="/">
          <AiFillHome size={24}/>
        </Link>
        <Link href="/search">
          <BsSearch size={24}/>
        </Link>
        <Link href="/graph">
          <AiOutlineAreaChart size={24}/>
        </Link>
      </nav>
    </div>
  )
}

export default NavBar