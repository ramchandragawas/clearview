import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-2xl font-bold mb-4 font-heading">Products</h1>
    {/* Category filters */}
    <div className="mb-6">{/* TODO: Add filters */}</div>
    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </div>
);

export default Products;
