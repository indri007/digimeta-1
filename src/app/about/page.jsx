export const metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat DigimetaShop, toko buku online terpercaya dengan koleksi 5000+ judul eksklusif. Visi, misi, dan komitmen kami untuk Anda.',
}

export default function About(){ 
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light/30 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tentang DigimetaShop</h1>
          <p className="text-lg text-slate-600">Mitra terpercaya untuk semua kebutuhan buku digital Anda</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Siapa Kami?</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              DigimetaShop adalah toko buku online terpercaya yang telah melayani ribuan pembaca di seluruh Indonesia sejak 2020. 
              Kami menyediakan berbagai kategori buku digital dengan koleksi lebih dari 5.000 judul eksklusif dari penulis ternama dunia.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Dengan komitmen untuk menghadirkan pengalaman belanja buku yang mudah, cepat, dan menyenangkan, 
              kami terus berinovasi memberikan layanan terbaik untuk para pecinta buku di era digital.
            </p>
          </div>

          {/* Visi Misi */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-effect rounded-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Visi Kami</h3>
              <p className="text-slate-700 leading-relaxed">
                Menjadi platform terdepan dalam menyediakan akses mudah dan terjangkau 
                ke literatur berkualitas untuk mencerdaskan bangsa.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Misi Kami</h3>
              <ul className="text-slate-700 space-y-2">
                <li>• Menyediakan koleksi buku digital terlengkap</li>
                <li>• Memberikan layanan pelanggan terbaik</li>
                <li>• Mendukung budaya membaca di Indonesia</li>
                <li>• Inovasi teknologi untuk kemudahan akses</li>
              </ul>
            </div>
          </div>

          {/* Values */}
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Nilai-Nilai Kami</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold mb-2">Kepercayaan</h4>
                <p className="text-sm text-slate-600">Membangun hubungan jangka panjang dengan pelanggan</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Kecepatan</h4>
                <p className="text-sm text-slate-600">Layanan cepat dan responsif 24/7</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💎</div>
                <h4 className="font-bold mb-2">Kualitas</h4>
                <p className="text-sm text-slate-600">Hanya menyediakan buku berkualitas terbaik</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="font-bold mb-2">Inovasi</h4>
                <p className="text-sm text-slate-600">Terus berinovasi untuk pengalaman terbaik</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Pencapaian Kami</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <p className="text-slate-600">Judul Buku</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <p className="text-slate-600">Pelanggan Puas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <p className="text-slate-600">Buku Terjual</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-slate-600">Rating Pelanggan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Bergabunglah dengan Komunitas Pembaca</h2>
          <p className="text-lg text-slate-700 mb-8">Dapatkan akses ke ribuan buku berkualitas dan nikmati pengalaman membaca yang tak terlupakan</p>
          <a href="https://wa.me/6282141733187" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
            Mulai Berbelanja Sekarang
          </a>
        </div>
      </section>
    </>
  )
}