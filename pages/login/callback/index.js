import React from 'react'
import { useRouter } from 'next/router';

export default function index() {

  //get params from url
  const {asPath} = useRouter()
  console.log(asPath)
  const URL = asPath;
  const code = URL.searchParams.get('code')
  const state = URL.searchParams.get('state')
  // Prints 123
  if (state !== process.env.NEXT_PUBLIC_PKCE_IDEN) console.log('state is dif')
  //check if state matches PKCE_IDEN
  //fetch token using code to the token endpoint
  // const response = await fetch()
  console.log(code)
  return (
    <div>
        <h1>Successful Callback!</h1>
    </div>
  )
}
