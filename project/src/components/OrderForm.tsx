import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

interface OrderFormProps {
  onClose: () => void;
}

interface MedicineOrder {
  medicine: string;
  quantity: number;
}

const BACKEND_URL = 'https://medicine-delivery-backend.netlify.app/.netlify/functions/order';

const OrderForm: React.FC<OrderFormProps> = ({ onClose }) => {
  const [orders, setOrders] = useState<MedicineOrder[]>([{ medicine: '', quantity: 1 }]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validOrders = orders.filter(order => order.medicine && order.quantity > 0);
    
    try {
      const response = await axios.post(BACKEND_URL, {
        orders: validOrders,
        customerDetails: {
          name,
          phone,
          email,
          address
        }
      });

      if (response.status === 200) {
        toast.success('Order placed successfully!');
        onClose();
      }
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
      console.error('Order submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addOrder = () => {
    if (orders.length < 10) {
      setOrders([...orders, { medicine: '', quantity: 1 }]);
    }
  };

  const removeOrder = (index: number) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  const updateOrder = (index: number, field: keyof MedicineOrder, value: string | number) => {
    const newOrders = [...orders];
    newOrders[index] = { ...newOrders[index], [field]: value };
    setOrders(newOrders);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-app-primary">Place Order</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
              disabled={isSubmitting}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              {orders.map((order, index) => (
                <div key={index} className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Medicine name"
                    value={order.medicine}
                    onChange={(e) => updateOrder(index, 'medicine', e.target.value)}
                    className="flex-1 p-2 border rounded"
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="number"
                    min="1"
                    value={order.quantity}
                    onChange={(e) => updateOrder(index, 'quantity', parseInt(e.target.value))}
                    className="w-24 p-2 border rounded"
                    required
                    disabled={isSubmitting}
                  />
                  {orders.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeOrder(index)}
                      className="text-red-500 hover:text-red-700"
                      disabled={isSubmitting}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {orders.length < 10 && (
              <button
                type="button"
                onClick={addOrder}
                className="mb-6 text-app-secondary hover:text-app-primary"
                disabled={isSubmitting}
              >
                + Add another medicine
              </button>
            )}

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
                required
                disabled={isSubmitting}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded"
                required
                disabled={isSubmitting}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                required
                disabled={isSubmitting}
              />
              <textarea
                placeholder="Complete Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded"
                rows={3}
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-app-secondary text-white py-2 px-4 rounded-lg hover:bg-app-primary transition-colors disabled:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;