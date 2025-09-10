import React from 'react'
import Search from './Search'
import ButtonGame from '@/app/defaults/ButtonGame'

const NavBar = () => {
  return (
  <nav>
    <header className='flex justify-between items-center gap-4'>
      <Search/>
      <div className='flex items-center gap-2'>
       <ButtonGame text='Log in' link='/login'/>
       <ButtonGame text='Sign up' link='/signup'/>
      </div>
    </header>
  </nav>
  )
}

export default NavBar