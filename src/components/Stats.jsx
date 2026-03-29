const Stats = () => (
  <section className="bg-primary py-16" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
        <div className="space-y-2">
          <div className="text-4xl md:text-5xl font-black tracking-tighter">50K+</div>
          <p className="text-primary-content font-bold uppercase tracking-widest text-xs opacity-80">Active Users</p>
        </div>
        <div className="space-y-2">
          <div className="text-4xl md:text-5xl font-black tracking-tighter">200+</div>
          <p className="text-primary-content font-bold uppercase tracking-widest text-xs opacity-80">Premium Tools</p>
        </div>
        <div className="space-y-2">
          <div className="text-4xl md:text-5xl font-black tracking-tighter">4.9</div>
          <p className="text-primary-content font-bold uppercase tracking-widest text-xs opacity-80">Rating</p>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
