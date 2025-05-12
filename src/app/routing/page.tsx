'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RoutingPage() {
  const router = useRouter();
  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [dropLocation, setDropLocation] = useState<string>('');
  const [productCategory, setProductCategory] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  // Function to handle the close button
  const handleClose = () => {
    // Navigate back or to delivery page
    router.back(); // Go back to previous page
    // Alternatively: router.push('/delivery');
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      pickupLocation,
      dropLocation,
      productCategory,
      additionalNotes
    });
    
  };

  // Swap pickup and drop locations
  const swapLocations = () => {
    const temp = pickupLocation;
    setPickupLocation(dropLocation);
    setDropLocation(temp);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {/* Close button (X) */}
          <button 
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-center flex-grow">Routing</h1>
          <div className="w-8"></div> {/* Empty div for centering the title */}
        </div>
      </div>

      <div className="p-4 flex-grow overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="space-y-4 mb-auto">
            {/* Pickup Location */}
            <div className="relative">
              <input
                type="text"
                placeholder="Pickup Location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-blue-500"
                onClick={() => setPickupLocation('')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Drop Location */}
            <div className="relative">
              <input
                type="text"
                placeholder="Drop Location"
                value={dropLocation}
                onChange={(e) => setDropLocation(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={swapLocations}
                aria-label="Swap locations"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>
            
            {/* Product Category Dropdown */}
            <div className="relative">
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-500"
              >
                <option value="" disabled selected>Product Category</option>
                <option value="food">Food</option>
                <option value="groceries">Groceries</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="documents">Documents</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Additional Notes */}
            <textarea
              placeholder="Additional Notes"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>
          
          {/* Find a Rider Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Find a rider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}