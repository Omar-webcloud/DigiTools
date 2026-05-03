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
    <div className="glass-card p-12 rounded-[2.5rem] flex flex-col items-center text-center group relative overflow-hidden border-white/5 shadow-2xl">
      {product.tag && (
        <span className="absolute top-10 right-10 text-[9px] uppercase font-semibold px-4 py-1.5 rounded-full bg-[#BF7D3A]/10 text-[#F7CA79] border border-[#BF7D3A]/20 tracking-[0.2em]">
          {product.tag}
        </span>
      )}
      <div className="w-24 h-24 rounded-full bg-[#383838]/20 flex items-center justify-center mb-12 group-hover:scale-110 transition-all duration-700 group-hover:bg-[#BF7D3A]/5 border border-white/5 group-hover:border-[#BF7D3A]/20 shadow-xl">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
        ) : (
          <Icon className="text-4xl text-[#BF7D3A] opacity-60 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
      <h3 className="text-3xl font-medium text-[#F4E1D2] mb-4 tracking-tight font-serif italic group-hover:text-[#F7CA79] transition-colors">{product.name}</h3>
      <p className="text-[#F4E1D2]/40 font-light mb-12 line-clamp-2 h-14 leading-relaxed tracking-wide text-base">{product.description}</p>
      
      <div className="flex items-baseline gap-2 mb-14">
        <span className="text-6xl font-light text-[#F4E1D2] tracking-tighter text-glow-amber font-serif italic">${product.price}</span>
        <span className="text-[#F4E1D2]/30 font-medium text-xs uppercase tracking-[0.3em]">/{product.period}</span>
      </div>

      <div className="space-y-6 mb-16 w-full text-left">
        {product.features.map((f, i) => (
          <div key={i} className="flex items-center gap-5 text-[11px] text-[#F4E1D2]/40 font-semibold uppercase tracking-[0.2em]">
            <div className="w-5 h-5 rounded-full bg-[#BF7D3A]/5 flex items-center justify-center shrink-0 border border-[#BF7D3A]/10 group-hover:bg-[#BF7D3A] group-hover:text-[#1A1614] transition-all">
              <FaCheck className="w-2 h-2" />
            </div>
            <span className="group-hover:text-[#F4E1D2]/80 transition-colors">{f}</span>
          </div>
        ))}
      </div>

      <button onClick={handleBuy} disabled={isInCart} className={`w-full h-20 transition-all duration-700 font-semibold text-[10px] uppercase tracking-[0.3em] rounded-xl flex items-center justify-center gap-4 ${isInCart || added ? 'bg-[#BF7D3A]/10 text-[#BF7D3A] border border-[#BF7D3A]/20 cursor-default' : 'btn-amber shadow-2xl'}`}>
        {isInCart || added ? (
          <><FaCheck className="text-base" /> Synchronized</>
        ) : 'Initialize'}
      </button>
    </div>
  );
};

export default ToolCard;
