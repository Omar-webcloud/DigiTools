import { FaUser, FaBox, FaRocket } from 'react-icons/fa6';

const Steps = () => (
  <section className="py-32 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">Get Started In 3 Steps</h2>
        <p className="text-gray-500 max-w-xl mx-auto font-semibold text-base md:text-lg leading-relaxed">Ready to take your product launch to the next level?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 px-2">
        {[
          { title: 'Create Account', desc: 'Sign up for a free account if you want to get started.', Icon: FaUser, num: '1' },
          { title: 'Choose Products', desc: 'Browse our catalog and select the products you need.', Icon: FaBox, num: '2' },
          { title: 'Start Creating', desc: 'Launch into creating using our premium house of facilities.', Icon: FaRocket, num: '3' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-8 md:p-12 rounded-3xl md:rounded-[3.5rem] border border-gray-100/60 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden shadow-sm ring-1 ring-gray-950/5">
             <div className="absolute top-10 right-10 text-8xl font-black text-primary/5 transition-opacity group-hover:opacity-10 pointer-events-none">{s.num}</div>
             <div className="absolute top-8 right-8 z-10">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs shadow-2xl shadow-primary/40 ring-4 ring-white/20">{s.num}</span>
             </div>
             <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mb-10 mx-auto ring-1 ring-primary/10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white shadow-inner group-hover:shadow-primary/5">
                <s.Icon className="text-4xl text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
             </div>
             <div className="text-center relative z-10">
               <h3 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">{s.title}</h3>
               <p className="text-gray-500 leading-relaxed font-bold text-[15px] px-2">{s.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
