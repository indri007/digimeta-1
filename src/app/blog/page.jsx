'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function BlogList(){
  const [posts, setPosts] = useState([])
  
  useEffect(() => { 
    const s = localStorage.getItem('dm_posts')
    if(s) {
      setPosts(JSON.parse(s))
    } else {
      const defaultPosts = [
          {
          id: 1,
          title: '5 Buku Bisnis Wajib Baca untuk Entrepreneur',
          excerpt:
            'Rekomendasi buku bisnis terbaik yang akan mengubah cara pandang Anda tentang entrepreneurship dan kesuksesan.',
          author: 'Admin DigimetaShop',
          slug: 'buku-bisnis-entrepreneur',
          date: '2024-01-15',
          category: 'Bisnis',
          image: '💼',
        },
        {
          id: 2,
          title: 'Cara Memilih Format eBook yang Tepat',
          excerpt:
            'Panduan lengkap memilih antara PDF, Kindle, atau Mobi sesuai dengan kebutuhan dan perangkat Anda.',
          author: 'Tim DigimetaShop',
          slug: 'format-ebook',
          date: '2024-01-10',
          category: 'Tips',
          image: '📱',
        },
        {
          id: 3,
          title: 'Atomic Habits: Ringkasan dan Review',
          excerpt:
            'Review mendalam tentang buku Atomic Habits karya James Clear dan bagaimana menerapkannya dalam kehidupan.',
          author: 'Budi Santoso',
          slug: 'atomic-habits-review',
          date: '2024-01-05',
          category: 'Review',
          image: '📚',
        },
        {
          id: 4,
          title: 'Tips Belanja Buku Online yang Aman',
          excerpt:
            'Panduan praktis untuk berbelanja buku digital dengan aman dan menghindari penipuan online.',
          author: 'Admin DigimetaShop',
          slug: 'tips-aman',
          date: '2024-01-01',
          category: 'Tips',
          image: '🔒',
        },
      ]
      setPosts(defaultPosts)
      localStorage.setItem('dm_posts', JSON.stringify(defaultPosts))
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Blog DigimetaShop</h1>
              <p className="text-lg text-slate-600">Tips, review, dan inspirasi seputar dunia literasi digital</p>
            </div>
            <Link href="/create-blog" className="px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              ✍️ Tulis Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Belum Ada Artikel</h3>
              <p className="text-slate-600 mb-8">Jadilah yang pertama menulis artikel di blog kami!</p>
              <Link href="/create-blog" className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                Buat Artikel Pertama
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, i) => (
                <article key={i} className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift">
                 <Link href={`/blog/${post.slug}`}>
                  <div className="bg-gradient-to-br from-primary to-primary-dark p-8 text-center">
                    <div className="text-6xl mb-2">{post.image || '📚'}</div>
                    <span className="inline-block px-4 py-1 bg-white/90 text-slate-900 rounded-full text-sm font-semibold">
                      {post.category || 'Artikel'}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span className="flex items-center gap-2">
                        <span>👤</span>
                        {post.author}
                      </span>
                      <span>{post.date || 'Baru saja'}</span>
                    </div>
                  </div>            
                 </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Kategori Artikel</h2>
            <p className="text-lg text-slate-600">Temukan artikel sesuai minat Anda</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 glass-effect rounded-2xl hover-lift cursor-pointer">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-bold mb-2">Bisnis</h3>
              <p className="text-sm text-slate-600">Tips & strategi bisnis</p>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl hover-lift cursor-pointer">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-bold mb-2">Review Buku</h3>
              <p className="text-sm text-slate-600">Ulasan buku terbaru</p>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl hover-lift cursor-pointer">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-bold mb-2">Tips & Trik</h3>
              <p className="text-sm text-slate-600">Panduan praktis</p>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl hover-lift cursor-pointer">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-bold mb-2">Self Growth</h3>
              <p className="text-sm text-slate-600">Pengembangan diri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-12 text-center">
            <div className="text-5xl mb-6">📬</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dapatkan Update Artikel Terbaru</h2>
            <p className="text-lg text-slate-600 mb-8">Subscribe newsletter kami dan dapatkan tips literasi langsung ke email Anda</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="flex-1 px-6 py-4 border-2 border-slate-200 rounded-full focus:border-primary focus:outline-none"
              />
              <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
