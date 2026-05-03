const CTA = () => (
  <section className="py-40 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-gradient-to-br from-[#1A1614] via-[#383838] to-[#1A1614] rounded-[3.5rem] px-10 py-32 text-center text-[#F4E1D2] relative overflow-hidden group shadow-3xl border border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#BF7D3A]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#BF7D3A]/10 transition-all duration-1000" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        
        <h2 className="text-7xl md:text-[10rem] font-light mb-16 relative z-10 tracking-tight leading-[1] text-glow-amber font-serif italic">
          Refine Your <br />
          <span className="text-[#BF7D3A] font-sans not-italic">Vision</span>
        </h2>
        <p className="text-[#F4E1D2]/60 text-xl md:text-2xl mb-20 max-w-3xl mx-auto relative z-10 font-light leading-relaxed tracking-wide">
          Synchronize with a global network of elite creators. Initialize your access to the gallery today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-10 relative z-10">
          <button className="btn-amber h-24 px-20 text-sm tracking-[0.3em] rounded-xl shadow-3xl">
            Initialize Access
          </button>
          <button className="h-24 px-20 border-2 border-white/10 text-[#F4E1D2]/80 hover:text-[#F4E1D2] hover:bg-white/5 rounded-xl text-sm font-semibold uppercase tracking-[0.3em] transition-all">
            System Identity
          </button>
        </div>
        <div className="mt-24 text-[#F4E1D2]/20 text-[10px] font-semibold uppercase tracking-[0.6em] relative z-10">
          Neural Uplink Active &bull; No Latency
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
