'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const fixLeafletIcon = () => {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/images/marker-icon-2x.png',
    iconUrl: '/images/marker-icon.png',
    shadowUrl: '/images/marker-shadow.png',
  });
};

interface MotorcycleLocation {
  id: number;
  lat: number;
  lng: number;
}

interface MapContainerProps {
  userLocation: [number, number];
}

export default function MapContainerComponent({ userLocation }: MapContainerProps) {
  const [motorcycles, setMotorcycles] = useState<MotorcycleLocation[]>([]);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      fixLeafletIcon();
    }
  }, []);

  useEffect(() => {
    const randomMotorcycles: MotorcycleLocation[] = [];
    for (let i = 0; i < 5; i++) {
      randomMotorcycles.push({
        id: i,
        lat: userLocation[0] + (Math.random() - 0.5) * 0.02,
        lng: userLocation[1] + (Math.random() - 0.5) * 0.02,
      });
    }
    setMotorcycles(randomMotorcycles);
  }, [userLocation]);


  const motorcycleIcon = new L.Icon({
    iconUrl: '/images/motorcycle-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });

  const blueMarkerIcon = new L.Icon({
    iconUrl: '/images/blue-marker.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer
      center={userLocation}
      zoom={14}
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker position={userLocation} icon={blueMarkerIcon}>
        <Popup>Your location</Popup>
      </Marker>
      
      {motorcycles.map((bike) => (
        <Marker 
          key={bike.id}
          position={[bike.lat, bike.lng]} 
          icon={motorcycleIcon}
        >
          <Popup>Available motorcycle</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}