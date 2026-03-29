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
    <div className="bg-white p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-sm border border-gray-100/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {product.tag && (
        <span className={`absolute top-6 right-6 text-[10px] uppercase font-black px-3 py-1 rounded-full ring-1 ring-inset ${
          product.tagType === 'orange' ? 'bg-orange-50 text-orange-600 ring-orange-100' : 
          product.tagType === 'pink' ? 'bg-pink-50 text-pink-600 ring-pink-100' :
          product.tagType === 'blue' ? 'bg-blue-50 text-blue-600 ring-blue-100' :
          product.tagType === 'yellow' ? 'bg-yellow-50 text-yellow-600 ring-yellow-100' :
          product.tagType === 'green' ? 'bg-green-50 text-green-600 ring-green-100' :
          'bg-indigo-50 text-indigo-600 ring-indigo-100'
        }`}>
          {product.tag}
        </span>
      )}
      <div className={`w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/5 ring-1 ring-gray-100 group-hover:ring-primary/20`}>
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-10 h-10 object-contain drop-shadow-sm" />
        ) : (
          <Icon className={`text-4xl ${product.iconColor}`} />
        )}
      </div>
      <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 tracking-tight">{product.name}</h3>
      <p className="text-xs md:text-sm text-gray-500 font-medium mb-6 line-clamp-2 h-10">{product.description}</p>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-2xl md:text-3xl font-black text-gray-900">${product.price}</span>
        <span className="text-gray-400 font-bold text-sm">/{product.period}</span>
      </div>
      <div className="space-y-4 mb-10 w-full text-left">
        {product.features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-gray-500 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 ring-1 ring-green-100">
              <FaCheck className="w-2 h-2 text-green-600 shrink-0" />
            </div>
            {f}
          </div>
        ))}
      </div>
      <button onClick={handleBuy} disabled={isInCart} className={`btn btn-block rounded-full h-12 md:h-14 transition-all font-bold border-none text-white text-sm md:text-base ${isInCart || added ? 'bg-green-500 hover:bg-green-600 disabled:bg-green-500 disabled:text-white disabled:opacity-75 cursor-default' : 'btn-primary group-hover:shadow-xl group-hover:shadow-primary/30'}`}>
        {isInCart || added ? 'Added to cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ToolCard;
