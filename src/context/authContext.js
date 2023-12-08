import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const login = async (input) => {
    const res = await axios.post("/auth/signin", input);
    setCurrentUser(res.data);
  };

  const logout = async (input) => {
    await axios.post('/auth/signout', input);
    setCurrentUser(null);
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }