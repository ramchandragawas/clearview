import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Product Details - {id}</h1>
      {/* Image gallery, product info, reviews, add to cart */}
    </div>
  );
};

export default ProductDetails;
