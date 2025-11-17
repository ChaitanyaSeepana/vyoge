import React, { useState, FormEvent } from 'react';
import { Page } from '../types';
import Modal from '../components/Modal';

interface RegistrationPageProps {
  onNavigate: (page: Page) => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    phone: '',
    pin: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    phone: '',
    pin: '',
    email: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validate = () => {
    const newErrors = { phone: '', pin: '', email: '' };
    let isValid = true;

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
      isValid = false;
    }
    if (!/^\d{6}$/.test(formData.pin)) {
      newErrors.pin = 'PIN code must be exactly 6 digits.';
      isValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    onNavigate('blog');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">VoyageFlow</h1>
        <p className="text-center text-gray-500 mb-8">Join us and start your journey</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} required />
            {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} required />
            {errors.phone && <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="pin" className="block text-gray-700 text-sm font-bold mb-2">PIN Code</label>
            <input type="password" name="pin" id="pin" value={formData.pin} onChange={handleChange} className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.pin ? 'border-red-500' : 'border-gray-300'}`} required />
            {errors.pin && <p className="text-red-500 text-xs italic mt-1">{errors.pin}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Register</button>
        </form>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Success!">
        <p className="text-gray-600">You have successfully registered. You will now be redirected to our travel blog.</p>
        <button onClick={handleModalClose} className="mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Continue</button>
      </Modal>
    </div>
  );
};

export default RegistrationPage;
