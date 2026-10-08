import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpPage.css";

export default function SignUpPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        userName: "",
        email: "",
        password: "",
        confirm: "",
        role: "customer",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.password !== form.confirm) {
            alert("Mật khẩu xác nhận không khớp");
            return;
        }

        const { confirm, ...data } = form;

        try {
            await axios.post(
                "http://localhost:3000/auth/signup",
                data
            );

            setForm({
                userName: "",
                email: "",
                password: "",
                confirm: "",
                role: "customer",
            });

            navigate("/signin");
        } catch (e) {
            console.error("Lỗi đăng ký:", e);
        }
    };

    return (
        <div className="signup-page">
            <h1>Chào mừng đến với ECWA</h1>

            <form className="form" onSubmit={handleSubmit}>
                <h2>Đăng ký</h2>

                <div className="inputs">
                    <div className="input">
                        <label htmlFor="userName">
                            Tên đăng nhập
                        </label>

                        <input
                            id="userName"
                            type="text"
                            name="userName"
                            value={form.userName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="password">
                            Mật khẩu
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="confirm">
                            Xác nhận mật khẩu
                        </label>

                        <input
                            id="confirm"
                            type="password"
                            name="confirm"
                            value={form.confirm}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="role">
                            Loại tài khoản
                        </label>

                        <select
                            id="role"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                        >
                            <option value="customer">
                                Khách hàng
                            </option>

                            <option value="shop">
                                Người bán
                            </option>
                        </select>
                    </div>

                    <button type="submit">
                        Đăng ký
                    </button>
                </div>
            </form>
        </div>
    );
}