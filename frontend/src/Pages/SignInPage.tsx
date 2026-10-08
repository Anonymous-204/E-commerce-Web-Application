import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/SignInPage.css";

export default function SignInPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            await api.post("/auth/signin", form);

            setForm({
                email: "",
                password: "",
            });

            navigate("/");
        } catch (e) {
            console.error("Lỗi đăng nhập:", e);
        }
    };

    return (
        <div className="signin-page">
            <h1>Chào mừng đến với ECWA</h1>

            <form className="signin-form" onSubmit={handleSubmit}>
                <h2>Đăng nhập</h2>

                <div className="signin-inputs">
                    <div className="signin-input">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Nhập email"
                            required
                        />
                    </div>

                    <div className="signin-input">
                        <label htmlFor="password">
                            Mật khẩu
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Nhập mật khẩu"
                            required
                        />
                    </div>

                    <button type="submit">
                        Đăng nhập
                    </button>
                </div>

                <p className="signup-link">
                    Chưa có tài khoản?{" "}
                    <span onClick={() => navigate("/signup")}>
                        Đăng ký
                    </span>
                </p>
            </form>
        </div>
    );
}