// src/pages/Home.jsx (atau lokasi Home-mu)
import React from "react";
import Navbar from "../components/common/Navbar.jsx";
import Hero from "../components/home/hero/Hero.jsx";
import RecommendationSection from "../components/home/recommendations/RecommendationSection.jsx";
import Footer from "../components/common/Footer.jsx";

// import "../styles/home/recommendations.css";

export default function Home() {
    const hiddenGems = [
        {
            id: 1,
            title: "Museum Sultan Mahmud Badaruddin II",
            desc:
                "Menampilkan koleksi sejarah Kesultanan Palembang dan peninggalan budaya Melayu. Cocok untuk mengenal lebih dekat warisan kota Palembang.",
            img: "/reco/museum-smb2.png",
            rating: 4.0,
            to: "/detail/museum-smb-ii",
        },
        {
            id: 2,
            title: "Museum Balaputra Dewa",
            desc:
                "Museum berisi peninggalan arkeologi, etnografi, dan budaya Sumatera Selatan, termasuk rumah adat Limas yang ikonik.",
            img: "/reco/balaputra.png",
            rating: 4.0,
            to: "/detail/museum-balaputra",
        },
        {
            id: 3,
            title: "Bukit Siguntang",
            desc:
                "Bukit bersejarah yang diyakini sebagai situs Kerajaan Sriwijaya dan dikenal sebagai kawasan ziarah spiritual.",
            img: "/reco/bukit-siguntang.png",
            rating: 4.0,
            to: "/detail/bukit-siguntang",
        },
    ];

    const popular = [
        {
            id: 4,
            title: "Benteng Kuto Besak",
            desc:
                "Benteng peninggalan Kesultanan Palembang yang terletak di tepi Sungai Musi.",
            img: "/reco/bkb.png",
            rating: 4.0,
            to: "/detail/bkb",
        },
        {
            id: 5,
            title: "Jembatan Ampera",
            desc:
                "Ikon kota Palembang di atas Sungai Musi—wajib foto!",
            img: "/reco/ampera.png",
            rating: 4.0,
            to: "/detail/ampera",
        },
        {
            id: 6,
            title: "Pulau Kemaro",
            desc:
                "Pulau di Sungai Musi dengan pagoda, vihara, dan legenda Tan Bun An & Siti Fatimah.",
            img: "/reco/pulau-kemaro.png",
            rating: 4.0,
            to: "/detail/pulau-kemaro",
        },
    ];

    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <div className="text-3xl font-bold text-gray-900 leading-tight text-center my-8"> 
                    Rekomendasi Destinasi 
                    <br />Hidden Gem 
                </div>
                <RecommendationSection
                    items={hiddenGems}
                />

                <div className="text-3xl font-bold text-gray-900 leading-tight text-center my-8"> 
                    Rekomendasi Destinasi 
                    <br /> Populer
                </div>
                <RecommendationSection
                    items={popular}
                />
            </main>

            <Footer />
        </>
    );
}
