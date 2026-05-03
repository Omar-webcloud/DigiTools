import { FaCheck } from 'react-icons/fa6';

const Pricing = () => (
  <section className="py-32 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20 md:mb-32">
        <h2 className="text-4xl md:text-7xl font-light text-[#F4E1D2] mb-6 md:mb-8 tracking-tight text-glow-amber italic font-serif">Operational <span className="text-[#BF7D3A] font-sans not-italic">Tiers</span></h2>
        <p className="text-[#F4E1D2]/40 max-w-xl mx-auto font-light text-lg md:text-xl leading-relaxed tracking-wide">Select your synchronization protocol.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch max-w-6xl mx-auto">
        <div className="glass-card p-12 rounded-[2.5rem] flex flex-col border-white/5 shadow-2xl">
          <div className="mb-14">
            <h3 className="text-2xl font-medium text-[#F4E1D2] mb-3 tracking-tight font-serif italic">Foundation</h3>
            <p className="text-[#F4E1D2]/30 font-semibold text-[10px] uppercase tracking-[0.3em]">Essential Node</p>
          </div>
          <div className="mb-14 flex items-baseline gap-2">
            <span className="text-6xl font-light text-[#F4E1D2] tracking-tighter text-glow-amber font-serif italic">$0</span>
            <span className="text-[#F4E1D2]/20 font-medium text-xs uppercase tracking-[0.2em]">/mo</span>
          </div>
          <div className="space-y-6 mb-16 grow">
            {['10 Refined Assets', 'Standard Vault', 'Public Uplink', 'Single Identity'].map((f, i) => (
              <div key={i} className="flex items-center gap-5 text-[11px] text-[#F4E1D2]/40 font-semibold uppercase tracking-[0.2em]">
                <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                   <FaCheck className="w-2 h-2 text-[#BF7D3A]" />
                </div>
                {f}
              </div>
            ))}
          </div>
          <button className="py-4 md:py-5 w-full border border-white/10 text-[#F4E1D2]/60 hover:text-[#F4E1D2] hover:bg-white/5 rounded-xl font-semibold text-[9px] md:text-[10px] uppercase tracking-[0.3em] transition-all">Initialize</button>
        </div>

        <div className="relative group lg:scale-110 z-10">
          <div className="absolute -inset-1 bg-[#BF7D3A]/20 rounded-[2.6rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>
          <div className="glass-card bg-[#1A1614]/95 p-10 md:p-12 rounded-[2.5rem] h-full flex flex-col border-[#BF7D3A]/30 relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#BF7D3A] text-[#1A1614] px-6 py-1.5 md:px-8 md:py-2 rounded-b-xl text-[8px] md:text-[9px] font-bold tracking-[0.3em] uppercase shadow-2xl">
               Prestige
            </div>
            <div className="mb-10 md:mb-14 mt-4 md:mt-6">
              <h3 className="text-2xl md:text-3xl font-medium text-[#F4E1D2] mb-2 md:mb-3 tracking-tight font-serif italic">Professional</h3>
              <p className="text-[#BF7D3A] font-semibold text-[9px] md:text-[10px] uppercase tracking-[0.3em]">High-Velocity Node</p>
            </div>
            <div className="mb-10 md:mb-14 flex items-baseline gap-2">
              <span className="text-6xl md:text-7xl font-light text-[#F4E1D2] tracking-tighter text-glow-amber font-serif italic">$29</span>
              <span className="text-[#F4E1D2]/40 font-medium text-[10px] md:text-xs uppercase tracking-[0.2em]">/mo</span>
            </div>
            <div className="space-y-4 md:space-y-6 mb-12 md:mb-16 grow">
              {['Unlimited Synthesis', 'Priority Matrix', 'Private Archives', '24/7 Identity Support', 'Global Sync', 'Advanced Uplink'].map((f, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-5 text-[10px] md:text-[11px] text-[#F4E1D2]/80 font-semibold uppercase tracking-[0.2em]">
                   <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#BF7D3A] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(191,125,58,0.4)]">
                      <FaCheck className="w-1.5 h-1.5 md:w-2 md:h-2 text-[#1A1614]" />
                   </div>
                  {f}
                </div>
              ))}
            </div>
            <button className="btn-amber w-full">Synchronize</button>
          </div>
        </div>

        <div className="glass-card p-10 md:p-12 rounded-[2.5rem] flex flex-col border-white/5 shadow-2xl">
          <div className="mb-10 md:mb-14">
             <h3 className="text-2xl font-medium text-[#F4E1D2] mb-2 md:mb-3 tracking-tight font-serif italic">Enterprise</h3>
             <p className="text-[#F4E1D2]/30 font-semibold text-[9px] md:text-[10px] uppercase tracking-[0.3em]">Global Matrix</p>
          </div>
          <div className="mb-10 md:mb-14 flex items-baseline gap-2">
             <span className="text-6xl font-light text-[#F4E1D2] tracking-tighter text-glow-amber font-serif italic">$99</span>
             <span className="text-[#F4E1D2]/20 font-medium text-[10px] md:text-xs uppercase tracking-[0.2em]">/mo</span>
          </div>
          <div className="space-y-4 md:space-y-6 mb-12 md:mb-16 grow">
            {['Complete Archives', 'Custom Protocols', 'Direct API Uplink', 'Dedicated Agent', 'SLA Matrix', 'Bulk Export'].map((f, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-5 text-[10px] md:text-[11px] text-[#F4E1D2]/40 font-semibold uppercase tracking-[0.2em]">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                   <FaCheck className="w-1.5 h-1.5 md:w-2 md:h-2 text-[#BF7D3A]" />
                </div>
                {f}
              </div>
            ))}
          </div>
          <button className="py-4 md:py-5 w-full border border-white/10 text-[#F4E1D2]/60 hover:text-[#F4E1D2] hover:bg-white/5 rounded-xl font-semibold text-[9px] md:text-[10px] uppercase tracking-[0.3em] transition-all">Connect</button>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
