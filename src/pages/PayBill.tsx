
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, QrCode, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const PayBill = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [utrNumber, setUtrNumber] = useState('');
  const [showUTR, setShowUTR] = useState(false);
  const { toast } = useToast();

  const generateQR = () => {
    if (!name || !amount) {
      toast({
        title: "Missing Information",
        description: "Please fill in both name and amount fields.",
        variant: "destructive",
      });
      return;
    }
    setShowQR(true);
    setShowUTR(true);
    toast({
      title: "QR Code Generated",
      description: "Your secure payment QR code is ready!",
    });
  };

  const notifyOwner = () => {
    if (!utrNumber) {
      toast({
        title: "UTR Required",
        description: "Please enter your UTR number.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Payment Confirmed",
      description: "Owner has been notified of your payment!",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-bg via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-transparent to-neon-purple/10 animate-pulse" />
        <div className="cyber-grid absolute inset-0 opacity-20" />
        
        {/* Server Room Effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 bg-gradient-to-b from-electric-blue/40 to-transparent animate-pulse"
              style={{
                left: `${20 + i * 12}%`,
                height: '100%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Back Button */}
      <Link to="/" className="fixed top-8 left-8 z-50">
        <Button variant="outline" className="glass-card border-electric-blue/30 hover:border-electric-blue hover:bg-electric-blue/10 text-white">
          <ArrowUp className="w-4 h-4 mr-2 rotate-[-90deg]" />
          Back to Home
        </Button>
      </Link>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-electric bg-clip-text text-transparent">
              Payment Portal
            </h1>
            <p className="text-xl text-gray-300">Secure quantum-encrypted billing system</p>
            <div className="mt-4 w-24 h-1 bg-gradient-neon mx-auto rounded-full animate-pulse" />
          </div>

          {/* Payment Form */}
          <div className="glass-card p-8 md:p-12 rounded-3xl animate-slide-up holographic">
            <div className="space-y-8">
              {/* Name Field */}
              <div className="space-y-3">
                <Label htmlFor="name" className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
                  Customer Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-glow bg-dark-card/50 border-gray-600 text-white placeholder-gray-400 text-lg py-4 px-6 rounded-xl focus:scale-105 transition-all duration-300"
                />
              </div>

              {/* Amount Field */}
              <div className="space-y-3">
                <Label htmlFor="amount" className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
                  Bill Amount (₹)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount to pay"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="input-glow bg-dark-card/50 border-gray-600 text-white placeholder-gray-400 text-lg py-4 px-6 rounded-xl focus:scale-105 transition-all duration-300"
                />
              </div>

              {/* Generate QR Button */}
              <Button
                onClick={generateQR}
                className="btn-3d w-full py-6 text-xl font-bold bg-gradient-electric hover:bg-gradient-neon rounded-xl text-white transition-all duration-500 group"
                disabled={showQR}
              >
                <QrCode className="w-6 h-6 mr-3 group-hover:animate-spin" />
                {showQR ? 'QR Code Generated' : 'Generate QR Code'}
                <div className="absolute inset-0 rounded-xl animate-neon-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              {/* QR Code Display */}
              {showQR && (
                <div className="text-center space-y-6 animate-slide-up">
                  <div className="inline-block p-8 glass-card rounded-2xl">
                    <div className="w-48 h-48 mx-auto bg-white rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="grid grid-cols-8 gap-1 w-40 h-40">
                        {[...Array(64)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-full h-full ${
                              Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                            } animate-pulse`}
                            style={{ animationDelay: `${i * 0.01}s` }}
                          />
                        ))}
                      </div>
                      <div className="absolute inset-0 animate-neon-glow opacity-30" style={{
                        boxShadow: '0 0 30px rgba(58, 134, 255, 0.8)'
                      }} />
                    </div>
                  </div>
                  <p className="text-electric-blue font-medium">
                    Scan this QR code to complete your payment of ₹{amount}
                  </p>
                </div>
              )}

              {/* UTR Number Field */}
              {showUTR && (
                <div className="space-y-3 animate-slide-up">
                  <Label htmlFor="utr" className="text-lg font-semibold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    UTR Transaction Number
                  </Label>
                  <Input
                    id="utr"
                    type="text"
                    placeholder="Enter 12-digit UTR number"
                    value={utrNumber}
                    onChange={(e) => setUtrNumber(e.target.value)}
                    className="input-glow bg-dark-card/50 border-gray-600 text-white placeholder-gray-400 text-lg py-4 px-6 rounded-xl focus:scale-105 transition-all duration-300"
                  />
                </div>
              )}

              {/* Notify Button */}
              {showUTR && (
                <Button
                  onClick={notifyOwner}
                  className="btn-3d w-full py-6 text-xl font-bold bg-gradient-to-r from-neon-green to-electric-cyan hover:from-electric-cyan hover:to-neon-green rounded-xl text-white transition-all duration-500 group"
                >
                  <Bell className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  I Paid - Notify Owner
                  <div className="absolute inset-0 rounded-xl animate-neon-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              )}
            </div>
          </div>

          {/* Security Notice */}
          <div className="text-center mt-8 opacity-70">
            <p className="text-sm text-gray-400">
              🔒 Secured by quantum encryption • End-to-end protected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayBill;
