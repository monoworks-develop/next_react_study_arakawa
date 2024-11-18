'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeLayout from './themeLayout'; // クライアントサイド用のテーマレイアウトをインポート
import { Provider } from 'react-redux';
import { store } from './store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100 text-gray-900">
        <ThemeProvider>
          <Provider store={store}>
            <ThemeLayout>{children}</ThemeLayout>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
