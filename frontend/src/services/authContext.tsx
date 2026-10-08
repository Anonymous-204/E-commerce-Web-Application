import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    type FC,
    type ReactNode,
    type SetStateAction,
} from "react";
import api from "./api";

interface User {
    id: number;
    userName: string;
    role: "customer" | "shop" | "admin";
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    setUser: React.Dispatch<SetStateAction<User | null>>;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Lấy user khi app khởi động
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await api.get("/users/me");

                setUser(response.data.data);
            } catch (error) {
                console.error(
                    "Error fetching current user:",
                    error
                );

                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getCurrentUser();
    }, []);

    // Đăng nhập
    const signIn = async (
        email: string,
        password: string
    ) => {
        const response = await api.post("/auth/signin", {
            email,
            password,
        });

        // Lưu access token
        // api.ts của bạn cần có hàm setAccessToken
        api.setAccessToken(response.data.accessToken);

        // Lấy thông tin user vừa đăng nhập
        const userResponse = await api.get("/users/me");

        setUser(userResponse.data.data);
    };

    // Đăng xuất
    const signOut = async () => {
        try {
            await api.post("/auth/signout");
        } catch (error) {
            console.error("Error signing out:", error);
        } finally {
            // Xóa user khỏi React state ngay lập tức
            setUser(null);

            // Xóa access token khỏi memory
            api.setAccessToken(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                setUser,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
};