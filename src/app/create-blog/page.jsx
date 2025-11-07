'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateBlog(){
  const router = useRouter(); const [auth,setAuth]=useState(false); const [title,setTitle]=useState(''); const [content,setContent]=useState('')
  useEffect(()=>{ const t = localStorage.getItem('dm_token'); if(!t) router.push('/login'); else setAuth(true) },[router])
  function submit(e){ e.preventDefault(); const saved = JSON.parse(localStorage.getItem('dm_posts')||'[]'); saved.unshift({title, excerpt: content.slice(0,120), author:'Admin', slug: title.toLowerCase().replace(/\s+/g,'-')}); localStorage.setItem('dm_posts', JSON.stringify(saved)); router.push('/blog') }
  if(!auth) return <div className="p-6">Redirecting...</div>
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-2xl font-bold mb-4">Buat Artikel</h1>
        <form onSubmit={submit} className="space-y-4">
          <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full p-3 border rounded" placeholder="Judul" required />
          <textarea value={content} onChange={e=>setContent(e.target.value)} className="w-full p-3 border rounded h-48" placeholder="Konten" required />
          <button className="px-4 py-2 bg-primary text-white rounded">Simpan</button>
        </form>
      </div>
    </section>
  )
}
