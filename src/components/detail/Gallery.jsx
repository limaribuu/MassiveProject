const Gallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
      <div className="lg:col-span-2">
        <div className="w-full rounded-2xl overflow-hidden shadow">
          <img
            src="/img/dalammuseum.png"
            alt="Galeri Utama"
            className="w-full h-[480px] lg:h-[520px] object-cover"
          />
        </div>
      </div>

      <div className="flex lg:flex-col gap-4 lg:gap-4">
        {["/img/tumpuk1.png", "/img/tumpuk2.png", "/img/tumpuk3.png"].map((src, i) => (
      <div
        key={i}
        className="w-1/3 lg:w-full rounded-xl overflow-hidden shadow flex-1"
      >
        <img
          src={src}
          alt={`Galeri ${i + 1}`}
          className="w-full h-[170px] lg:h-[173px] object-cover"
        />
      </div>
    ))}

      </div>
    </div>
  );
};

export default Gallery;
