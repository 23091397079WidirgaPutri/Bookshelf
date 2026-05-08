# 📚 BookShelf App

## 📝 Deskripsi

BookShelf adalah aplikasi web berbasis React yang digunakan untuk mencatat dan mengelola koleksi buku pribadi. Aplikasi ini memungkinkan pengguna untuk menambahkan buku baru, melihat daftar buku, serta mengakses detail informasi setiap buku secara lengkap.

Pengguna juga dapat menandai status buku apakah sudah dibaca atau belum. Dengan tampilan yang sederhana dan interaktif, aplikasi ini membantu pengguna dalam mengelola aktivitas membaca secara lebih terstruktur.

---

## 🚀 Fitur Utama

* Menampilkan daftar buku
* Menambahkan buku baru
* Melihat detail buku (dynamic routing)
* Menandai buku sudah dibaca / belum
* Menghapus buku
* Navigasi multi halaman dengan React Router
* Halaman 404 (Not Found)

---

## 🧭 Routing Aplikasi

### 1. `/dashboard`

Halaman utama yang berisi pengenalan aplikasi BookShelf dan navigasi ke halaman lain.

### 2. `/books`

Menampilkan daftar semua buku yang tersedia.
Fitur:

* Tambah buku
* Hapus buku
* Tandai status baca
* Klik buku untuk melihat detail

### 3. `/books/:bookId` *(Dynamic Route)*

Menampilkan detail buku berdasarkan ID.
Informasi yang ditampilkan:

* Judul buku
* Penulis
* Tahun terbit
* Jumlah halaman
* Rating
* Deskripsi

Jika ID tidak ditemukan, pengguna akan diarahkan ke halaman 404.

### 4. `/about`

Berisi informasi mengenai aplikasi BookShelf.

### 5. `/contact`

Berisi informasi kontak seperti email, Instagram, dan lokasi.

### 6. `/not-found`

Halaman 404 yang muncul jika route tidak ditemukan.

---

## 🛠️ Teknologi yang Digunakan

* React JS
* React Router DOM
* JavaScript (ES6)
* CSS (Inline Styling)

---

## ⚙️ Cara Menjalankan Project

1. Clone repository

```bash
git clone https://github.com/username/bookshelf-app.git
```

2. Masuk ke folder project

```bash
cd bookshelf-app
```

3. Install dependencies

```bash
npm install
```

4. Jalankan project

```bash
npm run dev
```

5. Buka di browser

```bash
http://localhost:5173
```

---

## 📂 Struktur Folder (Sederhana)

```
src/
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── DashboardPage.jsx
│   ├── BooksPage.jsx
│   ├── BookDetailPage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🎯 Tujuan Pembuatan

Aplikasi ini dibuat untuk memenuhi tugas individu Front-End Development dengan fokus pada:

* Implementasi routing di React
* Penggunaan dynamic routing
* State management sederhana
* Pembuatan UI yang interaktif

