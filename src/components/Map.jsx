import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Map = () => {
  // Bicholim, Goa coordinates for Siya Complex (approximate)
  const storeCoordinates = {
    lat: 15.5991,
    lng: 73.9512
  };
  
  // Get theme context
  const { theme } = useTheme();
  
  // Adjust map URL based on theme
  const mapMode = theme === 'dark' ? '&style=feature:all|element:labels|visibility:on|element:labels.icon|visibility:off|element:labels.text.fill|color:0x000000|element:labels.text.stroke|color:0x000000|element:geometry.fill|color:0x212121|element:geometry.stroke|color:0x212121|feature:road|element:geometry.fill|color:0x333333|feature:road|element:geometry.stroke|color:0x333333|feature:poi|element:geometry.fill|color:0x212121|feature:poi|element:geometry.stroke|color:0x212121|feature:transit|element:geometry.fill|color:0x212121|feature:transit|element:geometry.stroke|color:0x212121|feature:water|element:geometry.fill|color:0x191919|feature:water|element:geometry.stroke|color:0x191919' : '';

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md dark:shadow-gray-700">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.8923246381595!2d73.94868557506055!3d15.59910528054726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM1JzU2LjgiTiA3M8KwNTcnMDQuNCJF!5e0!3m2!1sen!2sin!4v1690902300000!5m2!1sen!2sin${mapMode}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="CLEARVIEW OPTICAL LENSES, SHOP G7, SIYA COMPLEX BORDEM, BICHOLIM, NORTH GOA, GOA 403504"
      ></iframe>
    </div>
  );
};

export default Map;
