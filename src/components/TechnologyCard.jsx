import React from 'react';

const TechnologyCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default TechnologyCard;
