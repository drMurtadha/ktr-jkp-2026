# Kem Pembentukan JKP Kolej Tun Razak

Laman GitHub Pages dan pembentangan bagi malam **16 Oktober 2026**. Bahasa Melayu; reka bentuk responsif berasaskan logo KTR yang dibekalkan. Pakej statik HTML/CSS/JavaScript tanpa pemasangan atau proses binaan. Fail berfungsi secara setempat; internet diperlukan untuk membuka sumber luar.

## Kandungan

- `index.html`: laman acara, lima tema, ucapan penuh, rujukan dan aset.
- `deck.html`, `deck.css`, `deck.js`: dek interaktif 11 slaid, skrin penuh, keyboard, nota dan paparan penyampai.
- `slides-data.js`: kandungan slaid yang dimuatkan pelayar; **sunting fail ini untuk mengubah slaid**.
- `slides.json`: salinan data untuk rujukan/pertukaran; jika menyunting, segerakkan dengan `slides-data.js`.
- `UCAPAN.md`: teks ucapan 8–10 minit, bergantung pada tempo.
- `SUMBER.md`: sumber rasmi, konteks pengesahan dan perkara belum disahkan.
- `assets/`: kelima-lima aset asal, tanpa perubahan identiti logo.
- `.nojekyll`: memastikan fail statik disajikan terus.

## Guna malam ini

1. Ekstrak ZIP. Buka `index.html` dalam pelayar moden atau terbitkan ke GitHub Pages dahulu.
2. Pilih **Mulakan pembentangan**. Untuk pembentangan paling selesa, pilih **Buka slaid dalam tab baharu**.
3. Klik ruang slaid, kemudian gunakan ← / → atau Space. Home ke awal, End ke akhir; Page Up / Page Down juga disokong.
4. Klik **Skrin penuh** atau tekan F. Esc keluar. Jika API skrin penuh tidak tersedia, mod paparan besar digunakan; Esc menutupnya.
5. Klik **Penyampai** atau P untuk tetingkap nota berasingan. Benarkan pop-up jika disekat. Letak tetingkap nota pada skrin komputer dan tetingkap slaid pada projektor dengan mod paparan lanjutan (extended display).
6. Nota N dipaparkan **pada slaid dan turut kelihatan kepada penonton**. Untuk nota peribadi, gunakan tetingkap penyampai; jangan cerminkan skrin yang sama ke projektor.
7. Paparan penyampai mempunyai masa berjalan, nota dan tajuk seterusnya; kawal slaid dari mana-mana tetingkap. Penyegerakan menggunakan BroadcastChannel pada origin dan laluan yang sama. Untuk penyegerakan yang boleh diharap, guna GitHub Pages atau pelayan localhost; sekatan `file://` berbeza mengikut pelayar.
8. Cetak dek melalui butang **Cetak** lalu pilih Save as PDF jika perlu. Semua slaid dan nota disertakan dalam cetakan; jangan edarkan cetakan nota sebagai slaid penonton tanpa semakan.

Pintasan keyboard tidak mengganggu butang, pautan atau pemilih yang sedang difokuskan. Selepas klik kawalan, klik semula ruang slaid untuk menggunakan pintasan.

## Deployment GitHub Pages melalui pelayar (disyorkan)

1. Log masuk GitHub anda. Cipta repositori baharu, contohnya `ktr-jkp-2026`. Pilih **Public** untuk laluan GitHub Pages percuma yang lazim; repositori persendirian bergantung pada pelan akaun.
2. Ekstrak ZIP. Dalam repositori, pilih **Add file → Upload files**. Muat naik **isi dalam folder `ktr-jkp-2026`**, termasuk folder `assets`, ke akar repositori. Jangan hanya memuat naik ZIP atau meletakkan `index.html` di bawah satu folder tambahan.
3. Pastikan `.nojekyll` turut dimuat naik (sesetengah pemilih menyembunyikan fail bertitik); ketiadaannya tidak mengubah fungsi asas pakej ini.
4. Commit ke cabang `main`.
5. Buka **Settings → Pages → Build and deployment**. Pilih **Deploy from a branch**, cabang **main**, folder **/(root)**, kemudian **Save**.
6. Tunggu penerbitan selesai. Semak tab **Actions** atau status pada halaman Pages jika belum tersedia.
7. Buka alamat yang diberikan GitHub. Bagi repositori projek, pola lazimnya `https://NAMA-PENGGUNA.github.io/ktr-jkp-2026/`. Ganti nama pengguna dan repositori dengan nilai sebenar; jangan gunakan contoh itu secara literal.
8. Uji pautan `/deck.html`, logo, ucapan, sumber, skrin penuh dan nota dari alamat terbitan sebelum acara.

