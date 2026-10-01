import React from "react";
import '../styles/NavbarPage.css'
export default function Navbar() {
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
                <div className="user">
                    <select>
                        <option disabled hidden>👤</option>
                        <option> ✎ Profile</option>
                        <option>⚙️ settings</option>
                        <option>📦 Orders</option>
                        <option>🚪 Logout</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}