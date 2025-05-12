'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function RiderAssignedPage() {
  const router = useRouter();
  const [arrivalTime, setArrivalTime] = useState<number>(3);

  // Countdown timer for arrival time
  useEffect(() => {
    if (arrivalTime <= 0) return;
    
    const timer = setTimeout(() => {
      setArrivalTime(prev => prev - 1);
    }, 60000); // Update every minute
    
    return () => clearTimeout(timer);
  }, [arrivalTime]);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Map Section */}
      <div className="h-1/3 w-full bg-[#f2efe9] relative">
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
        <div className="absolute top-12 left-16 text-xs font-semibold bg-white px-2 py-1 rounded-sm">
          P112
        </div>
        <div className="absolute bottom-12 left-8 text-xs font-semibold">
          Oruku
        </div>
      </div>
      
      {/* Rider Information */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Rider Header */}
        <div className="p-6 pb-3">
          <h1 className="text-xl font-bold text-gray-900">Rider Assigned</h1>
          <p className="text-gray-600">Arriving in {arrivalTime} mins</p>
        </div>
        
        {/* Rider Details Card */}
        <div className="px-6 mb-4">
          <div className="bg-gray-50 p-4 rounded-lg flex items-center">
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image
                src="/images/rider-avatar.png"
                alt="Rider profile"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold">Emeka Pius</h2>
                <div className="flex items-center ml-2 text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm">4.8</span>
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                XYZ123
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="px-6 flex space-x-2 mb-6">
          <button className="flex-1 flex items-center justify-center py-3 bg-gray-100 rounded-lg text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Pickup notes
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
        </div>
        
        {/* Routing Details */}
        <div className="px-6">
          <h3 className="text-lg font-semibold mb-4">Current Routing</h3>
          <div className="space-y-4 relative">
            {/* Route Line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Pickup Location */}
            <div className="flex items-start ml-6 relative">
              <div className="absolute -left-6 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-800">Onueke Bar</span>
            </div>
            
            {/* Destination */}
            <div className="flex items-start ml-6 relative">
              <div className="absolute -left-6 mt-1 w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-gray-800">Ezzamgbo Community Science Secondary School</span>
            </div>
          </div>
        </div>
        
        {/* Payment Method */}
        <div className="px-6 mt-8">
          <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
          <div className="flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cash
          </div>
        </div>
      </div>
    </div>
  );
}