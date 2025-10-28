import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../common/Modal.jsx";

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [nama, setNama] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!email.trim() || !nama.trim() || !password || !confirmPassword) return alert("Semua field wajib diisi");
        if (password.length < 6) return alert("Password minimal 6 karakter");
        if (password !== confirmPassword) return alert("Konfirmasi password tidak sama");
        if (!agree) return alert("Anda harus menyetujui Kebijakan Privasi");
        setOpen(true);
    }

    return (
        <>
            <h1>Sign Up</h1>
            <p className="subtitle">Create your account</p>

            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Nama Lengkap" required value={nama} onChange={(e) => setNama(e.target.value)} />
                <input type="password" placeholder="Kata Sandi" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Konfirmasi Kata Sandi" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <div className="agree-box">
                    <input type="checkbox" id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                    <label htmlFor="agree">
                        Dengan mendaftar, kamu menyetujui <a href="#">Kebijakan Privasi</a>
                    </label>
                </div>

                <button type="submit" className="btn-login">
                    <span>Sign Up</span>
                </button>
            </form>

            <p className="signup-text">
                Sudah punya akun? <Link to="/login">Login</Link>
            </p>

            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Berhasil!"
                description="Akun anda berhasil dibuat"
                confirmText="Login"
                onConfirm={() => navigate("/login")}
            />
        </>
    );
}
