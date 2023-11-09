import React from 'react'
import carone from '../assets/carone.jpg'
import cartwo from '../assets/cartwo.jpg'
import carthree from '../assets/carthree.jpg'
import Cars from '../views/cars'

const Carsforrent = () => {
  return (
    <div className='max-w-[1400px] p-2'>
        <div className='flex justify-center p-2'>
            <h3 className='text-2xl font-bold border-b border-black  text-emerald-500'>Cars for <span className='text-orange-500'>Rental</span></h3>
        </div>
        <div className=''>
            <div className='md:flex gap-2 justify-evenly '>
                <Cars carName='Lamborghini' imageSrc={carone} />
                <Cars carName='Bentley' imageSrc={cartwo} />
                <Cars carName='Benz' imageSrc={carthree} />
            </div>
        </div>
    </div>
  )
}

export default Carsforrent