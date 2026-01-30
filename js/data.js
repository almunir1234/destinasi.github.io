const destinations = [
    // --- BALI (1-10) ---
    {
        id: 1,
        name: "Pantai Kuta",
        city: "bali",
        types: ["pantai", "alam", "ramai"],
        activities: ["foto", "kuliner", "relaksasi"],
        price: 0,
        image: "images/pantai kuta bali.webp",
        rating: 4.5,
        desc: "Pantai paling ikonik di Bali dengan sunset memukau dan ombak yang cocok untuk surfing pemula."
    },
    {
        id: 2,
        name: "Gunung Batur Sunrise",
        city: "bali",
        types: ["alam", "petualangan"],
        activities: ["hiking", "foto"],
        price: 350000,
        image: "images/gunung sunrise bature.webp",
        rating: 4.8,
        desc: "Pengalaman trekking dini hari untuk menyaksikan matahari terbit di atas awan dari puncak gunung berapi."
    },
    {
        id: 3,
        name: "Ubud Monkey Forest",
        city: "bali",
        types: ["alam", "budaya_sejarah", "keluarga"],
        activities: ["foto", "jalan"],
        price: 80000,
        image: "images/Ubud Monkey Forest.jpg",
        rating: 4.6,
        desc: "Hutan lindung sakral yang dihuni ratusan kera ekor panjang dan pura kuno yang magis."
    },
    {
        id: 4,
        name: "Pura Uluwatu",
        city: "bali",
        types: ["budaya_sejarah", "pantai"],
        activities: ["foto", "budaya"],
        price: 50000,
        image: "images/Pura Uluwatu.webp",
        rating: 4.9,
        desc: "Pura luhur di atas tebing karang curam dengan pertunjukan Tari Kecak berlatar sunset."
    },
    {
        id: 5,
        name: "Garuda Wisnu Kencana (GWK)",
        city: "bali",
        types: ["budaya_sejarah", "edukasi", "keluarga"],
        activities: ["foto", "museum", "kuliner"],
        price: 125000,
        image: "images/Garuda Wisnu Kencana (GWK).webp",
        rating: 4.7,
        desc: "Taman budaya megah dengan patung Dewa Wisnu raksasa yang menjadi ikon baru Indonesia."
    },
    {
        id: 6,
        name: "Pantai Pandawa",
        city: "bali",
        types: ["pantai", "keluarga", "alam"],
        activities: ["wahana", "foto", "relaksasi"],
        price: 15000,
        image: "images/Pantai Pandawa.jpg",
        rating: 4.6,
        desc: "Pantai pasir putih tersembunyi di balik tebing kapur yang dihiasi patung Panca Pandawa."
    },
    {
        id: 7,
        name: "Tegalalang Rice Terrace",
        city: "bali",
        types: ["alam", "foto"],
        activities: ["foto", "hiking", "kuliner"],
        price: 25000,
        image: "images/Tegalalang Rice Terrace.jpeg",
        rating: 4.7,
        desc: "Sawah terasering hijau yang sangat instagramable, ikon keasrian alam Ubud."
    },
    {
        id: 8,
        name: "Waterbom Bali",
        city: "bali",
        types: ["keluarga", "petualangan"],
        activities: ["wahana", "relaksasi"],
        price: 500000,
        image: "images/Waterbom Bali.webp",
        rating: 4.9,
        desc: "Waterpark terbaik di Asia dengan wahana seluncuran ekstrem dan area santai tropis."
    },
    {
        id: 9,
        name: "Desa Penglipuran",
        city: "bali",
        types: ["budaya_sejarah", "edukasi"],
        activities: ["foto", "jalan", "budaya"],
        price: 25000,
        image: "images/Desa Penglipuran.jpg",
        rating: 4.8,
        desc: "Salah satu desa terbersih di dunia yang masih memegang teguh adat istiadat leluhur Bali."
    },
    {
        id: 10,
        name: "Seminyak Square",
        city: "bali",
        types: ["kuliner", "belanja"],
        activities: ["kuliner", "belanja", "foto"],
        price: 0,
        image: "images/Seminyak Square.webp",
        rating: 4.5,
        desc: "Pusat gaya hidup mewah, restoran fine dining, kafe hits, dan butik fashion."
    },

    // --- JOGJA (11-20) ---
    {
        id: 11,
        name: "Candi Borobudur",
        city: "jogja",
        types: ["budaya_sejarah", "edukasi"],
        activities: ["foto", "museum", "sejarah"],
        price: 50000,
        image: "images/Candi Borobudur.jpeg",
        rating: 5.0,
        desc: "Candi Buddha terbesar di dunia, warisan UNESCO yang menawarkan kedamaian dan sejarah."
    },
    {
        id: 12,
        name: "Malioboro Street",
        city: "jogja",
        types: ["kuliner", "keluarga"],
        activities: ["kuliner", "belanja", "foto"],
        price: 0,
        image: "images/Malioboro Street.jpg",
        rating: 4.7,
        desc: "Jantung kota Jogja yang tak pernah tidur, pusat oleh-oleh, angkringan, dan seniman jalanan."
    },
    {
        id: 13,
        name: "Candi Prambanan",
        city: "jogja",
        types: ["budaya_sejarah", "keluarga"],
        activities: ["foto", "sejarah"],
        price: 50000,
        image: "images/Candi Prambanan.jpeg",
        rating: 4.9,
        desc: "Kompleks candi Hindu terindah dengan legenda Roro Jonggrang yang melegenda."
    },
    {
        id: 14,
        name: "Taman Sari",
        city: "jogja",
        types: ["budaya_sejarah", "foto"],
        activities: ["foto", "sejarah", "jalan"],
        price: 15000,
        image: "images/Taman Sari.jpeg",
        rating: 4.6,
        desc: "Istana air bekas pemandian putri raja dengan arsitektur lorong bawah tanah yang unik."
    },
    {
        id: 15,
        name: "Pantai Parangtritis",
        city: "jogja",
        types: ["pantai", "alam"],
        activities: ["wahana", "foto", "relaksasi"],
        price: 10000,
        image: "images/Pantai Parangtritis.jpg",
        rating: 4.4,
        desc: "Pantai legendaris di selatan Jogja, terkenal dengan ombak besar, gumuk pasir, dan andong."
    },
    {
        id: 16,
        name: "HeHa Sky View",
        city: "jogja",
        types: ["kuliner", "foto", "modern"],
        activities: ["foto", "kuliner"],
        price: 30000,
        image: "images/HeHa Sky View.jpeg",
        rating: 4.7,
        desc: "Restoran dan spot foto di ketinggian dengan pemandangan lampu kota Jogja yang romantis."
    },
    {
        id: 17,
        name: "Goa Pindul",
        city: "jogja",
        types: ["alam", "petualangan"],
        activities: ["wahana", "snorkeling", "foto"],
        price: 40000,
        image: "images/Goa Pindul.jpg",
        rating: 4.6,
        desc: "Wisata susur gua menggunakan ban pelampung (cave tubing) menyusuri sungai bawah tanah."
    },
    {
        id: 18,
        name: "Merapi Lava Tour",
        city: "jogja",
        types: ["petualangan", "alam"],
        activities: ["wahana", "foto", "hiking"],
        price: 350000,
        image: "images/Merapi Lava Tour.webp",
        rating: 4.8,
        desc: "Petualangan offroad menggunakan Jeep menyusuri sisa erupsi Gunung Merapi yang memacu adrenalin."
    },
    {
        id: 19,
        name: "Tebing Breksi",
        city: "jogja",
        types: ["alam", "foto"],
        activities: ["foto", "hiking"],
        price: 10000,
        image: "images/Tebing Breksi.jpeg",
        rating: 4.5,
        desc: "Bekas tambang kapur yang disulap menjadi tebing artistik dengan ukiran wayang raksasa."
    },
    {
        id: 20,
        name: "Keraton Yogyakarta",
        city: "jogja",
        types: ["budaya_sejarah", "edukasi"],
        activities: ["museum", "sejarah", "budaya"],
        price: 15000,
        image: "images/Keraton Yogyakarta.jpeg",
        rating: 4.7,
        desc: "Istana resmi Kesultanan Ngayogyakarta Hadiningrat, pusat budaya Jawa yang masih hidup."
    },

    // --- BANDUNG (21-30) ---
    {
        id: 21,
        name: "Kawah Putih Ciwidey",
        city: "bandung",
        types: ["alam", "foto"],
        activities: ["foto", "hiking"],
        price: 25000,
        image: "images/Kawah Putih Ciwidey.jpeg",
        rating: 4.6,
        desc: "Danau kawah vulkanik berwarna putih kehijauan yang magis dan sering berkabut."
    },
    {
        id: 22,
        name: "Floating Market Lembang",
        city: "bandung",
        types: ["kuliner", "keluarga"],
        activities: ["kuliner", "wahana", "foto"],
        price: 30000,
        image: "images/Floating Market Lembang.jpeg",
        rating: 4.7,
        desc: "Pasar terapung unik dengan aneka kuliner Sunda, wahana air, dan taman kelinci."
    },
    {
        id: 23,
        name: "Trans Studio Bandung",
        city: "bandung",
        types: ["keluarga", "petualangan"],
        activities: ["wahana", "foto"],
        price: 200000,
        image: "images/Trans Studio Bandung.jpeg",
        rating: 4.8,
        desc: "Taman bermain indoor terbesar dengan wahana kelas dunia yang mendebarkan."
    },
    {
        id: 24,
        name: "Gedung Sate",
        city: "bandung",
        types: ["budaya_sejarah", "edukasi"],
        activities: ["foto", "sejarah"],
        price: 5000,
        image: "images/Gedung Sate.jpeg",
        rating: 4.5,
        desc: "Ikon kota Bandung dengan arsitektur kolonial Belanda yang megah, pusat pemerintahan Jawa Barat."
    },
    {
        id: 25,
        name: "Farmhouse Lembang",
        city: "bandung",
        types: ["keluarga", "foto"],
        activities: ["foto", "kuliner", "wahana"],
        price: 30000,
        image: "images/Farmhouse Lembang.jpg",
        rating: 4.6,
        desc: "Wisata ala Eropa dengan rumah Hobbit, peternakan domba, dan penyewaan kostum Belanda."
    },
    {
        id: 26,
        name: "Braga Street",
        city: "bandung",
        types: ["kuliner", "budaya_sejarah"],
        activities: ["jalan", "kuliner", "foto"],
        price: 0,
        image: "images/Braga Street.jpeg",
        rating: 4.7,
        desc: "Jalan bersejarah dengan bangunan art deco, kafe klasik, dan suasana malam yang syahdu."
    },
    {
        id: 27,
        name: "Tangkuban Perahu",
        city: "bandung",
        types: ["alam", "petualangan"],
        activities: ["hiking", "foto"],
        price: 35000,
        image: "images/Tangkuban Perahu.jpeg",
        rating: 4.5,
        desc: "Gunung berapi legendaris dengan kawah besar yang bisa dicapai langsung dengan kendaraan."
    },
    {
        id: 28,
        name: "Saung Angklung Udjo",
        city: "bandung",
        types: ["budaya_sejarah", "edukasi"],
        activities: ["budaya", "edukasi"],
        price: 75000,
        image: "images/Saung Angklung Udjo.jpeg",
        rating: 4.9,
        desc: "Pusat pelestarian budaya Sunda, tempat menonton dan belajar bermain alat musik angklung."
    },
    {
        id: 29,
        name: "Dusun Bambu",
        city: "bandung",
        types: ["keluarga", "kuliner", "alam"],
        activities: ["kuliner", "foto", "relaksasi"],
        price: 25000,
        image: "images/Dusun Bambu.jpeg",
        rating: 4.6,
        desc: "Ekowisata dengan suasana pedesaan yang asri, danau buatan, dan restoran sarang burung."
    },
    {
        id: 30,
        name: "Museum Geologi",
        city: "bandung",
        types: ["edukasi", "budaya_sejarah"],
        activities: ["museum", "edukasi"],
        price: 3000,
        image: "images/Museum Geologi.jpg",
        rating: 4.7,
        desc: "Museum edukatif yang menyimpan fosil dinosaurus, bebatuan, dan sejarah bumi Indonesia."
    },

    // --- JAKARTA (31-40) ---
    {
        id: 31,
        name: "Monumen Nasional (Monas)",
        city: "jakarta",
        types: ["budaya_sejarah", "edukasi"],
        activities: ["foto", "museum", "sejarah"],
        price: 15000,
        image: "images/Monumen Nasional (Monas).jpeg",
        rating: 4.6,
        desc: "Ikon kebanggaan Indonesia dengan emas di puncaknya, menawarkan pemandangan kota dari ketinggian."
    },
    {
        id: 32,
        name: "Dufan (Dunia Fantasi)",
        city: "jakarta",
        types: ["keluarga", "petualangan"],
        activities: ["wahana", "foto"],
        price: 250000,
        image: "images/Dufan (Dunia Fantasi).jpeg",
        rating: 4.8,
        desc: "Theme park terbesar di Jakarta dengan puluhan wahana seru dari yang santai hingga memacu adrenalin."
    },
    {
        id: 33,
        name: "Kota Tua Jakarta",
        city: "jakarta",
        types: ["budaya_sejarah", "foto"],
        activities: ["foto", "sejarah", "sepeda"],
        price: 0,
        image: "images/Kota Tua Jakarta.jpeg",
        rating: 4.5,
        desc: "Kawasan bangunan kolonial bersejarah, museum Fatahillah, dan pusat seniman jalanan."
    },
    {
        id: 34,
        name: "Taman Mini Indonesia Indah",
        city: "jakarta",
        types: ["edukasi", "budaya_sejarah", "keluarga"],
        activities: ["museum", "budaya", "wahana"],
        price: 25000,
        image: "images/Taman Mini Indonesia Indah.jpeg",
        rating: 4.7,
        desc: "Miniatur Indonesia yang menampilkan rumah adat, budaya, dan museum dari seluruh provinsi."
    },
    {
        id: 35,
        name: "Ancol Taman Impian",
        city: "jakarta",
        types: ["pantai", "keluarga"],
        activities: ["wahana", "kuliner", "foto"],
        price: 25000,
        image: "images/Ancol Taman Impian.jpeg",
        rating: 4.5,
        desc: "Kawasan wisata terpadu di tepi laut Jakarta dengan pantai, SeaWorld, dan banyak hiburan lain."
    },
    {
        id: 36,
        name: "Kebun Binatang Ragunan",
        city: "jakarta",
        types: ["alam", "edukasi", "keluarga"],
        activities: ["jalan", "edukasi", "foto"],
        price: 4000,
        image: "images/Kebun Binatang Ragunan.jpeg",
        rating: 4.6,
        desc: "Kebun binatang luas dan murah meriah, rumah bagi ribuan satwa di tengah hutan kota."
    },
    {
        id: 37,
        name: "Grand Indonesia Mall",
        city: "jakarta",
        types: ["belanja", "kuliner", "modern"],
        activities: ["belanja", "kuliner", "bioskop"],
        price: 0,
        image: "images/Grand Indonesia Mall.jpeg",
        rating: 4.8,
        desc: "Pusat perbelanjaan megah di pusat kota, surga bagi pecinta belanja dan kuliner internasional."
    },
    {
        id: 38,
        name: "Pantai Indah Kapuk (PIK)",
        city: "jakarta",
        types: ["kuliner", "pantai", "modern"],
        activities: ["kuliner", "foto", "sepeda"],
        price: 0,
        image: "images/Pantai Indah Kapuk (PIK).jpeg",
        rating: 4.7,
        desc: "Kawasan hits baru dengan nuansa Chinatown, pantai pasir putih buatan, dan wisata mangrove."
    },
    {
        id: 39,
        name: "Museum Nasional (Gajah)",
        city: "jakarta",
        types: ["budaya_sejarah", "edukasi"],
        activities: ["museum", "edukasi"],
        price: 5000,
        image: "images/Museum Nasional (Gajah).jpeg",
        rating: 4.7,
        desc: "Museum terlengkap yang menyimpan ratusan ribu benda bersejarah dan arkeologi Nusantara."
    },
    {
        id: 40,
        name: "Gelora Bung Karno (GBK)",
        city: "jakarta",
        types: ["alam", "modern"],
        activities: ["jalan", "foto", "sepeda"],
        price: 0,
        image: "images/Gelora Bung Karno (GBK).jpeg",
        rating: 4.8,
        desc: "Kompleks olahraga terbesar yang kini jadi ruang terbuka hijau favorit warga Jakarta untuk berolahraga."
    },

    // --- LOMBOK (41-50) ---
    {
        id: 41,
        name: "Gunung Rinjani",
        city: "lombok",
        types: ["alam", "petualangan"],
        activities: ["hiking", "foto"],
        price: 150000,
        image: "images/Gunung Rinjani.jpeg",
        rating: 4.9,
        desc: "Gunung berapi tertinggi kedua di Indonesia dengan danau Segara Anak yang memukau para pendaki."
    },
    {
        id: 42,
        name: "Gili Trawangan",
        city: "lombok",
        types: ["pantai", "petualangan"],
        activities: ["snorkeling", "sepeda", "kuliner"],
        price: 0,
        image: "images/Gili Trawangan.jpeg",
        rating: 4.8,
        desc: "Pulau kecil bebas kendaraan bermotor, surga snorkeling, diving, dan kehidupan malam tepi pantai."
    },
    {
        id: 43,
        name: "Desa Sade",
        city: "lombok",
        types: ["budaya_sejarah", "edukasi"],
        activities: ["budaya", "foto", "belanja"],
        price: 10000,
        image: "images/Desa Sade.jpeg",
        rating: 4.6,
        desc: "Desa adat suku Sasak yang unik dengan rumah beratap jerami dan lantai dari kotoran kerbau."
    },
    {
        id: 44,
        name: "Pantai Pink (Tangsi)",
        city: "lombok",
        types: ["pantai", "alam", "foto"],
        activities: ["foto", "snorkeling", "relaksasi"],
        price: 15000,
        image: "images/Pantai Pink (Tangsi).jpeg",
        rating: 4.7,
        desc: "Salah satu dari sedikit pantai di dunia yang pasirnya berwarna merah muda alami."
    },
    {
        id: 45,
        name: "Bukit Merese",
        city: "lombok",
        types: ["alam", "foto"],
        activities: ["foto", "hiking", "relaksasi"],
        price: 5000,
        image: "images/Bukit Merese.jpeg",
        rating: 4.8,
        desc: "Bukit hijau dengan pemandangan laut lepas yang spektakuler, spot sunset terbaik di Mandalika."
    },
    {
        id: 46,
        name: "Sirkuit Mandalika",
        city: "lombok",
        types: ["modern", "foto"],
        activities: ["foto", "jalan"],
        price: 0,
        image: "images/Sirkuit Mandalika.jpeg",
        rating: 4.9,
        desc: "Sirkuit balap kelas dunia kebanggaan Indonesia yang terletak di pinggir pantai yang indah."
    },
    {
        id: 47,
        name: "Air Terjun Sendang Gile",
        city: "lombok",
        types: ["alam", "petualangan"],
        activities: ["hiking", "foto"],
        price: 10000,
        image: "images/Air Terjun Sendang Gile.jpeg",
        rating: 4.6,
        desc: "Air terjun segar di kaki Gunung Rinjani yang dipercaya bisa membuat awet muda."
    },
    {
        id: 48,
        name: "Islamic Center Mataram",
        city: "lombok",
        types: ["budaya_sejarah", "religi"],
        activities: ["foto", "budaya"],
        price: 0,
        image: "images/Islamic Center Mataram.jpeg",
        rating: 4.7,
        desc: "Masjid megah dengan arsitektur memukau yang menjadi ikon wisata religi di Pulau Seribu Masjid."
    },
    {
        id: 49,
        name: "Gili Air",
        city: "lombok",
        types: ["pantai", "keluarga"],
        activities: ["snorkeling", "relaksasi", "kuliner"],
        price: 0,
        image: "images/Gili Air.jpeg",
        rating: 4.7,
        desc: "Pulau yang lebih tenang dibanding Trawangan, cocok untuk keluarga dan pasangan yang mencari kedamaian."
    },
    {
        id: 50,
        name: "Pantai Kuta Mandalika",
        city: "lombok",
        types: ["pantai", "keluarga"],
        activities: ["foto", "jalan", "kuliner"],
        price: 0,
        image: "images/Pantai Kuta Mandalika.jpeg",
        rating: 4.6,
        desc: "Pantai pasir merica yang unik dengan garis pantai panjang dan fasilitas wisata yang lengkap."
    }
];