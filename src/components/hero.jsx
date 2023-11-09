import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import {CiCalendarDate, CiLocationOn} from 'react-icons/ci'
import {BiTime} from 'react-icons/bi'


const Hero = () => {
  return (
    <div className='max-w-full h-screen p-2'>
      <div className='flex flex-col'>
        <div >
          <div className='w-full h-[300px] relative'>
            <img className='w-full h-full object-cover relative' src="https://img.freepik.com/premium-photo/dark-leaf-pattern-background_833768-493.jpg" alt="bg" />
            <div className='absolute w-full h-full flex flex-col justify-center items-center top-0 p-2'>
            <h3 className='text-4xl font-bold text-lime-400'>You are Royalty. <span className='text-teal-300'>Travel like one!</span></h3>
          <p className='text-xl text-amber-400 font-bold'>You Choose. <span>We Deliver.</span></p>
          </div>
            </div>
          
        </div>
        <div className='grid md:grid-cols-3 p-2 mx-auto gap-4 pt-4 '>
          <div className='md:w-[350px] md:h-[300px] w-[300px] h-[300px] border rounded-xl hover:scale-105 duration-300'>
            <img className='w-full h-full object-cover rounded-xl' src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600" alt="rollsr" />
          </div>
          
          <div className='md:w-[350px] md:h-[300px] border rounded-xl hover:scale-105 duration-300'>
            <img className='w-full h-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1625958085917-38d3c6ba960d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxsYW1ib3JnaGluaXxlbnwwfHwwfHx8MA%3D%3D" alt="rollsr" />
          </div>
           <div className='md:w-[350px] md:h-[300px] border rounded-xl hover:scale-105 duration-300'>
            <img className='w-full h-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBnJTIwd2Fnb258ZW58MHx8MHx8fDA%3D" alt="rollsr" />
          </div>
        </div>
        <div className='flex items-center justify-center' >
          <div className='border md:w-[500px] w-[300px] p-2 m-2 items-center flex flex-col justify-center rounded-lg shadow-lg'>
            <form action="" className='pt-4 '>
              <label htmlFor="">Vehicle Type</label>
              <div className='flex items-center border w-[250px] justify-between my-2 '>
                <input type="text" className=' bg-transparent outline-none ml-2' placeholder='eg:Rolls Royce'  />
                <AiOutlineCar className=' mr-2'/>
              </div>
              <label htmlFor="">Pickup Location</label>
              <div className='flex items-center border w-[250px] justify-between my-2 '>
                <input type="text" className=' bg-transparent outline-none ml-2' placeholder='eg:Upper Hill'  />
                <CiLocationOn className=' mr-2'/>
              </div>
              <label htmlFor="">Pickup Date</label>
              <div className='flex items-center border w-[250px] justify-between my-2 '>
                <input type="text" className=' bg-transparent outline-none ml-2' placeholder='eg:02/02/23'  />
                <CiCalendarDate className=' mr-2'/>
              </div>
              <label htmlFor="">Pickup Time</label>
              <div className='flex items-center border w-[250px] justify-between my-2 '>
                <input type="text" className=' bg-transparent outline-none ml-2' placeholder='eg:10:00'  />
                <BiTime className=' mr-2'/>
              </div>
              <label htmlFor="">Return Date</label>
              <div className='flex items-center border w-[250px] justify-between my-2 '>
                <input type="text" className=' bg-transparent outline-none ml-2' placeholder='02/05/23'  />
                <CiCalendarDate className=' mr-2'/>
              </div>
<div className='w-[250px]'>
  <button className='w-full bg-black text-yellow-400 font-bold p-2 rounded-lg'>Find Your Car</button>
</div>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero