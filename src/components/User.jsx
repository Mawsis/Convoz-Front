import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

const User = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);
  
  return (
    <div>
      {user ? user.name : "loader"}
    </div>
  )
}

export default User