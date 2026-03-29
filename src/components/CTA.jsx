const CTA = () => (
  <section className="py-24" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-primary rounded-[4.5rem] px-8 py-20 md:p-32 text-center text-white relative overflow-hidden group shadow-[0_60px_100px_-30px_rgba(139,92,246,0.6)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-all duration-1000 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 group-hover:bg-black/20 transition-all duration-1000 z-0"></div>
        <h2 className="text-5xl md:text-7xl font-black mb-10 relative z-10 tracking-tighter leading-[1.05]">Ready To Transform <br className="hidden md:block"/> Your Workflow?</h2>
        <p className="text-primary-content text-xl md:text-2xl mb-14 max-w-3xl mx-auto relative z-10 font-bold opacity-90 leading-relaxed uppercase tracking-tight">Over the years we have collected the most valuable tools for designers, developers, and marketing professionals.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-10">
          <button className="btn bg-white text-primary border-none hover:bg-gray-100 hover:scale-[1.05] active:scale-[0.95] rounded-full h-20 px-16 text-2xl font-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all">Explore Products</button>
          <button className="btn btn-outline border-white/40 border-2 text-white hover:bg-white/10 hover:border-white hover:scale-[1.05] active:scale-[0.95] rounded-full h-20 px-16 text-2xl font-black transition-all">View Pricing</button>
        </div>
        <div className="mt-16 text-white/50 text-[11px] uppercase font-black tracking-[0.4em] relative z-10">Used by over 50,000+ teams worldwide</div>
      </div>
    </div>
  </section>
);

export default CTA;
