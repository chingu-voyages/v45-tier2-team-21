import React from 'react'
import styles from '@/styles/popUp.module.css'

type Props = {
  children: React.ReactNode
}

const PopUp = ({children}: Props) => {
  return (
    <div id={styles['container']}>
      {children}
    </div>
  )
}

export default PopUp