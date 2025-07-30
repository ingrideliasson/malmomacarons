import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({ onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-pink-900 px-6 py-4 md:px-12 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="font-petitformal text-2xl font-bold">MM</div>
        </Link>

        <nav className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-6 font-montserrat font-medium">
            <li><Link to="/" className="hover:text-lg">Home</Link></li>
            <li><Link to="/products" className="hover:text-lg">Products</Link></li>
            <li><Link to="/about" className="hover:text-lg">About</Link></li>
            <li><Link to="/contact" className="hover:text-lg">Contact</Link></li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">

          <button
            className="sm:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="text-2xl"
            title="View Cart"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-4 bg-white/80 backdrop-blur rounded-lg px-4 py-2">
          <ul className="flex flex-col gap-2 font-montserrat font-medium text-sm">
            <li><Link to="/" className="block py-1 active:text-pink-900 active:underline" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" className="block py-1 active:text-pink-900 active:underline" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link to="/about" className="block py-1 active:text-pink-900 active:underline" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" className="block py-1 active:text-pink-900 active:underline" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
