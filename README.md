# 🚀 Personal Portfolio — React.js

Website portofolio pribadi modern dengan dark aesthetic, animasi halus, dan desain responsif.

## ✨ Fitur

- **Hero Section** — Typing animation, avatar, floating cards, tech stack
- **About Me** — Skill bars, stats, bio detail
- **Portfolio** — Project cards dengan GitHub & live demo links
- **MC Gallery** — Foto dokumentasi dengan modal preview
- **Experience** — Timeline animasi dengan color-coded badges
- **Hobbies** — Grid hobi + musik favorit dengan equalizer
- **Contact** — Form + social links

## 🛠️ Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (ready to use)
- Lucide React Icons
- React Router DOM

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production
npm run build
```

Buka [http://localhost:5173](http://localhost:5173)

## 📁 Struktur Folder

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Tiap section halaman
│   └── ui/           # Reusable UI components
├── data/
│   └── index.js      # 👈 Edit semua konten di sini
├── hooks/            # Custom React hooks
└── index.css         # Global styles & CSS variables
```

## ✏️ Cara Edit Konten

Semua konten ada di **`src/data/index.js`**. Edit file tersebut untuk mengganti:
- Nama, bio, email, social links
- Daftar project
- Event MC
- Pengalaman & organisasi
- Hobi & musik favorit

## 🌐 Deploy ke Vercel

1. Push ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import project
3. Framework: **Vite** (auto-detected)
4. Deploy! ✅

> File `vercel.json` sudah disiapkan untuk routing SPA.
