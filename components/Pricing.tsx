import React, { useState } from 'react';
import { Check, Crown, ChevronDown, ChevronUp, Server, Cpu, HardDrive, Database, Shield, RotateCcw, Network, Star, ArrowRight, ArrowUp, MapPin, Filter } from 'lucide-react';

interface PricingProps {
    filter?: 'all' | 'minecraft' | 'bot' | 'vps';
}

interface PlanSpec {
    text: string;
    icon: React.ElementType;
}

interface MinecraftPlan {
    name: string;
    price: string;
    specs: string[];
}

interface VpsPlan {
    name: string;
    price: string;
    location: string;
    flag: string;
    cpu: string;
    clock: string;
    ram: string;
    storage: string;
    bandwidth: string;
    ddos: string;
}

export const Pricing: React.FC<PricingProps> = ({ filter = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState<'budget' | 'premium' | 'exclusive'>('budget');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // VPS Filter State
  const [vpsLocation, setVpsLocation] = useState('India');
  const [vpsCategory, setVpsCategory] = useState('Intel Xeon - Standard');
  const [isVpsLocOpen, setIsVpsLocOpen] = useState(false);
  const [isVpsCatOpen, setIsVpsCatOpen] = useState(false);
  
  // Data for Minecraft Plans
  const minecraftPlans: Record<string, MinecraftPlan[]> = {
    budget: [
       {
        name: 'Chicken Plan',
        price: '30.00',
        specs: [
            '50% CPU [Shared vCore]',
            '1GB DDR4 ECC Memory',
            '5GB NVMe SSD',
            '1 Additional Port',
            '0 Database Space',
            'No Backups',
            'Standard Game Panel & Basic DDoS Protection'
        ]
      },
      {
        name: 'Pig Plan',
        price: '60.00',
        specs: [
            '100% CPU [1 vCore High Frequency]',
            '2GB DDR4 ECC Memory',
            '10GB NVMe SSD',
            '2 Additional Ports',
            '1 Database Space',
            '1 Backup Limit (Automated)',
            'Premium Game Panel & Advanced DDoS Protection'
        ]
      },
       {
        name: 'Cow Plan',
        price: '90.00',
        specs: [
            '100% CPU [1 vCore High Frequency]',
            '3GB DDR4 ECC Memory',
            '15GB NVMe SSD',
            '4 Additional Ports',
            '2 Database Space',
            '1 Backup Limit (Automated)',
            'Premium Game Panel & Advanced DDoS Protection'
        ]
      },
      {
        name: 'Llama Plan',
        price: '120.00',
        specs: [
            '150% CPU [1 vCore High Frequency]',
            '4GB DDR4 ECC Memory',
            '20GB NVMe SSD',
            '5 Additional Ports',
            '4 Database Space',
            '1 Backup Limit (Automated)',
            'Premium Game Panel & Advanced DDoS Protection'
        ]
      },
      {
        name: 'Villager Plan',
        price: '150.00',
        specs: [
            '180% CPU [1 vCore High Frequency]',
            '5GB DDR4 ECC Memory',
            '25GB NVMe SSD',
            '5 Additional Ports',
            '4 Database Space',
            '1 Backup Limit (Automated)',
            'Premium Game Panel & Advanced DDoS Protection'
        ]
      }
    ],
    premium: [
        {
            name: 'Iron Golem',
            price: '300.00',
            specs: [
                '200% CPU [2 vCore High Frequency]',
                '8GB DDR4 ECC Memory',
                '50GB NVMe SSD',
                'Unlimited Ports',
                '10 Database Space',
                'Daily Automated Backups',
                'Premium Game Panel & Advanced DDoS Protection'
            ]
        },
        {
            name: 'Warden',
            price: '600.00',
            specs: [
                '400% CPU [4 vCore High Frequency]',
                '16GB DDR4 ECC Memory',
                '100GB NVMe SSD',
                'Unlimited Ports',
                'Unlimited Database Space',
                'Daily Automated Backups',
                'Premium Game Panel & Advanced DDoS Protection'
            ]
        }
    ],
    exclusive: [
        {
            name: 'Ender Dragon',
            price: '1200.00',
            specs: [
                'Dedicated Ryzen 9 7950X Thread',
                '32GB DDR5 Memory',
                '500GB NVMe SSD',
                'Dedicated IP Address',
                'Priority 24/7 Support',
                'Hourly Automated Backups',
                'Enterprise DDoS Protection'
            ]
        }
    ]
  };

  // Data for VPS Plans
  const vpsPlansData: VpsPlan[] = [
    {
      name: 'Xeon Standard XS',
      price: '3.00',
      location: 'India',
      flag: '🇮🇳',
      cpu: 'Intel Xeon (2 vCores)',
      clock: '2.30 GHz Base (3.30 GHz Turbo)',
      ram: '6 GB DDR4 ECC Memory',
      storage: '50 GB NVMe SSD Storage',
      bandwidth: 'Unmetered Bandwidth (1 Gbps)',
      ddos: 'Advance DDoS Protection'
    },
    {
      name: 'Xeon Standard S',
      price: '4.00',
      location: 'India',
      flag: '🇮🇳',
      cpu: 'Intel Xeon (2 vCores)',
      clock: '2.30 GHz Base (3.30 GHz Turbo)',
      ram: '8 GB DDR4 ECC Memory',
      storage: '80 GB NVMe SSD Storage',
      bandwidth: 'Unmetered Bandwidth (1 Gbps)',
      ddos: 'Advance DDoS Protection'
    },
    {
      name: 'Xeon Standard M',
      price: '6.00',
      location: 'India',
      flag: '🇮🇳',
      cpu: 'Intel Xeon (4 vCores)',
      clock: '2.30 GHz Base (3.30 GHz Turbo)',
      ram: '12 GB DDR4 ECC Memory',
      storage: '100 GB NVMe SSD Storage',
      bandwidth: 'Unmetered Bandwidth (1 Gbps)',
      ddos: 'Advance DDoS Protection'
    },
    {
      name: 'Xeon Standard L',
      price: '8.00',
      location: 'India',
      flag: '🇮🇳',
      cpu: 'Intel Xeon (6 vCores)',
      clock: '2.30 GHz Base (3.30 GHz Turbo)',
      ram: '16 GB DDR4 ECC Memory',
      storage: '150 GB NVMe SSD Storage',
      bandwidth: 'Unmetered Bandwidth (1 Gbps)',
      ddos: 'Advance DDoS Protection'
    },
    {
      name: 'Xeon Standard XL',
      price: '12.00',
      location: 'India',
      flag: '🇮🇳',
      cpu: 'Intel Xeon (6 vCores)',
      clock: '2.30 GHz Base (3.30 GHz Turbo)',
      ram: '24 GB DDR4 ECC Memory',
      storage: '200 GB NVMe SSD Storage',
      bandwidth: 'Unmetered Bandwidth (1 Gbps)',
      ddos: 'Advance DDoS Protection'
    },
    {
      name: 'Xeon Standard XXL',
      price: '15.00',
      location: 'India',
      flag: '🇮🇳',
      cpu: 'Intel Xeon (8 vCores)',
      clock: '2.30 GHz Base (3.30 GHz Turbo)',
      ram: '32 GB DDR4 ECC Memory',
      storage: '300 GB NVMe SSD Storage',
      bandwidth: 'Unmetered Bandwidth (1 Gbps)',
      ddos: 'Advance DDoS Protection'
    },
    {
        name: 'Xeon Standard 2XL',
        price: '18.00',
        location: 'India',
        flag: '🇮🇳',
        cpu: 'Intel Xeon (10 vCores)',
        clock: '2.30 GHz Base (3.30 GHz Turbo)',
        ram: '48 GB DDR4 ECC Memory',
        storage: '350 GB NVMe SSD Storage',
        bandwidth: 'Unmetered Bandwidth (1 Gbps)',
        ddos: 'Advance DDoS Protection'
    },
    {
        name: 'Xeon Standard 3XL',
        price: '22.00',
        location: 'India',
        flag: '🇮🇳',
        cpu: 'Intel Xeon (12 vCores)',
        clock: '2.30 GHz Base (3.30 GHz Turbo)',
        ram: '64 GB DDR4 ECC Memory',
        storage: '400 GB NVMe SSD Storage',
        bandwidth: 'Unmetered Bandwidth (1 Gbps)',
        ddos: 'Advance DDoS Protection'
    }
  ];

  const getSpecIcon = (text: string) => {
      const lower = text.toLowerCase();
      if (lower.includes('cpu') || lower.includes('vcore') || lower.includes('processor')) return Cpu;
      if (lower.includes('ram') || lower.includes('memory')) return Server;
      if (lower.includes('ssd') || lower.includes('disk') || lower.includes('storage')) return HardDrive;
      if (lower.includes('port') || lower.includes('bandwidth')) return Network;
      if (lower.includes('database')) return Database;
      if (lower.includes('backup')) return RotateCcw;
      if (lower.includes('protection') || lower.includes('shield')) return Shield;
      return Check;
  };

  const renderBotPlan = () => (
      <div className="bg-[#1e293b]/50 border border-white/5 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Starter Bot</h3>
            <p className="text-gray-400 text-sm mb-4">Bot Hosting Starting At</p>
            <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-white">₹39</span>
                <span className="text-gray-400 ml-1">/month</span>
            </div>
        </div>

        <div className="space-y-4 mb-8 flex-1">
            {[
                '1 vCore High Frequency',
                '1GB DDR5 RAM',
                '10GB NVMe Disk',
                '2.4GHz Clock Speed',
                'Intel Xenon',
                'Unmetered Bandwidth'
            ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="p-0.5 bg-green-500/20 rounded">
                        <Check size={14} className="text-green-500" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                </div>
            ))}
        </div>

        <button className="w-full py-3.5 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
            Get Started <ArrowRight size={18} />
        </button>
      </div>
  );

  const renderVPSFeaturedPlan = () => (
      <div className="bg-[#1e293b]/80 border border-[#8b5cf6] rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col relative transform md:scale-105 shadow-2xl shadow-purple-900/20 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="bg-[#a855f7] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
        </div>
        
        <div className="text-center mb-6 mt-4">
            <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
            <p className="text-gray-400 text-sm mb-4">VPS Starting at</p>
            <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-white">₹359</span>
                <span className="text-gray-400 ml-1">/month</span>
            </div>
        </div>

        <div className="space-y-4 mb-8 flex-1">
            {[
                '2 vCore High Frequency',
                '4GB DDR5 RAM',
                '40GB NVMe Disk',
                '3.8GHz Clock Speed',
                'Unmetered Bandwidth',
                'Advance OVH DDoS Protection',
                'Premium Add-ons'
            ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="p-0.5 bg-green-500/20 rounded">
                            {i === 6 ? <Crown size={14} className="text-green-500" /> : <Check size={14} className="text-green-500" />}
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                </div>
            ))}
        </div>

        <button className="w-full py-3.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2">
            Get Started <ArrowRight size={18} />
        </button>
      </div>
  );

  const renderVPSCard = (plan: VpsPlan, index: number) => {
      return (
          <div key={index} className="bg-[#1e293b]/40 border border-white/5 rounded-2xl p-0 hover:border-blue-500/30 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="p-6 text-center bg-[#1e293b]/50 border-b border-white/5">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.location} - {plan.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-3">
                       <span>{plan.flag}</span> <span>Noida, IN</span>
                  </div>
                  <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#3b82f6]">${plan.price}</span>
                      <span className="text-gray-400 ml-1 text-sm">/mo</span>
                  </div>
              </div>

              <div className="p-6 space-y-4 flex-1">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Cpu size={20} className="text-gray-400 flex-shrink-0" />
                      <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">Processor</p>
                          <p className="text-white text-sm font-medium">{plan.cpu}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Cpu size={20} className="text-gray-400 flex-shrink-0" />
                      <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">Clock Speed</p>
                          <p className="text-white text-sm font-medium">{plan.clock}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Server size={20} className="text-gray-400 flex-shrink-0" />
                      <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">RAM</p>
                          <p className="text-white text-sm font-medium">{plan.ram}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <HardDrive size={20} className="text-gray-400 flex-shrink-0" />
                      <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">Storage</p>
                          <p className="text-white text-sm font-medium">{plan.storage}</p>
                      </div>
                  </div>
                   <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Network size={20} className="text-gray-400 flex-shrink-0" />
                      <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">Bandwidth</p>
                          <p className="text-white text-sm font-medium">{plan.bandwidth}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Shield size={20} className="text-gray-400 flex-shrink-0" />
                      <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">DDoS Protection</p>
                          <p className="text-white text-sm font-medium">{plan.ddos}</p>
                      </div>
                  </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                  <button className="w-full py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                      Order Now <ArrowRight size={16} />
                  </button>
              </div>
          </div>
      );
  };

  const renderMinecraftCard = (plan: MinecraftPlan, index: number) => {
      const isPopular = plan.name === 'Cow Plan' || plan.name === 'Iron Golem';
      
      return (
        <div key={index} className={`bg-[#1e293b]/60 border ${isPopular ? 'border-[#8b5cf6] shadow-lg shadow-purple-500/10' : 'border-white/5'} rounded-2xl p-6 hover:border-[#6366f1] transition-all duration-300 flex flex-col relative group`}>
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8b5cf6] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    Popular
                </div>
            )}
            
            <div className="text-center mb-6 border-b border-white/5 pb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <div className="flex items-center justify-center text-[#6366f1] mb-4">
                     {/* Placeholder for plan icon if needed, or just keep name clean */}
                </div>
                <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-white">₹{plan.price}</span>
                    <span className="text-gray-400 ml-1 text-sm">/month</span>
                </div>
            </div>

            <div className="space-y-3 mb-8 flex-1">
                {plan.specs.map((spec, i) => {
                    const Icon = getSpecIcon(spec);
                    return (
                        <div key={i} className="flex items-start gap-3">
                            <div className="mt-0.5">
                                <Icon size={16} className="text-blue-400" />
                            </div>
                            <span className="text-gray-300 text-sm leading-tight">{spec}</span>
                        </div>
                    );
                })}
            </div>

            <button className="w-full py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                Order Now <ArrowRight size={16} />
            </button>
            
            {/* Hover arrow up effect from screenshot */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-[#6366f1] flex items-center justify-center shadow-lg">
                    <ArrowUp size={16} className="text-white" />
                </div>
            </div>
        </div>
      );
  };

  return (
    <section id="pricing" className="py-24 bg-[#0B1120] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
            {filter === 'minecraft' ? (
                <>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Minecraft <span className="text-white">Hosting Plans</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        PixelNode Provides Most Cost Effective Yet Extremely Powerful & Best Minecraft Hosting Services
                    </p>
                </>
            ) : filter === 'vps' ? (
                <>
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        VPS Hosting <span className="text-white">Solutions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Powerful and reliable virtual private servers with full root access, NVMe SSD storage, and guaranteed resources. Perfect for websites, applications, game servers, and more.
                    </p>
                </>
            ) : (
                <>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-[#8b5cf6]">Promise</span>
                    </h2>
                    <p className="text-gray-400">
                        Choose the plan that fits your needs. All plans include 24/7 support and DDoS protection.
                    </p>
                </>
            )}
        </div>

        {/* Minecraft Category Selector */}
        {filter === 'minecraft' && (
            <div className="relative w-72 mx-auto mb-16 z-20">
                <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                    className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-5 py-4 flex items-center justify-between text-white font-medium hover:bg-[#334155] transition-colors shadow-lg"
                >
                    <div className="flex items-center gap-3">
                        <Server size={20} className="text-gray-400" />
                        <span>Plan Type: <span className="text-blue-400">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</span></span>
                    </div>
                    {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-[#1e293b] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-30 ring-1 ring-black/50">
                        {['budget', 'premium', 'exclusive'].map((type) => (
                            <div 
                                key={type} 
                                onClick={() => { setSelectedCategory(type as any); setIsDropdownOpen(false); }}
                                className={`px-5 py-4 cursor-pointer flex items-center gap-3 capitalize transition-colors ${selectedCategory === type ? 'bg-[#3b82f6] text-white' : 'hover:bg-white/5 text-gray-300 hover:text-white'}`}
                            >
                                {type === 'budget' && <Server size={18} />}
                                {type === 'premium' && <Crown size={18} />}
                                {type === 'exclusive' && <Star size={18} />}
                                <span className="font-medium">{type}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )}

        {/* VPS Filter Selectors */}
        {filter === 'vps' && (
            <div className="max-w-md mx-auto mb-16 z-20 bg-[#1e293b]/40 border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4 text-white font-medium">
                    <Filter size={18} className="text-gray-400" /> Filter by
                </div>
                <div className="space-y-4">
                    {/* Location Selector */}
                    <div className="relative">
                        <button 
                            onClick={() => setIsVpsLocOpen(!isVpsLocOpen)} 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl px-4 py-3 flex items-center justify-between font-medium shadow-lg transition-transform active:scale-95"
                        >
                            <div className="flex items-center gap-3">
                                {vpsLocation === 'India' && <span className="text-lg">🇮🇳</span>}
                                {vpsLocation === 'Singapore' && <span className="text-lg">🇸🇬</span>}
                                {vpsLocation === 'Germany' && <span className="text-lg">🇩🇪</span>}
                                <span>{vpsLocation}</span>
                            </div>
                            <ChevronDown size={20} />
                        </button>
                        {isVpsLocOpen && (
                            <div className="absolute top-full left-0 w-full mt-2 bg-[#1e293b] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-30">
                                {['India', 'Singapore', 'Germany'].map((loc) => (
                                    <div 
                                        key={loc}
                                        onClick={() => { setVpsLocation(loc); setIsVpsLocOpen(false); }}
                                        className="px-4 py-3 hover:bg-white/5 cursor-pointer text-gray-300 flex items-center gap-3"
                                    >
                                        {loc === 'India' && <span>🇮🇳</span>}
                                        {loc === 'Singapore' && <span>🇸🇬</span>}
                                        {loc === 'Germany' && <span>🇩🇪</span>}
                                        {loc}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Category Selector */}
                    <div className="relative">
                        <button 
                            onClick={() => setIsVpsCatOpen(!isVpsCatOpen)} 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl px-4 py-3 flex items-center justify-between font-medium shadow-lg transition-transform active:scale-95"
                        >
                            <div className="flex items-center gap-3">
                                <Cpu size={18} />
                                <span>{vpsCategory}</span>
                            </div>
                            <ChevronDown size={20} />
                        </button>
                         {isVpsCatOpen && (
                            <div className="absolute top-full left-0 w-full mt-2 bg-[#1e293b] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-30">
                                {['Intel Xeon - Standard', 'AMD EPYC - Premium'].map((cat) => (
                                    <div 
                                        key={cat}
                                        onClick={() => { setVpsCategory(cat); setIsVpsCatOpen(false); }}
                                        className="px-4 py-3 hover:bg-white/5 cursor-pointer text-gray-300"
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}

        <div className={`max-w-7xl mx-auto items-start ${filter === 'vps' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : filter === 'minecraft' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid grid-cols-1 md:grid-cols-3 gap-8'}`}>
          
          {/* Default/Home View */}
          {filter === 'all' && (
             <>
                {renderBotPlan()}
                {renderVPSFeaturedPlan()}
                {/* Featured Minecraft Plan for Home Page */}
                {renderMinecraftCard(minecraftPlans.budget[1], 100)} 
             </>
          )}

          {/* VPS Page View */}
          {filter === 'vps' && (
              <>
                {vpsPlansData.map((plan, index) => renderVPSCard(plan, index))}
              </>
          )}

          {/* Bot Page View */}
          {filter === 'bot' && (
              <>
                 {renderBotPlan()}
                 <div className="bg-[#1e293b]/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                     <div className="bg-white/5 p-4 rounded-full mb-4"><Cpu size={32} className="text-gray-400" /></div>
                     <h3 className="text-xl font-bold text-white mb-2">More Power?</h3>
                     <p className="text-gray-400 text-sm mb-6">We have advanced plans for larger bots with sharding support.</p>
                     <button className="px-6 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors">View Advanced Plans</button>
                 </div>
              </>
          )}

          {/* Minecraft Page View */}
          {filter === 'minecraft' && (
              minecraftPlans[selectedCategory].map((plan, index) => renderMinecraftCard(plan, index))
          )}

        </div>

        {filter === 'vps' && (
            <div className="max-w-3xl mx-auto mt-16 bg-[#1e293b]/40 border border-white/5 rounded-xl p-6 text-center">
                <h4 className="text-white font-bold mb-2">Note:</h4>
                <p className="text-gray-400 text-sm">
                    Our India Intel Xeon plans come with 3 CPU options. You can choose any available option based on current stock.
                </p>
            </div>
        )}
      </div>
    </section>
  );
};