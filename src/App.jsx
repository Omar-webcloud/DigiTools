import { useState } from 'react'

const Navbar = () => (
  <nav className="navbar bg-base-100 px-4 py-4 max-w-7xl mx-auto border-b border-base-200" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="navbar-start">
      <a className="text-2xl font-black text-primary cursor-pointer tracking-tighter">DigiTools</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-semibold gap-2 text-gray-600">
        <li><a className="hover:text-primary">Products</a></li>
        <li><a className="hover:text-primary">Features</a></li>
        <li><a className="hover:text-primary">Pricing</a></li>
        <li><a className="hover:text-primary">Testimonials</a></li>
        <li><a className="hover:text-primary">FAQ</a></li>
      </ul>
    </div>
    <div className="navbar-end gap-3">
      <a className="btn btn-ghost font-bold text-gray-700">Login</a>
      <a className="btn btn-primary rounded-full px-8 text-white shadow-lg shadow-primary/20 font-bold border-none">Get Started</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-24 pb-24 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 text-left">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-8 ring-1 ring-blue-100 ring-inset uppercase tracking-wider">
          All New 2025 Features Are Out Now
        </div>
        <h1 className="text-6xl font-black leading-[1.1] mb-8 tracking-tighter text-gray-900">
          Supercharge Your <br />
          <span className="text-primary">Digital Workflow</span>
        </h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-lg font-medium">
          Access premium AI tools, design assets, and statistics and productivity software all in one place. Start creating today for free.
        </p>
        <div className="flex items-center gap-6">
          <button className="btn btn-primary rounded-full px-10 h-14 text-white shadow-2xl shadow-primary/30 border-none font-bold text-lg">Browse Products</button>
          <button className="flex items-center gap-3 font-bold text-gray-900 hover:text-primary transition-colors group">
            <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-md ring-8 ring-gray-50 group-hover:ring-primary/10 transition-all">
              <img src="/Play.png" alt="Play" className="w-4 h-4 translate-x-0.5" />
            </span>
            Learn More
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <img src="/banner.png" alt="Hero Illustration" className="w-full rounded-2xl shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-1000" />
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-primary py-16" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
        <div className="space-y-2">
          <div className="text-5xl font-black tracking-tighter">50K+</div>
          <p className="text-primary-content font-bold uppercase tracking-widest text-xs opacity-80">Active Users</p>
        </div>
        <div className="space-y-2">
          <div className="text-5xl font-black tracking-tighter">200+</div>
          <p className="text-primary-content font-bold uppercase tracking-widest text-xs opacity-80">Premium Tools</p>
        </div>
        <div className="space-y-2">
          <div className="text-5xl font-black tracking-tighter">4.9</div>
          <p className="text-primary-content font-bold uppercase tracking-widest text-xs opacity-80">Rating</p>
        </div>
      </div>
    </div>
  </section>
);

const ToolCard = ({ icon, name, price, badge, features }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
    {badge && (
      <span className={`absolute top-6 right-6 text-[10px] uppercase font-black px-3 py-1 rounded-full ring-1 ring-inset ${
        badge === 'New' ? 'bg-orange-50 text-orange-600 ring-orange-100' : 
        badge === 'Hot' ? 'bg-green-50 text-green-600 ring-green-100' :
        badge === 'Popular' ? 'bg-blue-50 text-blue-600 ring-blue-100' :
        badge === 'Best Seller' ? 'bg-yellow-50 text-yellow-600 ring-yellow-100' :
        'bg-indigo-50 text-indigo-600 ring-indigo-100'
      }`}>
        {badge}
      </span>
    )}
    <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/5 ring-1 ring-gray-100 group-hover:ring-primary/20">
      <img src={`/products/${icon}`} alt={name} className="w-12 h-12 object-contain" />
    </div>
    <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">{name}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-3xl font-black text-gray-900">${price}</span>
      <span className="text-gray-400 font-bold">/mo</span>
    </div>
    <div className="space-y-4 mb-10 w-full text-left">
      {features.map((f, i) => (
        <div key={i} className="flex items-center gap-3 text-sm text-gray-500 font-bold">
          <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 ring-1 ring-green-100">
            <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          {f}
        </div>
      ))}
    </div>
    <button className="btn btn-primary btn-block rounded-full h-14 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all font-bold border-none text-white">Buy Now</button>
  </div>
);

