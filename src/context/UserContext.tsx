"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface iUser {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: () => {},
  setUser: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<iUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("storedUser", storedUser);
    if (storedUser) {
      console.log("storeParse", JSON.parse(storedUser));
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
