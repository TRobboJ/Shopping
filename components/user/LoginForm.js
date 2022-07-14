import React from 'react'
import Modal from '../UI/Modal'
import { closeLoginMenu } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import styles from './LoginForm.module.scss'
import Link from 'next/link';

export default function LoginForm(props) {
    //  const authURL = new URL('https://dev-08514149.okta.com/oauth2/default/v1/authorize');
    const authURL = process.env.NEXT_PUBLIC_AUTH_ENDPOINT;
    const queryParams = {
        response_type:'code', // removed & from all
        scope: process.env.NEXT_PUBLIC_SCOPE,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        state: process.env.NEXT_PUBLIC_PKCE_IDEN,
        redirect_uri: process.env.NEXT_PUBLIC_TEST_REDIRECT, //process.env.NEXT_PUBLIC_REDIRECT_URI,
        code_challenge: process.env.NEXT_PUBLIC_HASH,
        code_challenge_method: process.env.NEXT_PUBLIC_CODE_CHAL_METHOD,
    }
    const dispatch = useDispatch()
    function loginCloseHandler() {
        dispatch(closeLoginMenu());
      }
    console.log(props.authURL)
  return (
    <Modal className={styles.cart}>
      <h2>Login</h2>
        <p>You will be redirected</p>
        <div className={styles.modal_actions}>
          <button className={styles.modal_close} onClick={loginCloseHandler}>
            Close
          </button>
          <Link href={{
            pathname: authURL,
            query: queryParams
            }}>
            {/* <button className={styles.modal_order}>Login</button> */}
            LOGIN
          </Link>
        </div>
      
    </Modal>
  )
}

export async function getStaticProps() {

    const authURL = process.env.NEXT_PUBLIC_AUTH_ENDPOINT;
    const queryParams = {
        response_type:'code', // removed & from all
        scope: process.env.NEXT_PUBLIC_SCOPE,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        state: process.env.NEXT_PUBLIC_PKCE_IDEN,
        redirect_uri: process.env.NEXT_PUBLIC_TEST_REDIRECT, //process.env.NEXT_PUBLIC_REDIRECT_URI,
        code_challenge: process.env.NEXT_PUBLIC_HASH,
        code_challenge_method: process.env.NEXT_PUBLIC_CODE_CHAL_METHOD,
    }

    return {
        props: {
            
            authUrl: authURL,
            queryParams: queryParams
       
    }
    }

    
}
  