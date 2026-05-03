import { FaCheck } from 'react-icons/fa6';

const Pricing = () => (
  <section className="py-32 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Flexible Investment Plans</h2>
        <p className="text-gray-400 max-w-xl mx-auto font-medium text-lg leading-relaxed">Choose the blueprint for your digital success.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        <div className="glass-card p-12 rounded-[3.5rem] flex flex-col">
          <div className="mb-10">
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Starter</h3>
            <p className="text-gray-500 font-medium text-sm">Ideal for emerging creators</p>
          </div>
          <div className="mb-10 flex items-baseline gap-2">
            <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">$0</span>
            <span className="text-gray-500 font-bold text-xl">/mo</span>
          </div>
          <div className="space-y-6 mb-12 grow">
            {['Access to 10 products', 'Basic templates', 'Community support', 'Single user account'].map((f, i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center shrink-0 ring-1 ring-white/10">
                   <FaCheck className="w-2.5 h-2.5 text-primary" />
                </div>
                {f}
              </div>
            ))}
          </div>
          <button className="btn btn-outline border-white/10 text-white hover:bg-white/5 rounded-2xl h-16 w-full font-black text-lg transition-all">Get Started</button>
        </div>

        <div className="relative group lg:scale-105 z-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[3.8rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="glass-card bg-base-100/80 p-12 rounded-[3.5rem] h-full flex flex-col border-primary/20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl shadow-primary/40">
               Most Popular
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Pro</h3>
              <p className="text-gray-400 font-medium text-sm">For the dedicated professional</p>
            </div>
            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">$29</span>
              <span className="text-gray-500 font-bold text-xl">/mo</span>
            </div>
            <div className="space-y-6 mb-12 grow">
              {['Unlimited Generations', 'Priority AI Access', 'Exclusive Assets', '24/7 VIP Support', 'Cloud Sync', 'Advanced Analytics'].map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-white/90 font-medium">
                   <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 ring-1 ring-primary/30">
                      <FaCheck className="w-2.5 h-2.5 text-primary" />
                   </div>
                  {f}
                </div>
              ))}
            </div>
            <button className="btn bg-primary hover:bg-primary-focus border-none rounded-2xl h-16 btn-block shadow-2xl shadow-primary/30 text-white font-black text-lg transition-all hover:scale-[1.02]">Unlock Pro Now</button>
          </div>
        </div>

        <div className="glass-card p-12 rounded-[3.5rem] flex flex-col">
          <div className="mb-10">
             <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Enterprise</h3>
             <p className="text-gray-500 font-medium text-sm">Scalable solutions for teams</p>
          </div>
          <div className="mb-10 flex items-baseline gap-2">
             <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">$99</span>
             <span className="text-gray-500 font-bold text-xl">/mo</span>
          </div>
          <div className="space-y-6 mb-12 grow">
            {['Everything in Pro', 'Custom Branding', 'API Access', 'Dedicated Account Manager', 'SLA Guarantee', 'Bulk Export'].map((f, i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center shrink-0 ring-1 ring-white/10">
                   <FaCheck className="w-2.5 h-2.5 text-primary" />
                </div>
                {f}
              </div>
            ))}
          </div>
          <button className="btn btn-outline border-white/10 text-white hover:bg-white/5 rounded-2xl h-16 w-full font-black text-lg transition-all">Contact Sales</button>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
