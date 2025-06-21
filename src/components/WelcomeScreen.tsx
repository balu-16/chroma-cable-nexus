
import React, { useEffect, useState } from 'react';
import ParticleBackground from './ParticleBackground';
import FloatingShapes from './FloatingShapes';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleClick = () => {
    onComplete();
  };

  return (
    <div 
      className="fixed inset-0 z-50 min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-surface cursor-pointer"
      onClick={handleClick}
    >
      <ParticleBackground />
      <FloatingShapes />
      
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Welcome Content */}
        <div className="text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-electric bg-clip-text text-transparent animate-glow-pulse">
            Welcome to
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-neon bg-clip-text text-transparent text-glow">
            HariBabu Cable Billing System
          </h2>
          
          {/* Loading Animation */}
          <div className="mb-8">
            <div className="w-32 h-1 bg-gradient-electric mx-auto rounded-full animate-pulse" />
          </div>
          
          {/* Click to Continue */}
          <div className="animate-bounce">
            <p className="text-lg text-gray-300 mb-4">
              Click anywhere to continue
            </p>
            <div className="flex justify-center items-center gap-2">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
          
          {/* Countdown */}
          <div className="mt-8 glass-card p-4 rounded-xl inline-block">
            <p className="text-sm text-gray-400">Auto-continue in</p>
            <p className="text-2xl font-bold text-electric-blue">{timeLeft}s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
