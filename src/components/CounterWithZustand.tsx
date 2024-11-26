'use client';

import useStore from '../app/storeZustand';
import { printLogCount } from '../app/util/log';
import { useState } from 'react';

export default function CounterWithZustand() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const incrementByAmount = useStore((state) => state.incrementByAmount);
  const [incrementAmount, setIncrementAmount] = useState<number>(10);

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button onClick={() => increment()} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">
          Increment
        </button>
        <button onClick={() => decrement()} className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500">
          Decrement
        </button>
        <button
          onClick={() => incrementByAmount(incrementAmount)}
          className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-500"
        >
          Increment by amount
        </button>
        <input
          className="px-2 py-1 border border-gray-300 rounded-md"
          aria-label="Set increment amount"
          onChange={(e) => {
            const value = Number(e.target.value);
            if (!isNaN(value)) {
              setIncrementAmount(value);
            }
          }}
          type="number"
        />
        <button onClick={() => printLogCount()} className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-500">
          Log Count
        </button>
      </div>
    </div>
  );
}
