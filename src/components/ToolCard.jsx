import { useState } from 'react';
import { FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn, FaBox, FaCheck } from 'react-icons/fa6';

const ToolCard = ({ product, onAddToCart, isInCart }) => {
  const [added, setAdded] = useState(false);
  const Icons = { FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn };
  const Icon = Icons[product.icon] || FaBox;

  const handleBuy = () => {
    if (isInCart) return;
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center text-center group relative overflow-hidden">
      {product.tag && (
        <span className={`absolute top-6 right-6 text-[10px] uppercase font-black px-3 py-1 rounded-full ring-1 ring-inset ${
          product.tagType === 'orange' ? 'bg-orange-500/10 text-orange-400 ring-orange-500/20' : 
          product.tagType === 'pink' ? 'bg-pink-500/10 text-pink-400 ring-pink-500/20' :
          product.tagType === 'blue' ? 'bg-blue-500/10 text-blue-400 ring-blue-500/20' :
          product.tagType === 'yellow' ? 'bg-yellow-500/10 text-yellow-400 ring-yellow-500/20' :
          product.tagType === 'green' ? 'bg-green-500/10 text-green-400 ring-green-500/20' :
          'bg-primary/10 text-primary ring-primary/20'
        }`}>
          {product.tag}
        </span>
      )}
      <div className={`w-24 h-24 rounded-[2rem] bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 group-hover:bg-primary/10 ring-1 ring-white/10 group-hover:ring-primary/30`}>
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-12 h-12 object-contain" />
        ) : (
          <Icon className={`text-4xl ${product.iconColor}`} />
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">{product.name}</h3>
      <p className="text-sm text-gray-400 font-medium mb-8 line-clamp-2 h-12 leading-relaxed">{product.description}</p>
      
      <div className="flex items-baseline gap-1 mb-10">
        <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">${product.price}</span>
        <span className="text-gray-500 font-bold text-sm">/{product.period}</span>
      </div>

      <div className="space-y-4 mb-10 w-full text-left">
        {product.features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
            <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 ring-1 ring-primary/20">
              <FaCheck className="w-2.5 h-2.5 text-primary" />
            </div>
            <span className="truncate">{f}</span>
          </div>
        ))}
      </div>

      <button onClick={handleBuy} disabled={isInCart} className={`btn btn-block rounded-2xl h-14 md:h-16 transition-all duration-300 font-black border-none text-white text-base ${isInCart || added ? 'bg-accent/20 text-accent disabled:bg-accent/20 disabled:text-accent cursor-default' : 'bg-primary hover:bg-primary-focus shadow-lg shadow-primary/20 hover:scale-105 active:scale-95'}`}>
        {isInCart || added ? (
          <span className="flex items-center gap-2"><FaCheck /> Added</span>
        ) : 'Get Access Now'}
      </button>
    </div>
  );
};

export default ToolCard;
