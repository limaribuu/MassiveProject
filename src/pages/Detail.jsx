import BackButton from "../components/detail/BackButton";
import TitleSection from "../components/detail/TitleSection";
import Gallery from "../components/detail/Gallery";
import InfoDescription from "../components/detail/InfoDescription";
import InfoSidebar from "../components/detail/InfoSidebar";
import SectionDetail from "../components/detail/SectionDetail";
import Navbar from "../components/common/Navbar";

const Detail = () => {
  return (
    <Navbar/>,
    <div className="min-h-screen bg-white">
      {/* Header Back */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <BackButton onClick={() => window.history.back()} />
      </div>

      {/* Title + Add */}
      <div className="max-w-5xl mx-auto px-4 mt-3">
        <TitleSection
          title="Museum Sultan Mahmud Badaruddin II"
          onAdd={() => {}}
        />
      </div>

      {/* Gallery */}
      <div className="max-w-5xl mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Gallery />
          </div>

          {/* Sidebar on the right (next to gallery) */}
          <div className="hidden lg:block">
            <div className="mt-[6px]">
              <InfoSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* Content + Sidebar (for smaller screens sidebar goes below) */}
      <div className="max-w-5xl mx-auto px-4 mt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left content */}
          <div className="lg:col-span-2">
            <InfoDescription />

            <SectionDetail title="Koleksi Dan Artefak">
              Museum Sultan Mahmud Badaruddin II menampilkan koleksi tekstil,
              senjata, pakaian tradisional, kerajinan, dan koin Sumatera Selatan.
              Kebun-kebun museum dipenuhi dengan artefak dari zaman Sriwijaya,
              misalnya patung Ganesha dan Buddha.
            </SectionDetail>

            <SectionDetail title="Kunjungan">
              Museum Sultan Mahmud Badaruddin II buka setiap hari Selasa hingga
              Minggu dan tutup pada hari Senin. Tiket masuknya dikenakan harga
              Rp1.000 untuk anak-anak dan pelajar, Rp2.000 untuk mahasiswa, Rp5.000
              untuk umum, dan Rp20.000 untuk turis mancanegara.
            </SectionDetail>
          </div>

          {/* Right sidebar for small/medium screens */}
          <div className="lg:hidden">
            <InfoSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
