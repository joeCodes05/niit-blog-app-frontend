import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = async (input) => {
    const res = await axios.post("/auth/signin", input);
    setCurrentUser(res.data);
  };

  const logout = async (input) => {
    await axios.post("/auth/signout", input);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // split fullname to be like firstName and lastName
  const fullName = currentUser?.data.full_name;
  const tempArray =
    currentUser?.data === undefined ? null : fullName.split(" ");

  const lastName = tempArray === null ? null : tempArray.pop();
  const firstName = tempArray === null ? null : tempArray.join(" ");

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, firstName, lastName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
