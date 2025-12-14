import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { SupportBot } from './components/SupportBot';
import { Box, Bot, Server, Zap, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Testimonial, FAQItem } from './types';

// --- Sub Components ---

const ServicesPreview: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
    <section className="py-24 bg-[#0B1120]">
        <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Minecraft */}
                <div onClick={() => onNavigate('minecraft')} className="bg-[#1e293b]/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-green-500/30 transition-all cursor-pointer group">
                    <div className="mb-4 text-green-500 group-hover:scale-110 transition-transform"><Box size={50} /></div>
                    <h3 className="text-xl font-bold text-white mb-2">Minecraft Hosting</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1">High-performance Minecraft server hosting with instant setup, DDoS protection, and mod support.</p>
                    <div className="w-full space-y-2 mb-6 text-left">
                        <div className="flex items-center gap-2 text-xs text-gray-300"><div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={10} className="text-green-500" /></div> Unlimited SSD Storage</div>
                        <div className="flex items-center gap-2 text-xs text-gray-300"><div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={10} className="text-green-500" /></div> Free Subdomain</div>
                        <div className="flex items-center gap-2 text-xs text-gray-300"><div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={10} className="text-green-500" /></div> Modpack Support</div>
                    </div>
                    <button className="w-full py-3 bg-[#6366f1] group-hover:bg-[#4f46e5] text-white rounded-lg font-bold text-sm transition-colors">View Plans</button>
                </div>

                {/* Discord */}
                <div onClick={() => onNavigate('bot')} className="bg-[#1e293b]/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-indigo-500/30 transition-all cursor-pointer group">
                    <div className="mb-4 text-[#5865F2] group-hover:scale-110 transition-transform"><Bot size={50} /></div>
                    <h3 className="text-xl font-bold text-white mb-2">Discord Bot Hosting</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1">Reliable Discord bot hosting with 24/7 uptime, easy deployment, and scalable resources.</p>
                    <div className="w-full space-y-2 mb-6 text-left">
                         <div className="flex items-center gap-2 text-xs text-gray-300"><div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={10} className="text-green-500" /></div> Always Online</div>
                         <div className="flex items-center gap-2 text-xs text-gray-300"><div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={10} className="text-green-500" /></div> Easy Deployment</div>
                         <div className="flex items-center gap-2 text-xs text-gray-300"><div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={10} className="text-green-500" /></div> Auto Updates</div>
                    </div>
                    <button className="w-full py-3 bg-[#6366f1] group-hover:bg-[#4f46e5] text-white rounded-lg font-bold text-sm transition-colors">View Plans</button>
                </div>

                 {/* VPS */}
                 <div onClick={() => onNavigate('vps')} className="bg-[#1e293b]/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-purple-500/30 transition-all cursor-pointer group">
                    <div className="mb-4 text-purple-500 group-hover:scale-110 transition-transform"><Server size={50} /></div>
                    <h3 className="text-xl font-bold text-white mb-2">VPS Hosting</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1">Powerful Virtual Private Servers with dedicated resources, full control, and scalability.</p>
                    <div className="w-full space-y-2 mb-6 text-left">
                         <div className="flex items-center gap-2 text-xs text-gray-300"><div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={10} className="text-green-500" /></div> Dedicated Resources</div>
                         <div className="flex items-center gap-2 text-xs text-gray-300"><div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={10} className="text-green-500" /></div> Full Root Access</div>
                         <div className="flex items-center gap-2 text-xs text-gray-300"><div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={10} className="text-green-500" /></div> SSD Storage</div>
                    </div>
                    <button className="w-full py-3 bg-[#6366f1] group-hover:bg-[#4f46e5] text-white rounded-lg font-bold text-sm transition-colors">View Plans</button>
                </div>

             </div>
        </div>
    </section>
);

const Network = () => (
    <section className="py-24 bg-[#0B1120] relative">
         <div className="container mx-auto px-4 text-center">
             <div className="inline-block bg-[#6366f1] text-white text-xs px-3 py-1 rounded-full mb-4">Global Network</div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Global <span className="text-white">Network Coverage</span></h2>
             <p className="text-gray-400 mb-12 max-w-xl mx-auto">From Asia to Europe to America, we're close to your players everywhere.</p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                      { city: 'Mumbai', country: 'India', flag: '🇮🇳', ping: '55 ms' },
                      { city: 'Singapore', country: 'Singapore', flag: '🇸🇬', ping: '32 ms' },
                      { city: 'Frankfurt', country: 'Germany', flag: '🇩🇪', ping: '110 ms' },
                  ].map((loc, i) => (
                      <div key={i} className="bg-[#1e293b] rounded-2xl p-6 border border-white/5 flex flex-col items-center">
                          <div className="text-4xl mb-4">{loc.flag}</div>
                          <h3 className="text-xl font-bold text-white mb-1">{loc.city}</h3>
                          <p className="text-gray-400 text-sm mb-6">{loc.country}</p>
                          <div className="px-4 py-1.5 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-sm flex items-center gap-2">
                               <span className="w-2 h-2 rounded-full bg-green-500"></span>
                               {loc.ping}
                          </div>
                      </div>
                  ))}
             </div>
         </div>
    </section>
);

