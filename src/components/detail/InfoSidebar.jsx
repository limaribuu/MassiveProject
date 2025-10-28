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
    <aside className="bg-white rounded-xl border border-orange-200 shadow-md p-5 w-full max-w-[320px]">
      <div className="space-y-6">
        <Row icon="/img/clock.png" title="Jam Operasional">
          <p className="text-zinc-800 leading-relaxed">
            Selasa – Minggu
            <br />
            10.00 – 17.00
          </p>
        </Row>

        <Row icon="/img/location.png" title="Lokasi">
          <p className="text-orange-600 leading-relaxed">
            Sultan Mahmud Badaruddin II Museum,
            <br />
            Jl. Sultan Mahmud Badarudin, 19 Ilir
          </p>
        </Row>

        <button className="w-full bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold py-2 rounded-lg transition">
          Lihat Rute
        </button>
      </div>
    </aside>
  );
};

export default InfoSidebar;
