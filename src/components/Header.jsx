import { Link } from 'react-router-dom';
import React from 'react'
import logo from '../assets/logo.jpeg'; // Assuming you have a logo image in the assets folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

export default function Header({ onCartClick }) {
  return (
    <header className="relative flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 bg-red-50">

      {/* Logo */}
      <Link to="/" className="z-10">
        <div className="font-greatvibes text-2xl sm:text-4xl font-thin text-gray-700">MM</div>
      </Link>

      {/* Nav: center on desktop, normal flow on mobile */}
      <nav className="hidden sm:flex absolute sm:static left-1/2 sm:left-auto top-1/2 sm:top-auto transform sm:transform-none -translate-x-1/2 sm:-translate-x-0 -translate-y-1/2 sm:-translate-y-0">
        <ul className="flex items-center gap-2 sm:gap-4 text-gray-700 font-medium whitespace-nowrap">
          <li>
            <Link to="/" className="font-montserrat font-normal hover:text-red-300">Home</Link>
          </li>
          <li>
            <Link to="/products" className="font-montserrat font-normal hover:text-red-300">Products</Link>
          </li>
          <li>
            <Link to="/about" className="font-montserrat font-normal hover:text-red-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="font-montserrat font-normal hover:text-red-300">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile nav fallback: maybe a hamburger here if you want, else keep hidden */}
      <nav className="sm:hidden">
        <ul className="flex items-center gap-4 text-gray-700 font-medium text-sm">
          <li>
            <Link to="/" className="font-montserrat font-normal hover:text-red-300">Home</Link>
          </li>
          <li>
            <Link to="/products" className="font-montserrat font-normal hover:text-red-300">Products</Link>
          </li>
          <li>
            <Link to="/about" className="font-montserrat font-normal hover:text-red-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="font-montserrat font-normal hover:text-red-300">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Cart Button */}
      <div className="z-10">
        <button onClick={onCartClick} className="text-lg sm:text-2xl text-gray-700" title="View Cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </header>
  );
}

// export default function Header({ onCartClick }) {
//   return (
//     <header className="relative flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 bg-red-50">

//       <Link to="/" className="z-10">
//         <div className="font-greatvibes text-2xl sm:text-4xl font-thin text-gray-700">MM</div>
//       </Link>

//       <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         <ul className="flex items-center gap-2 sm:gap-4 text-gray-700 font-medium">
//           <li>
//             <Link to="/" className="font-montserrat font-normal hover:text-red-300">Home</Link>
//           </li>
//           <li>
//             <Link to="/products" className="font-montserrat font-normal hover:text-red-300">Products</Link>
//           </li>
//           <li>
//             <Link to="/about" className="font-montserrat font-normal hover:text-red-300">About</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="font-montserrat font-normal hover:text-red-300">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <div className="z-10">
//         <button onClick={onCartClick} className="text-lg sm:text-2xl text-gray-700" title="View Cart">
//           <FontAwesomeIcon icon={faCartShopping} />
//         </button>
//       </div>
//     </header>
//   );
// }
