"use client"
import { useState, useEffect } from 'react'

export default function BookSlider({ interval = 3500 }){
  const images = [
    { 
      src: '/books/psychology-of-money.jpg',
      alt: 'The Psychology of Money',
      title: 'The Psychology of Money',
      author: 'Morgan Housel'
    },
    { 
      src: '/books/atomic-habits.jpg',
      alt: 'Atomic Habits',
      title: 'Atomic Habits',
      author: 'James Clear'
    },
    { 
      src: '/books/warren-buffett-way.jpg',
      alt: 'The Warren Buffett Way',
      title: 'The Warren Buffett Way',
      author: 'Robert G. Hagstrom'
    },
    { 
      src: '/books/rich-dad-poor-dad.jpg',
      alt: 'Rich Dad Poor Dad',
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki'
    },
    { 
      src: '/books/deep-work.jpg',
      alt: 'Deep Work',
      title: 'Deep Work',
      author: 'Cal Newport'
    }
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [interval])

  return (
    <div className="relative w-80 h-[460px] md:w-96 md:h-[520px] glass-effect rounded-2xl p-6 shadow-2xl hover-lift">
      {images.map((img, i) => (
        <div 
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-[400px] object-contain rounded-xl shadow-xl mb-4"
            loading="lazy"
            onError={(e) => {
              e.target.src = `data:image/svg+xml;base64,${btoa(`
                <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="400" fill="#f1f5f9"/>
                  <rect x="20" y="20" width="260" height="360" fill="white" stroke="#e2e8f0" stroke-width="2"/>
                  <text x="150" y="180" text-anchor="middle" font-family="Arial" font-size="16" fill="#64748b">${img.title}</text>
                  <text x="150" y="220" text-anchor="middle" font-family="Arial" font-size="14" fill="#94a3b8">${img.author}</text>
                  <text x="150" y="260" text-anchor="middle" font-family="Arial" font-size="48" fill="#cbd5e1">📚</text>
                </svg>
              `)}`
            }}
          />
          <div className="text-center px-2">
            <h3 className="text-lg font-bold text-slate-900 mb-1">{img.title}</h3>
            <p className="text-sm text-slate-600">{img.author}</p>
          </div>
        </div>
      ))}
      {/* indicators */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-primary scale-125 shadow-lg' : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
