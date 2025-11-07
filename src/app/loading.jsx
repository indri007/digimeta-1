export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-2xl">
            📚
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Memuat Halaman...</h3>
        <p className="text-slate-600">Mohon tunggu sebentar</p>
      </div>
    </div>
  )
}
