import React from "react";

function Card({ slide, variant = "active", onClick }) {
  // varian posisi: active | prev | next (sesuai video: active paling besar)
  const variants = {
    active:
      "z-20 scale-100 rotate-0 translate-x-0 opacity-100 shadow-xl",
    prev:
      "z-10 scale-90 -rotate-2 -translate-x-6 opacity-80",
    next:
      "z-10 scale-90 rotate-2 translate-x-6 opacity-80",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur",
        "transition-all duration-500 ease-out",
        variants[variant],
      ].join(" ")}
      style={{ width: 360, height: 240 }}
      aria-label={slide.title}
    >
      <img
        src={slide.src}
        alt={slide.title}
        className="h-full w-full object-cover select-none pointer-events-none"
        draggable="false"
      />
      {/* subtle gradient bottom (biar look sama prototype) */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/35 to-transparent" />
    </button>
  );
}

export default function HeroStack({
  slides,
  activeIndex,
  prevIndex,
  nextIndex,
  onSelect,
}) {
  const active = slides[activeIndex];
  const prev = slides[prevIndex];
  const next = slides[nextIndex];

  return (
    <div className="w-full md:w-[48%] flex justify-center md:justify-end">
      <div className="relative"
           style={{ width: 420, height: 280 }}>
        {/* order: prev, active, next → z-index via variants */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Card slide={prev} variant="prev" onClick={() => onSelect(prevIndex)} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Card slide={active} variant="active" onClick={() => onSelect(activeIndex)} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Card slide={next} variant="next" onClick={() => onSelect(nextIndex)} />
        </div>
      </div>
    </div>
  );
}
