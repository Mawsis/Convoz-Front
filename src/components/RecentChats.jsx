import React from 'react'

const RecentChats = () => {
  return (
    <div className='w-full h-full p-2'>
        <div className='w-full h-[95%] flex flex-col gap-2'>
            <div className='w-full h-1/4 border-2 rounded-md p-1 border-green-600 flex gap-4'>
                <img src="https://i.pravatar.cc/?u=abdou" alt="" className=' aspect-square  rounded-full border border-green-600' />
                <div className='h-full flex flex-col justify-between'>
                    <h2 className='text-xl font-bold'>Sarah</h2>
                    <p className=''>Hello, how are you?</p>
                    <p className='text-gray-400'>3 Hours ago</p>
                </div>
            </div>
            <div className='w-full h-1/4 border-2 rounded-md p-1 border-green-600 flex gap-4'>
                <img src="https://i.pravatar.cc/?u=abdou" alt="" className=' aspect-square  rounded-full border border-green-600' />
                <div className='h-full flex flex-col justify-between'>
                    <h2 className='text-xl font-bold'>Sarah</h2>
                    <p className=''>Hello, how are you?</p>
                    <p className='text-gray-400'>3 Hours ago</p>
                </div>
            </div>
            <div className='w-full h-1/4 border-2 rounded-md p-1 border-green-600 flex gap-4'>
                <img src="https://i.pravatar.cc/?u=abdou" alt="" className=' aspect-square  rounded-full border border-green-600' />
                <div className='h-full flex flex-col justify-between'>
                    <h2 className='text-xl font-bold'>Sarah</h2>
                    <p className=''>Hello, how are you?</p>
                    <p className='text-gray-400'>3 Hours ago</p>
                </div>
            </div>
            <div className='w-full h-1/4 border-2 rounded-md p-1 border-green-600 flex gap-4'>
                <img src="https://i.pravatar.cc/?u=abdou" alt="" className=' aspect-square  rounded-full border border-green-600' />
                <div className='h-full flex flex-col justify-between'>
                    <h2 className='text-xl font-bold'>Sarah</h2>
                    <p className=''>Hello, how are you?</p>
                    <p className='text-gray-400'>3 Hours ago</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentChats