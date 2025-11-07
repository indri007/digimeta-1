"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(){ 
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="glass-effect shadow-sm sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href='/' className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 ease-out">
            <div className="w-11 h-11 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
              <span className="text-2xl">📚</span>
            </div>
            <div className="text-text-primary font-bold text-xl">DigimetaShop</div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="space-x-8 text-text-secondary hidden md:flex">
            <Link href="/" className="hover:text-text-primary transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">Home</Link>
            <Link href="/about" className="hover:text-text-primary transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">About</Link>
            <Link href="/services" className="hover:text-text-primary transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">Services</Link>
            <Link href="/teams" className="hover:text-text-primary transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">Teams</Link>
            <Link href="/blog" className="hover:text-text-primary transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">Blog</Link>
            <Link href="/contact" className="hover:text-text-primary transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="https://wa.me/6282141733187" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-200 font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat WA
            </a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-slate-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-slate-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-slate-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-1.5">
            <Link href="/" className="block py-3 px-4 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-xl transition-all duration-200 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="block py-3 px-4 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-xl transition-all duration-200 font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="block py-3 px-4 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-xl transition-all duration-200 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/teams" className="block py-3 px-4 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-xl transition-all duration-200 font-medium" onClick={() => setIsOpen(false)}>Teams</Link>
            <Link href="/blog" className="block py-3 px-4 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-xl transition-all duration-200 font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" className="block py-3 px-4 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-xl transition-all duration-200 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="pt-2 px-4">
              <a href="https://wa.me/6282141733187" className="block text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-200 font-medium">Chat via WhatsApp</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
