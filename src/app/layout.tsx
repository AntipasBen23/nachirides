import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Initialize font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Description of your application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}