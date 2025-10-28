import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/destinasi", label: "Destinasi" },
  { to: "/itenary", label: "Itenary" },
  { to: "/ulasan", label: "Ulasan" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="w-full border-b border-gray-200">
      <div className="mx-auto max-w-[1200px] px-6">
        <nav className="flex items-center justify-between py-3">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <img
                src="/logopelesir.png" 
                alt="Logo Pelisir Palembang"
                className="h-10 w-10 object-contain"
              />
            </div>
            <span className="text-2xl font-extrabold tracking-wide text-[#1F2937]">
              PELISIR PALEMBANG
            </span>
          </div>

          {/* Middle: Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map(({ to, label }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={[
                    "text-[17px] font-medium transition",
                    active ? "text-[#F1721D]" : "text-gray-500 hover:text-gray-700",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right: Search + Auth */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Cari"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>

            <Link
              to="/signup"
              className="rounded-xl border border-gray-300 px-5 py-2 text-[16px] font-medium text-gray-600 hover:bg-gray-50"
            >
              Daftar
            </Link>

            <Link
              to="/login"
              className="rounded-xl bg-[#F1721D] px-5 py-2 text-[16px] font-semibold text-white hover:opacity-90"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
