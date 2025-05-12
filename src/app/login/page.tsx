'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function PhoneLoginPage() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log the phone number for demonstration
    console.log('Phone number submitted:', phoneNumber);
    
    // Show loading state
    setIsLoading(true);
    
    // For demo purposes, we'll simulate a brief loading period
    // then navigate to the delivery page
    setTimeout(() => {
      // Navigate to the delivery page
      router.push('/delivery');
    }, 500); // Short delay to show loading state
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Enter your phone number</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="w-full">
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value)}
              inputClass="w-full rounded-md border border-gray-300 px-3 py-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              containerClass="w-full" 
              buttonClass="rounded-l-md border border-gray-300 border-r-0 bg-white"
              dropdownClass="bg-white"
              searchClass="bg-white"
              enableSearch={true}
              disableSearchIcon={false}
              searchPlaceholder="Search country..."
              containerStyle={{ width: '100%' }}  
              inputStyle={{ 
                width: '100%', 
                height: '50px'
              }}
              // Require at least 6 digits for any phone number
              isValid={(value) => {
                return value.length >= 6;
              }}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !phoneNumber || phoneNumber.length < 6}
            className={`w-full rounded-md px-4 py-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
              ${isLoading || !phoneNumber || phoneNumber.length < 6 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Continue'
            )}
          </button>
          
          <div className="relative flex items-center justify-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 flex-shrink text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <button
            type="button"
            onClick={() => router.push('/delivery')}
            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
          
          <button
            type="button"
            onClick={() => router.push('/delivery')}
            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 12a3 3 0 11-6 0 3 3 0 016 0zm0 0h12m-9 9a9 9 0 110-18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            Continue with Passkey
          </button>
        </form>
      </div>
    </div>
  );
}