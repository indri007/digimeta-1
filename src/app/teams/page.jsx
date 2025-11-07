import TeamCard from '../../components/TeamCard'

export const metadata = {
  title: 'Tim Kami',
  description: 'Kenali tim profesional DigimetaShop yang berdedikasi memberikan layanan terbaik untuk kebutuhan buku digital Anda.',
}

export default function Teams(){
  const people = [
    {
      id: 1,
      name: 'Andi Pratama',
      picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      role: 'Founder & CEO',
      bio: 'Visioner di balik DigimetaShop dengan pengalaman 10+ tahun di industri digital dan passion untuk literasi.'
    },
    {
      id: 2,
      name: 'Sari Dewi',
      picture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      role: 'Head of Operations',
      bio: 'Memastikan setiap proses berjalan lancar dan pelanggan mendapat pengalaman terbaik dalam berbelanja buku.'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      picture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      role: 'Content Curator',
      bio: 'Ahli dalam menyeleksi dan mengkurasi koleksi buku berkualitas tinggi untuk berbagai kategori.'
    },
    {
      id: 4,
      name: 'Maya Indira',
      picture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      role: 'Marketing Manager',
      bio: 'Spesialis digital marketing yang membantu menyebarkan misi literasi DigimetaShop ke seluruh Indonesia.'
    },
    {
      id: 5,
      name: 'Rizki Hakim',
      picture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      role: 'Customer Support',
      bio: 'Siap membantu pelanggan 24/7 dengan solusi cepat dan ramah untuk semua kebutuhan buku digital.'
    },
    {
      id: 6,
      name: 'Lina Kartika',
      picture: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      role: 'Tech Lead',
      bio: 'Memimpin pengembangan teknologi untuk memberikan pengalaman berbelanja yang seamless dan modern.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light/30 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tim Profesional Kami</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Bertemu dengan tim berpengalaman yang berdedikasi memberikan layanan terbaik 
            dan membantu Anda menemukan buku-buku berkualitas
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {people.map(person => (
              <TeamCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Budaya Kerja Kami</h2>
            <p className="text-lg text-slate-600">Nilai-nilai yang menjadi fondasi tim DigimetaShop</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 glass-effect rounded-2xl hover-lift">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kolaborasi</h3>
              <p className="text-slate-600">Bekerja sama sebagai satu tim untuk mencapai tujuan bersama dan memberikan hasil terbaik.</p>
            </div>
            <div className="text-center p-8 glass-effect rounded-2xl hover-lift">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fokus Pelanggan</h3>
              <p className="text-slate-600">Mengutamakan kepuasan pelanggan dalam setiap keputusan dan tindakan yang kami ambil.</p>
            </div>
            <div className="text-center p-8 glass-effect rounded-2xl hover-lift">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Inovasi Berkelanjutan</h3>
              <p className="text-slate-600">Terus berinovasi dan berkembang untuk memberikan pengalaman yang lebih baik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Bergabung dengan Tim Kami</h2>
          <p className="text-lg text-slate-700 mb-8">
            Kami selalu mencari talenta terbaik untuk bergabung dalam misi menyebarkan literasi di Indonesia
          </p>
          <a href="https://wa.me/6282141733187" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
            Hubungi Kami untuk Karir
          </a>
        </div>
      </section>
    </>
  )
}
