import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ThemeProvider from '@/components/providers/theme';
import './globals.css';

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Poppins-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-poppins',
  preload: true
});

export const metadata: Metadata = {
  title: { template: '%s | Exposure', default: 'Exposure' },
  description: 'A platform for sharing who you are and and where to find you.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${poppins.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}