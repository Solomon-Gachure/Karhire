import React, { useState } from 'react'
import logo from "../assets/Kar-Higher.png"
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navigation = () => {

    const[nav,setNav]=useState(false)
    
const handleNav=()=>{
    setNav(!nav)
}

  return (
    <div className='max-w-[1400px] max-auto p-2 flex justify-between items-center'>
        <div className='md:h-[50px] h-[40px]'>
<img src={logo} className='h-full' alt="logo" />
        </div>
        <div className='hidden md:flex' >
            <ul className='hidden md:flex gap-4 items-center'>
                <li className='cursor-pointer border-b-2 border-purple-500'>Home</li>
                <li className='cursor-pointer border-b-2 border-transparent hover:border-purple-500'>Booking</li>
                <li className='cursor-pointer border-b-2 border-transparent hover:border-purple-500'>Cars</li>
                 <li className='cursor-pointer border-b-2 border-transparent hover:border-purple-500'>About</li>
                <li className='cursor-pointer border-b-2 border-transparent hover:border-purple-500'>Contact</li>

            </ul>
        </div>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu  size={30}/>
        </div>
        <div onClick={handleNav} className={nav ? 'bg-white fixed top-2 left-0 w-full h-screen z-10 duration-300 pl-2' : 'bg-white fixed top-0 left-[-100%] w-[250px] h-screen z-10 duration-300'}>
            <AiOutlineClose className='cursor-pointer'  size={30}/>
            <div className='pt-2 h-[40px]'>
<img src={logo} className='h-full' alt="logo" />
        </div>
            <ul className='md:hidden sm:flex flex-col gap-4 items-center '>
                <li className='cursor-pointer border-b-2 py-5 border-purple-500'>Home</li>
                <li className='cursor-pointer border-b-2 py-5 border-transparent hover:border-purple-500'>Booking</li>
                <li className='cursor-pointer border-b-2 py-5 border-transparent hover:border-purple-500'>About</li>
                <li className='cursor-pointer border-b-2 py-5 border-transparent hover:border-purple-500'>Cars</li>
                <li className='cursor-pointer border-b-2 py-5 border-transparent hover:border-purple-500'>Services</li>
                <li className='cursor-pointer border-b-2 py-5 border-transparent hover:border-purple-500'>Contact</li>

            </ul>
        </div>
        <div className='hidden md:flex gap-2'>
            <button className='cursor-pointer p-2 text-green-500'>Login</button>
            <button className='cursor-pointer p-2 rounded-full border border-green-500'>Sign Up</button>

        </div>
    </div>
  )
}

export default Navigation