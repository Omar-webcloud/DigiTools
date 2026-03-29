import ToolCard from './ToolCard';
import productsData from '../products.json';
import { FaPenNib, FaPalette, FaCartShopping, FaGear, FaFileInvoice, FaBullhorn, FaBox } from 'react-icons/fa6';

const Tools = ({ cart, onAddToCart, onRemoveFromCart, onCheckout, activeTab, setActiveTab }) => {
  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="tools" className="py-32 bg-gray-50/50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter text-center w-full block">Premium Digital Tools</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-semibold text-lg leading-relaxed text-center block mb-8">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
          <div className="inline-flex justify-center gap-2 mt-6 p-1.5 rounded-full bg-white border border-gray-100/80 shadow-sm">
            <button 
              onClick={() => setActiveTab('products')} 
              className={`rounded-full px-8 h-12 font-bold text-sm transition-all ${activeTab === 'products' ? 'bg-primary text-white shadow-md' : 'bg-transparent text-gray-500 hover:text-gray-900'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')} 
              className={`rounded-full px-8 h-12 font-bold text-sm transition-all ${activeTab === 'cart' ? 'bg-primary text-white shadow-md' : 'bg-transparent text-gray-500 hover:text-gray-900'}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productsData.map((t) => <ToolCard key={t.id} product={t} onAddToCart={onAddToCart} isInCart={cart.some(item => item.id === t.id)} />)}
          </div>
        ) : (
          <div className="bg-white p-6 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-black text-gray-900 mb-8">Your Cart</h3>
            {cart.length === 0 ? (
              <div className="text-center text-gray-400 py-16 font-bold space-y-4">
                <FaCartShopping className="text-6xl mx-auto text-gray-200" />
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <div>
                <div className="space-y-4 mb-8">
                  {cart.map((item, idx) => {
                    const Icons = { FaPenNib, FaPalette, FaCartShopping, FaGear, FaFileInvoice, FaBullhorn };
                    const ItemIcon = Icons[item.icon] || FaBox;
                    return (
                      <div key={idx} className="bg-gray-50/80 p-5 rounded-2xl flex items-center justify-between shadow-sm border border-gray-100/50 hover:border-gray-200 transition-colors">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                            <ItemIcon className={`text-xl ${item.iconColor}`} />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 leading-tight mb-1">{item.name}</h4>
                            <p className="text-sm text-gray-500 font-bold">${item.price}</p>
                          </div>
                        </div>
                        <button onClick={() => onRemoveFromCart(item.id)} className="text-sm text-pink-500 font-bold tracking-wide hover:text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-lg transition-colors">
                          Remove
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between mb-8 pt-6 border-t border-gray-100">
                  <span className="text-gray-500 text-sm font-bold">Total:</span>
                  <span className="text-2xl font-black text-gray-900">${totalCost}</span>
                </div>
                <button onClick={onCheckout} className="btn btn-primary btn-block rounded-full h-14 text-white text-lg font-bold shadow-lg shadow-primary/20 border-none transition-transform hover:scale-[1.01] active:scale-[0.99]">
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;
