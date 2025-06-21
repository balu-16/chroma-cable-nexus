
import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Floating QR Code Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-12 h-12 border-2 border-neon-blue rounded-lg grid grid-cols-3 gap-1 p-2 opacity-30">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-1 h-1 ${i % 2 === 0 ? 'bg-neon-blue' : 'bg-transparent'} rounded-sm`} />
          ))}
        </div>
      </div>

      {/* Security Lock Hologram */}
      <div className="absolute top-40 right-20 animate-bounce-gentle">
        <div className="relative">
          <div className="w-8 h-10 border-2 border-neon-purple rounded-t-lg opacity-40" />
          <div className="w-12 h-8 bg-gradient-to-r from-neon-purple/20 to-electric-purple/20 rounded-lg -mt-2 backdrop-blur-sm" />
          <div className="absolute inset-0 animate-neon-glow" style={{ 
            boxShadow: '0 0 20px rgba(179, 55, 242, 0.5)' 
          }} />
        </div>
      </div>

      {/* Floating Bill Icons */}
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-10 h-14 bg-gradient-to-b from-white/10 to-white/5 rounded-lg border border-neon-cyan/30 opacity-50">
          <div className="h-2 bg-neon-cyan/20 rounded-t-lg" />
          <div className="p-2 space-y-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-0.5 bg-white/20 rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* Cable Wireframe */}
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '4s' }}>
        <svg width="60" height="40" viewBox="0 0 60 40" className="opacity-30">
          <path 
            d="M5 20 Q15 10 25 20 T45 20 Q50 15 55 20" 
            stroke="url(#cableGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="cableGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="50%" stopColor="#B537F2" />
              <stop offset="100%" stopColor="#FF3D71" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Holographic Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid w-full h-full" />
      </div>
    </div>
  );
};

export default FloatingShapes;
