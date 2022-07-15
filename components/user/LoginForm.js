import React from 'react'
import Modal from '../UI/Modal'
import { closeLoginMenu } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import styles from './LoginForm.module.scss'
import Link from 'next/link';

import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginForm() {

    const { data: session } = useSession()


    const dispatch = useDispatch()
    function loginCloseHandler() {
        dispatch(closeLoginMenu());
      }


    let sessionInfoText
    let sessionAction

    if (session) {
      sessionInfoText = <p>Signed in as {session.user.email}</p>
      sessionAction = <button onClick={()=> signOut()}>Log out</button>
    }

    else {
      sessionInfoText = <p>Please log in. You will be redirected</p>
      sessionAction = <button className={styles.modal_session_action} onClick={()=> signIn()}>Log in</button>
    }


  return (
    <Modal className={styles.cart}>
        {sessionInfoText}

        <div className={styles.modal_actions}>
          <button className={styles.modal_close} onClick={loginCloseHandler}>
            Close
          </button>

          {sessionAction}

        </div>
      
    </Modal>
  )
}
  