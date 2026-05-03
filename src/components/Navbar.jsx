import { useState, useEffect } from 'react';
import { FaCartShopping, FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4 md:pt-8">
      <nav className="navbar glass rounded-xl md:rounded-2xl max-w-7xl mx-auto px-6 md:px-10 py-3 md:py-4 border-white/5 shadow-2xl relative">
        <div className="navbar-start">
          <a className="text-2xl md:text-3xl font-medium text-[#F4E1D2] cursor-pointer tracking-tight flex items-center gap-3 md:gap-4 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#BF7D3A] rounded-full flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
               <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#1A1614] rounded-full" />
            </div>
            <span className="font-serif italic group-hover:text-[#F7CA79] transition-colors">DigiTools</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-8 text-[#F4E1D2]/40 text-[11px] uppercase tracking-[0.3em]">
            <li><a className="hover:text-[#F4E1D2] transition-all p-0 bg-transparent">Gallery</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-all p-0 bg-transparent">Journal</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-all p-0 bg-transparent">Archives</a></li>
            <li><a className="hover:text-[#F4E1D2] transition-all p-0 bg-transparent">Access</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-4 md:gap-6 flex items-center">
          <button onClick={onCartClick} className="relative text-[#F4E1D2]/60 hover:text-[#F7CA79] transition-colors">
            <FaCartShopping className="text-lg md:text-xl" />
            {cartCount > 0 && <span className="absolute -top-2 -right-2 w-3.5 h-3.5 md:w-4 md:h-4 bg-[#BF7D3A] text-[#1A1614] text-[8px] md:text-[9px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>}
          </button>
          
          <div className="h-4 w-[1px] bg-white/10 mx-1 md:mx-2 hidden sm:block"></div>
          
          <a className="hidden sm:block text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4E1D2]/60 hover:text-[#F4E1D2] cursor-pointer transition-colors">
            Identity
          </a>
          
          <a className="btn-amber px-4 py-2 md:px-10 md:py-3 flex items-center justify-center text-[8px] md:text-[10px] hidden sm:flex">
            Initialize
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-[#F4E1D2]/60 hover:text-[#F7CA79] transition-colors z-50">
            {isMenuOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed top-0 right-0 h-screen w-full md:w-96 bg-[#1A1614]/98 backdrop-blur-[40px] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] z-[60] flex flex-col p-8 md:p-12 pt-12 md:pt-20 gap-10 md:gap-16 border-l border-white/5 shadow-[-50px_0_100px_-20px_rgba(0,0,0,0.5)] overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Decorative Gradient Glow */}
          <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-[#BF7D3A]/5 to-transparent pointer-events-none" />
          
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full glass border-white/10 flex items-center justify-center text-[#F4E1D2]/40 hover:text-[#BF7D3A] transition-all hover:rotate-90 z-20"
          >
            <FaXmark className="text-lg md:text-xl" />
          </button>
          
          <div className="flex flex-col gap-8 md:gap-12 relative z-10">
            <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#BF7D3A] mb-2 md:mb-4">Navigation</p>
            <ul className="flex flex-col gap-6 md:gap-10">
              {[
                { name: 'Gallery', delay: 'stagger-1' },
                { name: 'Journal', delay: 'stagger-2' },
                { name: 'Archives', delay: 'stagger-3' },
                { name: 'Access', delay: 'stagger-4' }
              ].map((link, i) => (
                <li key={i} className={`${isMenuOpen ? `animate-slide-in ${link.delay}` : 'opacity-0'}`}>
                  <a 
                    onClick={() => setIsMenuOpen(false)} 
                    className="group flex items-end gap-3 md:gap-4 cursor-pointer"
                  >
                    <span className="text-xs md:text-sm font-sans not-italic text-[#F4E1D2]/20 group-hover:text-[#BF7D3A] transition-colors mb-1 md:mb-2">0{i+1}</span>
                    <span className="font-serif italic text-4xl md:text-6xl text-[#F4E1D2] group-hover:text-[#F7CA79] group-hover:translate-x-2 transition-all duration-500 leading-none">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`mt-auto pt-12 md:pt-16 relative z-10 ${isMenuOpen ? 'animate-fade-in stagger-5' : 'opacity-0'}`}>
            <div className="h-[1px] w-full bg-white/5 mb-8 md:mb-12" />
            <div className="space-y-8 md:space-y-10">
              <button className="btn-amber w-full py-4 md:h-18 text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] shadow-2xl">
                Initialize System
              </button>
              <div className="flex justify-between items-end">
                <div className="space-y-1 md:space-y-2">
                   <p className="text-[7px] md:text-[8px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-[#F4E1D2]/20 font-bold">Network Status</p>
                   <p className="text-[9px] md:text-[10px] text-[#BF7D3A] font-semibold uppercase tracking-[0.2em]">Active &bull; Synchronized</p>
                </div>
                <div className="text-[8px] md:text-[9px] text-[#F4E1D2]/20 font-serif italic">v.2.0.4</div>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop for mobile menu */}
        {isMenuOpen && (
          <div 
            onClick={() => setIsMenuOpen(false)} 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
