const Stats = () => (
  <section className="py-20 md:py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="glass rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 border-white/5 shadow-3xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#BF7D3A]/5 via-transparent to-[#F7CA79]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center relative z-10">
          <div className="space-y-3 md:space-y-4">
            <div className="text-5xl md:text-7xl font-light tracking-tight text-[#F4E1D2] font-serif italic text-glow-amber">50K<span className="text-[#BF7D3A] font-sans not-italic">+</span></div>
            <p className="text-[#F4E1D2]/30 font-medium uppercase tracking-[0.4em] text-[9px] md:text-[10px]">Trusted Creators</p>
          </div>
          <div className="space-y-3 md:space-y-4 border-y md:border-y-0 md:border-x border-white/5 py-8 md:py-0">
            <div className="text-5xl md:text-7xl font-light tracking-tight text-[#BF7D3A] font-serif italic text-glow-amber">200<span className="text-[#F4E1D2] font-sans not-italic">+</span></div>
            <p className="text-[#F4E1D2]/30 font-medium uppercase tracking-[0.4em] text-[9px] md:text-[10px]">Refined Assets</p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="text-5xl md:text-7xl font-light tracking-tight text-[#F4E1D2] font-serif italic text-glow-amber">4.9<span className="text-[#F7CA79] font-sans not-italic">/5</span></div>
            <p className="text-[#F4E1D2]/30 font-medium uppercase tracking-[0.4em] text-[9px] md:text-[10px]">Client Merit</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
