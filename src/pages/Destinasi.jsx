import React, { useMemo, useState } from "react";
import DestinationFilterBar from "../components/destinations/DestinationFilterBar.jsx";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import RecommendationSection from "../components/home/recommendations/RecommendationSection.jsx";
import Pagination from "../components/common/Pagination.jsx";

const Destinasi = () => {
    const [page, setPage] = useState(1);

    const hiddenGems = useMemo(() => [
        {
            id: 1,
            title: "Museum Balaputra Dewa",
            desc: "Museum arkeologi dan budaya Sumatera Selatan.",
            img: "/reco/balaputra.png",
            rating: 4.0,
            to: "/detail/museum-balaputra",
        },
        {
            id: 2,
            title: "Bukit Siguntang",
            desc: "Situs bersejarah Kerajaan Sriwijaya.",
            img: "/reco/bukit-siguntang.png",
            rating: 4.0,
            to: "/detail/bukit-siguntang",
        },
        {
            id: 3,
            title: "Benteng Kuto Besak",
            desc: "Benteng peninggalan Kesultanan Palembang.",
            img: "/reco/bkb.png",
            rating: 4.0,
            to: "/detail/bkb",
        },
        {
            id: 4,
            title: "Benteng Kuto Besak",
            desc: "Benteng peninggalan Kesultanan Palembang yang terletak di tepi Sungai Musi.",
            img: "/reco/bkb.png",
            rating: 4.0,
            to: "/detail/bkb",
        },
        {
            id: 5,
            title: "Jembatan Ampera",
            desc: "Ikon kota Palembang di atas Sungai Musi—wajib foto!",
            img: "/reco/ampera.png",
            rating: 4.0,
            to: "/detail/ampera",
        },
        {
            id: 6,
            title: "Pulau Kemaro",
            desc: "Pulau di Sungai Musi dengan pagoda, vihara, dan legenda Tan Bun An & Siti Fatimah.",
            img: "/reco/pulau-kemaro.png",
            rating: 4.0,
            to: "/detail/pulau-kemaro",
        },
        {
            id: 7,
            title: "Taman Purbakala",
            desc: "Destinasi bersejarah di Palembang yang menyimpan peninggalan zaman Sriwijaya.",
            img: "/reco/taman-purbakala.png",
            rating: 4.0,
            to: "/detail/taman-purbakala",
        },
        {
            id: 8,
            title: "Lorong Basah Night Culinary",
            desc: "Destinasi kuliner malam populer di Palembang, penuh jajanan khas Palembang dan makanan modern.",
            img: "/reco/lorong-basah.png",
            rating: 4.0,
            to: "/detail/lorong-basah",
        },
        {
            id: 9,
            title: "Jakabaring Sport City",
            desc: "Pusat olahraga terbesar di Palembang dengan stadion, arena renang, lintasan atletik, dan fasilitas modern.",
            img: "/reco/jakabaring.png",
            rating: 4.0,
            to: "/detail/jakabaring",
        },
        {
            id: 10,
            title: "Bayt Al-Quran Al-Akbar",
            desc: "Destinasi religi di Palembang yang terkenal dengan Al-Quran raksasa ukir kayu. Pengunjung bisa melihat langsung keindahan ayat suci berukir.",
            img: "/reco/bayt-alquran.png",
            rating: 4.0,
            to: "/detail/bayt-alquran",
        },
        {
            id: 11,
            title: "Monpera",
            desc: "Monumen bersejarah di pusat kota Palembang yang dibangun untuk mengenang perjuangan rakyat melawan penjajah.",
            img: "/reco/monpera.png",
            rating: 4.0,
            to: "/detail/monpera",
        },
        {
            id: 12,
            title: "Kampung Kapitan",
            desc: "Kawasan bersejarah di tepi Sungai Musi yang menampilkan rumah kayu bergaya kolonial dan Tionghoa.",
            img: "/reco/kampung-kapitan.png", 
            rating: 4.0,
            to: "/detail/kampung-kapitan",
        },


    ], []);

    const perPage = 6;
    const totalPages = Math.ceil(hiddenGems.length / perPage);

    const pagedItems = useMemo(() => {
        const start = (page - 1) * perPage;
        return hiddenGems.slice(start, start + perPage);
    }, [page, hiddenGems]);

    const handlePageChange = (p) => {
        const next = Math.min(Math.max(1, p), totalPages);
        setPage(next);
    };

    return (
        <>
            <Navbar />

            <div className="bg-white pb-20">
                <div>
                    <img
                        src="/img/hero-destinasi.png"
                        alt="Destinasi Palembang"
                        className="w-full h-auto rounded-2xl object-cover p-20"
                    />
                </div>

                <div className="text-center mt-5 mb-9">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Rasakan pengalaman baru <br /> destinasi favorit Palembang
                    </h1>
                </div>

                <div className="relative -mt-4">
                    <DestinationFilterBar />
                </div>
            </div>

            <RecommendationSection items={pagedItems} />

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                className="m-20"
            />

            <Footer />
        </>
    );
};

export default Destinasi;
