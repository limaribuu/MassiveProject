import React from "react";

export default function ProfileSidebar() {
    return (
        <aside>
            {/* user mini card */}
            <div className="flex items-center gap-3">
                <img
                    src="/avatar-mini.png"
                    alt="Avatar"
                    className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                    <div className="font-semibold text-gray-800">Zulkifli</div>
                    <div className="text-sm text-gray-500">zulkifli12@gmail.com</div>
                </div>
            </div>

            {/* spacing */}
            <div className="h-8" />

            {/* section title */}
            <h3 className="text-gray-700 font-semibold">Destinasi Favorit</h3>

            {/* nav */}
            <nav className="mt-3">
                <button
                    className="text-[#F1721D] font-medium"
                    type="button"
                    aria-current="page"
                >
                    Profil
                </button>
            </nav>
        </aside>
    );
}
