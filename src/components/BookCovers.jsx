export const AtomicHabits = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 600">
    {/* Background */}
    <rect width="100%" height="100%" fill="#1a472a"/>
    
    {/* Book spine shadow */}
    <rect x="0" y="0" width="20" height="600" fill="#0f2818" opacity="0.5"/>
    
    {/* Main content area */}
    <rect x="20" y="20" width="360" height="560" fill="#1a472a"/>
    
    {/* Top decorative line */}
    <line x1="40" y1="80" x2="360" y2="80" stroke="#4ade80" strokeWidth="2"/>
    
    {/* Title */}
    <text x="200" y="180" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="#ffffff" textAnchor="middle">ATOMIC</text>
    <text x="200" y="240" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="#ffffff" textAnchor="middle">HABITS</text>
    
    {/* Subtitle */}
    <text x="200" y="290" fontFamily="Arial, sans-serif" fontSize="16" fill="#4ade80" textAnchor="middle">An Easy & Proven Way to Build</text>
    <text x="200" y="315" fontFamily="Arial, sans-serif" fontSize="16" fill="#4ade80" textAnchor="middle">Good Habits & Break Bad Ones</text>
    
    {/* Circular diagram */}
    <circle cx="200" cy="400" r="60" fill="none" stroke="#4ade80" strokeWidth="3"/>
    <circle cx="200" cy="400" r="45" fill="none" stroke="#4ade80" strokeWidth="2" strokeDasharray="5,5"/>
    <circle cx="200" cy="400" r="30" fill="none" stroke="#4ade80" strokeWidth="2"/>
    <circle cx="200" cy="400" r="8" fill="#4ade80"/>
    
    {/* Author */}
    <text x="200" y="520" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#ffffff" textAnchor="middle">JAMES CLEAR</text>
    
    {/* Bottom decorative line */}
    <line x1="40" y1="550" x2="360" y2="550" stroke="#4ade80" strokeWidth="2"/>
  </svg>
)

export const PsychologyOfMoney = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 600">
    {/* Background gradient */}
    <defs>
      <linearGradient id="moneyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: '#1e3a8a', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#0c1e47', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#moneyGrad)"/>
    
    {/* Book spine */}
    <rect x="0" y="0" width="20" height="600" fill="#0a1628" opacity="0.7"/>
    
    {/* Decorative top border */}
    <rect x="20" y="40" width="360" height="3" fill="#fbbf24"/>
    
    {/* Title */}
    <text x="200" y="140" fontFamily="Georgia, serif" fontSize="42" fontWeight="bold" fill="#fbbf24" textAnchor="middle">THE</text>
    <text x="200" y="200" fontFamily="Georgia, serif" fontSize="52" fontWeight="bold" fill="#ffffff" textAnchor="middle">PSYCHOLOGY</text>
    <text x="200" y="260" fontFamily="Georgia, serif" fontSize="52" fontWeight="bold" fill="#ffffff" textAnchor="middle">OF MONEY</text>
    
    {/* Subtitle */}
    <text x="200" y="310" fontFamily="Arial, sans-serif" fontSize="16" fill="#fbbf24" textAnchor="middle">Timeless lessons on wealth,</text>
    <text x="200" y="335" fontFamily="Arial, sans-serif" fontSize="16" fill="#fbbf24" textAnchor="middle">greed, and happiness</text>
    
    {/* Decorative coins */}
    <circle cx="120" cy="420" r="35" fill="#fbbf24" opacity="0.3"/>
    <circle cx="120" cy="420" r="28" fill="none" stroke="#fbbf24" strokeWidth="2"/>
    <text x="120" y="432" fontFamily="Arial" fontSize="32" fontWeight="bold" fill="#fbbf24" textAnchor="middle">$</text>
    
    <circle cx="280" cy="400" r="40" fill="#fbbf24" opacity="0.2"/>
    <circle cx="280" cy="400" r="32" fill="none" stroke="#fbbf24" strokeWidth="2"/>
    <text x="280" y="414" fontFamily="Arial" fontSize="36" fontWeight="bold" fill="#fbbf24" textAnchor="middle">$</text>
    
    {/* Author */}
    <text x="200" y="520" fontFamily="Georgia, serif" fontSize="28" fontWeight="bold" fill="#ffffff" textAnchor="middle">MORGAN HOUSEL</text>
    
    {/* Bottom border */}
    <rect x="20" y="557" width="360" height="3" fill="#fbbf24"/>
  </svg>
)

