import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import heroImg from '../../public/hero-img.jpg'

export default function Hero() {
  return (
    <div className={styles.hero}>      
        <Image
        src={heroImg}
        alt="Hero image for shopping website"
        // width="350px"
        // height="300px"
        />
        <div className={styles.attribution}>
          <a href='https://www.freepik.com/vectors/3d-shop'>3d shop vector created by bs_k1d - www.freepik.com</a>
        </div>
    </div>
  )
}
