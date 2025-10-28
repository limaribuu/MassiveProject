import InfoSidebar from "./InfoSidebar";

const InfoDescription = () => {
  return (
    <div className="text-[15px] leading-7 text-zinc-700 mt-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-6 text-justify">

          <p>
            Museum Sultan Mahmud Badaruddin II merupakan museum sejarah yang
            menempati bangunan peninggalan kolonial Belanda di tepi Sungai Musi.
            Museum ini menyimpan berbagai koleksi tentang Kesultanan Palembang,
            budaya Melayu, hingga benda bersejarah era kolonial. Di dalamnya
            terdapat koleksi senjata tradisional, kerajinan tangan, prasasti,
            naskah kuno, hingga miniatur rumah adat Palembang. Museum ini
            berfungsi sebagai pusat informasi sejarah Palembang dan Sumatera
            Selatan serta tempat edukasi masyarakat mengenai perkembangan
            budaya lokal. Selain itu, arsitektur gedungnya sendiri menjadi
            daya tarik karena menggabungkan gaya Eropa dan tradisi Palembang
            yang khas.
          </p>

          <p>
            Pengunjung juga dapat melihat ruang pamer tematik yang ditata
            berdasarkan periode sejarah, sehingga lebih mudah memahami konteksnya.
            Museum Sultan Mahmud Badaruddin II menjadi salah satu destinasi
            penting bagi wisatawan yang ingin mengetahui identitas dan perjalanan
            sejarah kota Palembang secara mendalam.
          </p>
        </div>

        <div className="lg:w-1/3 lg:flex lg:justify-end">
          <InfoSidebar />
        </div>
      </div>
    </div>
  );
};

export default InfoDescription;
