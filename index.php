<?php

// Menghitung Bangun Datar Persegi
if (isset($_POST['luas_persegi'])) {
    $hasil = $_POST['sisi_persegi'] * $_POST['sisi_persegi'];
} else if (isset($_POST['keliling_persegi'])) {
    $hasil = $_POST['sisi_persegi'] * 4;
}
// Menghitung Bangun Datar Persegi Panjang
else if (isset($_POST['luas_persegi_panjang'])) {
    $hasil = $_POST['panjang_persegi_panjang'] * $_POST['lebar_persegi_panjang'];
} else if (isset($_POST['keliling_persegi_panjang'])) {
    $hasil = $_POST['panjang_persegi_panjang'] * 2 + $_POST['lebar_persegi_panjang'] * 2;
}
// Menghitung Bangun Datar Segitiga
else if (isset($_POST['luas_segitiga'])) {
    $hasil = 1 / 2 * $_POST['alas_segitiga'] * $_POST['tinggi_segitiga'];
}
// Menghitung Bangun Datar Lingkaran
else if (isset($_POST['luas_lingkaran'])) {
    $jari_jari = $_POST['diameter_lingkaran'] * 1 / 2;
    $hasil = 22 / 7 * $jari_jari * $jari_jari;
} else if (isset($_POST['keliling_lingkaran'])) {
    $jari_jari = $_POST['diameter_lingkaran'] * 1 / 2;
    $hasil = 2 * 22 / 7 * $jari_jari;
}
// Menghitung Bangun Datar Jajargenjang
else if (isset($_POST['luas_jajargenjang'])) {
    $hasil = $_POST['alas_jajargenjang'] * $_POST['tinggi_jajargenjang'];
}
// Menghitung Bangun Datar Belah Ketupat dan Layang Layang
else if (isset($_POST['luas_belah_ketupat_layang_layang'])) {
    $hasil = 1 / 2 * $_POST['diameter1_belah_ketupat_layang_layang'] * $_POST['diameter2_belah_ketupat_layang_layang'];
}
// Menghitung Bangun Datar Trapesium
else if (isset($_POST['luas_trapesium'])) {
    $hasil = ($_POST['sisi_atas_trapesium'] + $_POST['sisi_bawah_trapesium']) / 2 * $_POST['tinggi_trapesium'];
}

// Menghitung Bangun Ruang Kubus 
else if (isset($_POST['luas_kubus'])) {
    $hasil = $_POST['rusuk_kubus'] * $_POST['rusuk_kubus'] * $_POST['rusuk_kubus'];
} else if (isset($_POST['keliling_kubus'])) {
    $hasil = 6 * $_POST['rusuk_kubus'] * $_POST['rusuk_kubus'];
}
// Menghitung Bangun Ruang Balok
else if (isset($_POST['luas_balok'])) {
    $hasil = $_POST['panjang_balok'] * $_POST['lebar_balok'] * $_POST['tinggi_balok'];
} else if (isset($_POST['keliling_balok'])) {
    $hasil = ($_POST['panjang_balok'] * 2) +  ($_POST['lebar_balok'] * 2) +  ($_POST['tinggi_balok'] * 2);
}
// Menghitung Bangun Ruang Limas Segiempat
else if (isset($_POST['luas_limas_segiempat'])) {
    $hasil = 1 / 3 * $_POST['luas_alas_limas_segiempat'] * $_POST['tinggi_limas_segiempat'];
}
// Menghitung Bangun Ruang Prisma Segitiga
else if (isset($_POST['luas_prisma_segitiga'])) {
    $hasil = 1 / 2 * $_POST['alas_prisma_segitiga'] * $_POST['tinggi_segitiga_prisma_segitiga'] * $_POST['tinggi_prisma_segitiga'];
}
// Menghitung Bangun Ruang Limas Segitiga
else if (isset($_POST['luas_limas_segitiga'])) {
    $hasil = 1 / 2 * $_POST['alas_limas_segitiga'] * $_POST['tinggi_segitiga_limas_segitiga'] * $_POST['tinggi_limas_segitiga'] / 3;
}
// Menghitung Bangun Ruang Tabung
else if (isset($_POST['luas_tabung'])) {
    $jari_jari = $_POST['diameter_tabung'] / 2;
    $hasil = 22 / 7 * $_POST['tinggi_tabung'] * $jari_jari * $jari_jari;
}
// Menghitung Bangun Ruang Bola
else if (isset($_POST['luas_bola'])) {
    $jari_jari = $_POST['diameter_bola'] / 2;
    $hasil = 22 / 7 * 4 / 3 * $jari_jari * $jari_jari * $jari_jari;
}
// Menghitung Bangun Ruang Kerucut
else if (isset($_POST['luas_kerucut'])) {
    $jari_jari = $_POST['diameter_kerucut'] / 2;
    $hasil = 22 / 7  * $jari_jari * $jari_jari * $_POST['tinggi_kerucut'] * 1 / 3;
}

