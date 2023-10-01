# Cara Menjalankan Aplikasi dengan Docker Compose

Aplikasi ini menggunakan Docker Compose untuk mengelola lingkungan pengembangan. Anda dapat mengikuti langkah-langkah berikut untuk menjalankan aplikasi.

## Prasyarat

Pastikan Anda memiliki Docker dan Docker Compose diinstal di komputer Anda. Jika belum, Anda dapat mengunduhnya dari [situs resmi Docker](https://docs.docker.com/get-docker/) dan [Docker Compose](https://docs.docker.com/compose/install/).

## Menjalankan Aplikasi

1. Buka terminal dan navigasi ke direktori proyek Anda.

2. Jalankan perintah berikut untuk membangun dan menjalankan semua kontainer Docker:

   ```bash
   docker-compose up -d
   
Perintah ini akan membangun dan menjalankan kontainer-kontainer yang didefinisikan dalam berkas docker-compose.yml dan menjalankannya dalam mode detas (background).

1. Setelah semua kontainer berjalan, aplikasi Anda akan dapat diakses di http://localhost:3000.

## Mengakses Endpoints
Setelah aplikasi berjalan, Anda dapat mengakses beberapa endpoint melalui browser atau alat HTTP seperti curl atau wget.

Endpoint untuk pengguna: http://localhost:3000/users
Endpoint untuk perusahaan: http://localhost:3000/companies

## Menghentikan Aplikasi
Untuk menghentikan aplikasi dan menghentikan kontainer-kontainer Docker:

    bash
    docker-compose down
    
Ini akan menghapus kontainer-kontainer yang dijalankan oleh Docker Compose