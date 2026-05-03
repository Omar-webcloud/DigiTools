import { FaPlay } from 'react-icons/fa6';

const Hero = () => (
  <section className="relative pt-48 pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-24 relative z-10">
      <div className="lg:w-3/5 text-left">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl glass text-[#F7CA79] text-[11px] font-semibold mb-12 tracking-[0.3em] uppercase border-white/5 shadow-xl">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF7D3A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BF7D3A]"></span>
          </span>
          The Future of Digital Creation
        </div>
        <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-light leading-[1] mb-12 tracking-tight text-[#F4E1D2] text-glow-amber">
          Refine Your <br />
          <span className="text-gradient-amber italic serif font-medium">Digital Art</span>
        </h1>
        <p className="text-[#F4E1D2]/60 text-xl md:text-2xl mb-14 leading-relaxed max-w-xl font-light tracking-wide">
          An elite ecosystem of AI-powered tools curated for the sophisticated creator. Precision meet productivity.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="btn-amber w-full sm:w-auto shadow-2xl">
            Explore Collection
          </button>
          <button className="flex items-center gap-4 w-full sm:w-auto justify-center font-medium text-[#F4E1D2]/80 hover:text-[#F7CA79] transition-all group px-6 py-3 md:px-8 md:py-4 glass rounded-xl border-white/10 h-14 md:h-20">
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#BF7D3A]/20 transition-all border border-white/5">
              <FaPlay className="text-[#BF7D3A] text-[10px] translate-x-0.5" />
            </span>
            View System
          </button>
        </div>
      </div>
      <div className="lg:w-2/5 relative group">
        <div className="absolute -inset-24 bg-[#BF7D3A]/10 rounded-full blur-[180px] -z-10 animate-pulse transition-colors duration-1000"></div>
        <div className="relative glass p-8 rounded-[3.5rem] border-white/5 shadow-2xl animate-float-slow">
          <img src="/banner.png" alt="Hero Illustration" className="w-full rounded-[2.5rem] shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -bottom-12 -left-12 glass p-10 rounded-[2.5rem] hidden xl:block border-white/10 shadow-3xl">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-[#BF7D3A]/20 rounded-2xl flex items-center justify-center border border-[#BF7D3A]/30">
                <div className="w-6 h-6 bg-[#BF7D3A] rounded-lg shadow-[0_0_15px_rgba(191,125,58,0.4)]" />
              </div>
              <div>
                <p className="text-[#F4E1D2] font-medium text-lg tracking-tight">Active Nodes</p>
                <p className="text-[#F7CA79] text-xs font-semibold uppercase tracking-[0.2em]">Synchronized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
