import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => (
  <footer className="pt-24 md:pt-48 pb-12 md:pb-24 text-[#F4E1D2]/20 relative border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-24 mb-20 md:mb-40 relative z-10">
        <div className="lg:col-span-2">
          <a className="text-3xl md:text-4xl font-medium text-[#F4E1D2] mb-8 md:mb-12 block tracking-tight flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#BF7D3A] rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#1A1614] rounded-full" />
            </div>
            <span className="font-serif italic">DigiTools</span>
          </a>
          <p className="text-[#F4E1D2]/40 leading-relaxed font-light text-lg md:text-xl max-w-sm mb-10 md:mb-16 tracking-wide">
            Synthesizing the future of digital workflows through refined creative assets.
          </p>
          <div className="flex items-center gap-8">
            {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
              <a key={i} className="text-2xl text-[#F4E1D2]/20 hover:text-[#BF7D3A] transition-all cursor-pointer">
                  <Icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-14 text-[10px] uppercase tracking-[0.4em] text-[#BF7D3A]">Gallery</h4>
          <ul className="space-y-8 text-[#F4E1D2]/20 font-semibold text-[10px] uppercase tracking-[0.2em]">
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Collection</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Archives</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Journal</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Vault</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-14 text-[10px] uppercase tracking-[0.4em] text-[#BF7D3A]">Matrix</h4>
          <ul className="space-y-8 text-[#F4E1D2]/20 font-semibold text-[10px] uppercase tracking-[0.2em]">
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Identity</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Nodes</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">System</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Signal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-14 text-[10px] uppercase tracking-[0.4em] text-[#BF7D3A]">Support</h4>
          <ul className="space-y-8 text-[#F4E1D2]/20 font-semibold text-[10px] uppercase tracking-[0.2em]">
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Archives</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Uplink</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Identity</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-colors cursor-pointer block">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-[#F4E1D2]/10 text-[9px] font-semibold uppercase tracking-[0.6em]">
        <p>&copy; 2026 DigiTools. All Protocols Active.</p>
        <div className="flex gap-16">
          <a className="hover:text-[#F4E1D2] transition-colors cursor-pointer">Identity</a>
          <a className="hover:text-[#F4E1D2] transition-colors cursor-pointer">Protocol</a>
          <a className="hover:text-[#F4E1D2] transition-colors cursor-pointer">Ethics</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
