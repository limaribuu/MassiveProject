import Navbar from "../components/common/Navbar";
import BackButton from "../components/detail/BackButton";
import TitleSection from "../components/detail/TitleSection";
import Gallery from "../components/detail/Gallery";
import InfoDescription from "../components/detail/InfoDescription";
import SectionDetail from "../components/detail/SectionDetail";
import RecommendationSection from "../components/home/recommendations/RecommendationSection.jsx";
import Footer from "../components/common/Footer.jsx";

const Detail = () => {
    const hiddenGems = [
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
    ];

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 pt-6">
                    <BackButton onClick={() => window.history.back()} />
                </div>

                <div className="max-w-6xl mx-auto px-4 mt-4">
                    <TitleSection
                        title="Museum Sultan Mahmud Badaruddin II"
                        onAdd={() => {}}
                    />
                </div>

                <div className="max-w-6xl mx-auto px-4 mt-6">
                    <Gallery />
                </div>

                <div className="max-w-6xl mx-auto px-4">
                    <InfoDescription />
                </div>

                <div className="max-w-6xl mx-auto px-4 space-y-14 mt-10 pb-16">
                    <SectionDetail title="Koleksi dan Artefak">
                        Museum Sultan Mahmud Badaruddin II menampilkan koleksi tekstil, senjata,
                        pakaian tradisional, kerajinan, dan koin Sumatera Selatan. Kebun-kebun
                        museum dipenuhi dengan artefak dari zaman Sriwijaya, misalnya patung
                        Ganesha dan Buddha.
                    </SectionDetail>

                    <SectionDetail title="Kunjungan">
                        Museum Sultan Mahmud Badaruddin II buka setiap hari Selasa hingga Minggu
                        dan tutup pada hari Senin. Tiket masuknya dikenakan harga Rp1.000 untuk
                        anak-anak dan pelajar, Rp2.000 untuk mahasiswa, Rp5.000 untuk umum, dan
                        Rp20.000 untuk turis mancanegara.
                    </SectionDetail>
                </div>

                <div className="text-center my-10 px-4">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                        Peta Lokasi Museum Sultan<br />Mahmud Badaruddin II
                    </h2>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/img/peta.png"
                            alt="Peta Lokasi"
                            className="w-full max-w-[1100px] h-auto rounded-xl shadow-md"
                        />
                    </div>
                </div>
            </div>

            <div className="text-3xl font-bold text-gray-900 leading-tight text-center my-8 pt-20">
                Rekomendasi Destinasi
            </div>

            <div className="flex justify-center px-4">
                <div className="w-full max-w-[1200px]">
                    <RecommendationSection items={hiddenGems} />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Detail;
