import React, { useState, useEffect } from 'react';
import { Page, ItineraryCategory } from '../types';
import Modal from '../components/Modal';

const itineraryData: ItineraryCategory[] = [
    {
        title: "Travel Options",
        items: [
            { id: 'flight-economy', name: 'Economy Flight', price: 500 },
            { id: 'flight-business', name: 'Business Class Flight', price: 1200 },
            { id: 'train', name: 'High-Speed Train', price: 300 },
        ]
    },
    {
        title: "Food Packages",
        items: [
            { id: 'food-basic', name: 'Basic (Breakfast Included)', price: 150 },
            { id: 'food-premium', name: 'Premium (All Meals)', price: 400 },
            { id: 'food-tour', name: 'Local Food Tour', price: 100 },
        ]
    },
    {
        title: "Activities",
        items: [
            { id: 'activity-museum', name: 'Museum Pass', price: 80 },
            { id: 'activity-adventure', name: 'Adventure Sports', price: 250 },
            { id: 'activity-city', name: 'Guided City Tour', price: 60 },
        ]
    }
];

interface CalculatorPageProps {
  onNavigate: (page: Page) => void;
}

const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate }) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    let total = 0;
    itineraryData.forEach(category => {
      category.items.forEach(item => {
        if (selectedItems[item.id]) {
          total += item.price;
        }
      });
    });
    setTotalPrice(total);
  }, [selectedItems]);

  const handleCheckboxChange = (id: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleConfirm = () => {
      setIsModalOpen(true);
  };
  
  const handleModalClose = () => {
    setIsModalOpen(false);
    onNavigate('confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Trip Itinerary & Price Calculator</h1>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {itineraryData.map(category => (
            <div key={category.title} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">{category.title}</h2>
              <div className="space-y-3">
                {category.items.map(item => (
                  <label key={item.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!selectedItems[item.id]}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-800">{item.name}</span>
                    <span className="text-gray-500 ml-auto">${item.price}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300 flex justify-between items-center">
            <div className="text-right">
              <p className="text-gray-600 text-xl">Total Price</p>
              <p className="text-4xl font-extrabold text-blue-600">${totalPrice}</p>
            </div>
            <button onClick={handleConfirm} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg">
                Confirm
            </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Itinerary Confirmed!">
         <p className="text-gray-600 mb-4">Your selections have been noted. Your total simulated cost is <span className="font-bold text-lg">${totalPrice}</span>.</p>
         <p className="text-gray-600">Proceed to the final confirmation page.</p>
        <button onClick={handleModalClose} className="mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Continue</button>
      </Modal>
    </div>
  );
};

export default CalculatorPage;
