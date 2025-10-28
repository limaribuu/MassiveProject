import { useEffect, useRef, useState } from "react";

/**
 * Reusable select button (location / category)
 * - shows floating dropdown when open
 * - purely Tailwind, no external CSS
 *
 * iconSrc: left icon
 * label: placeholder
 * items: array of strings
 * onSelect: (value)=>void
 * hintBox: optional node rendered just below the button (e.g., "Lokasi Anda")
 */
const ChooseButton = ({
  iconSrc,
  label = "Pilih",
  items = [],
  value,
  onSelect,
  hintBox = null,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-[52px] inline-flex items-center gap-2 rounded-2xl border border-orange-300 bg-white px-4 text-orange-500 shadow-[0_8px_24px_rgba(249,115,22,0.12)]"
      >
        {iconSrc ? <img src={iconSrc} alt="" className="w-5 h-5" /> : null}
        <span className="text-[15px] font-semibold">
          {value ?? label}
        </span>
        <img
          src="/img/chevron-down.png"
          alt=""
          className={`w-4 h-4 ml-2 transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* hint box (e.g., 'Lokasi Anda') */}
      {hintBox && (
        <div className="absolute left-0 mt-3 hidden w-[300px] rounded-2xl border border-orange-100 bg-white px-4 py-3 text-orange-600 shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:block">
          {hintBox}
        </div>
      )}

      {/* dropdown list */}
      {open && (
        <div className="absolute left-0 top-[58px] z-20 w-[300px] rounded-2xl border border-orange-100 bg-white py-2 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
          {items.map((it, idx) => (
            <button
              key={idx}
              onClick={() => {
                onSelect?.(it);
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-[15px] font-semibold text-orange-600 hover:bg-orange-50"
            >
              {it}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChooseButton;
