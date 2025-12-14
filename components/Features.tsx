import React from 'react';
import { Shield, Rocket, Upload, Headphones } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'ddos',
    title: 'DDoS Protection',
    description: 'Advanced protection against DDoS attacks to keep your services online.',
    icon: 'shield'
  },
  {
    id: 'setup',
    title: 'Instant Setup',
    description: 'Your server is ready in seconds with our automated setup process.',
    icon: 'rocket'
  },
  {
    id: 'migration',
    title: 'Easy Migration',
    description: 'We help you migrate your existing servers with zero downtime.',
    icon: 'upload'
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Our expert team is available around the clock to assist you.',
    icon: 'headphones'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#0B1120]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">Features</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Everything you need to run your game servers and applications smoothly.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon === 'shield' ? Shield : 
                         feature.icon === 'rocket' ? Rocket : 
                         feature.icon === 'upload' ? Upload : Headphones;
            return (
              <div key={feature.id} className="p-8 rounded-2xl bg-[#1e293b]/50 border border-white/5 hover:border-[#6366f1]/50 transition-all duration-300 group flex flex-col items-center text-center">
                <div className="mb-6 text-[#6366f1] group-hover:scale-110 transition-transform duration-300">
                  <Icon size={48} fill="currentColor" className="opacity-20 absolute" />
                  <Icon size={48} className="relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};