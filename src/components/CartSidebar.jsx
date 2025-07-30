import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartSidebar({ open, onClose }) {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total sum
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-montserrat font-semibold text-pink-900">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:font-normal text-3xl font-thin rounded-full w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          &times;
        </button>
      </div>

      {/* Cart items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 italic">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-100 pb-3"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-md shadow-sm"
                />
                <div>
                  <div className="font-montserrat text-gray-700">{item.name}</div>
                  <div className="text-sm font-thin">
                    {item.quantity} × {item.price} kr
                  </div>
                </div>
              </div>

              <button
                className="text-pink-900 hover:text-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between text-lg font-montserrat font-semibold text-gray-700 mb-4">
            <span>Total:</span>
            <span>{total} kr</span>
          </div>
          <button
            className="w-full bg-gray-200 text-gray-700 py-3 rounded-md hover:bg-pink-900 hover:text-white"
            onClick={() => alert('Checkout not implemented')}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}