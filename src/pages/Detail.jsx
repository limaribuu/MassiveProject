import Navbar from "../components/common/Navbar";
import BackButton from "../components/detail/BackButton";
import TitleSection from "../components/detail/TitleSection";
import Gallery from "../components/detail/Gallery";
import InfoDescription from "../components/detail/InfoDescription";
import SectionDetail from "../components/detail/SectionDetail";
import Footer from "../components/common/Footer.jsx";
import RecommendationSection from "../components/home/recommendations/RecommendationSection.jsx";

const Detail = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-2 pt-4"> 
                    <BackButton onClick={() => window.history.back()} />
                </div>

                <div className="max-w-7xl mx-auto px-2 mt-3">
                    <TitleSection
                        title="Museum Sultan Mahmud Badaruddin II"
                        onAdd={() => {}}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-2">
                    <Gallery />
                </div>

                <div className="max-w-7xl mx-auto px-2 mt-8 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-6">
                        <div>
                            <InfoDescription />
                            <SectionDetail title="Koleksi Dan Artefak">
                                Museum Sultan Mahmud Badaruddin II menampilkan
                                koleksi tekstil, senjata, pakaian tradisional,
                                kerajinan, dan koin Sumatera Selatan. Kebun-kebun
                                museum dipenuhi dengan artefak dari zaman Sriwijaya,
                                misalnya patung Ganesha dan Buddha.
                            </SectionDetail>

                            <SectionDetail title="Kunjungan">
                                Museum Sultan Mahmud Badaruddin II buka setiap hari
                                Selasa hingga Minggu dan tutup pada hari Senin.
                                Tiket masuknya dikenakan harga Rp1.000 untuk anak-anak
                                dan pelajar, Rp2.000 untuk mahasiswa, Rp5.000 untuk
                                umum, dan Rp20.000 untuk turis mancanegara.
                            </SectionDetail>
                        </div>

                        
                    </div>
                </div>

                <div className="text-center my-8">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                        Peta Lokasi Museum Sultan
                        <br />Mahmud Badaruddin II
                    </h2>

                    <div className="flex justify-center mt-6">
                        <img
                            src="/img/peta.png"
                            alt="Peta Lokasi"
                            className="w-[1200px] h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>


            </div>
            <RecommendationSection />
            <Footer/>
        </>
    );
};

export default Detail;
