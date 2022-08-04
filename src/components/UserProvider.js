// user
// login, logout, authLoading

import { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

function UserProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [authIsLoading, setAuthIsLoading] = useState(true);

  const userState = {
    user,
    setUser,
    authIsLoading,
    setAuthIsLoading,
  };

  useEffect(() => {
    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/check-login", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user?.role) {
          setUser(data.user);
          history.push("/dashboard");
        } else {
          setUser(null);
        }
        setAuthIsLoading(false);
      })
      .catch((err) => {
        console.error("Check Login Error: ", err);
        setAuthIsLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
