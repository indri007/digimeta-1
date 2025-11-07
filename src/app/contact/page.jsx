"use client"
import { useState } from 'react'

export const metadata = {
  title: 'Hubungi Kami',
  description: 'Hubungi DigimetaShop untuk pertanyaan, request buku, atau kerja sama. Kami siap membantu Anda 24/7.',
}

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const waMessage = `Halo DigimetaShop!%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0APesan: ${formData.message}`
    window.open(`https://wa.me/6282141733187?text=${waMessage}`, '_blank')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light/30 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Hubungi Kami</h1>
          <p className="text-lg text-slate-600">Kami siap membantu Anda menemukan buku yang tepat atau menjawab pertanyaan Anda</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Mari Terhubung</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Butuh buku tertentu atau ingin kerja sama? Tim kami siap membantu Anda 
                menemukan solusi terbaik untuk kebutuhan literasi digital Anda.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl hover-lift">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <p className="text-slate-600 mb-3">Respon cepat dalam hitungan menit</p>
                    <a href="https://wa.me/6282141733187" className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all duration-300 hover-lift">
                      Chat Sekarang
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-slate-600 mb-2">info@digimetashop.id</p>
                    <p className="text-sm text-slate-500">Respon dalam 24 jam</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Jam Operasional</h3>
                    <p className="text-slate-600">Senin - Minggu</p>
                    <p className="text-slate-600">08:00 - 22:00 WIB</p>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Pertanyaan Umum</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Bagaimana cara memesan buku?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Format apa saja yang tersedia?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Berapa lama proses pengiriman?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Apakah bisa request buku langka?</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input 
                      type="text"
                      placeholder="Masukkan nama Anda" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-colors duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email"
                      placeholder="nama@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-colors duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Pesan / Request Buku
                    </label>
                    <textarea 
                      placeholder="Ceritakan kebutuhan Anda atau buku yang ingin direquest..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-colors duration-200 h-40 resize-none"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                  >
                    Kirim via WhatsApp
                  </button>

                  <p className="text-sm text-slate-500 text-center">
                    Dengan mengirim pesan, Anda akan diarahkan ke WhatsApp kami
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mengapa Pelanggan Mempercayai Kami</h2>
            <p className="text-lg text-slate-600">Komitmen kami untuk memberikan layanan terbaik</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Respon Cepat</h3>
              <p className="text-sm text-slate-600">Balasan dalam hitungan menit</p>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold mb-2">Ramah & Profesional</h3>
              <p className="text-sm text-slate-600">Tim yang siap membantu</p>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold mb-2">Solusi Tepat</h3>
              <p className="text-sm text-slate-600">Menemukan buku yang Anda cari</p>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold mb-2">Aman & Terpercaya</h3>
              <p className="text-sm text-slate-600">Transaksi yang aman</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
