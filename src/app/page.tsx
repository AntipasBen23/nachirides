'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Automatically navigate to onboarding screen after 4 seconds
    const timer = setTimeout(() => {
      router.push('/onboarding');
    }, 4000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo in the center */}
      <div className="relative w-48 h-48">
        <Image
          src="/images/nachi-logo.png"
          alt="NachiRides"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-10 w-16 h-1 bg-gray-300 rounded-full"></div>
    </div>
  );
}