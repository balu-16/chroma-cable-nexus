
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Contact as ContactIcon, MapPin, Clock, Mail, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-bg via-purple-900/20 to-blue-900/20">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0">
        <div className="mesh-gradient absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-electric-blue/20 rotate-45 animate-float" />
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-neon-purple/20 rotate-12 animate-bounce-gentle" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-neon-pink/20 to-electric-cyan/20 rounded-full animate-pulse" />
      </div>

      {/* Back Button */}
      <Link to="/" className="fixed top-8 left-8 z-50">
        <Button variant="outline" className="glass-card border-neon-purple/30 hover:border-neon-purple hover:bg-neon-purple/10 text-white">
          <ArrowUp className="w-4 h-4 mr-2 rotate-[-90deg]" />
          Back to Home
        </Button>
      </Link>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            Contact Nexus
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with our quantum support team across multiple dimensions
          </p>
          <div className="mt-6 w-32 h-1 bg-gradient-electric mx-auto rounded-full animate-pulse" />
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Owner Details */}
          <div className="glass-card p-8 rounded-3xl card-hover animate-slide-up holographic">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-electric-blue to-neon-blue rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <ContactIcon className="w-10 h-10 text-white animate-bounce-gentle" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 text-glow">Owner Details</h2>
              <div className="w-16 h-1 bg-electric-blue mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse" />
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-white font-semibold text-lg">Alex Quantum</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 text-neon-blue animate-pulse" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 text-electric-cyan animate-pulse" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold text-lg">alex@nexus.quantum</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Details */}
          <div className="glass-card p-8 rounded-3xl card-hover animate-slide-up holographic" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-purple to-electric-purple rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-white animate-bounce-gentle" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 text-glow">Office Details</h2>
              <div className="w-16 h-1 bg-neon-purple mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              <div className="p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse mt-2" />
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-white font-semibold text-lg leading-relaxed">
                      Nexus Tower, Floor 42<br />
                      Quantum District, Cyber City<br />
                      PIN: 500001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <Clock className="w-5 h-5 text-neon-pink animate-pulse" />
                <div>
                  <p className="text-gray-400 text-sm">Office Hours</p>
                  <p className="text-white font-semibold text-lg">24/7 Quantum Time</p>
                  <p className="text-neon-pink text-sm">Always Connected</p>
                </div>
              </div>

              <div className="p-4 glass-card rounded-xl bg-gradient-to-r from-neon-purple/10 to-electric-purple/10 border border-neon-purple/20">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <p className="text-neon-green font-medium">Currently Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Support */}
          <div className="glass-card p-8 rounded-3xl card-hover animate-slide-up holographic" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-pink to-electric-pink rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-white rounded-full animate-spin" style={{ animationDuration: '3s' }}>
                  <div className="w-2 h-2 bg-white rounded-full mt-2 ml-2" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 text-glow">Technical Support</h2>
              <div className="w-16 h-1 bg-neon-pink mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 text-neon-cyan animate-pulse" />
                <div>
                  <p className="text-gray-400 text-sm">Support Email</p>
                  <p className="text-white font-semibold text-lg">support@nexus.quantum</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 text-neon-green animate-pulse" />
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="text-white font-semibold text-lg">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <Clock className="w-5 h-5 text-electric-blue animate-pulse" />
                <div>
                  <p className="text-gray-400 text-sm">Response Time</p>
                  <p className="text-white font-semibold text-lg">Instant Quantum</p>
                  <p className="text-electric-blue text-sm">< 1 nanosecond</p>
                </div>
              </div>

              <div className="p-4 glass-card rounded-xl bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 border border-electric-blue/20">
                <div className="text-center">
                  <p className="text-electric-blue font-semibold mb-2">AI Assistant Available</p>
                  <div className="flex justify-center">
                    <div className="w-3 h-3 bg-electric-blue rounded-full animate-bounce mr-1" />
                    <div className="w-3 h-3 bg-neon-blue rounded-full animate-bounce mr-1" style={{ animationDelay: '0.1s' }} />
                    <div className="w-3 h-3 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
            <p className="text-gray-300 mb-6">
              Our quantum support team is standing by across all dimensions of reality.
            </p>
            <Button className="btn-3d bg-gradient-electric hover:bg-gradient-neon px-8 py-4 text-lg font-semibold rounded-xl">
              <Phone className="w-5 h-5 mr-2" />
              Start Quantum Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
