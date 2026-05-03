import { FaCartShopping, FaUser } from 'react-icons/fa6';

const Navbar = ({ cartCount, onCartClick }) => (
  <header className="fixed top-0 left-0 w-full z-50 px-8 pt-8">
    <nav className="navbar glass rounded-2xl max-w-7xl mx-auto px-10 py-4 border-white/5 shadow-2xl">
      <div className="navbar-start">
        <a className="text-3xl font-medium text-[#F4E1D2] cursor-pointer tracking-tight flex items-center gap-4 group">
          <div className="w-10 h-10 bg-[#BF7D3A] rounded-full flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
             <div className="w-1.5 h-1.5 bg-[#1A1614] rounded-full" />
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
      <div className="navbar-end gap-6 flex items-center">
        <button onClick={onCartClick} className="relative text-[#F4E1D2]/60 hover:text-[#F7CA79] transition-colors">
          <FaCartShopping className="text-xl" />
          {cartCount > 0 && <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#BF7D3A] text-[#1A1614] text-[9px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>}
        </button>
        <div className="h-4 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>
        <a className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4E1D2]/60 hover:text-[#F4E1D2] cursor-pointer transition-colors">
          Identity
        </a>
        <a className="btn-amber h-12 px-10 flex items-center justify-center text-[10px]">
          Initialize
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
