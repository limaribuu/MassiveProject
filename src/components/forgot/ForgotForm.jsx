import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotForm() {
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const val = email.trim();
        if (!val) return alert("Email tidak boleh kosong.");
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        if (!ok) return alert("Format email tidak valid.");
        alert("Link reset kata sandi telah dikirim ke email kamu.");
    }

    return (
        <>
            <h1>Lupa Kata Sandi</h1>
            <p className="subtitle">
                Silakan masukkan email terdaftar. Kami akan mengirimkan link yang akan
                mengarahkan kamu untuk atur ulang kata sandi.
            </p>

            <form onSubmit={handleSubmit} noValidate>
                <input
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn-login">
                    <span>Kirim</span>
                </button>
            </form>

            <p className="signup-text">
                Ingat Kata Sandi? <Link to="/login">Login</Link>
            </p>
        </>
    );
}
