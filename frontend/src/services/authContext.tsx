import React,{ createContext, useContext, useEffect, useState, type FC,type ReactNode, type SetStateAction} from "react";
import api from "./api";

interface User {
  id: number;
  userName: string;
  role: "customer" | "shop" | "admin"
}
interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: React.Dispatch<SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getcurrentUser = async () => {
      try {
        const response = await api.get("/users/me");
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getcurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};