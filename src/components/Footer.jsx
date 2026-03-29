import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

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
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-white/20 text-[9px] sm:text-[10px] text-center font-black uppercase tracking-[0.3em] lg:tracking-[0.4em]">
        <p className="mb-2 md:mb-0">&copy; 2025 DigiTools Inc. Everything Reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12">
          <a className="hover:text-white transition-colors cursor-pointer">Privacy Path</a>
          <a className="hover:text-white transition-colors cursor-pointer">Terms of Services</a>
          <a className="hover:text-white transition-colors cursor-pointer">Connect</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
