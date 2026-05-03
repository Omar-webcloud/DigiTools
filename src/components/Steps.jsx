import { FaUser, FaBox, FaRocket } from 'react-icons/fa6';

const Steps = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Simple. Elite. Fast.</h2>
        <p className="text-gray-400 max-w-xl mx-auto font-medium text-lg leading-relaxed">
          The fastest way to professional digital creation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Secure Access', desc: 'Initialize your workspace in seconds with our secure cloud integration.', Icon: FaUser, num: '01' },
          { title: 'Curate Tools', desc: 'Select from a vast library of industry-leading AI models and assets.', Icon: FaBox, num: '02' },
          { title: 'Scale Faster', desc: 'Deploy your creations and dominate your niche with elite performance.', Icon: FaRocket, num: '03' },
        ].map((s, i) => (
          <div key={i} className="glass-card p-12 rounded-[3.5rem] relative group">
             <div className="absolute -top-6 -right-6 text-9xl font-black text-white/5 pointer-events-none group-hover:text-primary/10 transition-colors">{s.num}</div>
             <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-10 ring-1 ring-primary/20 group-hover:bg-primary transition-all duration-500">
                <s.Icon className="text-3xl text-primary group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{s.title}</h3>
             <p className="text-gray-400 leading-relaxed font-medium">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