// Menghitung Kecepatan Kecepatan
else if (isset($_POST['kecepatan_rumus_kecepatan'])) {
    $hasil = $_POST['jarak'] / $_POST['waktu'];
}
// Menghitung Kecepatan jarak
else if (isset($_POST['jarak_rumus_kecepatan'])) {
    $hasil = $_POST['kecepatan'] * $_POST['waktu'];
}
// Menghitung Kecepatan waktu
else if (isset($_POST['waktu_rumus_kecepatan'])) {
    $hasil = $_POST['jarak'] / $_POST['kecepatan'];
}

// Menghitung Debit debit
else if (isset($_POST['debit_rumus_debit'])) {
    $hasil = $_POST['volume'] / $_POST['waktu'];
}
// Menghitung debit Volume
else if (isset($_POST['volume_rumus_debit'])) {
    $hasil = $_POST['debit'] * $_POST['waktu'];
}
// Menghitung debit waktu
else if (isset($_POST['waktu_rumus_debit'])) {
    $hasil = $_POST['volume'] / $_POST['debit'];
}

// Menghitung skala skala
else if (isset($_POST['skala_rumus_skala'])) {
    $hasil = $_POST['jarak_pada_peta'] / $_POST['jarak_sebenarnya'];
}
// Menghitung skala jarak sebenarnya
else if (isset($_POST['jarak_sebenarnya_rumus_skala'])) {
    $hasil = $_POST['jarak_pada_peta'] / $_POST['skala'];
}
// Menghitung skala jarak pada peta
else if (isset($_POST['jarak_pada_peta_rumus_skala'])) {
    $hasil =  $_POST['skala'] * $_POST['jarak_sebenarnya'];
}

// Menghitung aritmatika suku ke n
else if (isset($_POST['suku_ke_n'])) {
    $hasil =  $_POST['suku_pertama'] + ($_POST['banyaknya_suku'] - 1) * $_POST['selisih_antar_suku'];
}
// Menghitung aritmatika jumlah suku pertama sampai ke n
else if (isset($_POST['jumlah_suku_pertama_sampai_n'])) {
    $hasil =  1 / 2 * $_POST['banyaknya_suku'] * (2 * $_POST['suku_pertama'] + ($_POST['banyaknya_suku'] - 1) * $_POST['selisih_antar_suku']);
}

// Menghitung peluang suatu kejadian
else if (isset($_POST['peluang_suatu_kejadian'])) {
    $hasil =  $_POST['banyak_anggota_x'] / $_POST['banyak_ruang_sampel_x'];
}

// Fisika
// Menghitung massa jenis
else if (isset($_POST['menghitung_massa_jenis'])) {
    $hasil = $_POST['massa'] / $_POST['volume'];
}
// Menghitung massa
else if (isset($_POST['menghitung_massa'])) {
    $hasil = $_POST['massa_jenis'] * $_POST['volume'];
}
// Menghitung volume
else if (isset($_POST['menghitung_volume'])) {
    $hasil = $_POST['massa'] / $_POST['massa_jenis'];
}

