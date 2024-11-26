'use client';

import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { ThemeLI } from '@/components/ThemeLI';

const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  // TailwindCSSのクラスをテーマに応じて切り替える
  const themeClasses = classNames('transition-all duration-500 ease-in-out min-h-screen flex flex-col', {
    'bg-gray-100 text-gray-900': theme === 'light',
    'bg-gray-900 text-gray-100': theme === 'dark',
  });

  return (
    <div className={themeClasses}>
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight hover:text-yellow-300 transition-all duration-300">
            <a href="/">My Next.js App</a>
          </h1>
          <ul className="flex space-x-8 text-lg items-center">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/hooks" className="hover:text-yellow-300 transition-colors duration-300">
                React Hooks
              </Link>
            </li>
            <li>
              <Link href="/redux" className="hover:text-yellow-300 transition-colors duration-300">
                Redux
              </Link>
            </li>
            <li>
              <Link href="/zustand" className="hover:text-yellow-300 transition-colors duration-300">
                Zustand
              </Link>
            </li>
            <ThemeLI />
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-6 flex-grow">
        <div className="p-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-500">{children}</div>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p className="font-semibold">React and Next.js Tutorial.</p>
        </div>
      </footer>
    </div>
  );
};

export default ThemeLayout;
