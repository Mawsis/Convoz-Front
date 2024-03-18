import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { LoggedIn } from "../App";

const Logout = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.post("/logout");
        setLoggedIn(false);
        navigate("/");
      } catch (error) {
        navigate("/");
      }
    };
    handleLogout();
  }, []);
  return (
    <div className="w-full h-full flex">
      <Nav />
      <div className="w-[85%] h-full flex text-white justify-center items-center">
        <HashLoader color="#16a34a" />
      </div>
    </div>
  );
};

export default Logout;
