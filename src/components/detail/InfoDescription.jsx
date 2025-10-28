import InfoSidebar from "../detail/InfoSidebar";

const InfoDescription = () => {
    return (
        <div className="text-[15px] leading-7 text-zinc-700 text-justify space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-start">
                <div className="space-y-4">
                    <p>
                        Museum Sultan Mahmud Badaruddin II merupakan museum sejarah
                        yang menempati bangunan peninggalan kolonial Belanda di tepi
                        Sungai Musi. Museum ini menyimpan berbagai koleksi tentang
                        Kesultanan Palembang, budaya Melayu, hingga benda bersejarah
                        era kolonial. Di dalamnya terdapat koleksi senjata tradisional,
                        kerajinan tangan, prasasti, naskah kuno, hingga miniatur
                        rumah adat Palembang. Museum ini berfungsi sebagai pusat
                        informasi sejarah Palembang dan Sumatera Selatan serta tempat
                        edukasi masyarakat mengenai perkembangan budaya lokal. Selain itu,
                        arsitektur gedungnya sendiri menjadi daya tarik karena menggabungkan
                        gaya Eropa dan tradisi Palembang yang khas.
                    </p>
                </div>

                <div className="hidden lg:block">
                    <InfoSidebar />
                </div>
            </div>

            <div className="space-y-4">
                <p>
                    Pengunjung juga dapat melihat ruang pamer tematik yang ditata
                    berdasarkan periode sejarah, sehingga lebih mudah memahami konteksnya.
                    Museum Sultan Mahmud Badaruddin II menjadi salah satu destinasi
                    penting bagi wisatawan yang ingin mengetahui identitas dan perjalanan
                    sejarah kota Palembang secara mendalam.
                </p>
            </div>
        </div>
    );
};

export default InfoDescription;
