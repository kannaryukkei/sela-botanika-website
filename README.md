# Sela Botanika — konsep website

Konsep website satu halaman untuk eksperimen internal ADES. Brand, lokasi, penawaran, dan rentang harga pada halaman ini bersifat fiktif/simulasi; **bukan situs bisnis aktif dan bukan untuk dirilis apa adanya**.

## Pratinjau lokal

Tidak memerlukan dependensi atau proses build. Dengan Python 3:

```bash
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Batasan demo

- Tidak ada katalog stok aktual, checkout, pembayaran, pemesanan, atau registrasi workshop.
- Selector kebutuhan ruang hanya merangkum input secara lokal; bukan diagnosis botani atau rekomendasi spesies.
- Form minat hanya menyusun teks lokal untuk disalin; tidak mengirim data ke mana pun.
- Kontak, jadwal, lokasi kelas, dan ketersediaan belum dihubungkan atau ditetapkan.
- Semua ilustrasi SVG dibuat khusus untuk konsep ini dan bukan foto toko, staf, produk, atau inventaris aktual.
- Kisaran harga diberi label simulasi dan harus diganti/diotorisasi sebelum penggunaan nyata.

## Berkas

- `index.html` — HTML, CSS, SVG, dan JavaScript inline; tanpa layanan eksternal.
