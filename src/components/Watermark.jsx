export default function Watermark(){ 
  return (
    <div className="watermark" aria-hidden>
      <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-md">
        <span className="text-lg">📚</span>
      </div>
      <div className="wm-text">DigimetaShop</div>
    </div>
  )
}
