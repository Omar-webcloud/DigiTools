import { FaCartShopping, FaUser } from 'react-icons/fa6';

const Navbar = ({ cartCount, onCartClick }) => (
  <nav className="navbar bg-white px-4 py-4 max-w-7xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
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
    <div className="navbar-end gap-3 flex items-center">
      <button onClick={onCartClick} className="btn btn-ghost btn-circle text-gray-600 indicator relative">
        {cartCount > 0 && <span className="indicator-item badge badge-primary badge-sm text-[10px] text-white shadow-sm border-none right-1 top-1">{cartCount}</span>}
        <FaCartShopping className="text-lg" />
      </button>
      <a className="btn btn-ghost font-bold text-gray-700 flex items-center gap-2">
        <FaUser className="text-gray-400" /> Login
      </a>
      <a className="btn btn-primary rounded-full px-8 text-white shadow-lg shadow-primary/20 font-bold border-none hidden sm:flex">Get Started</a>
    </div>
  </nav>
);

export default Navbar;