export const DeepWork = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 600">
    {/* Background */}
    <rect width="100%" height="100%" fill="#1e293b"/>
    
    {/* Book spine */}
    <rect x="0" y="0" width="20" height="600" fill="#0f172a" opacity="0.8"/>
    
    {/* Top section */}
    <rect x="20" y="40" width="360" height="200" fill="#334155"/>
    
    {/* Title */}
    <text x="200" y="140" fontFamily="Arial, sans-serif" fontSize="64" fontWeight="bold" fill="#ffffff" textAnchor="middle">DEEP</text>
    <text x="200" y="210" fontFamily="Arial, sans-serif" fontSize="64" fontWeight="bold" fill="#ffffff" textAnchor="middle">WORK</text>
    
    {/* Subtitle */}
    <text x="200" y="280" fontFamily="Arial, sans-serif" fontSize="18" fill="#94a3b8" textAnchor="middle">RULES FOR FOCUSED SUCCESS</text>
    <text x="200" y="310" fontFamily="Arial, sans-serif" fontSize="18" fill="#94a3b8" textAnchor="middle">IN A DISTRACTED WORLD</text>
    
    {/* Decorative focus icon */}
    <circle cx="200" cy="400" r="50" fill="none" stroke="#3b82f6" strokeWidth="3"/>
    <circle cx="200" cy="400" r="35" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6"/>
    <circle cx="200" cy="400" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.4"/>
    <circle cx="200" cy="400" r="5" fill="#3b82f6"/>
    
    {/* Horizontal lines representing focus */}
    <line x1="80" y1="480" x2="320" y2="480" stroke="#3b82f6" strokeWidth="2" opacity="0.5"/>
    <line x1="100" y1="500" x2="300" y2="500" stroke="#3b82f6" strokeWidth="2" opacity="0.5"/>
    
    {/* Author */}
    <text x="200" y="550" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#ffffff" textAnchor="middle">CAL NEWPORT</text>
  </svg>
)

export const RichDadPoorDad = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 600">
    {/* Background gradient */}
    <defs>
      <linearGradient id="richDadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: '#7c2d12', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#451a03', stopOpacity: 1}} />
      </linearGradient>
      <radialGradient id="coinGrad">
        <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
      </radialGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#richDadGrad)"/>
    
    {/* Book spine */}
    <rect x="0" y="0" width="20" height="600" fill="#1c0a00" opacity="0.7"/>
    
    {/* Top banner */}
    <rect x="20" y="50" width="360" height="60" fill="#fbbf24" opacity="0.9"/>
    <text x="200" y="88" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#7c2d12" textAnchor="middle">#1 Personal Finance Book</text>
    
    {/* Title */}
    <text x="200" y="180" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="bold" fill="#fbbf24" textAnchor="middle">RICH DAD</text>
    <text x="200" y="250" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="bold" fill="#fbbf24" textAnchor="middle">POOR DAD</text>
    
    {/* Subtitle */}
    <text x="200" y="300" fontFamily="Arial, sans-serif" fontSize="16" fill="#fcd34d" textAnchor="middle">What the Rich Teach Their Kids</text>
    <text x="200" y="325" fontFamily="Arial, sans-serif" fontSize="16" fill="#fcd34d" textAnchor="middle">About Money That the Poor</text>
    <text x="200" y="350" fontFamily="Arial, sans-serif" fontSize="16" fill="#fcd34d" textAnchor="middle">and Middle Class Do Not!</text>
    
    {/* Decorative coins */}
    <circle cx="120" cy="430" r="40" fill="url(#coinGrad)"/>
    <circle cx="120" cy="430" r="35" fill="none" stroke="#f59e0b" strokeWidth="2"/>
    <text x="120" y="445" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="#7c2d12" textAnchor="middle">$</text>
    
    <circle cx="280" cy="450" r="35" fill="url(#coinGrad)"/>
    <circle cx="280" cy="450" r="30" fill="none" stroke="#f59e0b" strokeWidth="2"/>
    <text x="280" y="463" fontFamily="Arial" fontSize="36" fontWeight="bold" fill="#7c2d12" textAnchor="middle">$</text>
    
    <circle cx="200" cy="410" r="30" fill="url(#coinGrad)"/>
    <circle cx="200" cy="410" r="25" fill="none" stroke="#f59e0b" strokeWidth="2"/>
    <text x="200" y="422" fontFamily="Arial" fontSize="30" fontWeight="bold" fill="#7c2d12" textAnchor="middle">$</text>
    
    {/* Author */}
    <text x="200" y="540" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="#fbbf24" textAnchor="middle">ROBERT T. KIYOSAKI</text>
  </svg>
)

