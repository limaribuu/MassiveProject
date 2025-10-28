const BackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Kembali"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-500 shadow hover:bg-orange-600 active:scale-[0.98] transition"
    >
      <img src="/img/back.png" alt="Kembali" className="w-4 h-4" />
    </button>
  );
};

export default BackButton;
