import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    subject: '',
    message: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting ClearView Optical in Bicholim! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2"
            placeholder="Your name" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2"
              placeholder="your.email@example.com" 
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone" 
              value={formData.phone} 
              onChange={handleChange}
              className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2"
              placeholder="+91 98765 43210" 
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2"
          >
            <option value="">Select a subject</option>
            <option value="appointment">Appointment Inquiry</option>
            <option value="product">Product Inquiry</option>
            <option value="prescription">Prescription Query</option>
            <option value="repairs">Repairs & Adjustments</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
          <textarea 
            id="message"
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows="4"
            className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2"
            placeholder="How can we help you today?" 
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors font-medium"
        >
          Send Message
        </button>
        
        <p className="text-xs text-neutral-500 text-center">
          By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
