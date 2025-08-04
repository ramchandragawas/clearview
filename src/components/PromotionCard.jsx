import React from 'react';
import { Link } from 'react-router-dom';

const PromotionCard = ({ title, description, discount, bgColor, linkTo, buttonText, image }) => {
  return (
    <div className={`${bgColor} rounded-xl overflow-hidden shadow-lg relative`}>
      <div className="md:flex">
        <div className="p-8 md:w-2/3">
          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            Special Offer
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/90 mb-4">{description}</p>
          {discount && (
            <div className="text-3xl font-bold text-white mb-6">
              {discount}
            </div>
          )}
          <Link 
            to={linkTo} 
            className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-colors"
          >
            {buttonText}
          </Link>
        </div>
        {image && (
          <div className="md:w-1/3 relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PromotionCard;
