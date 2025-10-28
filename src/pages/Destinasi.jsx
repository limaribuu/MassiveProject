import DestinationFilterBar from "../components/destinations/DestinationFilterBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Destinasi = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
      {/* hero image */}
      <div className="mx-auto mt-6 w-full max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl">
          <img
            src="/img/hero-destinasi.jpg"
            alt="Hero Destinasi"
            className="h-[360px] w-full object-cover md:h-[420px]"
          />
        </div>
      </div>

      {/* heading */}
      <div className="mx-auto max-w-3xl px-6 pt-8 text-center">
        <h1 className="text-3xl font-extrabold leading-tight text-black md:text-[32px]">
          Rasakan pengalaman baru
          <br />
          destinasi favorit Palembang
        </h1>
      </div>

      {/* filter bar (floating under hero) */}
      <div className="relative -mt-2 px-6">
        <div className="mx-auto max-w-6xl">
          <DestinationFilterBar
            onSearch={(payload) => {
              // taro logika fetch/filter di sini
              console.log("Search:", payload);
            }}
          />
        </div>
      </div>

      {/* (opsional) grid hasil destinasi — placeholder */}
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm"
            >
              <div className="h-40 w-full bg-zinc-100" />
              <div className="space-y-1 p-4">
                <div className="text-base font-semibold text-zinc-900">
                  Destinasi #{i + 1}
                </div>
                <div className="text-sm text-zinc-500">Palembang, Sumsel</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Destinasi;
