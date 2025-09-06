"use client"

import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import Image from 'next/image'
import React from 'react'

const login = () => {

  const signInWithGoogle=async()=>{
    const {error} = await supabase.auth.signInWithOAuth({
      provider:'google'
    })

    if(error){
      console.log("Error hai idhar:", error.message)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen' >
      <div className='flex flex-col items-center border rounded-2xl p-8'>
        <Image src={'/logo.svg'} alt="logo" 
        height={100}
        width={300}
        className="w-[120px]"/>

       <div className='flex flex-col items-center' >
        <Image src={'/background.svg'} alt="background"
        height={800}
        width={800}
        className="w-[400px] h-[250px] p-4 rounded-2xl" />
       </div>

       <h2 className='mt-5 text-2xl font-bold text-center' >
        Welcome to Growbit-ai
       </h2>

       <p className='text-gray-500 text-center' >Sign In with google Authentication</p>
       <Button className='mt-7 w-full' 
       onClick={signInWithGoogle} >Login with google</Button>

 
      </div>
    </div>
  )
}

export default login