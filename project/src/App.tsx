import React, { useState } from 'react';
import { Search, Phone, Mail } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import MedicineCard from './components/MedicineCard';
import OrderForm from './components/OrderForm';
import { medicines, popularMedicines } from './data/medicines';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showOrderForm, setShowOrderForm] = useState(false);

  const filteredMedicines = medicines.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-app-bg">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" alt="Logo" className="h-12 w-12 rounded-full mr-3" />
              <h1 className="text-3xl font-bold text-app-primary">QuickMed</h1>
            </div>
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-app-secondary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-app-primary to-app-secondary text-white py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Your trusted partner for quick medicine delivery</h2>
            <p className="text-xl mb-8">Order medicines online and get them delivered within 15 minutes</p>
            <div className="flex justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <span className="bg-white/20 p-2 rounded-full mr-2">✓</span>
                <span>15 min delivery</span>
              </div>
              <div className="flex items-center">
                <span className="bg-white/20 p-2 rounded-full mr-2">✓</span>
                <span>100% genuine medicines</span>
              </div>
              <div className="flex items-center">
                <span className="bg-white/20 p-2 rounded-full mr-2">✓</span>
                <span>8 AM to 8 PM delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Medicines */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-app-primary">Popular Medicines</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularMedicines.map((medicine) => (
            <MedicineCard 
              key={medicine.name}
              name={medicine.name}
              image={medicine.image}
              description={medicine.description}
              onOrder={() => setShowOrderForm(true)}
            />
          ))}
        </div>
      </div>

      {/* All Medicines */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-app-primary">All Medicines</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMedicines.map((medicine) => (
            <MedicineCard 
              key={medicine.name}
              name={medicine.name}
              image={medicine.image}
              description={medicine.description}
              onOrder={() => setShowOrderForm(true)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-app-primary to-app-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:mr.tachyon25@gmail.com">mr.tachyon25@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <a href="tel:+919818334567">+91 9818334567</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderForm onClose={() => setShowOrderForm(false)} />
      )}
    </div>
  );
}

export default App;