import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import AppointmentForm from '../components/AppointmentForm';
import CategoryCard from '../components/CategoryCard';
import Testimonial from '../components/Testimonial';
import TechnologyCard from '../components/TechnologyCard';
import PromotionCard from '../components/PromotionCard';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[80vh] mb-16 overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://via.placeholder.com/1600x900?text=Premium+Eyewear')" }} 
        />
        {/* Overlay */}
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900/90 to-primary-900/70' : 'bg-gradient-to-r from-primary-900/80 to-primary-700/50'}`} />
        
        {/* Content */}
        <div className="container relative z-10 mx-auto h-full flex flex-col justify-center items-start px-4 md:px-0">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading leading-tight">
              See the World <span className="text-accent-300">Clearly</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              Premium eyewear collections and professional eye care services in Bicholim, Goa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" 
                className="px-8 py-3 bg-accent-400 text-primary-900 font-bold rounded-full hover:bg-accent-300 transition-colors shadow-lg transform hover:translate-y-[-2px] hover:shadow-xl duration-300">
                Shop Collection
              </Link>
              <Link to="/book" 
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/20 transition-colors">
                Book Eye Test
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 font-heading">Featured Collection</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Discover our handpicked selection of premium eyewear designed for style and comfort in Goan climate.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-block px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-full hover:bg-primary-500 hover:text-white transition-colors">
            View All Products
          </Link>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="bg-background-light py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 font-heading">Shop By Category</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">Find the perfect eyewear for Goa's tropical climate and your lifestyle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard 
              title="Premium Glasses" 
              image="https://via.placeholder.com/600x600?text=Premium+Glasses"
              description="Discover our collection of high-quality frames suitable for Goa's climate."
              link="/products?category=glasses"
            />
            <CategoryCard 
              title="UV Protection Sunglasses" 
              image="https://via.placeholder.com/600x600?text=Sunglasses"
              description="Protect your eyes from Goa's tropical sunshine with our stylish sunglasses."
              link="/products?category=sunglasses"
            />
            <CategoryCard 
              title="Contact Lenses" 
              image="https://via.placeholder.com/600x600?text=Contact+Lenses"
              description="Explore our range of comfortable contact lenses perfect for humid weather."
              link="/products?category=contacts"
            />
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="bg-background-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-elegant overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-primary-500 p-10 text-white">
                <h2 className="text-3xl font-bold mb-4 font-heading">Book Your Eye Test</h2>
                <p className="mb-6">Schedule a comprehensive eye examination with our experienced optometrists in Bicholim, Goa.</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Modern diagnostic equipment
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Personalized eye care solutions
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Expert prescription analysis
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-10">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-heading">What Our Customers Say</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Hear from our satisfied customers in Bicholim and across Goa</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            name="Priya Naik"
            role="Teacher, Bicholim"
            image="https://via.placeholder.com/150?text=Priya"
            quote="The team at ClearView helped me find the perfect pair of glasses that are comfortable even during long teaching hours in Goa's humid climate!"
          />
          <Testimonial 
            name="Rohan Dessai"
            role="IT Professional, Panjim"
            image="https://via.placeholder.com/150?text=Rohan"
            quote="Their blue light filtering lenses have made a huge difference during my long work hours. The quality and service are unmatched in Goa."
          />
          <Testimonial 
            name="Anjali Shetty"
            role="Hotel Manager, Bicholim"
            image="https://via.placeholder.com/150?text=Anjali"
            quote="The eye test at ClearView was thorough and professional. Their sunglasses recommendation has been perfect for my outdoor work near the beach."
          />
        </div>
      </section>

      {/* Lens Technology Section */}
      <section className="bg-background-light py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 font-heading">Advanced Lens Technology</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">Discover technologies perfect for Goa's tropical climate and lifestyle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechnologyCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>}
              title="Anti-Reflective Coating"
              description="Reduces glare from intense Goan sunshine, perfect for outdoor activities and driving."
            />
            <TechnologyCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>}
              title="Photochromic Lenses"
              description="Perfect for Goa's varying light conditions - automatically adjust from indoor to bright beach sunshine."
            />
            <TechnologyCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>}
              title="Blue Light Filtering"
              description="Protect your eyes from digital devices - essential for students and professionals in Bicholim."
            />
            <TechnologyCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>}
              title="Lightweight Lenses"
              description="Thinner and lighter lenses for high prescriptions, providing comfort in Goa's humid climate."
            />
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-block px-8 py-3 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-600 transition-colors shadow-md">
              Explore Our Lens Options
            </Link>
          </div>
        </div>
      </section>
      
      {/* Special Offers Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-heading">Special Offers</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Take advantage of our limited-time promotions in Bicholim</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PromotionCard 
            title="Monsoon Season Bundle"
            description="Purchase any frame and get 50% off on anti-fog lenses - perfect for Goa's monsoon season"
            discount="SAVE 50%"
            bgColor="bg-gradient-to-r from-primary-600 to-primary-800"
            linkTo="/products?promo=monsoon"
            buttonText="Shop Monsoon Collection"
            image="https://via.placeholder.com/300x400?text=Monsoon+Glasses"
          />
          <PromotionCard 
            title="Complete Eye Exam"
            description="Book a comprehensive eye examination and receive ₹1,000 voucher towards your next purchase"
            discount="₹1,000 VOUCHER"
            bgColor="bg-gradient-to-r from-accent-500 to-accent-700"
            linkTo="/book"
            buttonText="Book Now"
            image="https://via.placeholder.com/300x400?text=Eye+Exam"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-heading">Frequently Asked Questions</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Find answers to common questions about our services in Bicholim, Goa</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQ 
            question="How often should I have an eye examination in Goa's climate?"
            answer="We recommend a comprehensive eye exam every 12 months for residents of Goa due to the tropical climate and intense UV exposure. For children and seniors, more frequent check-ups may be advised, especially during monsoon season when eye infections are more common."
          />
          <FAQ 
            question="Do you offer home service in Bicholim and nearby areas?"
            answer="Yes, we provide home eye testing services for elderly patients and those unable to visit our store in Bicholim. This service is available within a 15km radius of our location. Please contact us to schedule a home appointment."
          />
          <FAQ 
            question="How long will it take to receive my new glasses?"
            answer="Standard prescription glasses typically take 5-7 working days. For complex prescriptions or specialty lenses, it may take 10-14 days. We offer express service for an additional fee if you need them sooner."
          />
          <FAQ 
            question="Do you accept insurance and cashless facilities?"
            answer="Yes, we accept most major health insurance plans that cover eye care. We also have tie-ups with several corporate health schemes popular in Goa. Please bring your insurance card when you visit our store in Bicholim."
          />
          <FAQ 
            question="What's your return policy for frames purchased in-store?"
            answer="We offer a 15-day satisfaction guarantee on all frames and lenses purchased at our Bicholim store. If you're not completely satisfied, we'll work with you to make adjustments, provide a replacement, or issue a store credit according to our policy terms."
          />
        </div>
        <div className="text-center mt-10">
          <Link to="/contact" className="inline-block px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-blue-400 dark:border-blue-600 rounded-full hover:bg-primary-500 dark:hover:bg-blue-600 hover:text-white transition-colors">
            Still Have Questions? Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
