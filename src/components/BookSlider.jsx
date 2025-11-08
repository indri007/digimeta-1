"use client"
import { useState, useEffect } from "react";

export default function BookSlider() {
  const books = [
    { 
      title: "Atomic Habits",
      author: "James Clear",
      image: "/book-covers/atomic-habits.jpg",
      fallback: "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg"
    },
    { 
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      image: "/book-covers/rich-dad-poor-dad.jpg",
      fallback: "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg"
    },
    { 
      title: "The Psychology of Money",
      author: "Morgan Housel",
      image: "/book-covers/psychology-of-money.jpg",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231e3a8a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230c1e47;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad1)'/%3E%3Ctext x='150' y='120' font-family='Georgia, serif' font-size='32' font-weight='bold' fill='%23fbbf24' text-anchor='middle'%3ETHE%3C/text%3E%3Ctext x='150' y='170' font-family='Georgia, serif' font-size='38' font-weight='bold' fill='%23ffffff' text-anchor='middle'%3EPSYCHOLOGY%3C/text%3E%3Ctext x='150' y='220' font-family='Georgia, serif' font-size='38' font-weight='bold' fill='%23ffffff' text-anchor='middle'%3EOF MONEY%3C/text%3E%3Ccircle cx='100' cy='320' r='25' fill='%23fbbf24' opacity='0.3'/%3E%3Ccircle cx='200' cy='300' r='30' fill='%23fbbf24' opacity='0.2'/%3E%3Ctext x='150' y='400' font-family='Georgia, serif' font-size='20' font-weight='bold' fill='%23ffffff' text-anchor='middle'%3EMorgan Housel%3C/text%3E%3C/svg%3E"
    },
    { 
      title: "Deep Work",
      author: "Cal Newport",
      image: "/book-covers/deep-work.jpg",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Crect width='100%25' height='100%25' fill='%231e293b'/%3E%3Crect x='20' y='20' width='260' height='150' fill='%23334155'/%3E%3Ctext x='150' y='90' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='%23ffffff' text-anchor='middle'%3EDEEP%3C/text%3E%3Ctext x='150' y='150' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='%23ffffff' text-anchor='middle'%3EWORK%3C/text%3E%3Ccircle cx='150' cy='280' r='40' fill='none' stroke='%233b82f6' stroke-width='3'/%3E%3Ccircle cx='150' cy='280' r='25' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='150' cy='280' r='5' fill='%233b82f6'/%3E%3Ctext x='150' y='390' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%23ffffff' text-anchor='middle'%3ECal Newport%3C/text%3E%3C/svg%3E"
    },
    { 
      title: "The Warren Buffett Way",
      author: "Robert G. Hagstrom",
      image: "/books/71MDz2FR1dL._SL1500_.svg",
      fallback: "/books/71MDz2FR1dL._SL1500_.svg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-8">
      <div className="w-[280px] h-[400px] md:w-[320px] md:h-[480px] overflow-hidden rounded-xl shadow-2xl animate-fade-in relative group bg-gradient-to-br from-slate-100 to-slate-50">
        <img
          src={books[currentIndex].fallback}
          alt={books[currentIndex].title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Jika gambar gagal load, gunakan placeholder
            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600' viewBox='0 0 400 600'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Crect x='40' y='40' width='320' height='520' rx='8' fill='white' stroke='%23cbd5e1' stroke-width='2'/%3E%3Ctext x='200' y='280' font-family='Arial' font-size='24' fill='%2364748b' text-anchor='middle'%3E${books[currentIndex].title}%3C/text%3E%3Ctext x='200' y='320' font-family='Arial' font-size='18' fill='%2394a3b8' text-anchor='middle'%3E${books[currentIndex].author}%3C/text%3E%3Ctext x='200' y='380' font-family='Arial' font-size='64' text-anchor='middle'%3E📚%3C/text%3E%3C/svg%3E`;
          }}
        />
        
        {/* Navigation Buttons - Only visible on hover */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
          aria-label="Previous book"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
          aria-label="Next book"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="mt-4 text-center animate-slide-up">
        <h2 className="text-lg font-semibold text-text-primary">
          {books[currentIndex].title}
        </h2>
        <p className="text-sm text-text-secondary mt-1">
          {books[currentIndex].author}
        </p>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-6">
        {books.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex 
                ? "bg-primary w-4" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
