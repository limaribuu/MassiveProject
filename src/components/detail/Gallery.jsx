const Gallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
      {/* Gambar besar kiri */}
      <div className="lg:col-span-2">
        <div className="w-full rounded-2xl overflow-hidden shadow">
          <img
            src="/img/main.jpg"
            alt="Galeri Utama"
            className="w-full h-[360px] lg:h-[420px] object-cover"
          />
        </div>
      </div>

      {/* 3 gambar kanan bertumpuk */}
      <div className="flex lg:block gap-4 lg:gap-3">
        {["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"].map((src, i) => (
          <div
            key={i}
            className="w-1/3 lg:w-full rounded-xl overflow-hidden shadow"
          >
            <img
              src={src}
              alt={`Galeri ${i + 1}`}
              className="w-full h-[110px] lg:h-[116px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
