import React, { useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { LoggedIn } from "../App";
import { useNavigate } from "react-router-dom";
import { useIsLoggedIn } from "../utils/useIsLoggedIn";

const User = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  useIsLoggedIn(loggedIn);
  useEffect(() => {
    if (loggedIn) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get("/api/user");
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUserData();
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-between items-center p-10">
      <div className="silver h-1/4 w-1/4"></div>
      <div className="gold h-1/4 w-1/4 border-2 border-green-700"></div>
      <div className="bronze h-1/4 w-1/4 text-white flex justify-center items-center">
        <h1>Wsh kho</h1>
      </div>
    </div>
  );
};

export default User;