const Tools = () => {
  const tools = [
    { name: 'AI Writing Pro', icon: 'writing_2327400 1.png', price: '39', badge: 'New', features: ['Unlimited generations', '50+ writing templates', 'Grammar checker'] },
    { name: 'Design Templates Pack', icon: 'design-tool.png', price: '69', badge: 'Free Trial', features: ['2000+ templates', 'Monthly updates', 'Commercial license'] },
    { name: 'Premium Stock Assets', icon: 'shopping-cart.png', price: '19', badge: 'Hot', features: ['1M+ assets', 'Cancel any time', 'High resolution'] },
    { name: 'Automation Toolkit', icon: 'operation.png', price: '79', badge: 'Popular', features: ['50+ Automations', 'All tools', 'Custom workflows'] },
    { name: 'Resume Builder Pro', icon: 'portfolio.png', price: '15', badge: 'New', features: ['Top 500 templates', '50+ registrations', 'Export as PDF'] },
    { name: 'Social Media Content Kit', icon: 'social-media.png', price: '35', badge: 'Best Seller', features: ['1000+ videos', 'Schedule in store', 'Analytics dashboard'] },
  ];

  return (
    <section className="py-32 bg-gray-50/50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">Premium Digital Tools</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-semibold text-lg leading-relaxed">
            Over the years we have collected the most valuable tools for designers, developers, and marketing professionals.
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <button className="btn btn-primary rounded-full px-10 h-12 text-white shadow-xl shadow-primary/20 border-none font-bold">Products</button>
            <button className="btn btn-ghost rounded-full px-10 h-12 text-gray-400 font-black hover:text-primary">Top Kit</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((t, i) => <ToolCard key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
};

const Steps = () => (
  <section className="py-32 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">Get Started In 3 Steps</h2>
        <p className="text-gray-500 max-w-xl mx-auto font-semibold text-lg">Ready to take your product launch to the next level?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { title: 'Create Account', desc: 'Sign up for a free account if you want to get started.', icon: 'user.png', num: '1' },
          { title: 'Choose Products', desc: 'Browse our catalog and select the products you need.', icon: 'package.png', num: '2' },
          { title: 'Start Creating', desc: 'Launch into creating using our premium house of facilities.', icon: 'rocket.png', num: '3' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-12 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 relative group overflow-hidden shadow-sm">
             <div className="absolute top-8 right-8 text-7xl font-black text-primary/5 transition-opacity group-hover:opacity-10">{s.num}</div>
             <div className="absolute top-8 right-8">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-xl shadow-primary/30 ring-4 ring-primary/10">{s.num}</span>
             </div>
             <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mb-10 mx-auto ring-1 ring-primary/10 group-hover:scale-110 transition-transform duration-500 hover:bg-white hover:shadow-inner">
                <img src={`/${s.icon}`} alt={s.title} className="w-12 h-12 object-contain" />
             </div>
             <div className="text-center">
               <h3 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">{s.title}</h3>
               <p className="text-gray-500 leading-relaxed font-bold text-sm px-4">{s.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-32 bg-gray-50/50" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 max-w-xl mx-auto font-semibold text-lg">Choose the plan that fits your needs. Map local current plan for more details.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
        <div className="bg-white p-12 rounded-[3rem] border border-gray-100/50 shadow-sm grow flex flex-col">
          <div className="mb-10">
            <h3 className="text-2xl font-black text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-400 font-bold text-sm">Perfect for simple product start</p>
          </div>
          <div className="mb-10">
            <span className="text-6xl font-black text-gray-900">$0</span>
            <span className="text-gray-400 font-bold ml-1 text-lg">/Month</span>
          </div>
          <div className="space-y-5 mb-12 grow">
            {['Access to 10 products', 'Basic templates', 'Community support', 'Single user account'].map((f, i) => (
              <div key={i} className="flex items-center gap-4 text-[15px] text-gray-500 font-bold">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>
          <button className="btn btn-primary btn-block rounded-full h-14 text-white shadow-xl shadow-primary/20 border-none font-bold text-lg hover:shadow-2xl transition-all">Get Started Now</button>
        </div>

        <div className="bg-primary p-1 rounded-[3.2rem] relative grow flex flex-col lg:scale-105 z-10 shadow-3xl shadow-primary/40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full text-[11px] font-black tracking-[0.2em] shadow-xl uppercase ring-8 ring-white/10">
             Most Popular
          </div>
          <div className="bg-primary p-11 rounded-[3rem] h-full flex flex-col text-white">
            <div className="mb-10">
              <h3 className="text-2xl font-black mb-2">Pro</h3>
              <p className="text-white/70 font-bold text-sm">For independent creators</p>
            </div>
            <div className="mb-10">
              <span className="text-6xl font-black">$29</span>
              <span className="text-white/70 font-bold ml-1 text-lg">/Month</span>
            </div>
            <div className="space-y-5 mb-12 grow">
              {['Ten next video generations', 'Unlimited generations', 'Priority support', 'Lifetime support', 'Cloud sync', 'Exclusive updates'].map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-[15px] text-white/90 font-bold">
                  <svg className="w-5 h-5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
            <button className="btn bg-white text-primary border-none hover:bg-gray-50 rounded-full h-14 btn-block shadow-2xl font-bold text-lg px-8">Start Free Trial</button>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[3rem] border border-gray-100/50 shadow-sm grow flex flex-col">
          <div className="mb-10">
             <h3 className="text-2xl font-black text-gray-900 mb-2">Enterprise</h3>
             <p className="text-gray-400 font-bold text-sm">For team and professionals</p>
          </div>
          <div className="mb-10">
             <span className="text-6xl font-black text-gray-900">$99</span>
             <span className="text-gray-400 font-bold ml-1 text-lg">/Month</span>
          </div>
          <div className="space-y-5 mb-12 grow">
            {['Everything in Pro', 'Unlimited users', 'Customizations', 'Personal content', 'Admin panel', 'Custom branding'].map((f, i) => (
              <div key={i} className="flex items-center gap-4 text-[15px] text-gray-500 font-bold">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>
          <button className="btn btn-primary btn-block rounded-full h-14 text-white shadow-xl shadow-primary/20 border-none font-bold text-lg hover:shadow-2xl transition-all">Contact Sales</button>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-primary rounded-[4rem] px-8 py-20 md:p-24 text-center text-white relative overflow-hidden group shadow-3xl shadow-primary/50">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-all duration-700 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-black/20 transition-all duration-700 -z-0"></div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10 tracking-tighter leading-tight">Ready To Transform <br className="hidden md:block"/> Your Workflow?</h2>
        <p className="text-primary-content text-lg mb-12 max-w-2xl mx-auto relative z-10 font-bold opacity-90 leading-relaxed">Over the years we have collected the most valuable tools for designers, developers, and marketing professionals.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <button className="btn bg-white text-primary border-none hover:bg-gray-100 rounded-full h-16 px-12 text-xl font-black shadow-2xl">Explore Products</button>
          <button className="btn btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white rounded-full h-16 px-12 text-xl font-black transition-all">View Pricing</button>
        </div>
        <div className="mt-12 text-white/40 text-[10px] uppercase font-black tracking-[0.3em] relative z-10">Used by over 50,000+ teams worldwide</div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#080a11] pt-32 pb-16 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
        <div className="lg:col-span-2">
          <a className="text-4xl font-black text-primary mb-8 block tracking-tighter">DigiTools</a>
          <p className="text-white/40 leading-relaxed font-bold text-base max-w-sm mb-10">
            Access premium AI tools, design assets, and statistics and productivity software all in one place. Start creating today for free.
          </p>
          <div className="flex items-center gap-5">
            {[1, 2, 3].map((s) => (
              <a key={s} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group shadow-lg">
                  <div className="w-6 h-6 bg-white/60 group-hover:bg-white rounded-md transition-colors"></div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-black mb-8 text-[11px] uppercase tracking-[0.2em] text-primary">Product</h4>
          <ul className="space-y-5 text-white/40 font-bold text-sm">
            <li><a className="hover:text-primary transition-colors cursor-pointer">Features</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer">Pricing</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer">Temp Kit</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-8 text-[11px] uppercase tracking-[0.2em] text-primary">Company</h4>
          <ul className="space-y-5 text-white/40 font-bold text-sm">
            <li><a className="hover:text-primary transition-colors cursor-pointer">About</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer">Blog</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer">Careers</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-8 text-[11px] uppercase tracking-[0.2em] text-primary">Resources</h4>
          <ul className="space-y-5 text-white/40 font-bold text-sm">
            <li><a className="hover:text-primary transition-colors cursor-pointer">Documentation</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer">Help Center</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer">Community</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[11px] font-black uppercase tracking-[0.2em]">
        <p>&copy; 2025 DigiTools Inc. Everything Reserved.</p>
        <div className="flex gap-10">
          <a className="hover:text-white transition-colors cursor-pointer">Privacy Path</a>
          <a className="hover:text-white transition-colors cursor-pointer">Terms of Services</a>
          <a className="hover:text-white transition-colors cursor-pointer">Connect</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Tools />
        <Steps />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
