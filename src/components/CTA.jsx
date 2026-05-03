const CTA = () => (
  <section className="py-32 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-gradient-to-br from-primary to-secondary rounded-[4rem] px-8 py-20 md:p-24 text-center text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-1000" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        
        <h2 className="text-5xl md:text-8xl font-black mb-10 relative z-10 tracking-tighter leading-[0.9]">
          Ignite Your <br />
          Creative Spark
        </h2>
        <p className="text-white/80 text-lg md:text-2xl mb-14 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
          Join 50,000+ visionaries scaling their digital presence with DigiTools.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <button className="btn bg-white text-primary border-none hover:bg-gray-100 rounded-2xl h-20 px-12 text-xl font-black shadow-2xl transition-all hover:scale-105">
            Get Started Free
          </button>
          <button className="btn btn-ghost border-white/20 border-2 text-white hover:bg-white/10 rounded-2xl h-20 px-12 text-xl font-black transition-all">
            View Enterprise
          </button>
        </div>
        <div className="mt-16 text-white/40 text-xs font-black uppercase tracking-[0.4em] relative z-10">
          No credit card required &bull; Cancel anytime
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
