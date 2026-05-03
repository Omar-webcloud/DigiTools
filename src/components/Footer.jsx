import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => (
  <footer className="pt-32 pb-16 text-white relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24 relative z-10">
        <div className="lg:col-span-2">
          <a className="text-4xl font-black text-white mb-8 block tracking-tighter flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/40">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            </div>
            DigiTools
          </a>
          <p className="text-gray-400 leading-relaxed font-medium text-lg max-w-sm mb-12">
            The world's most powerful collection of digital tools, designed for the next generation of creators.
          </p>
          <div className="flex items-center gap-4">
            {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
              <a key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group">
                  <Icon className="text-xl text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-black mb-10 text-[10px] uppercase tracking-[0.3em] text-primary">Product</h4>
          <ul className="space-y-6 text-gray-400 font-medium">
            <li><a className="hover:text-white transition-colors cursor-pointer block">Features</a></li>
            <li><a className="hover:text-white transition-colors cursor-pointer block">Pricing</a></li>
            <li><a className="hover:text-white transition-colors cursor-pointer block">Templates</a></li>
            <li><a className="hover:text-white transition-colors cursor-pointer block">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-10 text-[10px] uppercase tracking-[0.3em] text-primary">Company</h4>
          <ul className="space-y-6 text-gray-400 font-medium">
            <li><a className="hover:text-white transition-colors cursor-pointer block">About</a></li>
            <li><a className="hover:text-white transition-colors cursor-pointer block">Blog</a></li>
            <li><a className="hover:text-white transition-colors cursor-pointer block">Careers</a></li>
            <li><a className="hover:text-white transition-colors cursor-pointer block">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-10 text-[10px] uppercase tracking-[0.3em] text-primary">Resources</h4>
          <ul className="space-y-6 text-gray-400 font-medium">
            <li><a className="hover:text-white transition-colors cursor-pointer block">Docs</a></li>
            <li><a className="hover:text-white transition-colors cursor-pointer block">Help Center</a></li>
            <li><a className="hover:text-white transition-colors cursor-pointer block">Community</a></li>
            <li><a className="hover:text-white transition-colors cursor-pointer block">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
        <p>&copy; 2026 DigiTools. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors cursor-pointer">Privacy</a>
          <a className="hover:text-white transition-colors cursor-pointer">Terms</a>
          <a className="hover:text-white transition-colors cursor-pointer">Security</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