Untuk akaun yang menyekat Pages atau pilihan branch, rujuk pentadbir dan dokumentasi GitHub semasa. Laman acara tersedia di https://drmurtadha.github.io/ktr-jkp-2026/. Perubahan pada cabang main diterbitkan melalui GitHub Pages.

## Pilihan terminal

Dari folder pakej yang diekstrak, dengan Git dipasang:

```sh
git init
git add .
git commit -m "Sediakan laman Kem JKP Kolej Tun Razak"
git branch -M main
```

Cipta repositori kosong di GitHub. Salin **URL repositori anda sendiri** daripada GitHub, kemudian gunakan sebagai argumen kepada `git remote add origin`. Selepas itu:

```sh
git push -u origin main
```

Aktifkan Pages melalui Settings seperti di atas. Jangan jalankan `git init` di repositori lain yang sudah mengandungi kerja anda. Gunakan folder pakej berasingan.

## Pratonton localhost

Jika Python 3 tersedia, jalankan dari folder pakej:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Buka `http://127.0.0.1:8080`. Hentikan dengan Ctrl+C. Gunakan pelayar dan origin sama untuk slaid serta penyampai. Tiada akaun, pangkalan data, borang penghuni atau kunci API diperlukan.

## Arahan pelaksanaan dan penyuntingan

1. Kekalkan ejaan **Kolej Tun Razak** pada tajuk, teks, alt logo dan slaid.
2. Kekalkan Bahasa Melayu dan tarikh acara. Jangan mencipta nama penyampai, lokasi khusus, waktu tepat, jawatan tetamu atau penaja yang belum diberikan.
3. Lima tema ialah olahan tema perkongsian acara, bukan transkrip TNC. Nyatakan pemisahan fakta sumber dan huraian acara secara jelas.
4. Employer Reputation ialah reputasi institusi dalam kalangan majikan. Jangan samakan dengan kadar kebolehpasaran graduan atau menjanjikan kenaikan skor QS melalui kegiatan JKP.
5. **Ulul Albab dan Kolej Akademia ialah dua inisiatif berasingan** dalam perkongsian acara. Jangan mengarang modul, syarat, jadual atau dakwaan pelaksanaan di KTR. Sesi belajar rakan sebaya ialah usaha JKP sendiri.
7. Sunting teks laman dalam `index.html` dan teks ucapan dalam `UCAPAN.md` bersama-sama untuk konsistensi. Slaid disunting dalam `slides-data.js`; segerakkan `slides.json`. Jangan ubah nama aset tanpa mengemas kini semua pautan.
8. Kekalkan fail logo asal. Logo 01 digunakan pada latar cerah, logo 02 pada dek marun; logo 03 dan pratonton disediakan sebagai bahan rujukan. PDF asal boleh dimuat turun. Tiada logo UTM tambahan dicipta.
9. Semua pautan aset relatif supaya berfungsi di bawah sublaluan repositori GitHub Pages. Tiada CDN atau font luar diperlukan.
10. Sahkan sapaan protokol dan kuasa perasmian dengan penyampai sebelum digunakan. Draf lafaz perasmian boleh disunting jika format acara berbeza.

## Semakan penerimaan

- Desktop dan telefon: tiada tatal mendatar pada halaman utama; jadual mempunyai tatal sendiri.
- Semua logo dipaparkan tanpa herotan; kelima-lima fail tersedia dalam `assets`.
- Dek boleh bergerak melalui butang, pemilih dan keyboard; tidak melepasi slaid pertama/terakhir.
- F/Esc, nota N, pop-up penyampai dan penyegerakan berfungsi pada pelayar acara.
- Nota peribadi tidak berada pada skrin projektor. Jika satu skrin sahaja, tutup nota ketika persembahan.
- Ucapan penuh dan sumber boleh dicapai serta dimuat turun.
- Sumber rasmi dipaut terus dan perkara belum disahkan dilabelkan.
- Semua paparan berfungsi tanpa rangkaian selepas fail dimuat turun; sumber luar memerlukan internet. Tiada service worker, jadi jangan menganggap laman yang pernah dibuka sentiasa tersedia luar talian.

## Sumber deployment

Dokumentasi rasmi GitHub: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Identiti dan penerbitan

Aset dibekalkan pengguna dan disertakan untuk bahan acara ini. Tiada lesen baharu diberikan ke atas logo. Ini bahan acara, bukan portal rasmi universiti. Jangan muat naik maklumat peribadi penghuni atau rekod aduan ke repositori awam.

## Kemas kini persembahan

Logo KTR dipaparkan lebih besar di kiri pada laman utama dan setiap slaid. Ruang lutsinar pada imej diatasi melalui paparan CSS, tanpa mengubah fail logo asal. Bahasa ucapan dan slaid dilunakkan. Dek mengandungi 11 slaid. Kandungan laman web dan fail sokongan diselaraskan dengan pembentangan.
