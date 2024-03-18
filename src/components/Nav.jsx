import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import {
  Contact,
  Home,
  LogIn,
  LogOut,
  MessageCircle,
  Server,
  Settings,
  User,
} from "lucide-react";
import { LoggedIn } from "../App";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  console.log(loggedIn);
  return (
    <nav className=" w-[15%] h-full bg-green-600 flex flex-col justify-between items-center text-white">
      <h1 className="text-3xl h-[20%] flex justify-center items-center font-bold">
        Convoz
      </h1>
      <div className="h-[50%] flex flex-col gap-2 items-start w-full px-1 text-xl">
        <Link
          to={"/"}
          className={`flex items-center gap-2 w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition duration-100 ${
            location.pathname == "/" ? "bg-green-700" : ""
          }`}>
          <Home />
          <div> Home </div>
        </Link>
        <Link
          to={"/User"}
          className={`flex items-center gap-2 w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition duration-100 ${
            location.pathname == "/User" ? "bg-green-700" : ""
          }`}>
          <User />
          <div> User </div>
        </Link>
        <Link
          to={"/Chat"}
          className={`flex items-center gap-2 w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition duration-100 ${
            location.pathname == "/Chat" ? "bg-green-700" : ""
          }`}>
          <MessageCircle />
          <div> Chat </div>
        </Link>
        <Link
          to={"/Servers"}
          className={`flex items-center gap-2 w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition duration-100 ${
            location.pathname == "/Servers" ? "bg-green-700" : ""
          }`}>
          <Server />
          <div> Servers </div>
        </Link>
        <Link
          to={"/Friends"}
          className={`flex items-center gap-2 w-full rounded-sm py-8 px-1 hover:bg-green-700 ease-in transition duration-100 ${
            location.pathname == "/Friends" ? "bg-green-700" : ""
          }`}>
          <Contact />
          <div> Friends </div>
        </Link>
      </div>
      <div className="h-[35%] flex flex-col justify-end items-center p-2 w-full">
        <div className="flex flex-col divide-y-2 divide-green-600 justify-center items-center text-center h-1/3 w-full bg-green-700 rounded-sm p-2">
          {!loggedIn ? (
            <Link
              to={"/Login"}
              className="w-full py-2 h-full flex justify-center gap-5 items-center hover:bg-green-600">
              <div>Login</div>
              <LogIn />
            </Link>
          ) : (
            <Link
              to={"/Logout"}
              className="w-full py-2 h-full flex justify-center gap-5 items-center hover:bg-green-600">
              <div>Logout</div>
              <LogOut />
            </Link>
          )}
          <Link
            to={"/Settings"}
            className="w-full py-2 h-full flex justify-center gap-5 items-center hover:bg-green-600">
            <div>Settings</div>
            <Settings />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
