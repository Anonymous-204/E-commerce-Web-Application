import React from "react";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SignUpPage.css'
export default function SignInPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: "",
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
        try {
            await axios.post("http://localhost:3000/auth/signin", form)
            setForm({
                email: "",
                password: "",
            })
            navigate('/')
        } catch (e) {
            console.error("lỗi", e)
        }
    }
    
    return (
        <div>
            <h1>Chào mừng đến với ECWA</h1>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Đăng Nhập</h2>
                <div className="inputs">
                        
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={form.email} onChange={handleChange}/>
                    </div>
                        
                    <div className="input">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" name="password" id="password" value={form.password} onChange={handleChange}/>
                    </div>
                    <button type="submit">Đăng nhập</button>
                </div>
            </form>
        </div>
    )
}