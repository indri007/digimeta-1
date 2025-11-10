import fs from 'fs'
import path from 'path'
import BlogClient from './BlogClient'

export async function generateStaticParams() {
  // Path to your data file
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  let posts = []

  try {
    const json = fs.readFileSync(filePath, 'utf-8')
    posts = JSON.parse(json)
  } catch (err) {
    console.error('⚠️ Error reading posts.json:', err)
  }

  // Fallback default if file missing
  if (!posts || posts.length === 0) {
    posts = [
      { id: 1, slug: 'buku-bisnis-entrepreneur' },
      { id: 2, slug: 'format-ebook' },
      { id: 3, slug: 'atomic-habits-review' },
      { id: 4, slug: 'tips-aman' },
    ]
  }

  // Return the hybrid route params for static generation
  return posts.map((p) => ({
    slug: `${p.id}-${p.slug}`,
  }))
}

export default function BlogPage({ params }) {
  return <BlogClient slugParam={params.slug} />
}
