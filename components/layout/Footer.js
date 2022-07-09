import React from 'react'
import {ImGithub} from 'react-icons/im'
import styles from './Footer.module.scss'

export default function Footer() {

  const currentYear = new Date().getFullYear()


  return (
    <footer className={styles.footer}>
      <div className={styles.information}>
        <ImGithub />
        
      </div>
      <p>{`© Thomas Robinson ${currentYear}`}</p>
    </footer>
  )
}
