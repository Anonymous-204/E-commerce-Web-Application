import React from "react";
import Navbar from "./NavbarPage";
import {useAuth} from "../services/authContext";
export default function HomePage() {
    const { user } = useAuth();
    return (
        <div>
            <Navbar/>
            <h1>Xin chào, {user?.userName || "Người dùng"}</h1>
        </div>
    )
}