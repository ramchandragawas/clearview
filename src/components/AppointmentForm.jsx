import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentType: '',
    concern: '',
    date: '',
    time: '',
    preferredDoctor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your appointment at ClearView Optical in Bicholim has been scheduled successfully! We look forward to seeing you.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      appointmentType: '',
      concern: '', 
      date: '', 
      time: '',
      preferredDoctor: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2" 
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
          <input 
            id="phone"
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2" 
            placeholder="+91 98765 43210"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
        <input 
          id="email"
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2" 
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="appointmentType" className="block text-sm font-medium text-neutral-700 mb-1">Appointment Type</label>
        <select
          id="appointmentType"
          name="appointmentType"
          value={formData.appointmentType}
          onChange={handleChange}
          required
          className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2"
        >
          <option value="">Select appointment type</option>
          <option value="eye-test">Comprehensive Eye Test</option>
          <option value="glasses-fitting">Glasses Fitting/Adjustment</option>
          <option value="contact-lens">Contact Lens Consultation</option>
          <option value="follow-up">Follow-up Appointment</option>
          <option value="eye-concern">Eye Concern/Problem</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="concern" className="block text-sm font-medium text-neutral-700 mb-1">
          Additional Information <span className="text-neutral-500 text-xs">(Optional)</span>
        </label>
        <textarea 
          id="concern"
          name="concern" 
          value={formData.concern} 
          onChange={handleChange} 
          rows="3"
          className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2" 
          placeholder="Please share any specific concerns or requirements"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">Preferred Date</label>
          <input 
            id="date"
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
            min={new Date().toISOString().split('T')[0]}
            className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2" 
          />
        </div>
        
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1">Preferred Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2"
          >
            <option value="">Select a time slot</option>
            <option value="09:30">9:30 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="10:30">10:30 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="14:30">2:30 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="15:30">3:30 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="16:30">4:30 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="17:30">5:30 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="18:30">6:30 PM</option>
            <option value="19:00">7:00 PM</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="preferredDoctor" className="block text-sm font-medium text-neutral-700 mb-1">
          Preferred Optometrist <span className="text-neutral-500 text-xs">(Optional)</span>
        </label>
        <select
          id="preferredDoctor"
          name="preferredDoctor"
          value={formData.preferredDoctor}
          onChange={handleChange}
          className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 px-4 py-2"
        >
          <option value="">No preference</option>
          <option value="dr-sharma">Dr. Sharma</option>
          <option value="dr-naik">Dr. Naik</option>
          <option value="dr-desai">Dr. Desai</option>
        </select>
      </div>
      
      <div className="pt-2">
        <button 
          type="submit" 
          className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors font-medium"
        >
          Schedule Appointment
        </button>
      </div>
      
      <p className="text-sm text-neutral-500 text-center">
        You will receive a confirmation email and SMS once your appointment is confirmed.
      </p>
    </form>
  );
};

export default AppointmentForm;