export const WarrenBuffettWay = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 600">
    {/* Background */}
    <defs>
      <linearGradient id="buffettGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: '#1e1b4b', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#0f0a2e', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#buffettGrad)"/>
    
    {/* Book spine */}
    <rect x="0" y="0" width="20" height="600" fill="#0a0620" opacity="0.8"/>
    
    {/* Top banner */}
    <rect x="40" y="60" width="320" height="40" fill="#8b5cf6" opacity="0.3"/>
    <text x="200" y="88" fontFamily="Arial, sans-serif" fontSize="16" fill="#c4b5fd" textAnchor="middle">THIRD EDITION</text>
    
    {/* Title */}
    <text x="200" y="160" fontFamily="Georgia, serif" fontSize="38" fontWeight="bold" fill="#ffffff" textAnchor="middle">THE</text>
    <text x="200" y="220" fontFamily="Georgia, serif" fontSize="52" fontWeight="bold" fill="#a78bfa" textAnchor="middle">WARREN</text>
    <text x="200" y="280" fontFamily="Georgia, serif" fontSize="52" fontWeight="bold" fill="#a78bfa" textAnchor="middle">BUFFETT</text>
    <text x="200" y="340" fontFamily="Georgia, serif" fontSize="52" fontWeight="bold" fill="#a78bfa" textAnchor="middle">WAY</text>
    
    {/* Decorative chart/graph */}
    <path d="M80,420 L120,400 L160,410 L200,380 L240,390 L280,360 L320,370" 
          fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="80" cy="420" r="4" fill="#8b5cf6"/>
    <circle cx="120" cy="400" r="4" fill="#8b5cf6"/>
    <circle cx="160" cy="410" r="4" fill="#8b5cf6"/>
    <circle cx="200" cy="380" r="4" fill="#8b5cf6"/>
    <circle cx="240" cy="390" r="4" fill="#8b5cf6"/>
    <circle cx="280" cy="360" r="4" fill="#8b5cf6"/>
    <circle cx="320" cy="370" r="4" fill="#8b5cf6"/>
    
    {/* Upward arrow */}
    <path d="M320,370 L335,355 L325,360 L325,345 L315,345 L315,360 L305,355 Z" fill="#8b5cf6"/>
    
    {/* Subtitle */}
    <text x="200" y="470" fontFamily="Arial, sans-serif" fontSize="16" fill="#c4b5fd" textAnchor="middle">Investment Strategies of the</text>
    <text x="200" y="495" fontFamily="Arial, sans-serif" fontSize="16" fill="#c4b5fd" textAnchor="middle">World's Greatest Investor</text>
    
    {/* Author */}
    <text x="200" y="545" fontFamily="Georgia, serif" fontSize="24" fontWeight="bold" fill="#ffffff" textAnchor="middle">ROBERT G. HAGSTROM</text>
  </svg>
)
