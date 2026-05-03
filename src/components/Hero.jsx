import { FaPlay } from 'react-icons/fa6';

const Hero = () => (
  <section className="relative pt-32 pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
      <div className="lg:w-3/5 text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-xs font-bold mb-8 ring-1 ring-white/10 ring-inset">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          All New AI-Powered Productivity Tools
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tight text-white">
          Elevate Your <br />
          <span className="text-gradient">Digital Legacy</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl font-medium">
          Access premium AI tools, design assets, and productivity software curated for the modern creator. Start building today.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <button className="btn bg-primary hover:bg-primary-focus border-none rounded-2xl px-10 h-16 w-full sm:w-auto text-white shadow-2xl shadow-primary/40 font-bold text-lg transition-all hover:scale-105 active:scale-95">
            Browse Products
          </button>
          <button className="flex items-center gap-3 w-full sm:w-auto justify-center font-bold text-white hover:text-primary transition-all group px-6 py-2 glass rounded-2xl h-16 border-white/5">
            <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
              <FaPlay className="text-primary text-xs translate-x-0.5" />
            </span>
            Watch Demo
          </button>
        </div>
      </div>
      <div className="lg:w-2/5 relative">
        <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="relative glass p-4 rounded-[2.5rem] border-white/10 shadow-2xl animate-float">
          <img src="/banner.png" alt="Hero Illustration" className="w-full rounded-[1.8rem] shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-lg" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Efficiency Boost</p>
                <p className="text-accent text-xs font-black">+142% vs last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
