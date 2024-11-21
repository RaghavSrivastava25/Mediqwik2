import React, { useState } from 'react';
import { Pill, Clock3 } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import OrderForm from './components/OrderForm';
import MedicineCatalog from './components/MedicineCatalog';

function App() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<string>('');

  const handleOrderClick = (medicineName: string) => {
    setSelectedMedicine(medicineName);
    setShowOrderForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Pill className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            <span className="text-[#90EE90]">MediQwik</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Health, Delivered
          </h2>
          <p className="text-xl md:text-2xl text-blue-600 font-medium mb-8 flex items-center justify-center gap-2">
            <Clock3 className="h-6 w-6" />
            Get your meds at your doorstep in 15 mins
          </p>
          <button
            onClick={() => {
              setSelectedMedicine('');
              setShowOrderForm(true);
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Order Now
          </button>
        </div>

        {/* Featured Categories */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Prescription Medicines',
              description: 'Upload your prescription and get medicines delivered',
              icon: '💊'
            },
            {
              title: 'Healthcare Products',
              description: 'Wide range of healthcare and wellness products',
              icon: '🏥'
            },
            {
              title: 'Personal Care',
              description: 'Essential personal care and hygiene products',
              icon: '✨'
            }
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Medicine Catalog */}
      <MedicineCatalog onOrderClick={handleOrderClick} />

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderForm 
          onClose={() => {
            setShowOrderForm(false);
            setSelectedMedicine('');
          }}
          initialMedicine={selectedMedicine}
        />
      )}
    </div>
  );
}

export default App;