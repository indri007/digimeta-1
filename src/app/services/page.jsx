import ServiceCard from '../../components/ServiceCard'

export const metadata = {
  title: 'Layanan & Kategori',
  description: 'Temukan berbagai layanan premium DigimetaShop untuk semua kebutuhan buku digital Anda. Ebook PDF, Kindle, Mobi dengan harga terjangkau.',
}

export default function Services(){ 
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light/30 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Layanan & Kategori</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">Temukan berbagai layanan premium kami untuk memenuhi semua kebutuhan bacaan digital Anda</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Layanan Utama</h2>
            <p className="text-lg text-slate-600">Pilihan lengkap untuk semua kebutuhan buku digital Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Ebook Premium" 
              desc="Koleksi lengkap ebook dalam format PDF, Kindle, dan Mobi dengan kualitas terbaik dan harga terjangkau."
              icon="📚"
              link="https://lynk.id/digimetashop007"
            />
            <ServiceCard 
              title="Request Buku Langka" 
              desc="Tidak menemukan buku yang dicari? Kami siap membantu mencari dan menyediakan buku langka sesuai kebutuhan Anda."
              icon="🔍"
              link="/request-buku-langka"
            />
            <ServiceCard 
              title="Paket Koleksi & Gift" 
              desc="Paket bundling hemat untuk koleksi buku seri atau hadiah spesial untuk orang terkasih."
              icon="🎁"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Kategori Buku</h2>
            <p className="text-lg text-slate-600">Lebih dari 5000+ judul dalam berbagai kategori</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="https://www.tiktok.com/@ibuibu_digiital" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl text-center hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-bold text-lg mb-2">Bisnis & Keuangan</h3>
              <p className="text-sm text-slate-600">500+ judul</p>
            </a>
            <a href="https://www.tiktok.com/@sofskillleadership" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl text-center hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-bold text-lg mb-2">Pengembangan Diri</h3>
              <p className="text-sm text-slate-600">800+ judul</p>
            </a>
            <a href="https://www.tiktok.com/@ebookfiksi.id" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl text-center hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-bold text-lg mb-2">Novel & Fiksi</h3>
              <p className="text-sm text-slate-600">1200+ judul</p>
            </a>
            <a href="https://www.tiktok.com/@digimetashop" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl text-center hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-bold text-lg mb-2">Pendidikan</h3>
              <p className="text-sm text-slate-600">600+ judul</p>
            </a>
            <a href="https://www.tiktok.com/@codingdeveloper.id" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl text-center hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2">Teknologi</h3>
              <p className="text-sm text-slate-600">400+ judul</p>
            </a>
            <a href="https://www.tiktok.com/@digimeta007.com" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl text-center hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="font-bold text-lg mb-2">Kuliner & Lifestyle</h3>
              <p className="text-sm text-slate-600">300+ judul</p>
            </a>
            <a href="https://www.tiktok.com/@ebookhidupsehat" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl text-center hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-bold text-lg mb-2">Kesehatan</h3>
              <p className="text-sm text-slate-600">250+ judul</p>
            </a>
            <a href="https://www.tiktok.com/@parentwise.id" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl text-center hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-lg mb-2">Seni & Kreativitas</h3>
              <p className="text-sm text-slate-600">200+ judul</p>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Harga Terjangkau</h2>
            <p className="text-lg text-slate-600">Nikmati buku berkualitas dengan harga yang ramah di kantong</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 glass-effect rounded-2xl text-center hover-lift">
              <h3 className="text-xl font-bold mb-4">Buku Reguler</h3>
              <div className="text-3xl font-bold text-primary mb-4">Rp 15K - 25K</div>
              <ul className="text-sm text-slate-600 space-y-2 mb-6">
                <li>✓ Format PDF/Kindle/Mobi</li>
                <li>✓ Kualitas Original</li>
                <li>✓ Download Selamanya</li>
              </ul>
              <a href="https://wa.me/6282141733187" className="block w-full py-3 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold transition-all duration-300">
                Pesan Sekarang
              </a>
            </div>
            <div className="p-8 glass-effect rounded-2xl text-center hover-lift border-2 border-primary">
              <div className="bg-primary text-slate-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">POPULER</div>
              <h3 className="text-xl font-bold mb-4">Paket Bundling</h3>
              <div className="text-3xl font-bold text-primary mb-4">Rp 50K - 100K</div>
              <ul className="text-sm text-slate-600 space-y-2 mb-6">
                <li>✓ 5-10 Buku Seri</li>
                <li>✓ Hemat hingga 40%</li>
                <li>✓ Bonus Eksklusif</li>
              </ul>
              <a href="https://wa.me/6282141733187" className="block w-full py-3 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold transition-all duration-300">
                Pesan Sekarang
              </a>
            </div>
            <div className="p-8 glass-effect rounded-2xl text-center hover-lift">
              <h3 className="text-xl font-bold mb-4">Request Khusus</h3>
              <div className="text-3xl font-bold text-primary mb-4">Rp 30K - 50K</div>
              <ul className="text-sm text-slate-600 space-y-2 mb-6">
                <li>✓ Buku Langka/Rare</li>
                <li>✓ Pencarian Khusus</li>
                <li>✓ Garansi Tersedia</li>
              </ul>
              <a href="https://wa.me/6282141733187" className="block w-full py-3 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold transition-all duration-300">
                Konsultasi
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}