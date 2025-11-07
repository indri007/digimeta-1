export default function TeamCard({person}){ 
  return (
    <div className="group p-6 glass-effect rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30 hover-lift">
      <div className="relative mb-6">
        <img src={person.picture} alt={person.name} 
             className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-white shadow-lg group-hover:ring-primary/50 transition-all duration-300" />
      </div>
      <div className="font-bold text-lg text-slate-900 mb-2">{person.name}</div>
      <div className="text-primary font-semibold mb-3">{person.role}</div>
      <div className="text-sm text-slate-600 leading-relaxed">{person.bio}</div>
    </div>
  )
}
