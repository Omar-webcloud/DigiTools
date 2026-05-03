const Stats = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="glass rounded-[3rem] p-12 border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          <div className="space-y-3">
            <div className="text-5xl md:text-6xl font-black tracking-tighter text-white">50K+</div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Active Users</p>
          </div>
          <div className="space-y-3 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
            <div className="text-5xl md:text-6xl font-black tracking-tighter text-primary">200+</div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Premium Tools</p>
          </div>
          <div className="space-y-3">
            <div className="text-5xl md:text-6xl font-black tracking-tighter text-white">4.9</div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Rating</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
