export default function ServiceCard({title, desc, icon}){ 
  return (
    <div className="group p-8 glass-effect rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30 hover-lift">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="font-bold text-xl mb-4 text-slate-900 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  )
}
