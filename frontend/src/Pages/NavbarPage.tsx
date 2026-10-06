import '../styles/NavbarPage.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../services/api'
export default function Navbar() {

    const navigate = useNavigate();
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const logoutHandle = async () => {
        await api.post("/auth/signout");
        navigate("/signin");
    };
    return (
        <nav>
            <div className="logo">ECWA</div>

            <div className="info">
                <h4>Products</h4>
                <h4>Categories</h4>
                <h4>Brands</h4>
            </div>
            <div className="personal">
                <input type="text" placeholder="Search..." />
                <div className="cart">🛒</div>
                <div className="user" onClick={() => setUserMenuOpen(!userMenuOpen)}>👤
                        {userMenuOpen && (
                            <div className="user-menu">
                                <button onClick={() => navigate("/profile")}> ✎ Profile</button>
                                <button onClick={() => navigate("/settings")}>⚙️ settings</button>
                                <button onClick={() => navigate("/orders")}>📦 Orders</button>
                                <button onClick={logoutHandle}>🚪 Sign Out</button>
                            </div>
                        )}
                </div>
            </div>
        </nav>
    )
}