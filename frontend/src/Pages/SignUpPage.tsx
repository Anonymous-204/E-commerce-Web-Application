import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SignUpPage.css'
export default function SignUpPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        userName: "",
        email: "",
        password: "",
        confirm: ""
    })
    const handleChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
     
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.password!==form.confirm) {
            alert("mật khẩu xác nhận không khớp") 
            return;
        }
        const {confirm, ...data} = form
        try {
            await axios.post("/localhost:3000/auth/signup", data)
            setForm({
                userName: "",
                email: "",
                password: "",
                confirm: ""
            })
            navigate('/signin')
        } catch (e) {
            console.error("lỗi", e)
        }
    }
    
    return (
        <div>
            <h1>Chào mừng đến với ECWA</h1>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Đăng ký</h2>
                <div className="inputs">
                    <div className="input">
                        <label htmlFor="userName">Tên Đăng nhập</label>
                        <input type="text" name="userName" value={form.userName} onChange={handleChange}/>
                    </div>
                        
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange}/>
                    </div>
                        
                    <div className="input">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange}/>
                    </div>

                    <div className="input">
                        <label htmlFor="confirm">Xác nhận mật khẩu</label>
                        <input type="password" name="confirm" value={form.confirm} onChange={handleChange}/>
                    </div>
                    <button type="submit">Đăng ký</button>
                </div>
            </form>
        </div>
    )
}