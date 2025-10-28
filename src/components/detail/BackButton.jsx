const BackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Kembali"
    >
      <img src="/icon/back.png" alt="Kembali" className="w-15 h-15" />
    </button>
  );
};

export default BackButton; 
