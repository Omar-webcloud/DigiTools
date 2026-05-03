import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tools from './components/Tools';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some(item => item.id === product.id);
    if (isAlreadyInCart) {
      toast.warning(`${product.name} is already in your cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.error('Item removed from cart!');
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info('Checkout successful! Cart cleared.');
  };

  const handleCartClick = () => {
    setActiveTab('cart');
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-mesh-amber selection:bg-primary/30 selection:text-white">
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
      <Navbar cartCount={cart.length} onCartClick={handleCartClick} />
      <main>
        <Hero />
        <Stats />
        <Tools 
          cart={cart} 
          onAddToCart={handleAddToCart} 
          onRemoveFromCart={handleRemoveFromCart} 
          onCheckout={handleCheckout} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Steps />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
