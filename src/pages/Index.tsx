
import React from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import FloatingShapes from '../components/FloatingShapes';
import { QrCode, Contact } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-bg via-dark-card to-dark-surface">
      <ParticleBackground />
      <FloatingShapes />
      
      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-electric bg-clip-text text-transparent animate-glow-pulse">
            NEXUS
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 text-glow">
            Cable Billing System
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the future of cable billing with our advanced quantum-powered payment gateway
          </p>
          <div className="mt-6 w-32 h-1 bg-gradient-neon mx-auto rounded-full animate-pulse" />
        </div>

        {/* Main Buttons */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16">
          <Link to="/pay-bill">
            <button className="group btn-3d glass-card px-12 py-6 md:px-16 md:py-8 rounded-2xl hover:bg-gradient-to-r hover:from-electric-blue/20 hover:to-neon-purple/20 transition-all duration-500">
              <div className="flex items-center gap-4">
                <QrCode className="w-8 h-8 md:w-10 md:h-10 text-electric-blue group-hover:animate-bounce" />
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-glow">
                    Pay the Bill
                  </div>
                  <div className="text-sm md:text-base text-gray-400 group-hover:text-gray-300">
                    Secure quantum payment portal
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-electric opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </button>
          </Link>

          <Link to="/contact">
            <button className="group btn-3d glass-card px-12 py-6 md:px-16 md:py-8 rounded-2xl hover:bg-gradient-to-r hover:from-neon-purple/20 hover:to-electric-pink/20 transition-all duration-500">
              <div className="flex items-center gap-4">
                <Contact className="w-8 h-8 md:w-10 md:h-10 text-neon-purple group-hover:animate-bounce" />
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-glow">
                    Contact Us
                  </div>
                  <div className="text-sm md:text-base text-gray-400 group-hover:text-gray-300">
                    24/7 holographic support
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl text-center card-hover">
            <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-blue rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm animate-pulse" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Instant QR</h3>
            <p className="text-gray-400 text-sm">Generate secure payment codes instantly</p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center card-hover">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-electric-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full animate-spin" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Sync</h3>
            <p className="text-gray-400 text-sm">Live payment status updates</p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center card-hover">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-electric-pink rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-bounce" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart City Ready</h3>
            <p className="text-gray-400 text-sm">Future-proof infrastructure</p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Index;
