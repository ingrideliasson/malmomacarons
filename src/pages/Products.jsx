import React from 'react'
import products from '../data/products'; 
import ProductCard from '../components/ProductCard'; 



const Products = () => {
  return (
    <div className="min-h-screen mt-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id = {product.id}
            name={product.name}
            image={`${process.env.PUBLIC_URL}/${product.image}`}
            description={product.description} /* The descriptions are AI generated */
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}


export default Products;