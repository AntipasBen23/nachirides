'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function FindingRiderPage() {
  const router = useRouter();
  const [, setSearchDuration] = useState<number>(0);
  const [showCancelConfirm, setShowCancelConfirm] = useState<boolean>(false);

  // Simulate searching progress and auto-redirect after 11 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSearchDuration(prev => {
        const newDuration = prev + 1;
        
        // After 11 seconds, redirect to rider-assigned page
        if (newDuration === 11) {
          clearInterval(timer);
          router.push('/rider-assigned');
        }
        
        return newDuration;
      });
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, [router]);

  const handleCancelSearch = () => {
    setShowCancelConfirm(true);
  };

  const confirmCancel = () => {
    console.log('Ride search cancelled');
    // Navigate back to delivery page
    router.push('/delivery');
  };

  const continueSearch = () => {
    setShowCancelConfirm(false);
  };

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
      
      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-between p-6">
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-10">Finding your rider...</h1>
          
          {/* Spinning Loading Animation */}
          <div className="relative h-60 w-60">
            {/* Outer spinning circle */}
            <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse"></div>
            
            {/* Inner spinning arc - creates the sweeping effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-1/2 w-full absolute top-0 left-0 origin-bottom-right animate-spin" style={{ animationDuration: '3s' }}>
                <div className="h-full w-full bg-blue-300 rounded-tl-full rounded-tr-full"></div>
              </div>
            </div>
            
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-gray-700 rotate-45"></div>
            
            {/* Small arc segment */}
            <div className="absolute top-14 right-10 h-8 w-20 bg-blue-400 rounded-full transform rotate-45"></div>
          </div>
        </div>
        
        {/* Cancel Button */}
        <button
          onClick={handleCancelSearch}
          className="flex items-center justify-center py-3 px-6 rounded-full bg-gray-100 text-gray-700 mt-8"
        >
          <svg className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Cancel search
        </button>
      </div>
      
      {/* Cancel Confirmation Modal */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Cancel Ride?</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to cancel searching for a rider?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={continueSearch}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                No, continue
              </button>
              <button
                onClick={confirmCancel}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Yes, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}