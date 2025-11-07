import BookSlider from './BookSlider'

export default function Hero(){
  return (
    <section className="py-20 animate-fade-in">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">📚 DigimetaShop — Toko Buku & eBook Terlengkap</h1>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">Temukan bacaan favoritmu, sekali klik aja! (PDF, Kindle, Mobi) — Fast, fun, and full of inspiration.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/services" className="px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center hover-lift">Shop Now</a>
            <a href="https://wa.me/6282141733187" className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-slate-900 rounded-full font-semibold transition-all duration-300 text-center hover-lift">Contact via WhatsApp</a>
          </div>
        </div>
        <div className="flex justify-center">
          <BookSlider />
        </div>
      </div>
    </section>
  )
}
