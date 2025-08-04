import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white dark:bg-gray-900 shadow-soft dark:shadow-gray-800 py-2' 
        : 'bg-background-light dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-80 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-primary-500 hover:text-primary-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
          <span className="flex items-center">
            ClearView
            <span className="text-accent-400 dark:text-accent-300 ml-1">Optical</span>
          </span>
        </Link>
        <div className="hidden md:flex flex-col items-end">
          <span className="text-sm text-primary-600 dark:text-blue-300 font-medium">Bicholim, Goa</span>
          <span className="text-xs text-neutral-500 dark:text-gray-400">+91 832-123-4567</span>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><NavLink to="/" className={({ isActive }) => 
            isActive 
              ? 'text-primary-600 dark:text-blue-300 font-semibold border-b-2 border-accent-400 dark:border-accent-300 pb-1' 
              : 'text-neutral-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-blue-300 transition-colors'}>Home</NavLink></li>
          <li><NavLink to="/products" className={({ isActive }) => 
            isActive 
              ? 'text-primary-600 dark:text-blue-300 font-semibold border-b-2 border-accent-400 dark:border-accent-300 pb-1' 
              : 'text-neutral-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-blue-300 transition-colors'}>Shop</NavLink></li>
          <li><NavLink to="/book" className={({ isActive }) => 
            isActive 
              ? 'text-primary-600 dark:text-blue-300 font-semibold border-b-2 border-accent-400 dark:border-accent-300 pb-1' 
              : 'text-neutral-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-blue-300 transition-colors'}>Appointment</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => 
            isActive 
              ? 'text-primary-600 dark:text-blue-300 font-semibold border-b-2 border-accent-400 dark:border-accent-300 pb-1' 
              : 'text-neutral-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-blue-300 transition-colors'}>Contact</NavLink></li>
        </ul>
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <NavLink to="/login" className="hidden md:block px-4 py-2 text-neutral-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-300 transition-colors">Login</NavLink>
          <NavLink to="/signup" className="hidden md:block px-4 py-2 rounded-full bg-primary-500 dark:bg-blue-600 text-white hover:bg-primary-600 dark:hover:bg-blue-700 transition-colors shadow-soft dark:shadow-gray-800">Signup</NavLink>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary-500 dark:text-blue-400"
            onClick={handleMobileMenuToggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 z-50">
          <ul className="flex flex-col p-4 space-y-3">
            <li><NavLink to="/" className={({ isActive }) => 
              isActive ? 'text-primary-600 dark:text-blue-300 font-semibold' : 
              'text-neutral-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-blue-300 transition-colors'}>Home</NavLink></li>
            <li><NavLink to="/products" className={({ isActive }) => 
              isActive ? 'text-primary-600 dark:text-blue-300 font-semibold' : 
              'text-neutral-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-blue-300 transition-colors'}>Shop</NavLink></li>
            <li><NavLink to="/book" className={({ isActive }) => 
              isActive ? 'text-primary-600 dark:text-blue-300 font-semibold' : 
              'text-neutral-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-blue-300 transition-colors'}>Appointment</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => 
              isActive ? 'text-primary-600 dark:text-blue-300 font-semibold' : 
              'text-neutral-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-blue-300 transition-colors'}>Contact</NavLink></li>
            <li className="pt-2 border-t dark:border-gray-700">
              <NavLink to="/login" className="block py-2 text-neutral-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-300 transition-colors">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="block py-2 text-neutral-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-300 transition-colors">Signup</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
