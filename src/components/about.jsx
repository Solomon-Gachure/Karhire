import React from 'react'

const About = () => {
  return (
    <div name="about" className='max-w-[1400px] p-2'>
        <div className='flex justify-center'>
            <h3 className='text-2xl font-bold border-b-2 border-orange-700 text-green-500'>About Us</h3>
        </div>
        <div className='p-2'>
            <p className='text-center'>Welcome to the epitome of automotive luxury, where every drive becomes an unforgettable experience. <br/>
                At our esteemed company, we redefine sophistication by offering a fleet of high-end luxury cars that embody elegance and performance. 
                Immerse yourself in the thrill of the open road with our meticulously curated collection, featuring iconic brands and cutting-edge models.
                 Our commitment goes beyond providing exceptional vehicles; we strive to create moments of pure indulgence for our discerning clientele. 
                 With a seamless rental experience, personalized service, and a passion for perfection, we invite you to elevate your journey with us—where luxury meets the road, and every mile is a celebration of opulence.
                 </p>
                 
        </div>
        <div className='grid md:grid-cols-2'>
            <div className='p-2 pl-10'>
                    <div className='border rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px]'>
                        <img className='w-full h-full object-cover rounded-full' src="https://images.pexels.com/photos/4481851/pexels-photo-4481851.jpeg?auto=compress&cs=tinysrgb&w=600" alt="driver" />
                    </div>
                    <p>We pride our services to ensure that every client is happy!</p>
                 </div>
                 <div className='p-2 pl-10'>
                    <div className='border rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px]'>
                        <img className='w-full h-full object-cover rounded-full' src="https://images.pexels.com/photos/5290053/pexels-photo-5290053.jpeg?auto=compress&cs=tinysrgb&w=600" alt="driver" />
                    </div>
                    <p>Our services are not limited to any event,find comfort no matter where!</p>
                 </div>
        </div>
    </div>
  )
}

export default About