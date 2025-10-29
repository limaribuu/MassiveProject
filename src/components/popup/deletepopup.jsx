export default function DeletePopup() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Notification Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[30%] text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Anda yakin ingin menghapus destinasi ini ?
        </h2>

        {/* Tombol Aksi */}
        <div className="flex justify-center gap-6">
          {/* Tombol Cancel */}
          <button className="bg-orange-500 text-white font-semibold py-2 px-10 rounded-xl shadow-md hover:bg-orange-600 transition">
            Cancel
          </button>

          {/* Tombol Hapus */}
          <button className="bg-orange-500 text-white font-semibold py-2 px-10 rounded-xl shadow-md hover:bg-orange-600 transition">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
