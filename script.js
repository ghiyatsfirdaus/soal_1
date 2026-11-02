// Membuat variabel nama dan nilai
let nama = "Andi";
let nilaiTugas = 80;
let nilaiUTS = 75;
let nilaiUAS = 90;

// Menghitung nilai akhir
let nilaiAkhir = (nilaiTugas * 30 / 100) +
                 (nilaiUTS * 30 / 100) +
                 (nilaiUAS * 40 / 100);

// Menentukan status kelulusan
let status;

if (nilaiAkhir >= 75) {
    status = "LULUS";
} else {
    status = "TIDAK LULUS";
}

// Menampilkan hasil di Console
console.log("Nama: " + nama);
console.log("Nilai Akhir: " + nilaiAkhir);
console.log("Status: " + status);

// Menampilkan hasil di halaman HTML
document.getElementById("hasil").innerHTML =
    "Nama: " + nama + "<br>" +
    "Nilai Tugas: " + nilaiTugas + "<br>" +
    "Nilai UTS: " + nilaiUTS + "<br>" +
    "Nilai UAS: " + nilaiUAS + "<br>" +
    "Nilai Akhir: " + nilaiAkhir + "<br>" +
    "Status: <b>" + status + "</b>";
    