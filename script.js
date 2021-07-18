$(function() {

    // Menampilkan Materi matematika
    $('.navigasi-materi .matematika').on('click', function() {

        $('.isi_materi').addClass('menampilkan_dari_atas');

        $('.isi_materi').html(`
<div class="row">
    <h3 class="text-center">Matematika</h3>
</div>
<div class="row mt-5">
    <div class="col-md-6">
        <img src="img/math.png" alt="">
    </div>
    <div class="col-md-6 each_submateri_matematika">
        
    </div>
</div>
`);

        $.ajax({
            url: 'data/submateri_matematika.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.isi_materi .each_submateri_matematika').append(`
            <ul class="list-group list-group-horizontal">
                <li class="sub-materi mt-2">
                    <a href="#rumus" class="` + hasil.class_submateri + `">` + hasil.judul_submateri + `</a>
                </li>
            </ul>      
        `);

                });
            }
        });

        setTimeout(function() {
            $('.isi_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });


    // Menampilkan Bab dari Sub Materi Matematika Bangun Datar
    $('.isi_materi').on('click', '.bangun_datar', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');


        $.ajax({
            url: 'data/babmateri_matematika/bangun_datar.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);


    });
    // Menampilkan Bab dari Sub Materi Matematika Bangun Ruang
    $('.isi_materi').on('click', '.bangun_ruang', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_matematika/bangun_ruang.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Matematika Kecepatan
    $('.isi_materi').on('click', '.kecepatan', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_matematika/kecepatan.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Matematika Debit
    $('.isi_materi').on('click', '.debit', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_matematika/debit.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Matematika Skala
    $('.isi_materi').on('click', '.skala', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_matematika/skala.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Matematika Aritmatika
    $('.isi_materi').on('click', '.aritmatika', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_matematika/aritmatika.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });



    // Menampilkan tempat menghitung matematika bangun datar
    $('.bab_materi').on('click', '.persegi', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-5">
        <label for="sisi_persegi" class="form-label">Sisi : </label>
        <input type="number" class="form-control" id="sisi_persegi" name="sisi_persegi" autocomplete="off" placeholder="Sisi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_persegi">Luas</button>
        <button type="submit" class="btn tombol_hitung" name="keliling_persegi">Keliling</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.persegi_panjang', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-5">
        <label for="panjang_persegi_panjang" class="form-label">Panjang : </label>
        <input type="number" class="form-control" id="panjang_persegi_panjang" name="panjang_persegi_panjang" autocomplete="off" placeholder="Panjang">
    </div>
    <div class="mb-5">
        <label for="lebar_persegi_panjang" class="form-label">Lebar : </label>
        <input type="number" class="form-control" id="lebar_persegi_panjang" name="lebar_persegi_panjang" autocomplete="off" placeholder="Lebar">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_persegi_panjang">Luas</button>
        <button type="submit" class="btn tombol_hitung" name="keliling_persegi_panjang">Keliling</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.segitiga', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-5">
        <label for="alas_segitiga" class="form-label">Alas : </label>
        <input type="number" class="form-control" id="alas_segitiga" name="alas_segitiga" autocomplete="off" placeholder="Alas">
    </div>
    <div class="mb-5">
        <label for="tinggi_segitiga" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi_segitiga" name="tinggi_segitiga" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_segitiga">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.lingkaran', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-5">
        <label for="diameter_lingkaran" class="form-label">Diameter : </label>
        <input type="number" class="form-control" id="diameter_lingkaran" name="diameter_lingkaran" autocomplete="off" placeholder="Diameter">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_lingkaran">Luas</button>
        <button type="submit" class="btn tombol_hitung" name="keliling_lingkaran">Keliling</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.jajargenjang', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="alas_jajargenjang" class="form-label">Alas : </label>
        <input type="number" class="form-control" id="alas_jajargenjang" name="alas_jajargenjang" autocomplete="off" placeholder="Alas">
    </div>
    <div class="mb-5">
        <label for="tinggi_jajargenjang" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi_jajargenjang" name="tinggi_jajargenjang" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_jajargenjang">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.belah_ketupat', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="diameter1_belah_ketupat_layang_layang" class="form-label">Diameter 1 : </label>
        <input type="number" class="form-control" id="diameter1_belah_ketupat_layang_layang" name="diameter1_belah_ketupat_layang_layang" autocomplete="off" placeholder="Diameter 1">
    </div>
    <div class="mb-5">
        <label for="diameter2_belah_ketupat_layang_layang" class="form-label">Diameter 2 : </label>
        <input type="number" class="form-control" id="diameter2_belah_ketupat_layang_layang" name="diameter2_belah_ketupat_layang_layang" autocomplete="off" placeholder="Diameter 2">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_belah_ketupat_layang_layang">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.layang_layang', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="diameter1_belah_ketupat_layang_layang" class="form-label">Diameter 1 : </label>
        <input type="number" class="form-control" id="diameter1_belah_ketupat_layang_layang" name="diameter1_belah_ketupat_layang_layang" autocomplete="off" placeholder="Diameter 1">
    </div>
    <div class="mb-5">
        <label for="diameter2_belah_ketupat_layang_layang" class="form-label">Diameter 2 : </label>
        <input type="number" class="form-control" id="diameter2_belah_ketupat_layang_layang" name="diameter2_belah_ketupat_layang_layang" autocomplete="off" placeholder="Diameter 2">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_belah_ketupat_layang_layang">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.trapesium', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="sisi_bawah_trapesium" class="form-label">Sisi Bawah : </label>
        <input type="number" class="form-control" id="sisi_bawah_trapesium" name="sisi_bawah_trapesium" autocomplete="off" placeholder="Sisi Bawah">
    </div>
    <div class="mb-3">
        <label for="sisi_atas_trapesium" class="form-label">Sisi Atas : </label>
        <input type="number" class="form-control" id="sisi_atas_trapesium" name="sisi_atas_trapesium" autocomplete="off" placeholder="Sisi Atas">
    </div>
    <div class="mb-5">
        <label for="tinggi_trapesium" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi_trapesium" name="tinggi_trapesium" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_trapesium">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });


    // Menampilkan tempat menghitung matematika bangun ruang
    $('.bab_materi').on('click', '.kubus', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-5">
        <label for="rusuk_kubus" class="form-label">Rusuk : </label>
        <input type="number" class="form-control" id="rusuk_kubus" name="rusuk_kubus" autocomplete="off" placeholder="Rusuk">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_kubus">Luas</button>
        <button type="submit" class="btn tombol_hitung" name="keliling_kubus">Keliling</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.balok', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="panjang_balok" class="form-label">Panjang : </label>
        <input type="number" class="form-control" id="panjang_balok" name="panjang_balok" autocomplete="off" placeholder="Panjang">
    </div>
    <div class="mb-3">
        <label for="lebar_balok" class="form-label">Lebar : </label>
        <input type="number" class="form-control" id="lebar_balok" name="lebar_balok" autocomplete="off" placeholder="Lebar">
    </div>
    <div class="mb-5">
        <label for="tinggi_balok" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi_balok" name="tinggi_balok" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_balok">Luas</button>
        <button type="submit" class="btn tombol_hitung" name="keliling_balok">Keliling</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.limas_segiempat', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="luas_alas_limas_segiempat" class="form-label">Luas Alas : </label>
        <input type="number" class="form-control" id="luas_alas_limas_segiempat" name="luas_alas_limas_segiempat" autocomplete="off" placeholder="Luas Alas">
    </div>
    <div class="mb-5">
        <label for="tinggi_limas_segiempat" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi_limas_segiempat" name="tinggi_limas_segiempat" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_limas_segiempat">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.prisma_segitiga', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="alas_prisma_segitiga" class="form-label">Alas : </label>
        <input type="number" class="form-control" id="alas_prisma_segitiga" name="alas_prisma_segitiga" autocomplete="off" placeholder="Alas">
    </div>
    <div class="mb-3">
        <label for="tinggi_segitiga_prisma_segitiga" class="form-label">Tinggi Segitiga : </label>
        <input type="number" class="form-control" id="tinggi_segitiga_prisma_segitiga" name="tinggi_segitiga_prisma_segitiga" autocomplete="off" placeholder="Tinggi Segitiga">
    </div>
    <div class="mb-5">
        <label for="tinggi_prisma_segitiga" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi_prisma_segitiga" name="tinggi_prisma_segitiga" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_prisma_segitiga">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.limas_segitiga', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="alas_limas_segitiga" class="form-label">Alas : </label>
        <input type="number" class="form-control" id="alas_limas_segitiga" name="alas_limas_segitiga" autocomplete="off" placeholder="Alas">
    </div>
    <div class="mb-3">
        <label for="tinggi_segitiga_limas_segitiga" class="form-label">Tinggi Segitiga : </label>
        <input type="number" class="form-control" id="tinggi_segitiga_limas_segitiga" name="tinggi_segitiga_limas_segitiga" autocomplete="off" placeholder="Tinggi Segitiga">
    </div>
    <div class="mb-5">
        <label for="tinggi_limas_segitiga" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi_limas_segitiga" name="tinggi_limas_segitiga" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_limas_segitiga">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.tabung', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="diameter_tabung" class="form-label">Diameter : </label>
        <input type="number" class="form-control" id="diameter_tabung" name="diameter_tabung" autocomplete="off" placeholder="Diameter">
    </div>
    <div class="mb-5">
        <label for="tinggi_tabung" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi_tabung" name="tinggi_tabung" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_tabung">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.bola', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-5">
        <label for="diameter_bola" class="form-label">Diameter : </label>
        <input type="number" class="form-control" id="diameter_bola" name="diameter_bola" autocomplete="off" placeholder="Diameter">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_bola">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    $('.bab_materi').on('click', '.kerucut', function() {

        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="diameter_kerucut" class="form-label">Diameter : </label>
        <input type="number" class="form-control" id="diameter_kerucut" name="diameter_kerucut" autocomplete="off" placeholder="Diameter">
    </div>
    <div class="mb-5">
        <label for="tinggi_kerucut" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi_kerucut" name="tinggi_kerucut" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="luas_kerucut">Luas</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);

    });


    // Menampilkan tempat menghitung matematika kecepatan
    $('.bab_materi').on('click', '.kecepatan_kecepatan', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
    <form action="" method="post">

        <div class="mb-3">
            <label for="jarak" class="form-label">Jarak : </label>
            <input type="number" class="form-control" id="jarak" name="jarak" autocomplete="off" placeholder="Jarak">
        </div>
        <div class="mb-5">
            <label for="waktu" class="form-label">Waktu : </label>
            <input type="number" class="form-control" id="waktu" name="waktu" autocomplete="off" placeholder="Waktu">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn tombol_hitung" name="kecepatan_rumus_kecepatan">Kecepatan</button>
        </div>

    </form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    $('.bab_materi').on('click', '.jarak_kecepatan', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="kecepatan" class="form-label">Kecepatan : </label>
        <input type="number" class="form-control" id="kecepatan" name="kecepatan" autocomplete="off" placeholder="Kecepatan">
    </div>
    <div class="mb-5">
        <label for="waktu" class="form-label">Waktu : </label>
        <input type="number" class="form-control" id="waktu" name="waktu" autocomplete="off" placeholder="Waktu">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="jarak_rumus_kecepatan">Jarak</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    $('.bab_materi').on('click', '.waktu_kecepatan', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="kecepatan" class="form-label">Kecepatan : </label>
        <input type="number" class="form-control" id="kecepatan" name="kecepatan" autocomplete="off" placeholder="Kecepatan">
    </div>
    <div class="mb-5">
        <label for="jarak" class="form-label">Jarak : </label>
        <input type="number" class="form-control" id="jarak" name="jarak" autocomplete="off" placeholder="Jarak">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="waktu_rumus_kecepatan">Waktu</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung matematika debit
    $('.bab_materi').on('click', '.debit_debit', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="volume" class="form-label">Volume : </label>
        <input type="number" class="form-control" id="volume" name="volume" autocomplete="off" placeholder="Volume">
    </div>
    <div class="mb-5">
        <label for="waktu" class="form-label">Waktu : </label>
        <input type="number" class="form-control" id="waktu" name="waktu" autocomplete="off" placeholder="Waktu">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="debit_rumus_debit">Debit</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    $('.bab_materi').on('click', '.volume_debit', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="debit" class="form-label">Debit : </label>
        <input type="number" class="form-control" id="debit" name="debit" autocomplete="off" placeholder="Debit">
    </div>
    <div class="mb-5">
        <label for="waktu" class="form-label">Waktu : </label>
        <input type="number" class="form-control" id="waktu" name="waktu" autocomplete="off" placeholder="Waktu">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="volume_rumus_debit">Volume</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    $('.bab_materi').on('click', '.waktu_debit', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="volume" class="form-label">Volume : </label>
        <input type="number" class="form-control" id="volume" name="volume" autocomplete="off" placeholder="Volume">
    </div>
    <div class="mb-5">
        <label for="debit" class="form-label">Debit : </label>
        <input type="number" class="form-control" id="debit" name="debit" autocomplete="off" placeholder="Debit">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="waktu_rumus_debit">Waktu</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung matematika debit
    $('.bab_materi').on('click', '.skala_skala', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="jarak_pada_peta" class="form-label">Jarak Pada Peta : </label>
        <input type="number" class="form-control" id="jarak_pada_peta" name="jarak_pada_peta" autocomplete="off" placeholder="Jarak Pada Peta">
    </div>
    <div class="mb-5">
        <label for="jarak_sebenarnya" class="form-label">Jarak Sebenarnya : </label>
        <input type="number" class="form-control" id="jarak_sebenarnya" name="jarak_sebenarnya" autocomplete="off" placeholder="Jarak Sebenarnya">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="skala_rumus_skala">Skala</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    $('.bab_materi').on('click', '.jarak_sebenarnya_skala', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="jarak_pada_peta" class="form-label">Jarak Pada Peta : </label>
        <input type="number" class="form-control" id="jarak_pada_peta" name="jarak_pada_peta" autocomplete="off" placeholder="Jarak Pada Peta">
    </div>
    <div class="mb-5">
        <label for="skala" class="form-label">Skala : </label>
        <input type="number" class="form-control" id="skala" name="skala" autocomplete="off" placeholder="Skala">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="jarak_sebenarnya_rumus_skala">Jarak Sebenarnya</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    $('.bab_materi').on('click', '.jarak_pada_peta_skala', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="jarak_sebenarnya" class="form-label">Jarak Sebenarnya : </label>
        <input type="number" class="form-control" id="jarak_sebenarnya" name="jarak_sebenarnya" autocomplete="off" placeholder="Jarak Sebenarnya">
    </div>
    <div class="mb-5">
        <label for="skala" class="form-label">Skala : </label>
        <input type="number" class="form-control" id="skala" name="skala" autocomplete="off" placeholder="Skala">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="jarak_pada_peta_rumus_skala">Jarak Pada Peta</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung matematika debit
    $('.bab_materi').on('click', '.suku_ke_n', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="suku_pertama" class="form-label">Suku Pertama : </label>
        <input type="number" class="form-control" id="suku_pertama" name="suku_pertama" autocomplete="off" placeholder="Suku Pertama">
    </div>
    <div class="mb-3">
        <label for="banyaknya_suku" class="form-label">Banyaknya Suku : </label>
        <input type="number" class="form-control" id="banyaknya_suku" name="banyaknya_suku" autocomplete="off" placeholder="Banyaknya Suku">
    </div>
    <div class="mb-5">
        <label for="selisih_antar_suku" class="form-label">Selisih Antar Suku : </label>
        <input type="number" class="form-control" id="selisih_antar_suku" name="selisih_antar_suku" autocomplete="off" placeholder="Selisih Antar Suku">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="suku_ke_n">Suku Ke n</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    $('.bab_materi').on('click', '.jumlah_suku_pertama_sampai_n', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="suku_pertama" class="form-label">Suku Pertama : </label>
        <input type="number" class="form-control" id="suku_pertama" name="suku_pertama" autocomplete="off" placeholder="Suku Pertama">
    </div>
    <div class="mb-3">
        <label for="banyaknya_suku" class="form-label">Banyaknya Suku : </label>
        <input type="number" class="form-control" id="banyaknya_suku" name="banyaknya_suku" autocomplete="off" placeholder="Banyaknya Suku">
    </div>
    <div class="mb-5">
        <label for="selisih_antar_suku" class="form-label">Selisih Antar Suku : </label>
        <input type="number" class="form-control" id="selisih_antar_suku" name="selisih_antar_suku" autocomplete="off" placeholder="Selisih Antar Suku">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="jumlah_suku_pertama_sampai_n">Jumlah Suku Pertama Sampai ke n</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung matematika peluang suatu kejadian
    $('.isi_materi').on('click', '.peluang_suatu_kejadian', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="banyak_anggota_x" class="form-label">Banyak Anggota X : </label>
        <input type="number" class="form-control" id="banyak_anggota_x" name="banyak_anggota_x" autocomplete="off" placeholder="Banyak Anggota X">
    </div>
    <div class="mb-5">
        <label for="banyak_ruang_sampel_x" class="form-label">Banyak Anggota Ruang Sampel X : </label>
        <input type="number" class="form-control" id="banyak_ruang_sampel_x" name="banyak_ruang_sampel_x" autocomplete="off" placeholder="Banyak Anggota Ruang Sampel X">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="peluang_suatu_kejadian">Peluang Suatu Kejadian</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });



    // menampilkan materi fisika
    $('.navigasi-materi .fisika').on('click', function() {

        $('.isi_materi').addClass('menampilkan_dari_atas');

        $('.isi_materi').html(`
<div class="row">
    <h3 class="text-center">Fisika</h3>
</div>
<div class="row mt-5">
    <div class="col-md-6">
        <img src="img/fisika.png" alt="">
    </div>
    <div class="col-md-6 each_submateri_fisika">
        
    </div>
</div>
`);

        $.ajax({
            url: 'http://localhost/rumusV2/data/submateri_fisika.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.isi_materi .each_submateri_fisika').append(`
            <ul class="list-group list-group-horizontal">
                <li class="sub-materi mt-2">
                    <a href="#rumus" class="` + hasil.class_submateri + `">` + hasil.judul_submateri + `</a>
                </li>
            </ul>
        `);

                });
            }
        });

        setTimeout(function() {
            $('.').removeClass('menampilkan_dari_atas');
        }, 2000);

    });


    // Menampilkan Bab dari Sub Materi Fisika Massa Jenis
    $('.isi_materi').on('click', '.massa_jenis', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_fisika/massa_jenis.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Fisika Gaya
    $('.isi_materi').on('click', '.gaya', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_fisika/gaya.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Fisika Frekuensi
    $('.isi_materi').on('click', '.frekuensi', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_fisika/frekuensi.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Fisika Periode
    $('.isi_materi').on('click', '.periode', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_fisika/periode.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Fisika Cepat Rambat Gelombang
    $('.isi_materi').on('click', '.cepat_rambat_gelombang', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_fisika/cepat_rambat_gelombang.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Fisika Energi Potensial
    $('.isi_materi').on('click', '.energi_potensial', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_fisika/energi_potensial.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Fisika Energi Kinetik
    $('.isi_materi').on('click', '.energi_kinetik', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_fisika/energi_kinetik.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });
    // Menampilkan Bab dari Sub Materi Fisika Rangkaian Listrik
    $('.isi_materi').on('click', '.rangkaian_listrik', function() {
        $('.bab_materi').addClass('menampilkan_dari_atas');

        $.ajax({
            url: 'data/babmateri_fisika/rangkaian_listrik.php',
            dataType: 'json',
            success: function(data) {
                $.each(data, function(i, hasil) {
                    $('.bab_materi').append(`
            <div class="col mt-5 mb-3 tombol_bab_materi">
                <a href="#rumus" class="` + hasil.class_babmateri + `">` + hasil.judul_babmateri + `</a>
            </div>
        `);
                });
            }
        });

        setTimeout(function() {
            $('.bab_materi').removeClass('menampilkan_dari_atas');
        }, 2000);

    });


    // Menampilkan tempat menghitung Fisika Massa Jenis massa jenis
    $('.bab_materi').on('click', '.rumus_massa_jenis', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="massa" class="form-label">Massa : </label>
        <input type="number" class="form-control" id="massa" name="massa" autocomplete="off" placeholder="Massa">
    </div>
    <div class="mb-5">
        <label for="volume" class="form-label">Volume : </label>
        <input type="number" class="form-control" id="volume" name="volume" autocomplete="off" placeholder="Volume">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_massa_jenis">Massa Jenis</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Massa Jenis Massa
    $('.bab_materi').on('click', '.rumus_massa', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="massa_jenis" class="form-label">Massa Jenis : </label>
        <input type="number" class="form-control" id="massa_jenis" name="massa_jenis" autocomplete="off" placeholder="Massa Jenis">
    </div>
    <div class="mb-5">
        <label for="volume" class="form-label">Volume : </label>
        <input type="number" class="form-control" id="volume" name="volume" autocomplete="off" placeholder="Volume">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_massa">Massa</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Massa Jenis Volume
    $('.bab_materi').on('click', '.rumus_volume', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="massa_jenis" class="form-label">Massa Jenis : </label>
        <input type="number" class="form-control" id="massa_jenis" name="massa_jenis" autocomplete="off" placeholder="Massa Jenis">
    </div>
    <div class="mb-5">
        <label for="massa" class="form-label">Massa : </label>
        <input type="number" class="form-control" id="massa" name="massa" autocomplete="off" placeholder="Massa">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_volume">Volume</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung Fisika Gaya Gaya
    $('.bab_materi').on('click', '.rumus_gaya', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="massa_benda" class="form-label">Massa Benda : </label>
        <input type="number" class="form-control" id="massa_benda" name="massa_benda" autocomplete="off" placeholder="Massa Benda">
    </div>
    <div class="mb-5">
        <label for="percepatan" class="form-label">Percepatan : </label>
        <input type="number" class="form-control" id="percepatan" name="percepatan" autocomplete="off" placeholder="Percepatan">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_gaya">Gaya</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Gaya Massa Benda
    $('.bab_materi').on('click', '.rumus_massa_benda', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="gaya" class="form-label">Gaya : </label>
        <input type="number" class="form-control" id="gaya" name="gaya" autocomplete="off" placeholder="Gaya">
    </div>
    <div class="mb-5">
        <label for="percepatan" class="form-label">Percepatan : </label>
        <input type="number" class="form-control" id="percepatan" name="percepatan" autocomplete="off" placeholder="Percepatan">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_massa_benda">Massa Benda</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Gaya Percepatan
    $('.bab_materi').on('click', '.rumus_percepatan', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="gaya" class="form-label">Gaya : </label>
        <input type="number" class="form-control" id="gaya" name="gaya" autocomplete="off" placeholder="Gaya">
    </div>
    <div class="mb-5">
        <label for="massa_benda" class="form-label">Massa Benda : </label>
        <input type="number" class="form-control" id="massa_benda" name="massa_benda" autocomplete="off" placeholder="Massa Benda">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_percepatan">Percepatan</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung Fisika Frekuensi 1
    $('.bab_materi').on('click', '.rumus_frekuensi1', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="jumlah_getaran" class="form-label">Jumlah Getaran : </label>
        <input type="number" class="form-control" id="jumlah_getaran" name="jumlah_getaran" autocomplete="off" placeholder="Jumlah Getaran">
    </div>
    <div class="mb-5">
        <label for="waktu_getaran" class="form-label">Waktu Yang Dibutuhkan Untuk Melakukan Getaran : </label>
        <input type="number" class="form-control" id="waktu_getaran" name="waktu_getaran" autocomplete="off" placeholder="Waktu Yang Dibutuhkan Untuk Melakukan Getaran">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_frekuensi1">Frekuensi 1</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Frekuensi 2
    $('.bab_materi').on('click', '.rumus_frekuensi2', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="kecepatan_gelombang" class="form-label">Kecepatan Gelombang : </label>
        <input type="number" class="form-control" id="kecepatan_gelombang" name="kecepatan_gelombang" autocomplete="off" placeholder="Kecepatan Gelombang">
    </div>
    <div class="mb-5">
        <label for="panjang_gelombang" class="form-label">Panjang Gelombang : </label>
        <input type="number" class="form-control" id="panjang_gelombang" name="panjang_gelombang" autocomplete="off" placeholder="Panjang Gelombang">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_frekuensi2">Frekuensi 2</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Frekuensi 3
    $('.bab_materi').on('click', '.rumus_frekuensi3', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-5">
        <label for="periode" class="form-label">Periode : </label>
        <input type="number" class="form-control" id="periode" name="periode" autocomplete="off" placeholder="Periode">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_frekuensi3">Frekuensi 3</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung Fisika Periode 1
    $('.bab_materi').on('click', '.rumus_periode1', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="waktu_untuk_getaran" class="form-label">Waktu Yang Dibutuhkan Untuk Melakukan Getaran : </label>
        <input type="number" class="form-control" id="waktu_untuk_getaran" name="waktu_untuk_getaran" autocomplete="off" placeholder="Waktu Yang Dibutuhkan Untuk Melakukan Getaran">
    </div>
    <div class="mb-5">
        <label for="jumlah_getaran" class="form-label">Jumlah Getaran : </label>
        <input type="number" class="form-control" id="jumlah_getaran" name="jumlah_getaran" autocomplete="off" placeholder="Jumlah Getaran">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_periode1">Periode 3</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Periode 2
    $('.bab_materi').on('click', '.rumus_periode2', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-5">
        <label for="frekuensi" class="form-label">Frekuensi : </label>
        <input type="number" class="form-control" id="frekuensi" name="frekuensi" autocomplete="off" placeholder="Frekuensi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_periode2">Periode 3</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Periode 3
    $('.bab_materi').on('click', '.rumus_periode3', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="kecepatan_gelombang" class="form-label">Kecepatan Gelombang : </label>
        <input type="number" class="form-control" id="kecepatan_gelombang" name="kecepatan_gelombang" autocomplete="off" placeholder="Kecepatan Gelombang">
    </div>
    <div class="mb-5">
        <label for="panjang_gelombang" class="form-label">Panjang Gelombang : </label>
        <input type="number" class="form-control" id="panjang_gelombang" name="panjang_gelombang" autocomplete="off" placeholder="Panjang Gelombang">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_periode3">Periode 3</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung Fisika Cepat Rambat Gelombang 1
    $('.bab_materi').on('click', '.rumus_cepat_rambat_gelombang1', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="jarak" class="form-label">Jarak : </label>
        <input type="number" class="form-control" id="jarak" name="jarak" autocomplete="off" placeholder="Jarak">
    </div>
    <div class="mb-5">
        <label for="waktu" class="form-label">Waktu : </label>
        <input type="number" class="form-control" id="waktu" name="waktu" autocomplete="off" placeholder="Waktu">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_cepat_rambat_gelombang1">Cepat Rambat Gelombang 1</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Cepat Rambat Gelombang 2
    $('.bab_materi').on('click', '.rumus_cepat_rambat_gelombang2', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="panjang_gelombang" class="form-label">Panjang Gelombang : </label>
        <input type="number" class="form-control" id="panjang_gelombang" name="panjang_gelombang" autocomplete="off" placeholder="Panjang Gelombang">
    </div>
    <div class="mb-5">
        <label for="frekuensi" class="form-label">Frekuensi : </label>
        <input type="number" class="form-control" id="frekuensi" name="frekuensi" autocomplete="off" placeholder="Frekuensi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_cepat_rambat_gelombang2">Cepat Rambat Gelombang 2</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Cepat Rambat Gelombang 3
    $('.bab_materi').on('click', '.rumus_cepat_rambat_gelombang3', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="panjang_gelombang" class="form-label">Panjang Gelombang : </label>
        <input type="number" class="form-control" id="panjang_gelombang" name="panjang_gelombang" autocomplete="off" placeholder="Panjang Gelombang">
    </div>
    <div class="mb-5">
        <label for="periode" class="form-label">Periode : </label>
        <input type="number" class="form-control" id="periode" name="periode" autocomplete="off" placeholder="Periode">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_cepat_rambat_gelombang3">Cepat Rambat Gelombang 3</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung Fisika Energi Potensial Ep
    $('.bab_materi').on('click', '.rumus_energi_potensial_ep', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="massa" class="form-label">Massa : </label>
        <input type="number" class="form-control" id="massa" name="massa" autocomplete="off" placeholder="Massa">
    </div>
    <div class="mb-3">
        <label for="tinggi" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi" name="tinggi" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-5">
        <label for="gravitasi" class="form-label">Gravitasi : </label>
        <input type="number" class="form-control" id="gravitasi" name="gravitasi" autocomplete="off" placeholder="Gravitasi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_energi_potensial_ep">Energi Potensial</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Energi Potensial Massa
    $('.bab_materi').on('click', '.rumus_energi_potensial_massa', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="energi_potensial" class="form-label">Energi Potensial : </label>
        <input type="number" class="form-control" id="energi_potensial" name="energi_potensial" autocomplete="off" placeholder="Energi Potensial">
    </div>
    <div class="mb-3">
        <label for="tinggi" class="form-label">Tinggi : </label>
        <input type="number" class="form-control" id="tinggi" name="tinggi" autocomplete="off" placeholder="Tinggi">
    </div>
    <div class="mb-5">
        <label for="gravitasi" class="form-label">Gravitasi : </label>
        <input type="number" class="form-control" id="gravitasi" name="gravitasi" autocomplete="off" placeholder="Gravitasi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_energi_potensial_massa">Massa</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Energi Potensial Tinggi
    $('.bab_materi').on('click', '.rumus_energi_potensial_tinggi', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="energi_potensial" class="form-label">Energi Potensial : </label>
        <input type="number" class="form-control" id="energi_potensial" name="energi_potensial" autocomplete="off" placeholder="Energi Potensial">
    </div>
    <div class="mb-3">
        <label for="massa" class="form-label">Massa : </label>
        <input type="number" class="form-control" id="massa" name="massa" autocomplete="off" placeholder="Massa">
    </div>
    <div class="mb-5">
        <label for="gravitasi" class="form-label">Gravitasi : </label>
        <input type="number" class="form-control" id="gravitasi" name="gravitasi" autocomplete="off" placeholder="Gravitasi">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_energi_potensial_tinggi">Tinggi</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung Fisika Energi Kinetik Ek
    $('.bab_materi').on('click', '.rumus_energi_kinetik_ek', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="massa" class="form-label">Massa : </label>
        <input type="number" class="form-control" id="massa" name="massa" autocomplete="off" placeholder="Massa">
    </div>
    <div class="mb-5">
        <label for="kecepatan" class="form-label">Kecepatan : </label>
        <input type="number" class="form-control" id="kecepatan" name="kecepatan" autocomplete="off" placeholder="Kecepatan">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_energi_kinetik_ek">Energi Kinetik</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Energi Kinetik massa
    $('.bab_materi').on('click', '.rumus_energi_kinetik_massa', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="energi_kinetik" class="form-label">Energi Kinetik : </label>
        <input type="number" class="form-control" id="energi_kinetik" name="energi_kinetik" autocomplete="off" placeholder="Energi Kinetik">
    </div>
    <div class="mb-5">
        <label for="kecepatan" class="form-label">Kecepatan : </label>
        <input type="number" class="form-control" id="kecepatan" name="kecepatan" autocomplete="off" placeholder="Kecepatan">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_energi_kinetik_massa">Massa</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Energi Kinetik kecepatan
    $('.bab_materi').on('click', '.rumus_energi_kinetik_kecepatan', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="energi_kinetik" class="form-label">Energi Kinetik : </label>
        <input type="number" class="form-control" id="energi_kinetik" name="energi_kinetik" autocomplete="off" placeholder="Energi Kinetik">
    </div>
    <div class="mb-5">
        <label for="massa" class="form-label">Massa : </label>
        <input type="number" class="form-control" id="massa" name="massa" autocomplete="off" placeholder="Massa">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_energi_kinetik_kecepatan">Kecepatan</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });


    // Menampilkan tempat menghitung Fisika Rankaian Listrik Tegangan Listrik
    $('.bab_materi').on('click', '.rumus_rl_tegangan_listrik', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="arus_listrik" class="form-label">Arus Listrik : </label>
        <input type="number" class="form-control" id="arus_listrik" name="arus_listrik" autocomplete="off" placeholder="Arus Listrik">
    </div>
    <div class="mb-5">
        <label for="hambatan_listrik" class="form-label">Hambatan Listrik : </label>
        <input type="number" class="form-control" id="hambatan_listrik" name="hambatan_listrik" autocomplete="off" placeholder="Hambatan Listrik">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_rl_tegangan_listrik">Tegangan Listrik</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Rankaian Listrik Arus Listrik
    $('.bab_materi').on('click', '.rumus_rl_arus_listrik', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
<form action="" method="post">

    <div class="mb-3">
        <label for="tegangan_listrik" class="form-label">Tegangan Listrik : </label>
        <input type="number" class="form-control" id="tegangan_listrik" name="tegangan_listrik" autocomplete="off" placeholder="Tegangan Listrik">
    </div>
    <div class="mb-5">
        <label for="hambatan_listrik" class="form-label">Hambatan Listrik : </label>
        <input type="number" class="form-control" id="hambatan_listrik" name="hambatan_listrik" autocomplete="off" placeholder="Hambatan Listrik">
    </div>
    <div class="mb-3">
        <button type="submit" class="btn tombol_hitung" name="menghitung_rl_arus_listrik">Arus Listrik</button>
    </div>

</form>
`);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });
    // Menampilkan tempat menghitung Fisika Rankaian Listrik hambatan Listrik
    $('.bab_materi').on('click', '.rumus_rl_hambatan_listrik', function() {
        $('.card').addClass('menampilkan_dari_atas');

        $('.card-body.satu').html(`
            <form action="" method="post">

                <div class="mb-3">
                    <label for="tegangan_listrik" class="form-label">Tegangan Listrik : </label>
                    <input type="number" class="form-control" id="tegangan_listrik" name="tegangan_listrik" autocomplete="off" placeholder="Tegangan Listrik">
                </div>
                <div class="mb-5">
                    <label for="arus_listrik" class="form-label">Arus Listrik : </label>
                    <input type="number" class="form-control" id="arus_listrik" name="arus_listrik" autocomplete="off" placeholder="Arus Listrik">
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn tombol_hitung" name="menghitung_rl_hambatan_listrik">Hambatan Listrik</button>
                </div>

            </form>
        `);

        setTimeout(function() {
            $('.card').removeClass('menampilkan_dari_atas');
        }, 2000);
    });

});