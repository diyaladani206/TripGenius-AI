import { useState } from "react";
import { loginAccount, registerAccount } from "../services/authService";
import { AuthContext } from "./authState";

function readCurrentUser() {
  if (!localStorage.getItem("authToken")) {
    return null;
  }

  try {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(readCurrentUser);

  const applyAuth = (authResponse) => {
    localStorage.setItem("authToken", authResponse.token);
    localStorage.setItem("currentUser", JSON.stringify(authResponse.user));
    setCurrentUser(authResponse.user);
    return authResponse.user;
  };

  const login = async (credentials) => applyAuth(await loginAccount(credentials));
  const register = async (details) => applyAuth(await registerAccount(details));

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}