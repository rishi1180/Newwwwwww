import React from 'react';
import { Twitter, Instagram, Disc } from 'lucide-react';

interface FooterProps {
    onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
        onNavigate(page);
        window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-[#0B1120] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1">
             <div className="flex items-center gap-1 mb-6">
                 <img src="https://cdn-icons-png.flaticon.com/512/2622/2622271.png" alt="PixelNode" className="w-6 h-6 mr-2" />
                 <span className="font-bold text-xl text-white">Pixel</span>
                 <span className="font-bold text-xl text-[#10b981]">Node</span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               High-performance game server hosting with 99.9% uptime and 24/7 support.
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#8b5cf6] hover:text-white transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#8b5cf6] hover:text-white transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#5865F2] hover:text-white transition-all"><Disc size={18} /></a>
             </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 border-b-2 border-[#8b5cf6] inline-block pb-1">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#minecraft" onClick={(e) => handleLinkClick(e, 'minecraft')} className="hover:text-white transition-colors">Minecraft Hosting</a></li>
                <li><a href="#bot" onClick={(e) => handleLinkClick(e, 'bot')} className="hover:text-white transition-colors">Discord Bot Hosting</a></li>
                <li><a href="#vps" onClick={(e) => handleLinkClick(e, 'vps')} className="hover:text-white transition-colors">VPS Hosting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6 border-b-2 border-[#8b5cf6] inline-block pb-1">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-white mb-6 border-b-2 border-[#8b5cf6] inline-block pb-1">Connect</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Ticket</a></li>
                <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} PixelNode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};