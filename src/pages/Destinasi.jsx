import DestinationFilterBar from "../components/destinations/DestinationFilterBar.jsx";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";

const Destinasi = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white pb-20">
        <div>
          <img
            src="/img/hero-destinasi.png"
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
      <Footer />
    </>
  );
};

export default Destinasi;