// Menghitung Gaya
else if (isset($_POST['menghitung_gaya'])) {
    $hasil = $_POST['massa_benda'] * $_POST['percepatan'];
}
// Menghitung Massa Benda
else if (isset($_POST['menghitung_massa_benda'])) {
    $hasil = $_POST['gaya'] / $_POST['percepatan'];
}
// Menghitung percepatan
else if (isset($_POST['menghitung_percepatan'])) {
    $hasil = $_POST['gaya'] / $_POST['massa_benda'];
}

// Menghitung Frekuensi 1
else if (isset($_POST['menghitung_frekuensi1'])) {
    $hasil = $_POST['jumlah_getaran'] / $_POST['waktu_getaran'];
}
// Menghitung Frekuensi 2
else if (isset($_POST['menghitung_frekuensi2'])) {
    $hasil = $_POST['kecepatan_gelombang'] / $_POST['panjang_gelombang'];
}
// Menghitung Frekuensi 3
else if (isset($_POST['menghitung_frekuensi3'])) {
    $hasil = 1 / $_POST['periode'];
}
// Menghitung Periode 1
else if (isset($_POST['menghitung_periode1'])) {
    $hasil =  $_POST['waktu_untuk_getaran'] / $_POST['jumlah_getaran'];
}
// Menghitung Periode 2
else if (isset($_POST['menghitung_periode2'])) {
    $hasil =  1 / $_POST['frekuensi'];
}
// Menghitung Periode 3
else if (isset($_POST['menghitung_periode3'])) {
    $hasil =  $_POST['kecepatan_gelombang'] / $_POST['panjang_gelombang'];
}

// Menghitung Cepat Rambat Gelombang 1
else if (isset($_POST['menghitung_cepat_rambat_gelombang1'])) {
    $hasil =  $_POST['jarak'] / $_POST['waktu'];
}
// Menghitung Cepat Rambat Gelombang 2
else if (isset($_POST['menghitung_cepat_rambat_gelombang2'])) {
    $hasil =  $_POST['panjang_gelombang'] * $_POST['frekuensi'];
}
// Menghitung Cepat Rambat Gelombang 3
else if (isset($_POST['menghitung_cepat_rambat_gelombang3'])) {
    $hasil =  $_POST['panjang_gelombang'] / $_POST['periode'];
}

// Menghitung Energi Potensial Ep
else if (isset($_POST['menghitung_energi_potensial_ep'])) {
    $hasil =  $_POST['massa'] * $_POST['gravitasi'] * $_POST['tinggi'];
}
// Menghitung Energi Potensial Massa
else if (isset($_POST['menghitung_energi_potensial_massa'])) {
    $gravTing =  $_POST['gravitasi'] * $_POST['tinggi'];
    $hasil = $_POST['energi_potensial'] / $gravTing;
}
// Menghitung Energi Potensial tinggi
else if (isset($_POST['menghitung_energi_potensial_tinggi'])) {
    $massGrav =  $_POST['massa'] * $_POST['gravitasi'];
    $hasil = $_POST['energi_potensial'] / $massGrav;
}

// Menghitung Energi Kinetik Ek
else if (isset($_POST['menghitung_energi_kinetik_ek'])) {
    $hasil =  1 / 2 * $_POST['massa'] * $_POST['kecepatan'];
}
// Menghitung Energi Kinetik massa
else if (isset($_POST['menghitung_energi_kinetik_massa'])) {
    $stKec =  1 / 2 * $_POST['kecepatan'];
    $hasil = $_POST['energi_kinetik'] / $stKec;
}
// Menghitung Energi Kinetik kecepatan
else if (isset($_POST['menghitung_energi_kinetik_kecepatan'])) {
    $stMassa =  1 / 2 * $_POST['massa'];
    $hasil = $_POST['energi_kinetik'] / $stMassa;
}

