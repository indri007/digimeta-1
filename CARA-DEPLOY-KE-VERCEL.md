# 🚀 Cara Deploy Pembaruan ke Vercel

## Status Saat Ini:
✅ Semua perubahan sudah di-commit
❌ Perlu push ke GitHub (ada masalah permission)

## Pilihan Deploy:

---

## 🎯 CARA 1: Push Manual dengan GitHub Desktop (PALING MUDAH)

1. **Download GitHub Desktop** (jika belum punya):
   https://desktop.github.com/

2. **Buka GitHub Desktop**

3. **Klik "Push origin"** di bagian atas

4. **Login dengan akun GitHub Anda** jika diminta

5. **Vercel akan otomatis deploy** dalam 1-2 menit

---

## 🎯 CARA 2: Push via Command Line dengan Token

### Langkah 1: Buat Personal Access Token

1. Buka: https://github.com/settings/tokens
2. Klik "Generate new token" → "Generate new token (classic)"
3. Beri nama: `Vercel Deploy Token`
4. Centang: `repo` (full control)
5. Klik "Generate token"
6. **COPY TOKEN** (hanya muncul sekali!)

### Langkah 2: Push dengan Token

Jalankan di terminal (ganti `YOUR_TOKEN` dengan token Anda):

```bash
git push https://YOUR_TOKEN@github.com/digimetateam-hash/digimeta.git main
```

---

## 🎯 CARA 3: Deploy Langsung dari Vercel Dashboard

1. **Buka Vercel Dashboard**: https://vercel.com/dashboard

2. **Pilih project "digimeta"**

3. **Klik tab "Deployments"**

4. **Klik "Redeploy"** → Pilih latest commit

5. **Tunggu 1-2 menit** hingga selesai

---

## 🎯 CARA 4: Upload Manual ke GitHub Web

1. **Buka**: https://github.com/digimetateam-hash/digimeta

2. **Klik "Add file" → "Upload files"**

3. **Drag & drop semua file yang berubah:**
   - `next.config.js`
   - `src/app/page.jsx`
   - `src/components/BookSlider.jsx`
   - `src/components/BookCard.jsx`
   - `src/components/BookCovers.jsx`
   - `src/components/Hero.jsx`
   - `src/components/Navbar.jsx`
   - `tailwind.config.js`
   - `src/app/globals.css`

4. **Commit message**: "Update website dengan slider dan katalog buku"

5. **Klik "Commit changes"**

6. **Vercel akan auto-deploy**

---

## ✅ Verifikasi Deploy Berhasil:

1. Buka Vercel Dashboard
2. Lihat status deployment (harus "Ready")
3. Klik "Visit" untuk melihat website live
4. Cek apakah perubahan sudah muncul

---

## 🔗 Link Penting:

- **GitHub Repo**: https://github.com/digimetateam-hash/digimeta
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Website Live**: https://verdant-cheesecake-fa3cce.netlify.app (atau domain Vercel Anda)

---

## 💡 Tips:

- Gunakan **GitHub Desktop** untuk cara termudah
- Simpan **Personal Access Token** di tempat aman
- Vercel auto-deploy setiap kali ada push ke branch `main`
- Deploy biasanya selesai dalam 1-2 menit

---

## 🆘 Jika Masih Error:

Beritahu saya error message yang muncul, dan saya akan bantu troubleshoot!
