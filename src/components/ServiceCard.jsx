export default function ServiceCard({title, desc, icon, link}){ 
  const CardContent = () => (
    <>
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="font-bold text-xl mb-4 text-slate-900 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
      {link && (
        <div className="mt-4 flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
          <span>Lihat Koleksi</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      )}
    </>
  )

  if (link) {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-8 glass-effect rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30 hover-lift cursor-pointer"
      >
        <CardContent />
      </a>
    )
  }

  return (
    <div className="group p-8 glass-effect rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30 hover-lift">
      <CardContent />
    </div>
  )
}