// Menghitung Rangkaian Listrik Tegangan Listrik
else if (isset($_POST['menghitung_rl_tegangan_listrik'])) {
    $hasil = $_POST['arus_listrik'] * $_POST['hambatan_listrik'];
}
// Menghitung Rangkaian Listrik arus Listrik
else if (isset($_POST['menghitung_rl_arus_listrik'])) {
    $hasil = $_POST['tegangan_listrik'] / $_POST['hambatan_listrik'];
}
// Menghitung Rangkaian Listrik hambatan Listrik
else if (isset($_POST['menghitung_rl_hambatan_listrik'])) {
    $hasil = $_POST['tegangan_listrik'] / $_POST['arus_listrik'];
} else {
    $hasil = 0;
}

?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;500&family=Kirang+Haerang&display=swap" rel="stylesheet">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

    <link rel="stylesheet" href="style.css">

    <title>Home</title>

</head>

<body>

    <!-- Perkenalan -->
    <section class="perkenalan">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <h1 class="text-center"><span>STC</span>-RUMUS</h1>
                </div>
            </div>
            <div class="row  mt-5">
                <div class="col-md-6">
                    <h3>Kenapa si <span>Rumus</span> itu <span>menyebalkan</span>!!</h3>
                    <img src="img/stress.png" alt="Sedang Stress" class="mt-1">
                </div>
                <div class="col-md-6">
                    <p class="marah">"Coba saja mereka tidak menemukan rumus, pasti sekolah menjadi lebih mudah."</p>
                    <p>Oleh karena itu di sini saya akan membantu menyelesaikan masalah kalian.</p>
                    <p>Tapi bagaimana? Tenang saja di Website ini telah menyediakan rumus-rumus yang mungkin kalian butuhkan dan juga kalian dapat langsung menghitung di Website ini dengan mudah.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- akhir Perkenalan -->

    <!-- Materi yang ada -->
    <section class="materi">

        <div class="container">
            <div class="row">
                <div class="col">
                    <h4 class="text-center">Materi</h4>
                </div>
            </div>
        </div>

        <!-- Navigasi Materi -->
        <div class="container navigasi-materi">
            <div class="row">
                <div class="col-6">
                    <a href="#isi_materi" class="matematika">Matematika</a>
                </div>
                <div class="col-6">
                    <a href="#isi_materi" class="fisika">Fisika</a>
                </div>
            </div>
        </div>
        <!-- akhir Navigasi Materi -->

        <!-- isi Materi -->
        <div class="container isi_materi" id="isi_materi">

        </div>
        <!-- akhir isi Materi -->

    </section>
    <!-- Akhir materi -->

    <!-- rumus -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#4255ff" fill-opacity="1" d="M0,0L48,21.3C96,43,192,85,288,117.3C384,149,480,171,576,181.3C672,192,768,192,864,192C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <section class="rumus" id="rumus">
        <div class="container">
            <div class="row mb-4 bab_materi">

            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body satu">

                        </div>
                        <div class="card-body dua">
                            <div class="input-group">
                                <label class="form-control"><?= $hasil; ?></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#4255ff" fill-opacity="1" d="M0,288L60,245.3C120,203,240,117,360,101.3C480,85,600,139,720,133.3C840,128,960,64,1080,74.7C1200,85,1320,171,1380,213.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
    <!-- akhir rumus -->


    <!-- footer -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="svg_footer">
        <path fill="#4255ff" fill-opacity="1" d="M0,0L48,21.3C96,43,192,85,288,117.3C384,149,480,171,576,181.3C672,192,768,192,864,192C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <footer class="footer">
        <div class="container">
            <div class="row mb-3">
                <div class="col">
                    <h3 class="text-center">Media Sosial</h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="text-center"><a href="https://instagram.com/apenchu"><i class="bi bi-instagram"></i></a> <a href="https://github.com/apenchu"><i class="bi bi-github"></i></a></p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="text-center">Copyright &copy; 2021 by <a href="https://instagram.com/apenchu">Steven</a></p>
                    <p class="text-center">Build With <i class="bi bi-heart-fill"></i> <i class="bi bi-headphones"></i> <i class="bi bi-cup-straw"></i></p>
                </div>
            </div>
        </div>
    </footer>
    <!-- akhir footer -->



    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script src="script.js"></script>

</body>

</html>