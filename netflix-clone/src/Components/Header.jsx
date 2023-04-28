import React from 'react'
import logo from '../images/logo.png'


const Header = () => {
  return (
    <div className="flex justify-around pt-5 items-center">
        <img src={logo} alt="logo" className='h-11' />
        <button className=' bg-red-600 text-white px-6 py-2 cursor-pointer rounded'>Sign In</button>
    </div>
  )
}

export default Header