"use client"
import { useState } from 'react'

export default function BookCard({ book }) {
  const [imageError, setImageError] = useState(false)
  
  const placeholderSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23${book.color || 'e2e8f0'};stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23${book.colorDark || 'cbd5e1'};stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3Crect x='20' y='20' width='260' height='410' rx='8' fill='white' stroke='%23cbd5e1' stroke-width='2'/%3E%3Ctext x='150' y='180' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%23334155' text-anchor='middle'%3E${encodeURIComponent(book.title)}%3C/text%3E%3Ctext x='150' y='220' font-family='Arial, sans-serif' font-size='18' fill='%2364748b' text-anchor='middle'%3E${encodeURIComponent(book.author)}%3C/text%3E%3Ctext x='150' y='300' font-family='Arial' font-size='80' text-anchor='middle'%3E📚%3C/text%3E%3C/svg%3E`

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 relative group">
      {book.discount && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            -{book.discount}%
          </span>
        </div>
      )}
      {book.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {book.badge}
          </span>
        </div>
      )}
      
      <div className={`p-6 bg-gradient-to-br ${book.bgGradient} relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={imageError ? placeholderSVG : book.image}
          alt={book.title}
          className="w-full h-64 object-contain rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
          <span className="text-xs text-slate-500 ml-1">({book.rating})</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{book.title}</h3>
        <p className="text-sm text-slate-600 mb-1">{book.author}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs ${book.categoryBg} ${book.categoryText} px-2 py-1 rounded-full`}>
            {book.category}
          </span>
          {book.limited && (
            <span className="text-xs text-red-600 font-semibold">🔥 Stok Terbatas</span>
          )}
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">Rp {book.price.toLocaleString('id-ID')}</span>
          <span className="text-sm text-slate-400 line-through">Rp {book.originalPrice.toLocaleString('id-ID')}</span>
        </div>
        <a 
          href="https://www.tokopedia.com/digimeta007"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
        >
          🛒 Beli Sekarang
        </a>
      </div>
    </div>
  )
}
