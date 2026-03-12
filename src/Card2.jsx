import React from 'react'

const Card2 = () => {
  return (
    <>
    <div>Card2</div>
    <div className='card  bg-gary-40 w-full max-w-sm h-auto 
            rounded-xl shadow-2xl my-5 mx-6 py-4 px-6'>
            <div className="flex items-start justify-between">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzh6MHytjBYzReB5-a7JlINM3mmun0RkZvw&shttps://static.vecteezy.com/system/resources/previews/018/930/468/non_2x/pinterest-logo-pinterest-transparent-free-png.png ' alt=' no image' className='w-24 h-24 rounded-full object-cover drop-shadow-2xl'/>
            <div className="icon flex items-start gap-5"></div>
            </div>
             <h2 className='text-2xl font-bold'>Printrest<span className='text-gray-400'> 5 Days ago</span> </h2>
            <h2 className='text-2xl text-gray-500'>Senior UI/UX Designer</h2>
            
         <div className='other flex justify-between items-between'>
            <button className='bg-gray-200 text-black-50 rounded-4xl my-2 py-2 px-2'>Part-time</button>
            <button className='bg-gray-200 text-black-50 rounded-4xl my-2 py-2 px-2'>Senior Level</button>
            </div>
            <br>
            </br>
            <h2 className='text-gray-300'>______________________________________________________</h2>
         <div className='other flex justify-between items-between'>
            <h2 className='text-gray-900'>$120/hr</h2>
            <button className=' bg-gray-700 rounded-4xl text-xl text-white h-auto py-2 px-2 inline-block'>Apply now</button>
            {/* <h2 className='text-gray-700 inline-block'>San Francisco,CA</h2> */}
            </div>
             </div>
        
    </>
  )
}

export default Card2