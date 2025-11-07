import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Watermark from '../components/Watermark'

export const metadata = {
  title: 'DigimetaShop | Toko Buku & eBook Terlengkap',
  description: 'Belanja eBook dan buku eksklusif lebih dari 5000 koleksi hanya di DigimetaShop.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head />
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Watermark />
      </body>
    </html>
  )
}
