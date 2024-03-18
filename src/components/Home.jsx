import React from 'react'
import RecentChats from './RecentChats'
import planet from '../assets/planet.png'
import Nav from './Nav'
const Home = () => {
  return (
    <div className='w-full h-full flex'>
      <Nav/>
      <div className='w-[85%] flex'>
        <div className='text-white p-5 grid grid-cols-3 grid-rows-3 gap-3 w-full h-full'>
          <div className=' rounded border-2 border-green-600 row-span-2 bg-gray-800'>
            <RecentChats/>
          </div>
          <div className=' rounded border-2 border-green-600 col-span-2 bg-gray-800'></div>
          <div className=' rounded border-2 border-green-600 bg-gray-800'>
            <div className='w-full h-full flex flex-col justify-between items-center p-8'>
              <div className='text-2xl font-semibold'>
                Enjoy Chatting with your <span className='text-green-600 font-bold'>FRIENDS</span>
              </div>
              <div className='flex justify-center items-center'>
                <img src={planet} alt="planet" className=' aspect-square w-1/2' />
              </div>
            </div>
          </div>
          <div className=' rounded border-2 border-green-600 row-span-2 bg-gray-800'></div>
          <div className=' rounded border-2 border-green-600 col-span-2 bg-gray-800'></div>
        </div>
      </div>

    </div>
  )
}

export default Home