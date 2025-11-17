import React from 'react';
import { Page } from '../types';

interface ConfirmationPageProps {
  onNavigate: (page: Page) => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 text-center">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-10">
        <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-4xl font-bold text-gray-800 mt-6 mb-2">Thank You!</h1>
        <p className="text-gray-600 mb-8 text-lg">Your booking has been simulated successfully.</p>
        <p className="text-gray-500 mb-6">We hope you enjoyed the VoyageFlow experience. This is a demonstration of a front-end journey. No data has been saved.</p>
        
        <div className="flex justify-center space-x-4 mb-8">
            {/* Placeholder for social media icons */}
            <a href="#" className="text-gray-400 hover:text-blue-600" aria-label="Social Media 1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..."></path></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600" aria-label="Social Media 2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..."></path></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600" aria-label="Social Media 3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..."></path></svg>
            </a>
        </div>

        <button 
          onClick={() => onNavigate('registration')} 
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
