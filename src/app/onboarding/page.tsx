'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function OnboardingScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    // Navigate to login page when "Get Started" is clicked
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-700">
      {/* Delivery Illustration */}
      <div className="relative w-full h-52 md:h-72 mt-16 md:mt-18">
        <Image
          src="/images/delivery-illustration.png"
          alt="Delivery illustration"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      
      {/* Bottom Card with Text and Button */}
      <div className="w-full mt-auto bg-[#E3E6F2] rounded-t-3xl p-6 md:p-8">
        <h1 className="text-2xl font-bold text-center mb-2 md:mb-3">
          NachiRides - Simplifying Deliveries
        </h1>
        
        <p className="text-center text-gray-600 mb-6 md:mb-8">
          Request a rider in seconds, track in real-time, and get items delivered fast—all in one tap.
        </p>
        
        <button 
          onClick={handleGetStarted}
          className="w-full py-3 md:py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}