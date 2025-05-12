'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PaymentPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<string>('cash');

  // Function to handle finding a rider
  const handleFindRider = () => {
    console.log('Finding rider with payment method:', paymentMethod);
    // For demo purposes, we'd navigate to a confirmation page or show a loading state
    // router.push('/confirmation');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Map Section (top half) */}
      <div className="relative h-1/2">
        {/* This would be a real map in production */}
        <div className="h-full w-full bg-[#f2efe9] relative">
          <Image 
            src="/images/map-background.png" 
            alt="Map showing route"
            layout="fill"
            objectFit="cover"
            priority
          />
          
          {/* Map labels */}
          <div className="absolute bottom-8 left-8 text-xs font-semibold bg-white px-2 py-1 rounded-sm">
            A312
          </div>
          <div className="absolute bottom-12 left-24 text-xs font-semibold">
            Ezillo
          </div>
          <div className="absolute bottom-12 right-14 text-xs font-semibold">
            Ezzamgbo
          </div>
          <div className="absolute top-32 left-16 text-xs font-semibold bg-white px-2 py-1 rounded-sm">
            A343
          </div>
          <div className="absolute top-20 left-28 text-xs font-semibold bg-white px-2 py-1 rounded-sm">
            P112
          </div>
          <div className="absolute bottom-12 left-8 text-xs font-semibold">
            Oruku
          </div>
        </div>
      </div>
      
      {/* Payment Section (bottom half) */}
      <div className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Pay</h1>
        
        {/* Amount Card */}
        <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">₦ 12,320</div>
          <button className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        
        <div className="mb-3 text-lg font-medium">Using...</div>
        
        {/* Payment Method Options */}
        <div className="space-y-3 mb-8">
          {/* Cash on Delivery */}
          <label className={`block p-4 rounded-lg cursor-pointer ${paymentMethod === 'cash' ? 'bg-blue-50 border-2 border-blue-100' : 'bg-gray-50'}`}>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')}
                className="h-4 w-4 text-blue-600 mr-3"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">Cash on Delivery</span>
            </div>
          </label>
          
          {/* Crypto Wallet */}
          <label className={`block p-4 rounded-lg cursor-pointer ${paymentMethod === 'crypto' ? 'bg-blue-50 border-2 border-blue-100' : 'bg-gray-50'}`}>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="crypto"
                checked={paymentMethod === 'crypto'}
                onChange={() => setPaymentMethod('crypto')}
                className="h-4 w-4 text-blue-600 mr-3"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Crypto Wallet</span>
            </div>
          </label>
          
          {/* Bank Card */}
          <label className={`block p-4 rounded-lg cursor-pointer ${paymentMethod === 'card' ? 'bg-blue-50 border-2 border-blue-100' : 'bg-gray-50'}`}>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="h-4 w-4 text-blue-600 mr-3"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="font-medium">Bank Card</span>
            </div>
          </label>
        </div>
        
        {/* Find a Rider Button */}
        <button
          onClick={handleFindRider}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Find a rider
        </button>
      </div>
    </div>
  );
}