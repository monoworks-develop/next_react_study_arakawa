'use client';
import { FormEvent, useContext, useEffect, useState } from 'react';
import PersonInfoContext from '../contexts/PersonInfoContext';
import { ThemeProvider } from '../contexts/ThemeContext';

export default function Hooks() {
  const [count, setCount] = useState<number>(0);
  const personInfo = useContext(PersonInfoContext);

  // countが初めて設定されたり、以降変更されるたびに実行される
  useEffect(() => {
    console.log('Hello UseEffect');

    return () => {
      // クリーンアップ処理
      // countが変更された前に実行される
      console.log('Goodbye UseEffect');
    };
  }, [count]);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if (count === 0) {
      setCount(1);
      return;
    }
    setCount((prev) => prev * 2);
  };

  return (
    <ThemeProvider>
      <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-indigo-600 to-pink-500 p-8 space-y-12">
        <div className="flex flex-col items-center justify-center p-10 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">UseState</h1>
          <p className="text-3xl text-gray-800 mb-4">{count}</p>
          <button
            onClick={handleClick}
            className="px-8 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-500 transform transition duration-300 hover:scale-110"
          >
            +
          </button>
        </div>

        <hr className="w-full border-gray-300" />

        <div className="flex flex-col items-center justify-center p-10 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">UseContext</h1>
          <p className="text-2xl text-gray-800">
            {personInfo.name} is {personInfo.age} years old
          </p>
        </div>
      </main>
    </ThemeProvider>
  );
}
