import React from 'react'
import styles from './ProductForm.module.scss'

export default function ProductForm(props) {


  return (
    <form className={styles.form}>
        <button onClick={props.buttonHandler}>Add to cart</button>
    </form>
  )
}
