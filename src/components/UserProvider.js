// user
// login, logout, authLoading

import { useState, createContext } from "react";
export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [authIsLoading, setAuthIsLoading] = useState(true);

  const userState = {
    user,
    setUser,
    authIsLoading,
    setAuthIsLoading,
  };

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
