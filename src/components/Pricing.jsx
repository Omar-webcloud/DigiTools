import { FaCheck } from 'react-icons/fa6';

const Pricing = () => (
  <section className="py-32 bg-gray-50/50" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 max-w-xl mx-auto font-semibold text-lg leading-relaxed">Choose the plan that fits your needs. Map local current plan for more details.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-stretch max-w-6xl mx-auto">
        <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100/50 shadow-sm grow flex flex-col">
          <div className="mb-10">
            <h3 className="text-2xl font-black text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-400 font-bold text-sm">Perfect for simple product start</p>
          </div>
          <div className="mb-10">
            <span className="text-6xl font-black text-gray-900">$0</span>
            <span className="text-gray-400 font-bold ml-2 text-xl">/Month</span>
          </div>
          <div className="space-y-6 mb-12 grow">
            {['Access to 10 products', 'Basic templates', 'Community support', 'Single user account'].map((f, i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-gray-500 font-bold">
                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 ring-1 ring-green-100">
                   <FaCheck className="w-2.5 h-2.5 text-green-600" />
                </div>
                {f}
              </div>
            ))}
          </div>
          <button className="btn btn-primary btn-block rounded-full h-16 text-white shadow-xl shadow-primary/20 border-none font-black text-lg transition-all hover:scale-[1.02] active:scale-[0.98]">Get Started Now</button>
        </div>

        <div className="bg-primary p-1.5 rounded-[3.8rem] relative grow flex flex-col lg:scale-110 z-10 shadow-[0_40px_80px_-20px_rgba(139,92,246,0.5)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full text-[11px] font-black tracking-[0.25em] shadow-xl uppercase ring-12 ring-white/15">
             Most Popular
          </div>
          <div className="bg-primary p-12 rounded-[3.5rem] h-full flex flex-col text-white">
            <div className="mb-10">
              <h3 className="text-2xl font-black mb-2 tracking-tight">Pro</h3>
              <p className="text-white/80 font-bold text-sm opacity-90 leading-tight">For independent creators</p>
            </div>
            <div className="mb-10">
              <span className="text-6xl font-black">$29</span>
              <span className="text-white/80 font-bold ml-2 text-xl opacity-90">/Month</span>
            </div>
            <div className="space-y-6 mb-12 grow">
              {['Ten next video generations', 'Unlimited generations', 'Priority support', 'Lifetime support', 'Cloud sync', 'Exclusive updates'].map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-white/95 font-bold">
                   <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <FaCheck className="w-2.5 h-2.5 text-white" />
                   </div>
                  {f}
                </div>
              ))}
            </div>
            <button className="btn bg-white text-primary border-none hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] rounded-full h-16 btn-block shadow-2xl font-black text-lg px-8 transition-all">Start Free Trial</button>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100/50 shadow-sm grow flex flex-col">
          <div className="mb-10">
             <h3 className="text-2xl font-black text-gray-900 mb-2">Enterprise</h3>
             <p className="text-gray-400 font-bold text-sm">For team and professionals</p>
          </div>
          <div className="mb-10">
             <span className="text-6xl font-black text-gray-900">$99</span>
             <span className="text-gray-400 font-bold ml-2 text-xl">/Month</span>
          </div>
          <div className="space-y-6 mb-12 grow">
            {['Everything in Pro', 'Unlimited users', 'Customizations', 'Personal content', 'Admin panel', 'Custom branding'].map((f, i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-gray-500 font-bold">
                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 ring-1 ring-green-100">
                   <FaCheck className="w-2.5 h-2.5 text-green-600" />
                </div>
                {f}
              </div>
            ))}
          </div>
          <button className="btn btn-primary btn-block rounded-full h-16 text-white shadow-xl shadow-primary/20 border-none font-black text-lg transition-all hover:scale-[1.02] active:scale-[0.98]">Contact Sales</button>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
