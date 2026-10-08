import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/ProfilePage.css";
import { useNavigate } from "react-router-dom";

interface User {
    id: number;
    userName: string;
    email: string;
    phone: string;
    address: string;
    role: "customer" | "shop" | "admin";
}

interface UpdateUserForm {
    userName: string;
    email: string;
    phone: string;
    address: string;
}

export default function ProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState<UpdateUserForm>({
        userName: "",
        email: "",
        phone: "",
        address: ""
    });

    const [isUpdating, setIsUpdating] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("/users/profile");

                const userData = response.data.data;

                setUser(userData);

                setFormData({
                    userName: userData.userName || "",
                    email: userData.email || "",
                    phone: userData.phone || "",
                    address: userData.address || ""
                });
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchUser();
    }, []);

    const handleEdit = () => {
        if (!user) return;

        setFormData({
            userName: user.userName,
            email: user.email,
            phone: user.phone || "",
            address: user.address || ""
        });

        setIsEditing(true);
    };

    const handleCancel = () => {
        if (!user) return;

        setFormData({
            userName: user.userName,
            email: user.email,
            phone: user.phone || "",
            address: user.address || ""
        });

        setIsEditing(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdate = async () => {
        try {
            setIsUpdating(true);

            const response = await api.patch(
                "/users/update",
                formData
            );

            const updatedUser = response.data.data;

            setUser(updatedUser);

            setFormData({
                userName: updatedUser.userName,
                email: updatedUser.email,
                phone: updatedUser.phone || "",
                address: updatedUser.address || ""
            });

            setIsEditing(false);
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="profile-page">
            <div className="profile-card">

                <div className="profile-header">

                    <div className="profile-avatar">
                        {user?.userName?.charAt(0).toUpperCase() || "?"}
                    </div>

                    <div className="profile-header-info">
                        <h1>
                            {user?.userName || "Loading..."}
                        </h1>

                        <p>
                            {user?.email || "—"}
                        </p>
                    </div>

                    <span
                        className={`profile-role role-${user?.role}`}
                    >
                        {user?.role || "—"}
                    </span>

                </div>

                <div className="profile-divider"></div>

                <div className="profile-info">

                    {/* ID */}
                    <div className="profile-item">
                        <span className="profile-label">
                            ID
                        </span>

                        <span className="profile-value">
                            {user?.id || "—"}
                        </span>
                    </div>

                    {/* Username */}
                    <div className="profile-item">
                        <span className="profile-label">
                            Username
                        </span>

                        {isEditing ? (
                            <input
                                className="profile-input"
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                            />
                        ) : (
                            <span className="profile-value">
                                {user?.userName || "—"}
                            </span>
                        )}
                    </div>

                    {/* Email */}
                    <div className="profile-item">
                        <span className="profile-label">
                            Email
                        </span>

                        {isEditing ? (
                            <input
                                className="profile-input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        ) : (
                            <span className="profile-value">
                                {user?.email || "—"}
                            </span>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="profile-item">
                        <span className="profile-label">
                            Phone
                        </span>

                        {isEditing ? (
                            <input
                                className="profile-input"
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone"
                            />
                        ) : (
                            <span className="profile-value">
                                {user?.phone || "Not provided"}
                            </span>
                        )}
                    </div>

                    {/* Address */}
                    <div className="profile-item">
                        <span className="profile-label">
                            Address
                        </span>

                        {isEditing ? (
                            <input
                                className="profile-input"
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your address"
                            />
                        ) : (
                            <span className="profile-value">
                                {user?.address || "Not provided"}
                            </span>
                        )}
                    </div>

                </div>

                <div className="profile-actions">

                    <button
                        className="undo-btn"
                        onClick={() => navigate(-1)}
                    >
                        Undo
                    </button>

                    {isEditing ? (
                        <>
                            <button
                                className="cancel-edit-btn"
                                onClick={handleCancel}
                                disabled={isUpdating}
                            >
                                Cancel
                            </button>

                            <button
                                className="update-profile-btn"
                                onClick={handleUpdate}
                                disabled={isUpdating}
                            >
                                {isUpdating
                                    ? "Updating..."
                                    : "Update"}
                            </button>
                        </>
                    ) : (
                        <button
                            className="edit-profile-btn"
                            onClick={handleEdit}
                        >
                            Edit profile
                        </button>
                    )}

                </div>

            </div>
        </div>
    );
}