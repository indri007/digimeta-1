import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

export default function Home(){
  return (
    <>
      <Hero />
      
      {/* Koleksi Populer */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Koleksi Populer</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Temukan kategori buku terlengkap dengan kualitas terbaik untuk semua kebutuhan bacaan Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Novel Bestsellers" 
              desc="Koleksi fiksi populer dan rekomendasi tiap bulan dari penulis ternama dunia."
              icon="📖"
            />
            <ServiceCard 
              title="Bisnis & Marketing" 
              desc="Ebook strategi bisnis dan pemasaran praktis untuk mengembangkan karir Anda."
              icon="💼"
            />
            <ServiceCard 
              title="Self Growth" 
              desc="Judul pengembangan diri untuk inspirasi dan motivasi dalam kehidupan sehari-hari."
              icon="🌱"
            />
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-20 bg-gradient-to-br from-primary-light/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mengapa Pilih DigimetaShop?</h2>
            <p className="text-lg text-slate-600">Pengalaman belanja buku digital terbaik dengan layanan premium</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 glass-effect rounded-2xl hover-lift">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Instant Download</h3>
              <p className="text-sm text-slate-600">Dapatkan buku langsung setelah pembayaran</p>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl hover-lift">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold text-lg mb-2">Aman & Terpercaya</h3>
              <p className="text-sm text-slate-600">Transaksi aman dengan garansi uang kembali</p>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl hover-lift">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-lg mb-2">Multi Format</h3>
              <p className="text-sm text-slate-600">PDF, Kindle, Mobi - semua format tersedia</p>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl hover-lift">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Request Khusus</h3>
              <p className="text-sm text-slate-600">Buku langka? Kami carikan untuk Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Testimoni Pembaca</h2>
            <p className="text-lg text-slate-600">Apa kata mereka yang sudah merasakan layanan kami</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 glass-effect rounded-2xl hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩</span>
                </div>
                <div>
                  <h4 className="font-bold">Rina Sari</h4>
                  <p className="text-sm text-slate-600">Mahasiswa</p>
                </div>
              </div>
              <p className="text-slate-700 italic">"Pelayanan cepat dan koleksinya lengkap! Sangat membantu untuk tugas kuliah saya."</p>
              <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="p-8 glass-effect rounded-2xl hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨</span>
                </div>
                <div>
                  <h4 className="font-bold">Budi Santoso</h4>
                  <p className="text-sm text-slate-600">Entrepreneur</p>
                </div>
              </div>
              <p className="text-slate-700 italic">"Bisa request buku langka, sangat membantu untuk riset bisnis saya."</p>
              <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="p-8 glass-effect rounded-2xl hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩‍💼</span>
                </div>
                <div>
                  <h4 className="font-bold">Maya Indira</h4>
                  <p className="text-sm text-slate-600">Marketing Manager</p>
                </div>
              </div>
              <p className="text-slate-700 italic">"Harga terjangkau dengan kualitas premium. Recommended banget!"</p>
              <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Siap Mulai Membaca?</h2>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">Bergabunglah dengan ribuan pembaca yang sudah merasakan kemudahan berbelanja buku di DigimetaShop</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              Lihat Koleksi
            </a>
            <a href="https://wa.me/6282141733187" className="px-8 py-4 border-2 border-white text-slate-900 hover:bg-white hover:text-slate-900 rounded-full font-semibold transition-all duration-300 hover-lift">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
