import { supabase } from '@/services/supabaseClient'
import React from 'react'

const provider = ( {children}) => {

    const createNewUser = () => {

        supabase.auth.getUser().then(async ({data:{user}})=>{

            let { data: Users, error } = await supabase
            .from('Users')
            .select("*")
            .eq('email', user.email )

        })

    }

  return (


    <div>{children}</div>
  )
}

export default provider