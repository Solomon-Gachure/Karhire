import React from 'react'
import { AiOutlineTeam,AiOutlineLaptop, AiOutlineMail, AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai'
import {FiAward} from 'react-icons/fi'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='border flex justify-evenly bg-cyan-800 text-white p-2'>
        <div>
           <h1 className='border-b font-bold text-yellow-400'>About Us</h1>
           <ul>
            <div className='flex items-center '>
                <AiOutlineTeam/>
                <li>Team</li>
            </div>
            <div className='flex items-center '>
                <AiOutlineLaptop/>
                <li>Openings</li>
            </div>
            <div className='flex items-center '>
                <FiAward/>
                <li>Awards</li>
            </div>
            
            </ul> 
        </div>
        <div>
           <h1 className='border-b font-bold text-yellow-400'>Contact Us</h1>
           <ul>
            <div className='flex items-center '>
                <AiOutlineMail/>
                <li>Email</li>
            </div>
            <div className='flex items-center '>
                <AiOutlinePhone/>
                <li>Telephone</li>
            </div>
            <div className='flex items-center '>
                <HiOutlineOfficeBuilding/>
                <li>Offices</li>
            </div>
            </ul> 
        </div>
        <div>
           <h1 className='border-b font-bold text-yellow-400'>Our Socials</h1>
           <ul>
            <div className='flex items-center '>
                <AiOutlineInstagram/>
                <li>Instagram</li>
            </div>
            <div className='flex items-center '>
                <AiOutlineFacebook/>
                <li>FaceBook</li>
            </div>
            <div className='flex items-center '>
                <AiOutlineYoutube/>
                 <li>YouTube</li>
            </div>
          
            </ul> 
        </div>
    </div>
  )
}

export default Footer