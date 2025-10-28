// src/components/home/hero/HeroBackground.jsx
import React from "react";

export default function HeroBackground({ src }) {
  return (
    <div className="absolute inset-0">
      {/* single image, remount on key change → selalu sync */}
      <img
        key={src}
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover
                   opacity-0 animate-[fadeIn_600ms_ease-out_forwards]"
      />

      {/* overlay & subtle depth */}
      <div className="absolute inset-0 bg-black/25" />
      <style>{`
        @keyframes fadeIn {
          from {opacity: 0}
          to   {opacity: 1}
        }
      `}</style>
    </div>
  );
}
