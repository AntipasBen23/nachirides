'use client';

import { useState } from 'react';
import Image from 'next/image';
import DeliveryMap from '../components/DeliveryMap';

export default function DeliveryPage() {
  // Default location near Elugi Town as seen in the screenshot
  const [userLocation, setUserLocation] = useState<[number, number]>([6.5227, 3.6218]);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Map Section */}
      <div className="relative flex-grow">
        <DeliveryMap userLocation={userLocation} />
        
        {/* Menu button */}
        <button className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md z-[1000]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      
      {/* Bottom Content */}
      <div className="p-6 bg-white">
        <h1 className="text-2xl font-bold text-gray-900">Send packages to anywhere within your city</h1>
        
        {/* Motorcycles Card */}
        <div className="mt-4 flex items-center p-4 bg-gray-50 rounded-lg">
          <div className="bg-blue-500 rounded-lg overflow-hidden w-16 h-16 flex items-center justify-center">
            <Image
              src="/images/motorcycle.png"
              alt="Motorcycle"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-900">Motorcycles</h2>
            <p className="text-gray-600">Deliver Smarter, Faster</p>
          </div>
        </div>
        
        {/* Search Input */}
        <div className="mt-4 relative">
          <div className="flex items-center bg-gray-50 rounded-lg p-4 border border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Where to?"
              className="flex-grow bg-transparent outline-none text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}