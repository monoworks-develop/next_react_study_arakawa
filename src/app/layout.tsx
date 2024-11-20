'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeLayout from './themeLayout';
import { Provider } from 'react-redux';
import { store } from './store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100 text-gray-900">
        <Provider store={store}>
          <ThemeLayout>{children}</ThemeLayout>
        </Provider>
      </body>
    </html>
  );
}
