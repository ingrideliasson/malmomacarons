import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat text-white px-6 sm:px-10 md:px-16 lg:px-20"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/macaron-hero.jpg)`,
      }}
    >
      <div className="text-center max-w-2xl font-petitformal p-8 rounded-xl flex flex-col gap-4">
        <h1 className="text-6xl md:text-6xl font-bold">
          Malmö Macarons
        </h1>
        <Link
          to="/products"
          className="hover:text-pink-900 hover:underline duration-300 font-montserrat sm:text-lg inline-block"
        >
          See our products
        </Link>
      </div>
    </main>
  );
}
