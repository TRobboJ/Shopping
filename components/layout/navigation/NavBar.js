import React from 'react'
import MainNavigation from './MainNavigation'
import MobileNavigation from './MobileNavigation'
import styles from './NavBar.module.scss'

export default function NavBar() {
  return (
    <header className={styles.header}> 
        <MobileNavigation />
        <MainNavigation />
    </header>
  )
}
