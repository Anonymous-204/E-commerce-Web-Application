import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/ProfilePage.css";
import { useNavigate } from "react-router-dom";
interface User {
    id: number;
    userName: string;
    email: string;
    phone: string;
    role: "customer" | "shop" | "admin";
}

export default function ProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("/users/profile");
                setUser(response.data.data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="profile-page">
            <div className="profile-card">

                <div className="profile-header">
                    <div className="profile-avatar">
                        {user?.userName?.charAt(0).toUpperCase() || "?"}
                    </div>

                    <div className="profile-header-info">
                        <h1>{user?.userName || "Loading..."}</h1>
                        <p>{user?.email || "—"}</p>
                    </div>

                    <span className={`profile-role role-${user?.role}`}>
                        {user?.role || "—"}
                    </span>
                </div>

                <div className="profile-divider"></div>

                <div className="profile-info">

                    <div className="profile-item">
                        <span className="profile-label">ID</span>
                        <span className="profile-value">
                            {user?.id || "—"}
                        </span>
                    </div>

                    <div className="profile-item">
                        <span className="profile-label">Username</span>
                        <span className="profile-value">
                            {user?.userName || "—"}
                        </span>
                    </div>

                    <div className="profile-item">
                        <span className="profile-label">Email</span>
                        <span className="profile-value">
                            {user?.email || "—"}
                        </span>
                    </div>

                    <div className="profile-item">
                        <span className="profile-label">Phone</span>
                        <span className="profile-value">
                            {user?.phone || "Not provided"}
                        </span>
                    </div>

                </div>

                <div className="profile-actions">
                    <button className="undo-btn" onClick={() => navigate(-1)}>
                        Undo
                    </button>

                    <button className="edit-profile-btn">
                        Edit profile
                    </button>
                </div>

            </div>
        </div>
    );
}