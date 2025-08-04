import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

const BookAppointment = () => (
  <div className="bg-background-light min-h-screen py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 font-heading text-primary-800">Book Your Eye Appointment</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Schedule a comprehensive eye examination with our experienced optometrists at SIYA Complex, Bordem, Bicholim
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-elegant overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-primary-600 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 font-heading">Why Choose Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Advanced Equipment</h3>
                    <p className="text-white/80 text-sm mt-1">State-of-the-art diagnostic technology for accurate assessments</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Experienced Doctors</h3>
                    <p className="text-white/80 text-sm mt-1">Qualified optometrists with years of experience in eye care</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Comprehensive Tests</h3>
                    <p className="text-white/80 text-sm mt-1">Thorough eye examinations covering all aspects of eye health</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Digital Records</h3>
                    <p className="text-white/80 text-sm mt-1">Secure electronic records for tracking your eye health over time</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="font-semibold text-lg text-white mb-3">Opening Hours</h3>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span>9:30 AM - 7:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-semibold mb-6 text-primary-700">Schedule Your Visit</h2>
              <AppointmentForm />
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-primary-700">What to Expect During Your Eye Examination</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="font-medium text-neutral-800 mb-2">Pre-Examination</h3>
              <p className="text-sm text-neutral-600">Medical history review and preliminary tests for visual acuity</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="font-medium text-neutral-800 mb-2">Comprehensive Test</h3>
              <p className="text-sm text-neutral-600">Detailed examination of eye health and vision capabilities</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="font-medium text-neutral-800 mb-2">Prescription & Advice</h3>
              <p className="text-sm text-neutral-600">Personalized eyewear recommendations and eye care guidance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BookAppointment;
