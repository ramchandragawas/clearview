import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, image, description, link }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-elegant transition-all duration-300">
    <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/30 to-transparent opacity-70"></div>
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
      <h3 className="text-2xl font-bold font-heading mb-2">{title}</h3>
      <p className="text-white/90 mb-4 max-w-xs">{description}</p>
      <Link 
        to={link} 
        className="inline-block self-start px-5 py-2 bg-accent-400 text-primary-900 font-semibold rounded-full transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
      >
        Browse Collection
      </Link>
    </div>
  </div>
);

export default CategoryCard;
