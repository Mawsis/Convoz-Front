import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useIsLoggedIn(loggedIn) {
  const navigate = useNavigate();
  let returnValue = false;
  useEffect(() => {
    if (!loggedIn) {
      console.log("brr");
      navigate("/login");
      returnValue = true
    }
  }, []);
  return returnValue;
}
