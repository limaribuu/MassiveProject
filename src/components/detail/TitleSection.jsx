const TitleSection = ({ title, onAdd }) => {
    return (
        <div className="flex items-start justify-between gap-4 mt-4">
            <h1 className="text-[28px] leading-8 font-semibold text-zinc-900">
                {title}
            </h1>

            <button
                onClick={onAdd}
                className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-[14px] shadow-md transition mt-1"
            >
                <span>Tambahkan ke Itinerary</span>
                <img src="/icon/plus.png" alt="Tambah" className="w-4 h-4" />
            </button>
        </div>
    );
};

export default TitleSection;
