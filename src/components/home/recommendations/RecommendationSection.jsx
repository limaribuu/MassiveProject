import React from "react";
import RecommendationCard from "./RecommendationCard.jsx";
import "../../../styles/home/recommendations.css";

export default function RecommendationSection() {
    const items = [
        {
            id: 1,
            title: "Museum Sultan Mahmud Badaruddin II",
            desc:
                "Menampilkan koleksi sejarah Kesultanan Palembang dan peninggalan budaya Melayu. Cocok untuk mengenal lebih dekat warisan kota Palembang.",
            img: "/images/reco/museum-smb2.jpg",
            rating: 4.0,
            to: "/detail/museum-smb-ii",
        },
        {
            id: 2,
            title: "Museum Balaputra dewa",
            desc:
                "Museum berisi peninggalan arkeologi, etnografi, dan budaya Sumatera Selatan, termasuk rumah adat Limas yang ikonik.",
            img: "/images/reco/balaputra.jpg",
            rating: 4.0,
            to: "/detail/museum-balaputra",
        },
        {
            id: 3,
            title: "Bukit Siguntang",
            desc:
                "Bukit bersejarah di Palembang yang diyakini sebagai situs peninggalan Kerajaan Sriwijaya dan dikenal sebagai kawasan ziarah spiritual.",
            img: "/images/reco/bukit-siguntang.jpg",
            rating: 4.0,
            to: "/detail/bukit-siguntang",
        },
    ];

    return (
        <section className="rc">
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

            <div className="rc__cta-wrap">
                <button className="rc__cta" type="button">
                    Lihat Selengkapnya
                </button>
            </div>
        </section>
    );
}
