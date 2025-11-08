import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import BookCard from '../components/BookCard'

const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://m.media-amazon.com/images/I/51Tlm0GZTXL.jpg",
      price: 45000,
      originalPrice: 89000,
      discount: 49,
      rating: "4.9",
      category: "Pengembangan Diri",
      categoryBg: "bg-blue-100",
      categoryText: "text-blue-700",
      bgGradient: "from-blue-50 to-white",
      limited: true,
      color: "dbeafe",
      colorDark: "93c5fd"
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      image: "/books/OIP.svg",
      price: 50000,
      originalPrice: 95000,
      discount: 47,
      rating: "5.0",
      category: "Keuangan & Investasi",
      categoryBg: "bg-green-100",
      categoryText: "text-green-700",
      bgGradient: "from-green-50 to-white",
      badge: "⭐ Bestseller",
      color: "d1fae5",
      colorDark: "6ee7b7"
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      image: "/books/Deep-Work-by-Cal-Newport-Book.svg",
      price: 42000,
      originalPrice: 85000,
      discount: 51,
      rating: "4.8",
      category: "Produktivitas",
      categoryBg: "bg-purple-100",
      categoryText: "text-purple-700",
      bgGradient: "from-purple-50 to-white",
      limited: true,
      color: "e9d5ff",
      colorDark: "c084fc"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      image: "/books/rich-dad-poor-dad-9.svg",
      price: 48000,
      originalPrice: 92000,
      discount: 48,
      rating: "4.7",
      category: "Keuangan Pribadi",
      categoryBg: "bg-amber-100",
      categoryText: "text-amber-700",
      bgGradient: "from-amber-50 to-white",
      color: "fef3c7",
      colorDark: "fbbf24"
    },
    {
      title: "The Warren Buffett Way",
      author: "Robert G. Hagstrom",
      image: "/books/71MDz2FR1dL._SL1500_.svg",
      price: 52000,
      originalPrice: 104000,
      discount: 50,
      rating: "4.6",
      category: "Investasi",
      categoryBg: "bg-indigo-100",
      categoryText: "text-indigo-700",
      bgGradient: "from-indigo-50 to-white",
      limited: true,
      color: "e0e7ff",
      colorDark: "818cf8"
    }
  ]

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

      {/* Flash Sale Banner */}
      <section className="py-8 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-4">
              <div className="text-5xl animate-bounce">🎉</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Flash Sale Hari Ini!</h3>
                <p className="text-white/90">Diskon hingga 50% untuk semua buku pilihan</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs">Jam</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">34</div>
                <div className="text-xs">Menit</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">56</div>
                <div className="text-xs">Detik</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Katalog Buku Terlaris */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">🔥 Promo Spesial</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Buku Terlaris Minggu Ini</h2>
            <p className="text-lg text-slate-600">Pilihan terbaik dari koleksi kami dengan diskon hingga 50%</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
          
          {/* CTA untuk melihat lebih banyak */}
          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              Lihat Semua Koleksi
              <span className="text-xl">→</span>
            </a>
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

      {/* Testimoni - SECTION INI TETAP */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Testimoni Pembaca</h2>
            <p className="text-lg text-slate-600">Apa kata mereka yang sudah merasakan layanan kami</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* TESTIMONI CARDS TETAP DISINI */}
            <div className="text-center p-6 glass-effect rounded-2xl hover-lift">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">-49%</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/0 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="https://m.media-amazon.com/images/I/51Tlm0GZTXL.jpg" 
                  alt="Atomic Habits"
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-slate-500 ml-1">(4.9)</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Atomic Habits</h3>
                <p className="text-sm text-slate-600 mb-1">James Clear</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Pengembangan Diri</span>
                  <span className="text-xs text-red-600 font-semibold">🔥 Stok Terbatas</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">Rp 45.000</span>
                  <span className="text-sm text-slate-400 line-through">Rp 89.000</span>
                </div>
                <a 
                  href="https://wa.me/6282141733187?text=Halo,%20saya%20tertarik%20dengan%20buku%20Atomic%20Habits%20(Rp%2045.000)" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                >
                  🛒 Beli Sekarang
                </a>
              </div>
            </div>

            {/* The Psychology of Money */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 relative group">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">-47%</span>
              </div>
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">⭐ Bestseller</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100/0 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/books/OIP.svg" 
                  alt="The Psychology of Money"
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-slate-500 ml-1">(5.0)</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Psychology of Money</h3>
                <p className="text-sm text-slate-600 mb-1">Morgan Housel</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Keuangan & Investasi</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">Rp 50.000</span>
                  <span className="text-sm text-slate-400 line-through">Rp 95.000</span>
                </div>
                <a 
                  href="https://wa.me/6282141733187?text=Halo,%20saya%20tertarik%20dengan%20buku%20The%20Psychology%20of%20Money%20(Rp%2050.000)" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                >
                  🛒 Beli Sekarang
                </a>
              </div>
            </div>

            {/* Deep Work */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 relative group">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">-51%</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/0 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/books/Deep-Work-by-Cal-Newport-Book.svg" 
                  alt="Deep Work"
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-slate-500 ml-1">(4.8)</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Deep Work</h3>
                <p className="text-sm text-slate-600 mb-1">Cal Newport</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Produktivitas</span>
                  <span className="text-xs text-red-600 font-semibold">🔥 Stok Terbatas</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">Rp 42.000</span>
                  <span className="text-sm text-slate-400 line-through">Rp 85.000</span>
                </div>
                <a 
                  href="https://wa.me/6282141733187?text=Halo,%20saya%20tertarik%20dengan%20buku%20Deep%20Work%20(Rp%2042.000)" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                >
                  🛒 Beli Sekarang
                </a>
              </div>
            </div>
            
            {/* Rich Dad Poor Dad */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 relative group">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">-48%</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-amber-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-100/0 to-amber-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/books/rich-dad-poor-dad-9.svg" 
                  alt="Rich Dad Poor Dad"
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-slate-500 ml-1">(4.7)</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Rich Dad Poor Dad</h3>
                <p className="text-sm text-slate-600 mb-1">Robert T. Kiyosaki</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Keuangan Pribadi</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">Rp 48.000</span>
                  <span className="text-sm text-slate-400 line-through">Rp 92.000</span>
                </div>
                <a 
                  href="https://wa.me/6282141733187?text=Halo,%20saya%20tertarik%20dengan%20buku%20Rich%20Dad%20Poor%20Dad%20(Rp%2048.000)" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                >
                  🛒 Beli Sekarang
                </a>
              </div>
            </div>

            {/* The Warren Buffett Way */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 relative group">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">-50%</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100/0 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/books/71MDz2FR1dL._SL1500_.svg" 
                  alt="The Warren Buffett Way"
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-slate-500 ml-1">(4.6)</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Warren Buffett Way</h3>
                <p className="text-sm text-slate-600 mb-1">Robert G. Hagstrom</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Investasi</span>
                  <span className="text-xs text-red-600 font-semibold">🔥 Stok Terbatas</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">Rp 52.000</span>
                  <span className="text-sm text-slate-400 line-through">Rp 104.000</span>
                </div>
                <a 
                  href="https://wa.me/6282141733187?text=Halo,%20saya%20tertarik%20dengan%20buku%20The%20Warren%20Buffett%20Way%20(Rp%2052.000)" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                >
                  🛒 Beli Sekarang
                </a>
              </div>
            </div>
          </div>
          
          {/* CTA untuk melihat lebih banyak */}
          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              Lihat Semua Koleksi
              <span className="text-xl">→</span>
            </a>
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
