"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(){ 
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="glass-effect shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href='/' className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
            <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-lg shadow-sm">
              <span className="text-2xl">📚</span>
            </div>
            <div className="text-slate-900 font-bold text-lg">DigimetaShop</div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="space-x-6 text-slate-700 hidden md:flex">
            <Link href="/" className="hover:text-slate-900 transition-colors duration-200 font-medium">Home</Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors duration-200 font-medium">About</Link>
            <Link href="/services" className="hover:text-slate-900 transition-colors duration-200 font-medium">Services</Link>
            <Link href="/teams" className="hover:text-slate-900 transition-colors duration-200 font-medium">Teams</Link>
            <Link href="/blog" className="hover:text-slate-900 transition-colors duration-200 font-medium">Blog</Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors duration-200 font-medium">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="https://wa.me/6282141733187" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 font-medium">
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
        <nav className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="pt-4 pb-2 space-y-2">
            <Link href="/" className="block py-2 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="block py-2 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="block py-2 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/teams" className="block py-2 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>Teams</Link>
            <Link href="/blog" className="block py-2 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" className="block py-2 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
