import React from "react";
import GoogleButton from "./GoogleButton.jsx";
import { Link } from "react-router-dom";

export default function LoginForm() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <h1>Login Akun</h1>
            <p className="subtitle">Sign in your account</p>

            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" aria-label="Email" required />
                <input type="password" placeholder="Kata Sandi" aria-label="Kata Sandi" required />

                <p className="forgot-password"><Link to="/forgot">Lupa Password</Link></p>

                <button type="submit" className="btn-login">
                    <span>Login</span>
                </button>
            </form>

            <div className="divider" role="separator">
                Atau
            </div>

            <GoogleButton />

            <p className="signup-text">
                Sudah Punya Akun? <Link to="/signup">Daftar</Link>
            </p>
        </>
    );
}