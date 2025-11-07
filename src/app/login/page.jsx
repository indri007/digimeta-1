'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login(){
  const router = useRouter(); const [u,setU]=useState(''); const [p,setP]=useState(''); const [err,setErr]=useState('')
  function login(e){ e.preventDefault(); if(u==='admin' && p==='12345'){ localStorage.setItem('dm_token','ok'); router.push('/create-blog') } else setErr('Wrong credentials. Try admin / 12345') }
  return (
    <section className="py-16">
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={login} className="space-y-3">
          <input value={u} onChange={e=>setU(e.target.value)} className="w-full p-3 border rounded" placeholder="Username" />
          <input value={p} onChange={e=>setP(e.target.value)} type="password" className="w-full p-3 border rounded" placeholder="Password" />
          <button className="px-4 py-2 bg-primary text-white rounded">Login</button>
          {err && <p className="text-sm text-red-600">{err}</p>}
        </form>
      </div>
    </section>
  )
}
