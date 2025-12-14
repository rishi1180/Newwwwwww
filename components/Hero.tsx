import React from 'react';

interface HeroProps {
    title?: React.ReactNode;
    subtitle?: string;
    badge?: string;
    backgroundImage?: string;
    showButtons?: boolean;
    onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
    title, 
    subtitle, 
    badge = "Game Hosting", 
    backgroundImage = "https://images.unsplash.com/photo-1607988795628-9eee6474823b?q=80&w=2070&auto=format&fit=crop",
    showButtons = true,
    onNavigate
}) => {
  return (
    <div className="relative min-h-[70vh] md:min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0B1120]">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120]"></div>
            <img 
                src={backgroundImage}
                alt="Background" 
                className="w-full h-full object-cover"
            />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
            
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 text-[#8b5cf6] text-sm font-medium animate-fade-in-up">
                {badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
                {title || (
                    <>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">High-Performance</span> <br/> Game Hosting
                    </>
                )}
            </h1>
            
            <p className="text-gray-400 max-w-2xl text-lg md:text-xl mb-8 leading-relaxed">
                {subtitle || "High-performance game server hosting with 99.9% uptime, DDoS protection, and instant setup. Perfect for any size community."}
            </p>

            <button className="px-8 py-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/30 w-full sm:w-auto transform hover:scale-105">
                Get Started
            </button>

            {showButtons && onNavigate && (
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <div onClick={() => onNavigate('minecraft')} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-purple-500/50 transition-colors cursor-pointer">
                        Minecraft Hosting
                    </div>
                    <div onClick={() => onNavigate('vps')} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-purple-500/50 transition-colors cursor-pointer">
                        VPS Hosting
                    </div>
                    <div onClick={() => onNavigate('bot')} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-purple-500/50 transition-colors cursor-pointer">
                        Discord Hosting
                    </div>
                </div>
            )}

        </div>
    </div>
  );
};