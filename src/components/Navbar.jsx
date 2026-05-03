import { FaCartShopping, FaUser } from 'react-icons/fa6';

const Navbar = ({ cartCount, onCartClick }) => (
  <header className="sticky top-0 z-50 px-4 pt-4">
    <nav className="navbar glass rounded-2xl max-w-7xl mx-auto px-6 py-2 shadow-2xl shadow-black/20">
      <div className="navbar-start">
        <a className="text-2xl font-black text-white cursor-pointer tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/40">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          </div>
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2 text-gray-300">
          <li><a className="hover:text-white hover:bg-white/10 rounded-xl transition-all">Products</a></li>
          <li><a className="hover:text-white hover:bg-white/10 rounded-xl transition-all">Features</a></li>
          <li><a className="hover:text-white hover:bg-white/10 rounded-xl transition-all">Pricing</a></li>
          <li><a className="hover:text-white hover:bg-white/10 rounded-xl transition-all">Testimonials</a></li>
          <li><a className="hover:text-white hover:bg-white/10 rounded-xl transition-all">FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2 flex items-center">
        <button onClick={onCartClick} className="btn btn-ghost btn-circle text-gray-300 hover:bg-white/10 indicator relative">
          {cartCount > 0 && <span className="indicator-item badge badge-primary badge-sm text-[10px] text-white shadow-lg border-none right-1 top-1">{cartCount}</span>}
          <FaCartShopping className="text-lg" />
        </button>
        <div className="h-6 w-[1px] bg-white/10 mx-1 hidden sm:block"></div>
        <a className="btn btn-ghost font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-xl flex items-center gap-2">
          <FaUser className="text-gray-400" /> <span className="hidden sm:inline">Login</span>
        </a>
        <a className="btn bg-primary hover:bg-primary-focus border-none rounded-xl px-6 text-white shadow-lg shadow-primary/30 font-bold hidden sm:flex">Get Started</a>
      </div>
    </nav>
  </header>
);

export default Navbar;
