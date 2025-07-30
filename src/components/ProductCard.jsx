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

    <div className="rounded-2xl p-4 bg-white shadow-lg flex flex-col items-center ">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-lg" />

        <h3 className="text-2xl mt-4 text-center font-petitformal font-bold text-pink-950">{name}</h3>
        <p className="font-montserrat font-light text-sm p-2 mt-1 overflow-hidden text-center">{description}</p>
      

        <span className="text-md font-medium text-gray-700 font-lato mt-2">{price} kr</span>
      


      {quantity === 0 ? ( //If quantity is 0, show add to cart button. When clicked, quantity increments by 1

        //call the function setQuantity and pass 1 as an argument when user clicks the button
        <button className=" px-8 py-1 mt-2 mt-5 font-bold hover:text-md rounded-md font-lato  
        text-md text-pink-900 bg-red-50"
        onClick = {() => setQuantity(1)}>  
        BUY
        </button>

      ) : (
        // Show counter UI when quantity is greater than 0
      <div className="flex items-center justify-center space-x-3 mt-5  rounded-md border-gray-600 px-3 py-1">
        <button
          onClick={decrement}
          className="px-3 py-1 text-sm text-gray-700 font-semibold border-2 border-pink-900 text-pink-900 
          rounded-md hover:bg-pink-900 hover:text-white transition">
          -
        </button>
        <span className="text-sm font-montserrat">{quantity}</span>
        <button
          onClick={increment}
          className="px-3 py-1 text-sm text-gray-700 font-semibold border-2 border-pink-900 text-pink-900 
          rounded-md hover:bg-pink-900 hover:text-white transition">
          +
        </button>
      </div>

      )}

    </div>


  );
};

export default ProductCard;