const Testimonials = () => {
    const testimonials: Testimonial[] = [
        {
            id: '1',
            name: 'Rajesh Saini',
            role: 'Minecraft Server Owner',
            content: 'I experienced a smooth server with good ping but the panel was down a few times',
            stars: 5,
            avatarInitial: 'R',
            avatarColor: 'bg-red-600'
        },
        {
            id: '2',
            name: 'Ayan ansari',
            role: 'Discord Bot Developer',
            content: 'Mujhe ab tak ki sabse achhi hosting lagi, kam budget mein best server aur VPS dene ke liye bahut-bahut dhanyavad PixelNode ❤️💜.',
            stars: 5,
            avatarInitial: 'A',
            avatarColor: 'bg-purple-600'
        },
        {
            id: '3',
            name: 'RTX Gamer',
            role: 'PixelNode Customer',
            content: 'Yeh minimum downtime ke saath ek bahut acchi server hosting hai. Yeh apni keemat ke hisaab se sabse acchi hai. ❤️',
            stars: 5,
            avatarInitial: 'R',
            avatarColor: 'bg-green-600'
        }
    ];

    return (
        <section className="py-24 bg-[#0f172a]">
             <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Customer <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">Testimonials</span></h2>
                 <p className="text-gray-400 mb-12">See what our clients are saying about our hosting services.</p>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                     {testimonials.map((t) => (
                         <div key={t.id} className="bg-[#1e293b]/50 border border-white/5 p-8 rounded-2xl text-left hover:border-white/10 transition-colors">
                             <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.content}"</p>
                             <div className="flex items-center gap-4 mt-auto">
                                 <div className={`w-12 h-12 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold text-lg`}>
                                     {t.avatarInitial}
                                 </div>
                                 <div>
                                     <h4 className="text-white font-bold">{t.name}</h4>
                                     <p className="text-gray-500 text-xs">{t.role}</p>
                                     <div className="flex text-yellow-500 mt-1">
                                         {[...Array(t.stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                     </div>
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs: FAQItem[] = [
        { question: "What Minecraft versions do you support?", answer: "We support all Minecraft versions including Vanilla, Spigot, Paper, Forge, Fabric, and Bedrock Edition. You can easily switch versions from our panel." },
        { question: "Do you support modpacks?", answer: "Yes! Our panel includes a one-click modpack installer for popular packs from CurseForge, Modrinth, and FTB." },
        { question: "How do I upload my existing world?", answer: "You can use SFTP to upload your world folder directly to the server, or use the File Manager in our control panel." },
        { question: "What is your uptime guarantee?", answer: "We provide a 99.9% uptime guarantee. If we fall below this, you may be eligible for SLA credits." },
        { question: "Do you offer a free trial?", answer: "We occasionally offer trials or money-back guarantees. Please check our terms of service for the latest policy." }
    ];

    return (
        <section className="py-24 bg-[#0B1120]">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently <span className="text-[#8b5cf6]">Asked Questions</span></h2>
                     <p className="text-gray-400">Find answers to common questions about our Minecraft hosting services.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-[#1e293b]/50 border border-white/5 rounded-xl overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-white">{faq.question}</span>
                                {openIndex === i ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Page Components ---

const HomePage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
    <>
        <Hero 
            title={<span><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">PixelNode</span> Hosting</span>}
            subtitle="Premium game hosting solutions for communities of all sizes. Experience low latency and high reliability."
            badge="Welcome to PixelNode"
            showButtons={true}
            onNavigate={onNavigate}
        />
        <ServicesPreview onNavigate={onNavigate} />
        <Features />
        <Network />
        <Testimonials />
    </>
);

const MinecraftPage: React.FC = () => (
    <>
        <Hero 
            title={<span><span className="text-[#10b981]">Minecraft</span> Hosting</span>} 
            subtitle="Build your dream world with our high-performance Minecraft servers. Instant setup and full mod support."
            badge="Minecraft"
            backgroundImage="https://images.unsplash.com/photo-1587573021765-9eb8b54f7863?q=80&w=2070&auto=format&fit=crop"
            showButtons={false}
        />
        <Pricing filter="minecraft" />
        <FAQ />
    </>
);

const BotPage: React.FC = () => (
    <>
        <Hero 
            title={<span><span className="text-[#5865F2]">Discord Bot</span> Hosting</span>}
            subtitle="Keep your Discord bots online 24/7 with our reliable and easy-to-use hosting platform."
            badge="Discord Bot"
            backgroundImage="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2070&auto=format&fit=crop"
            showButtons={false}
        />
        <Features />
        <Pricing filter="bot" />
    </>
);

const VPSPage: React.FC = () => (
    <>
        <Hero 
            title={<span><span className="text-[#8b5cf6]">VPS</span> Hosting</span>}
            subtitle="Full root access and dedicated resources for your demanding applications and game servers."
            badge="Virtual Private Server"
            backgroundImage="https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2070&auto=format&fit=crop"
            showButtons={false}
        />
        <Features />
        <Pricing filter="vps" />
    </>
);

// --- Main App ---

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-[#6366f1]/30 selection:text-white">
      <Navbar onNavigate={setPage} currentPage={page} />
      
      <main>
        {page === 'home' && <HomePage onNavigate={setPage} />}
        {page === 'minecraft' && <MinecraftPage />}
        {page === 'vps' && <VPSPage />}
        {page === 'bot' && <BotPage />}
      </main>

      <Footer onNavigate={setPage} />
      <SupportBot />
    </div>
  );
}

export default App;