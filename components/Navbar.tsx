import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Home, Server, Globe, Info, ChevronDown, ChevronUp, 
  Monitor, User, FileText, Shield, RotateCcw, ScrollText, Cloud, Bot 
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1120] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
             <img src="https://cdn-icons-png.flaticon.com/512/2622/2622271.png" alt="PixelNode" className="w-8 h-8" />
             <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white">Pixel<span className="text-[#10b981]">Node</span></span>
             </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
             <button 
                onClick={() => handleNavClick('home')}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
             >
                <Home size={16} /> Home
             </button>

             {/* Game Hosting Dropdown */}
             <div className="relative group">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors py-2">
                   <Server size={16} /> Game Hosting <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-64 bg-[#1e293b] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 mt-0">
                   <div onClick={() => handleNavClick('minecraft')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                      <img src="https://cdn-icons-png.flaticon.com/512/3665/3665939.png" className="w-8 h-8 rounded" alt="MC" />
                      <div>
                         <div className="text-white font-medium text-sm">Minecraft</div>
                         <div className="text-gray-500 text-xs">Starting at ₹99/mo</div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Other Hosting Dropdown */}
             <div className="relative group">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors py-2">
                   <Globe size={16} /> Other Hosting <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-64 bg-[#1e293b] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 mt-0">
                   <div onClick={() => handleNavClick('vps')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer mb-1">
                      <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400"><Cloud size={18} /></div>
                      <div>
                         <div className="text-white font-medium text-sm">VPS Hosting</div>
                         <div className="text-gray-500 text-xs">Starting at ₹359/mo</div>
                      </div>
                   </div>
                   <div onClick={() => handleNavClick('bot')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                      <div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400"><Bot size={18} /></div>
                      <div>
                         <div className="text-white font-medium text-sm">Bot Hosting</div>
                         <div className="text-gray-500 text-xs">Starting at ₹39/mo</div>
                      </div>
                   </div>
                </div>
             </div>

             {/* About Us Dropdown */}
             <div className="relative group">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors py-2">
                   <Info size={16} /> About Us <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-56 bg-[#1e293b] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 mt-0">
                   {['About Us', 'Terms of Service', 'Privacy Policy', 'Refund Policy', 'Usage Policy'].map((item) => (
                      <div key={item} className="p-2.5 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white text-sm cursor-pointer">
                         {item}
                      </div>
                   ))}
                </div>
             </div>

          </div>

          {/* Desktop Client Portal Button */}
          <div className="hidden lg:block">
             <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
                Client Portal <Monitor size={16} />
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#0B1120] top-20 overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            
            {/* Home */}
            <button 
              onClick={() => handleNavClick('home')}
              className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-300 hover:bg-white/5 rounded-xl transition-colors"
            >
              <Home size={20} />
              <span className="font-medium">Home</span>
            </button>

            {/* Game Hosting Dropdown */}
            <div className="rounded-xl overflow-hidden bg-[#111827]">
              <button 
                onClick={() => toggleDropdown('game')}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Server size={20} />
                  <span className="font-medium">Game Hosting</span>
                </div>
                {openDropdown === 'game' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {openDropdown === 'game' && (
                <div className="bg-[#1f2937] px-2 py-2 space-y-1">
                  <div 
                    onClick={() => handleNavClick('minecraft')}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#374151]/50 hover:bg-[#374151] cursor-pointer"
                  >
                    <img src="https://cdn-icons-png.flaticon.com/512/3665/3665939.png" className="w-10 h-10 rounded-lg" alt="MC" />
                    <div>
                        <div className="text-white font-medium">Minecraft</div>
                        <div className="text-gray-400 text-xs">Starting at ₹99/mo</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Hosting Dropdown */}
            <div className="rounded-xl overflow-hidden bg-[#111827]">
              <button 
                onClick={() => toggleDropdown('other')}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Globe size={20} />
                  <span className="font-medium">Other Hosting</span>
                </div>
                {openDropdown === 'other' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {openDropdown === 'other' && (
                <div className="bg-[#1f2937] px-2 py-2 space-y-1">
                  <div 
                    onClick={() => handleNavClick('vps')}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#374151] cursor-pointer"
                  >
                     <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Cloud size={20} />
                     </div>
                     <div>
                        <div className="text-white font-medium">VPS Hosting</div>
                        <div className="text-gray-400 text-xs">Starting at ₹359/mo</div>
                     </div>
                  </div>
                  <div 
                    onClick={() => handleNavClick('bot')}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#374151] cursor-pointer"
                  >
                     <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Bot size={20} />
                     </div>
                     <div>
                        <div className="text-white font-medium">Bot Hosting</div>
                        <div className="text-gray-400 text-xs">Starting at ₹39/mo</div>
                     </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
             <div className="rounded-xl overflow-hidden bg-[#111827]">
              <button 
                onClick={() => toggleDropdown('about')}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Info size={20} />
                  <span className="font-medium">About Us</span>
                </div>
                {openDropdown === 'about' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {openDropdown === 'about' && (
                <div className="bg-[#1f2937] px-2 py-2 space-y-1">
                   {[
                     { name: 'About Us', icon: Info },
                     { name: 'Terms of Service', icon: FileText },
                     { name: 'Privacy Policy', icon: Shield },
                     { name: 'Refund Policy', icon: RotateCcw },
                     { name: 'Usage Policy', icon: ScrollText }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#374151] cursor-pointer text-gray-300">
                         <item.icon size={18} className="text-blue-400" />
                         <span className="text-sm">{item.name}</span>
                      </div>
                   ))}
                </div>
              )}
            </div>

            {/* Spacer */}
            <div className="h-4"></div>

            {/* Client Portal (Mobile Bottom Style) */}
            <div className="rounded-xl overflow-hidden">
                <button 
                    onClick={() => toggleDropdown('portal')}
                    className="w-full bg-[#3b82f6] text-white flex items-center justify-between px-4 py-3.5 transition-colors font-semibold"
                >
                    <span className="flex items-center gap-2">Client Portal</span>
                    {openDropdown === 'portal' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openDropdown === 'portal' && (
                    <div className="bg-[#2563eb] border-t border-white/10">
                        <button className="w-full flex items-center justify-center gap-2 py-3.5 text-white hover:bg-[#1d4ed8] font-medium border-b border-white/10">
                            <Monitor size={18} /> Game Panel
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 py-3.5 text-white hover:bg-[#1d4ed8] font-medium">
                            <User size={18} /> Client Area
                        </button>
                    </div>
                )}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};