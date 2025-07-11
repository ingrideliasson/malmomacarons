import React from 'react'
import products from '../data/products'; 
import ProductCard from '../components/ProductCard'; 



const Products = () => {
  return (
    <div>
      <h1 className="text-2xl font-montserrat text-center text-gray-700 py-6 pb-8">OUR FLAVORS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10 lg:px-20 pb-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id = {product.id}
            name={product.name}
            image={product.image}
            description={product.description} /* The descriptions are AI generated */
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}


export default Products;