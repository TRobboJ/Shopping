import React from 'react'
import styles from './Modal.module.scss'
import ReactDOM  from 'react-dom'
import Portal from '../hoc/Portal'



function BackdropOverlay() {
    return <div className={styles.overlay}></div>
}

function ModalOverlay(props) {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

let portalEl = null;
if (typeof window !== 'undefined'){
portalEl = document.querySelector('#__next')
}

export default function Modal(props) {
  return (
    // <>
    //    {ReactDOM.createPortal(<BackdropOverlay />, portalEl)}
    //    {ReactDOM.createPortal( <ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    // </>

    
    <Portal selector='#modal'>
      <BackdropOverlay />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Portal>
    
    

  )
}
