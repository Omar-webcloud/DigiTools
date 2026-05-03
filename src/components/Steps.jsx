import { FaUser, FaBox, FaRocket } from 'react-icons/fa6';

const Steps = () => (
  <section className="py-20 md:py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16 md:mb-28">
        <h2 className="text-4xl md:text-7xl font-light text-[#F4E1D2] mb-6 md:mb-8 tracking-tight text-glow-amber italic font-serif">The <span className="text-[#BF7D3A] font-sans not-italic">Process</span></h2>
        <p className="text-[#F4E1D2]/40 max-w-xl mx-auto font-light text-lg md:text-xl leading-relaxed tracking-wide">
          Three refined movements toward digital excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: 'Identity Sync', desc: 'Securely initialize your digital footprint within our global matrix.', Icon: FaUser, num: 'I' },
          { title: 'Asset Curation', desc: 'Synthesize industry-leading assets into your refined workflow.', Icon: FaBox, num: 'II' },
          { title: 'Market Uplink', desc: 'Deploy with absolute precision and scale your creative vision.', Icon: FaRocket, num: 'III' },
        ].map((s, i) => (
          <div key={i} className="glass-card p-12 rounded-[2.5rem] relative group border-white/5">
             <div className="absolute top-10 right-10 text-6xl font-serif italic text-[#BF7D3A]/10 pointer-events-none group-hover:text-[#BF7D3A]/30 transition-colors duration-700 leading-none">{s.num}</div>
             <div className="w-20 h-20 rounded-full bg-[#BF7D3A]/5 flex items-center justify-center mb-12 border border-[#BF7D3A]/10 group-hover:bg-[#BF7D3A] transition-all duration-700 shadow-2xl">
                <s.Icon className="text-3xl text-[#BF7D3A] group-hover:text-[#1A1614] transition-colors" />
             </div>
             <h3 className="text-2xl font-medium text-[#F4E1D2] mb-6 tracking-tight font-serif italic group-hover:text-[#F7CA79] transition-colors">{s.title}</h3>
             <p className="text-[#F4E1D2]/40 leading-relaxed font-light text-lg tracking-wide">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
