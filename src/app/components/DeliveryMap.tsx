'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(
  () => import('./MapContainer'),
  { ssr: false }
);

interface DeliveryMapProps {
  userLocation: [number, number];
}

export default function DeliveryMap({ userLocation }: DeliveryMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-3 text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return <MapWithNoSSR userLocation={userLocation} />;
}