import { useState } from 'react'
import { Routes,Route,useLocation,Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import User from './components/User.jsx'
import Chat from './components/Chat.jsx'
import Login from './components/Login.jsx'
function App() {
  const location = useLocation()
  return (
    <>
      <div className='w-screen h-screen flex bg-gray-900'>
        <nav className=' w-[15%] h-full bg-green-600 flex flex-col justify-between items-center text-white'>
          <h1 className='text-3xl h-[20%] flex justify-center items-center font-bold'>Convoz</h1>
          <div className='h-[50%] flex flex-col gap-2 items-start w-full px-1 text-xl'>
            <Link to={'/'} className={`w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition ${location.pathname == "/" ? 'bg-green-700' : ''}`}>
              Home
            </Link>
            <Link to={'/User'} className={`w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition ${location.pathname == "/User" ? 'bg-green-700' : ''}`}>
              User
            </Link>
            <Link to={'/Chat'} className={`w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition ${location.pathname == "/Chat" ? 'bg-green-700' : ''}`}>
              Chat
            </Link>
            <Link to={'/Servers'} className={`w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition ${location.pathname == "/Servers" ? 'bg-green-700' : ''}`}>
              Servers
            </Link>
            <Link to={'/Friends'} className={`w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition ${location.pathname == "/Friends" ? 'bg-green-700' : ''}`}>
              Friends
            </Link>
          </div>
          <div className='h-[35%]'>

          </div>
        </nav>
        <div className='w-[85%]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
