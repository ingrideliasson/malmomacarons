import React, {useState, useEffect} from 'react'
import {useCart} from '../context/CartContext';


const ProductCard = ({ id, name, image, description, price}) => {

  const { addToCart, cartItems } = useCart();
  const cartItem = cartItems.find(item => item.id ==id); // check if item is already in cart
  const [quantity, setQuantity] = useState(0); // Use state to manage add to cart quantity

  useEffect(() => {
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, [cartItem]);

  const increment = () => setQuantity(prev => prev +1); //  Handle increments
  const decrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0)); // Handle decrements, never go below 0

  useEffect(() => {
    if (quantity > 0) {
      addToCart({id, name, image, price}, quantity);
    }
  }, [quantity])


  return (

    <div className="rounded-2xl shadow-md p-4 bg-white flex flex-col items-center text-gray-700">
      <img src={image} alt={name} className="w-full h-64 object-contain rounded-lg" />
      <h3 className="text-lg font-lighter mt-2 font-montserrat text-center">{name}</h3>
      <p className="font-montserrat text-sm p-2 mt-1 overflow-hidden text-center">{description}</p>
      <span className="text-base font-montserrat mt-2">{price} kr</span>



      {quantity === 0 ? ( //If quantity is 0, show add to cart button. When clicked, quantity increments by 1

        //call the function setQuantity and pass 1 as an argument when user clicks the button
        <button className=" px-8 py-1 mt-2 mt-5 text-gray-700 text-semibold rounded-md font-montserrat 
        text-sm border-2 border-gray-600 hover:bg-gray-700 hover:text-white"
        onClick = {() => setQuantity(1)}>  
        BUY
        </button>

      ) : (
        // Show counter UI when quantity is greater than 0
      <div className="flex items-center justify-center space-x-3 mt-5  rounded-md border-gray-600 px-3 py-1">
        <button
          onClick={decrement}
          className="px-3 py-1 text-sm text-gray-700 font-semibold border-2 border-gray-600 
          rounded-md hover:bg-gray-700 hover:text-white transition">
          -
        </button>
        <span className="text-sm font-montserrat">{quantity}</span>
        <button
          onClick={increment}
          className="px-3 py-1 text-sm text-gray-700 font-semibold border-2 border-gray-600 
          rounded-md hover:bg-gray-700 hover:text-white transition">
          +
        </button>
      </div>


      )}

    </div>

  );
};

export default ProductCard;