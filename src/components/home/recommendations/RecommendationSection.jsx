// src/components/home/recommendations/RecommendationSection.jsx
import React from "react";
import RecommendationCard from "./RecommendationCard.jsx";
import "../../../styles/home/recommendations.css";

export default function RecommendationSection({ title, items, onMore }) {
    return (
        <section className="rc">
            {/* Judul section */}
            {title && (
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-900">
                    {title}
                </h2>
            )}

            {/* Grid card */}
            <div className="rc__grid">
                {items.map((it) => (
                    <RecommendationCard
                        key={it.id}
                        title={it.title}
                        desc={it.desc}
                        img={it.img}
                        rating={it.rating}
                        to={it.to}
                    />
                ))}
            </div>

            {/* Tombol CTA */}
            <div className="rc__cta-wrap">
                <button className="rc__cta" type="button" onClick={onMore}>
                    Lihat Selengkapnya
                </button>
            </div>
        </section>
    );
}
