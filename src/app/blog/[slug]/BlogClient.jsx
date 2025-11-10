'use client'

import { useEffect, useState } from 'react'

export default function BlogClient({ slugParam }) {
  const [post, setPost] = useState(null)

  useEffect(() => {
    // Get posts from localStorage or defaults
    const stored = localStorage.getItem('dm_posts')
    let posts = []

    if (stored) {
      posts = JSON.parse(stored)
    } else {
      posts = [
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
      localStorage.setItem('dm_posts', JSON.stringify(posts))
    }

    // Handle hybrid URL: /1-buku-bisnis-entrepreneur
    let id = null
    let slug = slugParam
    if (slugParam.includes('-')) {
      const parts = slugParam.split('-')
      if (!isNaN(parts[0])) {
        id = parts[0]
        slug = parts.slice(1).join('-')
      }
    }

    const found = posts.find(
      (p) => String(p.id) === String(id) || p.slug === slug
    )

    setPost(found || null)
  }, [slugParam])

  if (!post) return <p className="p-10 text-center">Loading or post not found...</p>

  return (
    <main className="max-w-3xl mx-auto p-10">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{post.image}</div>
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-slate-500 text-sm">
          {post.author} — {post.date} • {post.category}
        </p>
      </div>
      <p className="text-lg text-slate-700 leading-relaxed">{post.excerpt}</p>
    </main>
  )
}
