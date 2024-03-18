import React, { useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { LoggedIn } from "../App";

const User = () => {
  const [user, setUser] = useState(null);
  const loggedIn = useContext(LoggedIn);
  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {user ? user.name : "loader"} {loggedIn ? "logged" : "not logged"}
    </div>
  );
};

export default User;
