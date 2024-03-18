import { useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { HashLoader, PacmanLoader } from "react-spinners";
import { LoggedIn } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useContext(LoggedIn);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/isLogged");
        if (response.status === 202) {
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setIsLogging(true);
      const res = await axios.post("/login", { email, password });
      setEmail("");
      setPassword("");
      setLoggedIn(true);
      navigate("/");
    } catch (error) {
      setErrors(error.response.data.errors);
      setIsLogging(false);
    }
  };
  return (
    <div className=" w-1/3 h-2/3 bg-gray-800 m-auto rounded border-4 border-green-600 text-white flex flex-col justify-evenly items-center">
      <h1 className="text-4xl border-b-4 border-green-600 pb-3 text-center">
        {isLogging ? "Checking..." : "Login"}
      </h1>
      {isLogging ? (
        <HashLoader color="#16a34a" />
      ) : (
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-5 w-1/2">
          {errors.email && (
            <div className="text-sm text-red-500">{errors.email}</div>
          )}
          <input
            type="text"
            className="p-2 bg-gray-700 rounded border-2 border-green-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.password && (
            <div className="text-sm text-red-500">{errors.password}</div>
          )}
          <input
            type="password"
            className="p-2 bg-gray-700 rounded border-2 border-green-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className=" bg-green-600 w-1/2 py-2 rounded mx-auto hover:text-green-600 hover:bg-white border-2 border-green-600"
          />
        </form>
      )}
    </div>
  );
};

export default Login;
