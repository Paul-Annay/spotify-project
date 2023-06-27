import React from 'react'
import { getProviders, signIn } from 'next-auth/react';

function Login({ providers  }) {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png" alt="spotify-logo" className='w-52 mb-5' />
      {
        Object.values(providers).map(provider => {
          return(
            <div key={provider.name}>
              <button 
                className='bg-green-500 text-white p-5 rounded-full'
                onClick={() => {
                    signIn(provider.id, {callbackUrl: '/'})
                }}
              >Login with {provider.name}</button>
            </div>
          )
      })
      }
    </div>

  )
}

export default Login

export async function getServerSideProps(){
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}