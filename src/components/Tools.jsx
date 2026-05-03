import ToolCard from './ToolCard';
import productsData from '../products.json';
import { FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn, FaBox } from 'react-icons/fa6';

const Tools = ({ cart, onAddToCart, onRemoveFromCart, onCheckout, activeTab, setActiveTab }) => {
  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="tools" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Premium Digital Tools</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed mb-12">
            Elevate your workflow with our elite selection of AI-powered assets and software.
          </p>
          <div className="inline-flex justify-center gap-1 p-1 rounded-2xl glass border-white/5 shadow-xl">
            <button 
              onClick={() => setActiveTab('products')} 
              className={`rounded-xl px-8 h-12 font-bold text-sm transition-all duration-300 ${activeTab === 'products' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')} 
              className={`rounded-xl px-8 h-12 font-bold text-sm transition-all duration-300 ${activeTab === 'cart' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}
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
          <div className="glass p-8 md:p-12 rounded-[3rem] border-white/10 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
            <h3 className="text-3xl font-black text-white mb-10 tracking-tight">Your Collection</h3>
            {cart.length === 0 ? (
              <div className="text-center py-20 space-y-6">
                <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto ring-1 ring-white/10">
                  <FaCartShopping className="text-4xl text-gray-600" />
                </div>
                <p className="text-gray-400 text-lg font-medium">Your creative vault is currently empty.</p>
                <button onClick={() => setActiveTab('products')} className="btn btn-primary btn-outline border-primary/20 rounded-xl px-8">Browse Tools</button>
              </div>
            ) : (
              <div>
                <div className="space-y-4 mb-10">
                  {cart.map((item, idx) => {
                    const Icons = { FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn };
                    const ItemIcon = Icons[item.icon] || FaBox;
                    return (
                      <div key={idx} className="glass-card p-6 rounded-2xl flex items-center justify-between group">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center ring-1 ring-white/10 group-hover:ring-primary/30 transition-all">
                            {item.image ? (
                              <img src={item.image} alt={item.name} className="w-8 h-8 object-contain" />
                            ) : (
                              <ItemIcon className={`text-2xl ${item.iconColor}`} />
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-lg leading-tight mb-1">{item.name}</h4>
                            <p className="text-primary font-black text-sm">${item.price}</p>
                          </div>
                        </div>
                        <button onClick={() => onRemoveFromCart(item.id)} className="text-sm text-gray-500 font-bold hover:text-red-400 transition-colors px-4 py-2 hover:bg-red-400/10 rounded-xl">
                          Remove
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between mb-10 pt-8 border-t border-white/5">
                  <span className="text-gray-400 font-bold">Total Investment:</span>
                  <span className="text-4xl font-black text-white tracking-tight">${totalCost}</span>
                </div>
                <button onClick={onCheckout} className="btn bg-primary hover:bg-primary-focus border-none btn-block rounded-2xl h-16 text-white text-xl font-bold shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Complete Purchase
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
