import React from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 font-heading text-primary-800 dark:text-blue-400">Contact Us</h1>
        <p className="text-lg text-neutral-600 dark:text-gray-300 max-w-2xl mx-auto">We're here to help with all your eye care needs in Bicholim, Goa</p>
      </div>
      
      {/* Google Map */}
      <div className="mb-12">
        <Map />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-elegant dark:shadow-gray-900">
          <h2 className="text-2xl font-semibold mb-6 text-primary-700 dark:text-blue-400">Send Us a Message</h2>
          <ContactForm />
        </div>
        
        {/* Contact Details */}
        <div className="bg-primary-50 dark:bg-gray-700 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-primary-700 dark:text-blue-300">Visit Our Store</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-primary-600 mb-2">Address</h3>
              <address className="not-italic text-neutral-700">
                <p>CLEARVIEW OPTICAL LENSES </p>
                <p>SHOP G7, SIYA COMPLEX </p>
                <p>BORDEM BICHOLIM  NORTH GOA , GOA 403504 </p>
               
              </address>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary-600 mb-2">Opening Hours</h3>
              <ul className="text-neutral-700">
                <li>Monday - Saturday: 9:30 AM - 7:30 PM</li>
                <li>Sunday: 10:00 AM - 2:00 PM</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary-600 mb-2">Contact Information</h3>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+918321234567" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 976 492 3664
                  </a>
                </li>
                <li>
                  <a href="mailto:info@clearview.co.in" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@clearview.co.in
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/9764923664" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    WhatsApp Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
