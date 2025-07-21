import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-black px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-center w-full max-w-7xl gap-12">

        <div className="w-full max-w-[780px] lg:max-w-[820px] aspect-square rounded-full overflow-hidden flex-shrink-0 mb-12 lg:mb-0 lg:mr-8 lg:ml-auto">
          <img
            src="images/home-img.jpg"
            alt="Example"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center max-w-md lg:text-left font-light font-poiretone">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-6 sm:mb-8">
            MALMÖ MACARONS
          </h1>
          <Link
            to="/products"
            className="hover:text-xl font-lexendmega sm:text-lg sm:text-center pr-12"
          >
            Discover our selection
          </Link>
        </div>
      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="flex min-h-screen items-center justify-center">

      
//       <div className="flex flex-col lg:flex-row items-center lg:space-x-8 w-full px-6 sm:px-10 md:px-16 lg:px-24 bg-white text-black">
  
//         <div className="w-full max-w-xl aspect-square rounded-full overflow-hidden my-8 lg:my-12 lg:ml-20 flex-shrink-0">
//           <img  
//             src="images/home-img.jpg"
//             alt="Example"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="flex flex-col justify-center items-center text-center max-w-md font-light mb-16 lg:mb-48 font-poiretone">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-6 sm:mb-8">MALMÖ MACARONS</h1>
//           <Link
//             to="/products"
//             className="flex-1 hover:font-normal font-lexendmega sm:text-lg"
//           >
//             Discover our selection
//           </Link>
//         </div>
//       </div>
//     </main>
//   )
// }

