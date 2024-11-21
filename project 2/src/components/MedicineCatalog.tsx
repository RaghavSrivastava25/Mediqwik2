import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface Medicine {
  name: string;
  description: string;
  image: string;
}

interface MedicineCatalogProps {
  onOrderClick: (medicineName: string) => void;
}

const medicines: Medicine[] = [
  {
    name: "Crocin",
    description: "Pain relief and fever reduction",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Calpol",
    description: "Paracetamol for children",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Brufen",
    description: "Anti-inflammatory pain relief",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Disprin",
    description: "Aspirin for pain relief",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Cetzine",
    description: "Antihistamine for allergies",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Zyrtec",
    description: "Allergy relief medication",
    image: "https://images.unsplash.com/photo-1576073719676-aa95576db207?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Benadryl",
    description: "Cough syrup and allergy relief",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Corex",
    description: "Cough syrup",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "D-Cold Total",
    description: "Cold and flu relief",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Sinarest",
    description: "Cold and flu relief",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Gelusil",
    description: "Antacid for acidity",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Digene",
    description: "Antacid for digestive issues",
    image: "https://images.unsplash.com/photo-1576073719676-aa95576db207?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Imodium",
    description: "Anti-diarrheal medication",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Electral",
    description: "Oral rehydration salts",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Domstal",
    description: "Anti-nausea medication",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Ondem",
    description: "Anti-vomiting medication",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Clotrimazole - Candid",
    description: "Antifungal cream",
    image: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Canesten",
    description: "Antifungal medication",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Caladryl",
    description: "Anti-itching lotion",
    image: "https://images.unsplash.com/photo-1576073719676-aa95576db207?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Neosporin Ointment",
    description: "Antibiotic ointment",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Levozet",
    description: "Antihistamine for allergies",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Hydrocortisone Cream",
    description: "Anti-inflammatory cream",
    image: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "I-Kul",
    description: "Eye drops for irritation relief",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Chloramphenicol Ear Drops",
    description: "Antibiotic ear drops",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Becosules",
    description: "Vitamin B-complex capsules",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Revital",
    description: "Multivitamin supplement",
    image: "https://images.unsplash.com/photo-1576073719676-aa95576db207?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Celin",
    description: "Vitamin C tablets",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400"
  }
];

const MedicineCatalog: React.FC<MedicineCatalogProps> = ({ onOrderClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Medicine Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {medicines.map((medicine, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{medicine.name}</h3>
              <p className="text-gray-600 mb-4">{medicine.description}</p>
              <button
                onClick={() => onOrderClick(medicine.name)}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineCatalog;