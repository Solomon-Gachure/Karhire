import React from 'react'

const Cars = ({carName, imageSrc}) => {
  return (
    <div className='  '>
        <img src={imageSrc} alt="" className=' object-cover h-[200px] w-full rounded-lg' />
        <div className='flex flex-col justify-center md:justify-start p-2'>
            <h1 className='text-2xl font-bold text-orange-700'>{carName}</h1>
            <div className='flex flex-wrap items-center justify-center md:justify-start gap-2'>
                <div className='flex items-center gap-2'>
                <div className='h-[5px] w-[5px] border border-orange-700 rounded-full'/>
                <p>Automatic</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='h-[5px] w-[5px] border border-orange-700 rounded-full'/>
                <p>Sports</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='h-[5px] w-[5px] border border-orange-700 rounded-full'/>
                <p>Diesel</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='h-[5px] w-[5px] border border-orange-700 rounded-full'/>
                <p>500HP</p>
            </div>
            
            </div>
            <div className='flex justify-start'>
                <p className='text-green-500 font-bold text-xl'>$500 <span className='text-orange-700'>/Day</span></p>
            </div>
            <div className='flex justify-center p-2 w-[300px]  '>
                <button className='bg-black text-white p-2 w-[250px] font-bold cursor-pointer'>Rent Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cars