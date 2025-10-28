import React from "react";
import Navbar from "../components/common/Navbar.jsx";
import Hero from "../components/home/hero/Hero.jsx";
import RecommendationSection from "../components/home/recommendations/RecommendationSection.jsx";
import Footer from "../components/common/Footer.jsx";

import "../styles/home/recommendations.css";

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <div className="text-3xl font-bold text-gray-900 leading-tight text-center my-8">
                    Rekomendasi Destinasi 
                    <br />Hidden Gem
                </div>
                <RecommendationSection />

                <div className="text-3xl font-bold text-gray-900 leading-tight text-center my-8">
                    Rekomendasi Destinasi 
                    <br /> Populer
                </div>
                <RecommendationSection />
            </main>

            <Footer />
        </>
    );
}