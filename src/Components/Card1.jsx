import { ArrowUp } from 'lucide-react'
import React from 'react'

const Card1 = () => {
  return (
    <>
    <div>Card1</div>
     <div className="card  bg-white w-full max-w-sm h-auto 
            rounded-3xl shadow-2xl my-5 mx-6 py-4 px-6">
                <div className=" items-start justify-between">
                    {/* <button className='bg-brown-200 rounded-4xl'>Best Seller</button> */}
        <img src='https://i.pinimg.com/736x/11/c4/c6/11c4c6dbe4de08e50de670361e32056a.jpg' alt='no image' className=' rounded-3xl drop-shadow-2xl'/>
        <button className=' bg-gray-700 rounded-4xl text-xl text-white h-auto py-2 px-2'>Best Seller</button>
         </div>
         <div>
            <h2 className='text-2xl font-bold'>Nike Airforce 1 Preminum </h2>
            <h2 className='text-2xl text-gray-500'>Own AirForce</h2>
            <p className='text-xl text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, perspiciatis!</p>
         </div>
         <div className='other flex justify-between items-between'>
            {/* <p className='text-2xl text-bold'>$112</p> */}
            {/* <p>buy now</p> */}
            <button className=' bg-amber-100 rounded-4xl text-2xl text-gray-800  h-auto py-2 px-2 '>$111</button>
            <button className=' bg-gray-700 rounded-4xl text-xl text-white h-auto py-2 px-2'>Buy Now <ArrowUp className='inline-block'/> </button>
            </div>
    </div>
    </>
  )
}

export default Card1