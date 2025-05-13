# NachiRides - Motorcycle Delivery App

![NachiRides Logo](public/images/nachi-logo.png)

NachiRides is a modern, mobile-responsive web application for motorcycle delivery services built with Next.js, TypeScript, and Tailwind CSS. The application provides a seamless experience for users to request delivery services, track riders in real-time, and manage their deliveries.

## Features

- **User Authentication**: Phone number login with country code selection
- **Interactive Maps**: View available riders on the map
- **Order Creation**: Specify pickup and dropoff locations
- **Payment Options**: Choose between cash, crypto, or card payments
- **Real-time Tracking**: Follow your rider's progress
- **Rider Assignment**: Get matched with nearby riders
- **Responsive Design**: Works on all device sizes

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet.js (with react-leaflet)
- **Phone Input**: react-phone-input-2
- **Deployment**: Vercel

## Pages Overview

1. **Splash & Onboarding**: Introduction to NachiRides
2. **Phone Login**: Authentication with phone number & country code
3. **Delivery Home**: Map view with available services
4. **Routing**: Enter pickup and dropoff locations
5. **Payment**: Select payment method
6. **Finding Rider**: Animated rider search
7. **Rider Assigned**: Matched rider details and ETA

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/AntipasBen23/nachirides.git
cd nachirides
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Add required images
The application requires the following images in the `/public/images/` directory:
- `nachi-logo.png` - App logo
- `delivery-illustration.png` - Onboarding screen illustration
- `map-background.png` - Map background for various screens
- `motorcycle.png` - Motorcycle icon
- `motorcycle-icon.png` - Small motorcycle marker for map
- `rider-avatar.png` - Sample rider profile image
- `marker-icon.png`, `marker-icon-2x.png`, `marker-shadow.png` - Leaflet map markers

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open your browser to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/src
  /app
    /components
      DeliveryMap.tsx
      MapContainer.tsx
    /delivery
      page.tsx
      layout.tsx
    /finding-rider
      page.tsx
      layout.tsx
    /login
      page.tsx
    /onboarding
      page.tsx
      layout.tsx
    /payment
      page.tsx
      layout.tsx
    /rider-assigned
      page.tsx
      layout.tsx
    /routing
      page.tsx
      layout.tsx
    page.tsx (splash screen)
/public
  /images
    nachi-logo.png
    delivery-illustration.png
    map-background.png
    motorcycle.png
    motorcycle-icon.png
    rider-avatar.png
    marker-icon.png
    marker-icon-2x.png
    marker-shadow.png
```

## User Flow

1. User sees splash screen → Automatically redirected to onboarding
2. User clicks "Get Started" → Navigated to login page
3. User enters phone number → Navigated to delivery map
4. User selects "Where to?" → Routing page appears
5. User enters delivery details → Navigated to payment page
6. User selects payment method → Navigated to finding rider page
7. After 11 seconds → Rider is assigned with ETA

## Demo

View the live demo: [https://nachirides.netlify.app/](https://nachirides.netlify.app/)

## Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <img src="screenshots/splash.png" alt="Splash Screen" width="200"/>
  <img src="screenshots/onboarding.png" alt="Onboarding" width="200"/>
  <img src="screenshots/login.png" alt="Phone Login" width="200"/>
  <img src="screenshots/map.png" alt="Delivery Map" width="200"/>
  <img src="screenshots/routing.png" alt="Routing" width="200"/>
  <img src="screenshots/payment.png" alt="Payment Options" width="200"/>
  <img src="screenshots/finding-rider.png" alt="Finding Rider" width="200"/>
  <img src="screenshots/rider-assigned.png" alt="Rider Assigned" width="200"/>
</div>

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Icons from [Heroicons](https://heroicons.com/)
- Map integration using [Leaflet.js](https://leafletjs.com/)
- International phone input with [react-phone-input-2](https://www.npmjs.com/package/react-phone-input-2)

---

© 2025 NachiRides - Simplifying Deliveries