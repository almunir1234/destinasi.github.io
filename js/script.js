// js/script.js

// Fungsi untuk menyimpan preferensi user

function simpanPreferensi() {
    const form = document.getElementById('prefForm');
    
    // 1. Ambil Jenis Wisata (Array)
    let jenisWisata = [];
    form.querySelectorAll('input[name="jenis_wisata"]:checked').forEach((cb) => {
        jenisWisata.push(cb.value);
    });

    // 2. Ambil Lokasi (String)
    const lokasi = document.getElementById('lokasi').value;

    // 3. Ambil Budget (Number)
    const minBudget = document.getElementById('min_budget').value;
    const maxBudget = document.getElementById('max_budget').value;

    // 4. Ambil Aktivitas (Array)
    let aktivitas = [];
    form.querySelectorAll('input[name="aktivitas"]:checked').forEach((cb) => {
        aktivitas.push(cb.value);
    });

    // --- VALIDASI SEDERHANA ---
    if (jenisWisata.length === 0) {
        alert("Harap pilih minimal satu jenis wisata! 🏖️");
        return;
    }
    if (lokasi === "") {
        alert("Harap pilih lokasi tujuan! 📍");
        return;
    }

    // 5. Susun Data Object
    const userPref = {
        jenisWisata: jenisWisata,
        lokasi: lokasi,
        budget: {
            min: minBudget || 0, // Kalau kosong dianggap 0
            max: maxBudget || 999999999
        },
        aktivitas: aktivitas
    };

    // 6. Simpan & Redirect
    localStorage.setItem('userPreferences', JSON.stringify(userPref));
    console.log("Data Tersimpan:", userPref);

    // Animasi tombol loading (opsional)
    const btn = document.querySelector('.cta-button');
    btn.innerHTML = "Memproses AI... 🤖";
    
    setTimeout(() => {
        window.location.href = 'list.html';
    }, 800);
}
