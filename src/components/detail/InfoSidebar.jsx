const Row = ({ icon, title, children }) => (
  <div className="flex items-start gap-3">
    <img src={icon} alt={title} className="w-5 h-5 mt-1" />
    <div className="min-w-0">
      <div className="text-[15px] font-semibold text-orange-500">{title}</div>
      <div className="text-[15px] leading-6 text-zinc-700">{children}</div>
    </div>
  </div>
);

const InfoSidebar = () => {
  return (
    <aside className="bg-white rounded-2xl border border-orange-200 shadow-sm p-4">
      <div className="space-y-6">
        <Row icon="/img/clock.png" title="Jam Operasional">
          <div className="text-zinc-800">
            Selasa – Minggu
            <br />
            10.00 – 17.00
          </div>
        </Row>

        <Row icon="/img/location.png" title="Lokasi">
          <div className="text-orange-600">
            Sultan Mahmud Badaruddin II Museum, Jl.
            <br />
            Sultan Mahmud Badarudin, 19 Ilir
          </div>
        </Row>

        <button className="w-full bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold py-2 rounded-xl transition">
          Lihat Rute
        </button>
      </div>
    </aside>
  );
};

export default InfoSidebar;
