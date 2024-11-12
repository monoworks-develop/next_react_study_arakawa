'use client';
import { FormEvent, useContext, useEffect, useReducer, useState } from 'react';
import { PersonInfoContext } from '../contexts/PersonInfoContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SimpleButton } from '@/components/SimpleButton';

export default function Hooks() {
  const [count, setCount] = useState<number>(0);
  const personInfo = useContext(PersonInfoContext);

  // アクションの型を定義
  type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

  // reducer関数でアクションをオブジェクトとして受け取る
  // state: 現在の状態。
  // action: 状態に対してどのような変更を行うかを指定するオブジェクトで、通常typeというプロパティを持つ。
  const reducer = (state: number, action: Action): number => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

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

  const buttonTitle: string = 'Simple Button';

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
        <hr className="w-full border-gray-300" />
        <div className="flex flex-col items-center justify-center p-10 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">UseReducer</h1>
          <p className="text-3xl text-gray-800 mb-4">Count: {state}</p>
          <div className="space-x-4">
            <button
              onClick={() => dispatch({ type: 'INCREMENT' })}
              className="px-6 py-2 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-500 transform transition duration-300 hover:scale-110"
            >
              +
            </button>
            <button
              onClick={() => dispatch({ type: 'DECREMENT' })}
              className="px-6 py-2 bg-red-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-red-500 transform transition duration-300 hover:scale-110"
            >
              -
            </button>
          </div>
        </div>
        <hr className="w-full border-gray-300" />

        <div className="flex flex-col items-center justify-center p-10 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Import Component</h1>
          <SimpleButton argFunction={() => console.log('SimpleButtonを押下しました!')}>{buttonTitle}</SimpleButton>
        </div>
      </main>
    </ThemeProvider>
  );
}
