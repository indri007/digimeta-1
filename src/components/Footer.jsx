export default function Footer(){
  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm text-slate-200 py-12 mt-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">DigimetaShop</h3>
          <p className="text-slate-400">Toko Buku & eBook Terlengkap</p>
        </div>
        <div className="border-t border-slate-800 pt-6">
          <p className="mb-3 text-slate-300">© {new Date().getFullYear()} DigimetaShop — Toko Buku & eBook Terlengkap</p>
          <p className="text-slate-400">
            Contact: <a href="https://wa.me/6282141733187" className="text-green-400 hover:text-green-300 transition-colors duration-200 font-medium">WhatsApp</a> | 
            Email: <span className="text-primary-light">info@digimetashop.id</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
