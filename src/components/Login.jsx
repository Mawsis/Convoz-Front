import { useEffect, useState } from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        if (response.status === 200) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/login',{email,password})
      if(res.statusCode === 200){
        setEmail("")
        setPassword("")
        navigate('/')
      }
      else{
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=' w-1/3 h-2/3 bg-gray-900 m-auto rounded border-4 border-green-600 text-white flex flex-col justify-evenly items-center'>
      <h1 className='text-4xl border-b-4 border-green-600 pb-3 text-center'>Login</h1>
      <form onSubmit={handleLogin} className='flex flex-col gap-5 w-1/2'>
        <input type="text" className='p-2 bg-gray-700 rounded border-2 border-green-600' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" className='p-2 bg-gray-700 rounded border-2 border-green-600' value={password} onChange={(e)=> setPassword(e.target.value)} />
        <input type="submit" value="Submit" className=' bg-green-600 w-1/2 py-2 rounded mx-auto hover:text-green-600 hover:bg-white border-2 border-green-600' />
      </form>
    </div>
  )
}

export default Login