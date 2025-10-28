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

                <RecommendationSection />
            </main>

            <Footer />
        </>
    );
}