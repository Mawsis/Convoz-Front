import { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import User from "./components/User.jsx";
import Chat from "./components/Chat.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import axios from "./api/axios.js";

export const LoggedIn = createContext(false);
function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const getLoggedIn = async () => {
      const res = await axios.get("/api/isLogged");
      if (res.status === 202) {
        setLoggedIn(true);
      }
      if (res.status === 203) {
        setLoggedIn(false);
      }
    };
    getLoggedIn();
  }, []);
  return (
    <LoggedIn.Provider value={[loggedIn, setLoggedIn]}>
      <div className="w-screen h-screen flex bg-gray-900">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/user"
            element={<User />}
          />
          <Route
            path="/chat"
            element={<Chat />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/logout"
            element={<Logout />}
          />
        </Routes>
      </div>
    </LoggedIn.Provider>
  );
}

export default App;
