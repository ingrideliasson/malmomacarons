import React from 'react';
import {useState} from 'react';
import CartSidebar from './components/CartSidebar'
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';


function App() {
  console.log("app is rendering")
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Header onCartClick={() => setCartOpen(true)}/>
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)}/>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>


      <Footer />
    </CartProvider>
  );
}

export default App;