# 📚 DigimetaShop — Toko Buku & eBook Terlengkap

Website toko buku digital modern yang dibangun dengan Next.js 13, React, dan Tailwind CSS.

## ✨ Fitur Utama

### 🎨 Design & UI
- **Glass Morphism Effects** - Desain modern dengan efek kaca transparan
- **Responsive Design** - Optimal di semua perangkat (mobile, tablet, desktop)
- **Smooth Animations** - Transisi dan animasi yang halus
- **Mobile Menu** - Hamburger menu untuk navigasi mobile

### 📖 Halaman
- **Homepage** - Hero section dengan book slider, koleksi populer, testimoni
- **Services** - Katalog layanan dan kategori buku lengkap dengan pricing
- **About** - Profil perusahaan, visi misi, nilai-nilai, dan pencapaian
- **Teams** - Tim profesional Indonesia dengan foto dan bio
- **Blog** - Artikel dan tips seputar literasi digital
- **Contact** - Form kontak terintegrasi WhatsApp dengan info lengkap

### 🚀 Fitur Teknis
- **Next.js 13** - App Router dengan Server Components
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Performance** - Image optimization, lazy loading, code splitting
- **Security Headers** - XSS protection, CSP, dan lainnya
- **PWA Ready** - Web App Manifest untuk installable app
- **Error Handling** - Custom 404 page dan loading states

## 🛠️ Teknologi

- **Framework**: Next.js 13.5.4
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.5
- **SEO**: next-seo 5.2.0
- **Icons**: Emoji (native)

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🏗️ Build & Deploy

```bash
# Build untuk production
npm run build

# Jalankan production server
npm start
```

### Deploy ke Vercel
1. Push code ke GitHub
2. Import project di Vercel
3. Deploy otomatis!

## 📁 Struktur Folder

```
digimetashop-nextjs/
├── public/
│   ├── books/          # Cover buku
│   ├── manifest.json   # PWA manifest
│   ├── robots.txt      # SEO robots
│   └── sitemap.xml     # SEO sitemap
├── src/
│   ├── app/
│   │   ├── about/      # Halaman About
│   │   ├── blog/       # Halaman Blog
│   │   ├── contact/    # Halaman Contact
│   │   ├── services/   # Halaman Services
│   │   ├── teams/      # Halaman Teams
│   │   ├── globals.css # Global styles
│   │   ├── layout.jsx  # Root layout
│   │   ├── page.jsx    # Homepage
│   │   ├── loading.jsx # Loading state
│   │   └── not-found.jsx # 404 page
│   └── components/
│       ├── BookSlider.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── Navbar.jsx
│       ├── ServiceCard.jsx
│       ├── TeamCard.jsx
│       └── Watermark.jsx
├── next.config.js      # Next.js config
├── next-seo.config.js  # SEO config
├── tailwind.config.js  # Tailwind config
└── package.json
```

## 🎨 Customization

### Warna Brand
Edit `tailwind.config.js`:
```js
colors: { 
  primary: '#A7D8FF',
  'primary-dark': '#7CC4FA',
  'primary-light': '#D1E9FF'
}
```

### Kontak WhatsApp
Ganti nomor di semua file:
```
https://wa.me/6282141733187
```

### Domain
Update di:
- `next-seo.config.js`
- `public/sitemap.xml`
- `public/robots.txt`

## 📱 Fitur WhatsApp Integration

Semua CTA button terintegrasi dengan WhatsApp untuk:
- Konsultasi langsung
- Request buku
- Pemesanan
- Customer support

## 🔒 Security Features

- XSS Protection
- Content Security Policy
- X-Frame-Options
- Referrer Policy
- Permissions Policy

## 📈 SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Cards
- Structured data ready
- Sitemap.xml dengan priority
- Robots.txt
- Canonical URLs
- Alt text untuk gambar

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2024 DigimetaShop. All rights reserved.

## 📞 Kontak

- WhatsApp: [+62 821-4173-3187](https://wa.me/6282141733187)
- Email: info@digimetashop.id
- Website: [www.digimetashop.com](https://www.digimetashop.com)

---

**Happy Reading! 📚**
