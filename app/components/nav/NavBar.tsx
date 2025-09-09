import React from 'react'
import Search from './Search'
import ButtonGame from '@/app/defaults/ButtonGame'

const NavBar = () => {
  return (
  <nav>
    <header className='flex justify-between items-center'>
      <Search/>
      <div className='flx items-center gap-2'>
       <ButtonGame text='login'/>
       <ButtonGame text='sign up'/>
      </div>
    </header>
  </nav>
  )
}

export default NavBar