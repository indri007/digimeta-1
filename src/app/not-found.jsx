import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="glass-effect rounded-2xl p-12">
          <div className="text-8xl mb-6">📚</div>
          <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Halaman Tidak Ditemukan</h2>
          <p className="text-lg text-slate-600 mb-8">
            Maaf, halaman yang Anda cari tidak ada. Mungkin buku yang Anda cari ada di katalog kami?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              Kembali ke Beranda
            </Link>
            <Link href="/services" className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-slate-900 rounded-full font-semibold transition-all duration-300 hover-lift">
              Lihat Katalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
