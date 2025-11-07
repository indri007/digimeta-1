import BookSlider from './BookSlider'

export default function Hero(){
  return (
    <section className="py-24 animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/50 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
        <div className="animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 text-text-primary font-medium text-sm mb-6 shadow-sm">🎉 Promo: Diskon 20% untuk semua eBook!</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 leading-tight">📚 DigimetaShop — Toko Buku & eBook Terlengkap</h1>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl">Temukan bacaan favoritmu, sekali klik aja! (PDF, Kindle, Mobi) — Fast, fun, and full of inspiration.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/services" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-center hover:-translate-y-1">Shop Now</a>
            <a href="https://wa.me/6282141733187" className="group px-8 py-4 bg-white hover:bg-primary border border-primary/20 text-primary hover:text-white rounded-xl font-semibold transition-all duration-300 text-center hover:-translate-y-1 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat via WhatsApp
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-text-primary">5000+</div>
              <div className="text-text-secondary">eBooks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-text-primary">10K+</div>
              <div className="text-text-secondary">Happy Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-text-primary">24/7</div>
              <div className="text-text-secondary">Support</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md">
            <BookSlider />
          </div>
        </div>
      </div>
    </section>
  )
}
