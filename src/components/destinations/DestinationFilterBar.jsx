import { useState } from "react";
import ChooseButton from "./ChooseButton";

const DestinationFilterBar = ({ onSearch }) => {
  const [loc, setLoc] = useState(null);
  const [cat, setCat] = useState(null);

  return (
    <div className="w-full">
      {/* floating container */}
      <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white/90 p-4 shadow-[0_30px_60px_rgba(0,0,0,0.08)] ring-1 ring-white/70 backdrop-blur">
        <div className="flex flex-wrap items-center gap-4">
          {/* lokasi */}
          <div className="relative">
            <ChooseButton
              iconSrc="/img/pin.png"
              label="Pilih Lokasi"
              value={loc}
              onSelect={setLoc}
              items={[
                "Jakarta",
                "Bandung",
                "Palembang",
                "Surabaya",
                "Yogyakarta",
              ]}
              hintBox={
                <div className="flex items-center gap-2">
                  <img src="/img/target.png" alt="" className="w-5 h-5" />
                  <span className="text-[15px] font-semibold">
                    Lokasi Anda
                  </span>
                </div>
              }
            />
          </div>

          {/* kategori */}
          <ChooseButton
            iconSrc="/img/category.png"
            label="Kategori"
            value={cat}
            onSelect={setCat}
            items={["Sejarah & Budaya", "Religi", "Ikonik", "Kuliner", "Alam"]}
          />

          {/* tombol cari */}
          <button
            onClick={() => onSearch?.({ loc, cat })}
            className="ml-auto inline-flex h-[52px] items-center justify-center rounded-2xl bg-orange-400 px-8 text-base font-semibold text-white shadow-[0_10px_24px_rgba(249,115,22,0.35)] hover:bg-orange-500"
          >
            Cari
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationFilterBar;
