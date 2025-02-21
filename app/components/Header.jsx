

import { SignUp, UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  const { isSignedIn } = useUser()

  return (
    <div className='flex justify-center items-center'>
      <header className="h-[7vh] bg-purple-900 w-full py-4 shadow-lg flex justify-between items-center">
        <h1 className="text-white text-3xl px-6">RentoAI</h1>
        <div className="mx-4 gap-6 flex">
          { isSignedIn ? <UserButton/> : <SignUp/>}
        </div>
      </header>
    </div>
  )
}

export default Header