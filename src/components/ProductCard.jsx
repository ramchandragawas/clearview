import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="bg-white dark:bg-gray-800 shadow-card hover:shadow-elegant dark:shadow-gray-700 rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03] group animate-fade-in">
    <div className="relative overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 dark:from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
        <Link to={`/products/${product.id}`} className="px-4 py-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-blue-400 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          View Details
        </Link>
      </div>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold font-heading mb-2 text-primary-700 dark:text-blue-400">{product.name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-accent-600 dark:text-yellow-400 font-bold">{product.price}</p>
        <button className="bg-primary-500 dark:bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-primary-600 dark:hover:bg-blue-700 transition-colors text-sm shadow-soft dark:shadow-gray-900">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
