import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Atharva Coaching Classes Jaipur | CBSE & RBSE Coaching',
  description: 'Atharva Coaching Classes in Indira Gandhi Nagar Sector-8, Jaipur for CBSE and RBSE students. Call 09928939088.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
