import React from 'react';

interface MedicineCardProps {
  name: string;
  image: string;
  description: string;
  onOrder: () => void;
}

const MedicineCard: React.FC<MedicineCardProps> = ({ name, image, description, onOrder }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center mb-4">
        <img src={image} alt={name} className="h-32 w-32 object-cover rounded-lg" />
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{name}</h3>
      <p className="text-gray-600 text-sm text-center mb-4">{description}</p>
      <button
        onClick={onOrder}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors"
      >
        Order Now
      </button>
    </div>
  );
}

export default MedicineCard;