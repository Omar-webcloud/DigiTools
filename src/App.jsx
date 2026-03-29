import { 
  FaPlay, 
  FaPenNib, 
  FaPalette, 
  FaCartShopping, 
  FaGear, 
  FaFileInvoice, 
  FaBullhorn, 
  FaUser, 
  FaBox, 
  FaRocket,
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaXTwitter
} from 'react-icons/fa6'

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
              <FaPlay className="text-primary text-sm translate-x-0.5" />
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

const ToolCard = ({ icon: Icon, name, price, badge, features, iconColor }) => (
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
    <div className={`w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/5 ring-1 ring-gray-100 group-hover:ring-primary/20`}>
      <Icon className={`text-4xl ${iconColor}`} />
    </div>
    <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">{name}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-3xl font-black text-gray-900">${price}</span>
      <span className="text-gray-400 font-bold">/mo</span>
    </div>
    <div className="space-y-4 mb-10 w-full text-left">
      {features.map((f, i) => (
        <div key={i} className="flex items-center gap-3 text-sm text-gray-500 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
          <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 ring-1 ring-green-100">
            <FaCheck className="w-2 h-2 text-green-600 shrink-0" />
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
    { name: 'AI Writing Pro', icon: FaPenNib, iconColor: 'text-orange-500', price: '39', badge: 'New', features: ['Unlimited generations', '50+ writing templates', 'Grammar checker'] },
    { name: 'Design Templates Pack', icon: FaPalette, iconColor: 'text-pink-500', price: '69', badge: 'Free Trial', features: ['2000+ templates', 'Monthly updates', 'Commercial license'] },
    { name: 'Premium Stock Assets', icon: FaCartShopping, iconColor: 'text-blue-500', price: '19', badge: 'Hot', features: ['1M+ assets', 'Cancel any time', 'High resolution'] },
    { name: 'Automation Toolkit', icon: FaGear, iconColor: 'text-blue-600', price: '79', badge: 'Popular', features: ['50+ Automations', 'All tools', 'Custom workflows'] },
    { name: 'Resume Builder Pro', icon: FaFileInvoice, iconColor: 'text-yellow-500', price: '15', badge: 'New', features: ['Top 500 templates', '50+ registrations', 'Export as PDF'] },
    { name: 'Social Media Content Kit', icon: FaBullhorn, iconColor: 'text-indigo-500', price: '35', badge: 'Best Seller', features: ['1000+ videos', 'Schedule in store', 'Analytics dashboard'] },
  ];

  return (
    <section className="py-32 bg-gray-50/50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter text-center w-full block">Premium Digital Tools</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-semibold text-lg leading-relaxed text-center block mb-8">
            Over the years we have collected the most valuable tools for designers, developers, and marketing professionals.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="btn btn-primary rounded-full px-10 h-14 text-white shadow-xl shadow-primary/20 border-none font-bold text-lg">Products</button>
            <button className="btn btn-ghost rounded-full px-10 h-14 text-gray-400 font-extrabold text-lg hover:text-primary transition-colors">Top Kit</button>
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
        <p className="text-gray-500 max-w-xl mx-auto font-semibold text-lg leading-relaxed">Ready to take your product launch to the next level?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 px-2">
        {[
          { title: 'Create Account', desc: 'Sign up for a free account if you want to get started.', Icon: FaUser, num: '1' },
          { title: 'Choose Products', desc: 'Browse our catalog and select the products you need.', Icon: FaBox, num: '2' },
          { title: 'Start Creating', desc: 'Launch into creating using our premium house of facilities.', Icon: FaRocket, num: '3' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100/60 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden shadow-sm ring-1 ring-gray-950/5">
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

const CTA = () => (
  <section className="py-24" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-primary rounded-[4.5rem] px-8 py-20 md:p-32 text-center text-white relative overflow-hidden group shadow-[0_60px_100px_-30px_rgba(139,92,246,0.6)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-all duration-1000 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 group-hover:bg-black/20 transition-all duration-1000 z-0"></div>
        <h2 className="text-5xl md:text-7xl font-black mb-10 relative z-10 tracking-tighter leading-[1.05]">Ready To Transform <br className="hidden md:block"/> Your Workflow?</h2>
        <p className="text-primary-content text-xl md:text-2xl mb-14 max-w-3xl mx-auto relative z-10 font-bold opacity-90 leading-relaxed uppercase tracking-tight">Over the years we have collected the most valuable tools for designers, developers, and marketing professionals.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-10">
          <button className="btn bg-white text-primary border-none hover:bg-gray-100 hover:scale-[1.05] active:scale-[0.95] rounded-full h-20 px-16 text-2xl font-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all">Explore Products</button>
          <button className="btn btn-outline border-white/40 border-2 text-white hover:bg-white/10 hover:border-white hover:scale-[1.05] active:scale-[0.95] rounded-full h-20 px-16 text-2xl font-black transition-all">View Pricing</button>
        </div>
        <div className="mt-16 text-white/50 text-[11px] uppercase font-black tracking-[0.4em] relative z-10">Used by over 50,000+ teams worldwide</div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#04060b] pt-32 pb-16 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
        <div className="lg:col-span-2">
          <a className="text-4xl font-black text-primary mb-8 block tracking-tighter">DigiTools</a>
          <p className="text-white/40 leading-relaxed font-bold text-base max-w-sm mb-12 opacity-80">
            Access premium AI tools, design assets, and statistics and productivity software all in one place. Start creating today for free.
          </p>
          <div className="flex items-center gap-6">
            <a className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group shadow-2xl">
                <FaFacebookF className="text-2xl text-white/40 group-hover:text-white transition-colors" />
            </a>
            <a className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group shadow-2xl">
                <FaInstagram className="text-2xl text-white/40 group-hover:text-white transition-colors" />
            </a>
            <a className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group shadow-2xl">
                <FaXTwitter className="text-2xl text-white/40 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black mb-10 text-[11px] uppercase tracking-[0.3em] text-primary">Product</h4>
          <ul className="space-y-6 text-white/40 font-bold text-[15px]">
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Features</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Pricing</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Temp Kit</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-10 text-[11px] uppercase tracking-[0.3em] text-primary">Company</h4>
          <ul className="space-y-6 text-white/40 font-bold text-[15px]">
            <li><a className="hover:text-primary transition-colors cursor-pointer block">About</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Blog</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Careers</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-10 text-[11px] uppercase tracking-[0.3em] text-primary">Resources</h4>
          <ul className="space-y-6 text-white/40 font-bold text-[15px]">
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Documentation</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Help Center</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Community</a></li>
            <li><a className="hover:text-primary transition-colors cursor-pointer block">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
        <p>&copy; 2025 DigiTools Inc. Everything Reserved.</p>
        <div className="flex gap-12">
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
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
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
