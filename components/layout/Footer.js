import React from 'react'
import {ImGithub} from 'react-icons/im'
import {BsFileEarmarkPersonFill} from 'react-icons/bs'
import styles from './Footer.module.scss'

export default function Footer() {

  const currentYear = new Date().getFullYear()


  return (
    <footer className={styles.footer}>
      <div className={styles.information}>
        <a href='https://github.com/TRobboJ' >
          <ImGithub />
          <p>View the code on GitHub!</p>
        </a>
        <a href='https://thomas-robinson.netlify.app/' >
          <BsFileEarmarkPersonFill />
          <p>Return to my portfolio!</p>
        </a>
      </div>
      <div className={styles.copy}>
       <p>{`© Created by Thomas Robinson ${currentYear}`}</p>
      </div>
      
    </footer>
  )
}
